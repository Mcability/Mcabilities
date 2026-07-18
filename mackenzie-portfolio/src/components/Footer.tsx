import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-7xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
      <a href="#top" className="focus-ring">
        <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
      </a>

      <div className="flex flex-col sm:items-end gap-4">
        <a
          href="#top"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-signal transition-colors focus-ring"
        >
          Back to Top <ArrowUp className="w-3.5 h-3.5" />
        </a>
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
          © {year} · Complexity → Structure → Clarity → Impact
        </p>
      </div>
    </footer>
  );
}
