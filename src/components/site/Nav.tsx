import { Phone, Check } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#who-we-help", label: "Who We Help" },
  { href: "#approach", label: "Our Approach" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all ${
        scrolled
          ? "border-slate-deep/5 bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <Check className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="leading-none">
            <div className="text-lg font-bold tracking-tight text-slate-deep">City Health</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-deep transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+14806495297"
          className="inline-flex items-center gap-2 rounded-full bg-slate-deep px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[color:var(--muted-foreground)]"
        >
          <Phone className="h-4 w-4 text-accent" />
          <span className="hidden sm:inline">(480) 649-5297</span>
        </a>
      </div>
    </header>
  );
}
