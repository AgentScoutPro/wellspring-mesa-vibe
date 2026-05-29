import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const reasons = [
  "Chiropractor‑led clinic with integrated medical, therapy, and wellness services",
  "Focus on treating root causes of pain and neuropathy, not just symptoms",
  "Non‑surgical, opioid‑sparing strategies whenever possible",
  "Personalized treatment plans tailored to your health history and goals",
  "Convenient Mesa location serving the East Valley, with flexible scheduling and friendly staff",
];

export function WhyChoose() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
                Why Choose Us
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-deep md:text-5xl">
                Why Patients in Mesa Choose City Health Services
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                There are many chiropractic and pain clinics in Mesa. Patients choose City Health
                Services because they want a team that looks at the whole person, communicates
                clearly, and focuses on long‑term solutions instead of quick fixes.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#testimonials"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                See What Our Patients Say
              </a>
            </Reveal>
          </div>

          <Stagger className="space-y-3">
            {reasons.map((r, i) => (
              <StaggerItem key={r}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/40 hover:translate-x-1">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                      0{i + 1}
                    </div>
                    <p className="mt-1 text-slate-deep">{r}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
