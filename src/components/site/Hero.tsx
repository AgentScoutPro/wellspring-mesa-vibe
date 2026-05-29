import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-primary blur-3xl opacity-20" />
        <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>


          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-deep md:text-6xl lg:text-7xl"
          >
            Chiropractic Care,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pain Relief
            </span>{" "}
            & Wellness in the East Valley
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            City Health Services is a chiropractor‑led clinic in Mesa offering integrated pain
            management, neuropathy care, physical therapy, medical weight loss, hormone
            optimization, and peptide therapy to help you move better, feel better, and live better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Request an Evaluation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+14806495297"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-deep/15 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-deep backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Call Now: (480) 649‑5297
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Serving Mesa, Gilbert, Chandler, Tempe, and the East Valley with non‑surgical,
            personalized care.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/15 via-accent/10 to-transparent shadow-elegant">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.55_0.10_175/0.25),transparent_60%)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="glass-card rounded-2xl p-5">
                <div className="text-xs font-medium uppercase tracking-widest text-primary">
                  Integrated Care
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-deep">
                  One team. One plan. Whole‑body results.
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-10 hidden rounded-2xl bg-white p-4 shadow-card md:block"
          >
            <div className="text-xs text-muted-foreground">Avg. Patient Rating</div>
            <div className="mt-1 text-2xl font-bold text-slate-deep">4.9★</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-20 hidden rounded-2xl bg-white p-4 shadow-card md:block"
          >
            <div className="text-xs text-muted-foreground">Non-Surgical</div>
            <div className="mt-1 text-base font-semibold text-slate-deep">Opioid-Sparing</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
