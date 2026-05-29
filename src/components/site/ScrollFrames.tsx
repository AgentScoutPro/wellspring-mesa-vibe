import { useEffect, useRef, useState } from "react";

interface ScrollFramesProps {
  /** Total number of frames in the sequence */
  frameCount?: number;
  /** Path prefix to frames (without the index/extension) */
  framePathPrefix?: string;
  /** Frame file extension */
  frameExtension?: string;
  /** Number of digits for zero-padding (e.g. 3 = frame_001) */
  padding?: number;
  /** Height of the scrollable section in viewport heights */
  scrollHeightVh?: number;
}

export function ScrollFrames({
  frameCount = 60,
  framePathPrefix = "/frames/frame_",
  frameExtension = "webp",
  padding = 3,
  scrollHeightVh = 300,
}: ScrollFramesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Preload frames
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${framePathPrefix}${String(i).padStart(padding, "0")}.${frameExtension}`;
      img.onload = img.onerror = () => {
        if (cancelled) return;
        loadedCount++;
        setProgress(loadedCount / frameCount);
        if (loadedCount === frameCount) setLoaded(true);
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [frameCount, framePathPrefix, frameExtension, padding]);

  // Canvas sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    // cover fit
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // Scroll listener
  useEffect(() => {
    if (!loaded) return;
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = container.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const pct = total > 0 ? scrolled / total : 0;
        const frame = Math.min(
          frameCount - 1,
          Math.max(0, Math.floor(pct * (frameCount - 1)))
        );
        if (frame !== currentFrameRef.current) {
          currentFrameRef.current = frame;
          drawFrame(frame);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, frameCount]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${scrollHeightVh}vh` }}
      aria-label="Scroll-driven anatomy animation"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate-deep">
        <canvas ref={canvasRef} className="block h-full w-full" />
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-deep">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-primary" />
            <div className="text-sm text-white/60">
              Loading {Math.round(progress * 100)}%
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
