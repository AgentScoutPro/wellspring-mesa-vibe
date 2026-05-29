import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Marcus T.",
    text: "After years of sciatica, I finally found a team that took the time to understand the cause. The chiropractic care plus rehab plan changed everything.",
    location: "Mesa, AZ",
  },
  {
    name: "Linda R.",
    text: "The neuropathy treatment gave me my feet back. I sleep through the night again and can walk without the burning. Truly grateful.",
    location: "Gilbert, AZ",
  },
  {
    name: "Daniel P.",
    text: "Integrated, no-pressure care. They mapped out a plan that combined weight loss and hormone therapy with chiropractic. Down 32 lbs and pain-free.",
    location: "Chandler, AZ",
  },
  {
    name: "Sophia K.",
    text: "After my auto accident I was nervous about treatment. The team explained everything and got me back to running within 4 months.",
    location: "Tempe, AZ",
  },
  {
    name: "Robert H.",
    text: "Best clinic experience I've had. Friendly staff, modern facility, and they actually care about long-term results.",
    location: "Mesa, AZ",
  },
  {
    name: "Amelia B.",
    text: "Peptide therapy plus rehab fixed a stubborn shoulder. The whole-body approach made all the difference.",
    location: "Gilbert, AZ",
  },
];

const row = [...reviews, ...reviews];

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Social Proof
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-deep md:text-5xl">
              Real Patients, Real Results
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-muted-foreground">
              People come to City Health Services with pain, numbness, and limitations that affect
              work, family, and the activities they enjoy. Many leave with less pain, better
              movement, and a clear plan to stay that way.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {row.map((r, i) => (
            <article
              key={i}
              className="w-[340px] flex-shrink-0 rounded-3xl border border-border bg-card p-6 shadow-card md:w-[380px]"
            >
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-slate-deep/85">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="text-sm font-semibold text-slate-deep">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location}</div>
                </div>
                <div className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
                  Google
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read More Reviews on Google →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
