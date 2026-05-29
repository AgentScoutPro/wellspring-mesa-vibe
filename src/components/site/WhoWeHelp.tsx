import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const problems = [
  "Chronic neck, mid‑back, and low back pain",
  "Sciatica and radiating leg pain",
  "Peripheral neuropathy (burning, tingling, numbness in feet or hands)",
  "Shoulder, hip, and knee pain from arthritis or overuse",
  "Pain from auto accidents, work injuries, or sports injuries",
  "Headaches and migraines",
];

const feelings = [
  "Frustrated with temporary relief from medications",
  "Unsure what's actually causing their pain or nerve symptoms",
  "Worried about surgery or long‑term opioids",
  "Ready for a plan that looks at the whole body, not just one symptom",
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-surface-cool py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Who We Help
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-deep md:text-5xl">
              Tired of Living With Constant Pain or Nerve Symptoms?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              If back pain, neck pain, joint pain, or nerve symptoms like burning, tingling, or
              numbness are limiting your life, you are not alone. Many patients come to City Health
              Services after trying quick fixes or medications that only mask symptoms. Our team
              focuses on finding the underlying cause of your pain and creating a personalized plan
              to address it.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-slate-deep">Common problems we treat</h3>
              </div>
              <Stagger className="space-y-4">
                {problems.map((p) => (
                  <StaggerItem key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-slate-deep/85">{p}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-full rounded-3xl bg-slate-deep p-8 text-white shadow-card md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-2.5 text-accent">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">For patients who feel</h3>
              </div>
              <Stagger className="space-y-4">
                {feelings.map((p) => (
                  <StaggerItem key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-white/85">{p}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Schedule a Consultation to Find the Cause of Your Pain
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
