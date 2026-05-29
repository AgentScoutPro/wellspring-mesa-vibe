import { MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-deep py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
                Visit Us
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Your Mesa Chiropractic & Wellness Clinic
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                City Health Services proudly serves Mesa, Gilbert, Chandler, Tempe, and surrounding
                East Valley communities. If you're searching for a chiropractor near you, neuropathy
                treatment in Mesa, or a pain management clinic that also offers physical therapy,
                medical weight loss, hormone therapy, and peptide therapy, our team is ready to
                help.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent">
                  City Health Services
                </div>
                <div className="mt-4 space-y-1">
                  <div className="text-xl font-semibold">1303 S Longmore #8</div>
                  <div className="text-xl font-semibold">Mesa, AZ 85202</div>
                </div>
                <a
                  href="tel:+14806495297"
                  className="mt-5 inline-flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-accent"
                >
                  <Phone className="h-5 w-5" />
                  (480) 649‑5297
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=1303+S+Longmore+%238+Mesa+AZ+85202"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
                >
                  Contact Us
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent shadow-elegant lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,oklch(0.55_0.10_175/0.4),transparent_55%)]" />
              {/* Stylized map grid */}
              <svg
                className="absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 400 400"
                fill="none"
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />
                <path
                  d="M 0 200 Q 100 180 200 220 T 400 200"
                  stroke="oklch(0.62 0.12 175)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M 200 0 L 220 200 L 180 400"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                  fill="none"
                />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                  <MapPin className="h-7 w-7 text-white" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 text-slate-deep backdrop-blur">
                <div className="text-xs font-medium uppercase tracking-widest text-primary">
                  East Valley Service Area
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Mesa · Gilbert · Chandler · Tempe
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-white/10 px-6 pt-8">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <div>© {new Date().getFullYear()} City Health Services. All rights reserved.</div>
          <div>Mesa, Arizona · East Valley</div>
        </div>
      </footer>
    </section>
  );
}
