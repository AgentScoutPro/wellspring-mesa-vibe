import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const rafRef = useRef<number | null>(null);
  const targetTime = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => setDuration(v.duration || 0);
    if (v.readyState >= 1) onMeta();
    else v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useEffect(() => {
    if (!duration) return;
    const tick = () => {
      const v = videoRef.current;
      if (v) {
        const current = v.currentTime;
        const diff = targetTime.current - current;
        // Smooth toward target to avoid jitter
        if (Math.abs(diff) > 0.01) {
          try {
            v.currentTime = current + diff * 0.25;
          } catch (_err) {
            void _err;
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const unsubscribe = scrollYProgress.on("change", (p) => {
      targetTime.current = Math.max(0, Math.min(duration - 0.05, p * duration));
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      unsubscribe();
    };
  }, [duration, scrollYProgress]);

  return (
    <section
      ref={containerRef}
      aria-hidden="true"
      className="relative bg-background"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/hero-transition.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </div>
    </section>
  );
}
