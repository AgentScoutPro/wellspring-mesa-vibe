import {
  Activity,
  ArrowUpRight,
  Dna,
  HeartPulse,
  Scale,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const services = [
  {
    icon: Activity,
    title: "Chiropractic Care",
    desc: "Precise spinal and joint adjustments to relieve pain, reduce nerve irritation, and support better movement.",
    link: "Learn more about chiropractic care",
  },
  {
    icon: Zap,
    title: "Neuropathy & Nerve Pain Treatment",
    desc: "Advanced therapies and nerve‑focused care for peripheral neuropathy, helping reduce burning, tingling, and numbness in feet or hands.",
    link: "Learn more about neuropathy treatment",
  },
  {
    icon: HeartPulse,
    title: "Pain Management & Physical Rehabilitation",
    desc: "Non‑surgical pain management combined with rehab, corrective exercises, and therapy to restore strength, stability, and function.",
    link: "Learn more about pain management & rehab",
  },
  {
    icon: Sparkles,
    title: "Physical Therapy & Injury Recovery",
    desc: "Customized therapy programs after injuries, accidents, or surgery to help you return to daily activities safely and confidently.",
    link: "Learn more about physical therapy",
  },
  {
    icon: Scale,
    title: "Medical Weight Loss Programs",
    desc: "Physician‑guided weight loss plans designed to improve energy, support joint health, and enhance overall wellness.",
    link: "Learn more about weight loss programs",
  },
  {
    icon: Dna,
    title: "Hormone Replacement & Peptide Therapy",
    desc: "Personalized hormone and peptide protocols to support better sleep, energy, body composition, recovery, and performance.",
    link: "Learn more about hormone & peptide therapy",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gradient-cool py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Services
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-deep md:text-5xl">
              Services Designed to Support Long‑Term Relief and Wellness
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-muted-foreground">
              Your care plan may include one or several of these services, combined to match your
              specific condition, goals, and lifestyle.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <a
                href="#contact"
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-deep">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {s.link}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              View All Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-deep/15 bg-white px-7 py-3 text-sm font-semibold text-slate-deep transition-colors hover:border-primary hover:text-primary"
            >
              Request an Appointment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
