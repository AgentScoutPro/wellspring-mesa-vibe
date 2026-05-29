import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, ClipboardList, Phone, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Schedule Your Visit",
    desc: "Call our Mesa clinic or request an appointment online at a time that works for you.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Get a Complete Evaluation",
    desc: "Your provider listens to your concerns, reviews your history, performs a detailed exam, and explains what is driving your pain or symptoms.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Follow Your Personalized Treatment Plan",
    desc: "You'll receive a clear plan that may include chiropractic care, rehab, neuropathy therapies, medical weight loss, hormones, or peptide therapy—built around your goals.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="bg-surface-cool py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              How It Works
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-deep md:text-5xl">
              How to Get Started
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-muted-foreground">
              Getting help for chronic pain and nerve symptoms should feel straightforward, not
              overwhelming. Here's how the process works.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block lg:left-1/2 lg:-translate-x-1/2" />
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-8 top-0 hidden w-0.5 bg-gradient-to-b from-primary to-accent md:block lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="hidden h-0.5 w-full bg-border lg:block lg:absolute lg:top-24" />
          <motion.div
            style={{ width: fillWidth }}
            className="hidden h-0.5 bg-gradient-to-r from-primary to-accent lg:block lg:absolute lg:top-24"
          />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center"
              >
                <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-elegant">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="lg:max-w-sm">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">
                    Step {s.n}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-deep">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Request a Chiropractic Evaluation
            </a>
            <a
              href="tel:+14806495297"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-deep/15 bg-white px-7 py-3 text-sm font-semibold text-slate-deep transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              Call (480) 649‑5297
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
