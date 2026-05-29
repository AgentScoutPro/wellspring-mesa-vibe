import { motion } from "framer-motion";
import { Activity, ArrowRight, FileSearch, Stethoscope, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const points = [
  {
    icon: Activity,
    text: "Gentle, targeted chiropractic adjustments to improve alignment and reduce nerve irritation",
  },
  {
    icon: FileSearch,
    text: "Detailed exams and clear explanations so you understand your condition",
  },
  {
    icon: Users,
    text: "Integrated physical therapy, rehab exercises, and massage therapy",
  },
  {
    icon: Stethoscope,
    text: "In‑house medical providers for pain management, weight loss, hormones, and peptides",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              Our Approach
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-deep md:text-5xl">
              A Chiropractor‑Led Clinic With a Full Support Team
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Chiropractic care is at the heart of City Health Services. From there, we add physical
              therapy, rehabilitation, and medical services so you have one coordinated team focused
              on your long‑term results instead of separate providers working in silos.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
          <Stagger className="space-y-5">
            {points.slice(0, 2).map((p) => (
              <StaggerItem key={p.text}>
                <div className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-x-1 hover:border-primary/40">
                  <p.icon className="mb-3 h-6 w-6 text-primary" />
                  <p className="text-sm leading-relaxed text-slate-deep/85">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="relative flex justify-center py-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-primary shadow-elegant md:h-80 md:w-80"
            >
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/40" />
              <div className="absolute inset-12 rounded-full border border-white/30" />
              <div className="relative text-center text-primary-foreground">
                <div className="text-xs uppercase tracking-widest opacity-80">You</div>
                <div className="mt-2 text-3xl font-semibold">Whole-Body Care</div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
              >
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white shadow-glow" />
              </motion.div>
            </motion.div>
          </div>

          <Stagger className="space-y-5" delayStep={0.1}>
            {points.slice(2).map((p) => (
              <StaggerItem key={p.text}>
                <div className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:translate-x-1 hover:border-primary/40">
                  <p.icon className="mb-3 h-6 w-6 text-accent" />
                  <p className="text-sm leading-relaxed text-slate-deep/85">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-deep/15 bg-white px-7 py-3 text-sm font-semibold text-slate-deep transition-colors hover:border-primary hover:text-primary"
            >
              Meet Our Chiropractic & Medical Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
