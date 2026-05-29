import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32 bg-background"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Mesa, Arizona Practice
              </span>
            </div>

            <h1 className="font-serif text-6xl leading-[0.9] tracking-tight text-slate-deep md:text-7xl lg:text-[6rem]">
              <span className="italic">Clinical excellence</span>
              <br />
              for human vitality.
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground/90">
              Experience integrated wellness led by expert chiropractic care. We bridge the gap
              between medical precision and holistic recovery in Mesa.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-all hover:bg-[color:var(--muted-foreground)]"
              >
                Request Evaluation
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-deep/10 px-8 py-4 text-sm font-semibold text-slate-deep transition-all hover:bg-white"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex gap-12 border-t border-slate-deep/5 pt-12">
              <div>
                <div className="font-serif text-3xl text-slate-deep">15+</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-slate-deep">4,000+</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
                  Patients Healed
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-slate-deep">4.9★</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
                  Patient Rating
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 h-32 w-32 border-t-2 border-l-2 border-accent/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-deep shadow-2xl">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 80% at 30% 20%, rgba(92,189,185,0.35), transparent 60%), linear-gradient(160deg, #1a4a6e 0%, #0c2340 70%)",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(92,189,185,0.18),transparent_70%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-deep/70 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                  Integrated Care
                </div>
                <div className="mt-3 font-serif text-3xl leading-tight">
                  One team. One plan.
                  <br />
                  Whole-body results.
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-8 -right-4 max-w-[260px] rounded-xl border border-slate-deep/5 bg-white p-7 shadow-xl md:-right-8"
            >
              <p className="font-serif text-base italic leading-relaxed text-slate-deep">
                "Our approach integrates the latest neurological research with traditional spinal
                health."
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                — Dr. Marcus Reid
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-24 hidden max-w-7xl items-center gap-6 border-t border-slate-deep/5 pt-8 text-sm text-muted-foreground/70 md:flex">
        <Phone className="h-4 w-4 text-primary" />
        Serving Mesa, Gilbert, Chandler, Tempe, and the East Valley.
        <span className="ml-auto font-medium text-slate-deep">Call (480) 649‑5297</span>
      </div>
    </section>
  );
}
