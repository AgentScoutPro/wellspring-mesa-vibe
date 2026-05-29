import { Phone } from "lucide-react";
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-primary shadow-glow" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-deep">City Health</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Services</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-deep/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+14806495297"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">(480) 649-5297</span>
        </a>
      </div>
    </header>
  );
}
