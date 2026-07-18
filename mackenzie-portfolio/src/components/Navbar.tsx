import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="focus-ring">
          <img src="/images/logo.svg" alt="Logo" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-sm font-mono uppercase tracking-wide transition-colors focus-ring ${
                active === l.id ? "text-signal" : "text-ink/70 hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block text-right font-mono text-[11px] uppercase leading-tight text-ink/60">
          <div>Nairobi, Kenya</div>
          <div className="text-signal">Available for selected projects</div>
        </div>

        <button
          className="md:hidden focus-ring"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-line px-5 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="font-display font-bold text-2xl uppercase focus-ring"
            >
              {l.label}
            </a>
          ))}
          <div className="font-mono text-xs uppercase text-ink/60 pt-4 border-t border-line">
            Nairobi, Kenya · <span className="text-signal">Available for selected projects</span>
          </div>
        </div>
      )}
    </header>
  );
}
