import { Mail, Linkedin, Globe, Download } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-6">Let's Work Together</p>
          <h2 className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
            Have complex information that needs visual clarity?
          </h2>
          <p className="mt-8 max-w-xl text-lg text-paper/70">
            Let's transform it into communication people can understand, engage with and remember.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:creativintergity@gmail.com"
            className="inline-flex items-center gap-2 bg-signal text-paper font-mono text-sm uppercase tracking-wide px-6 py-3.5 hover:bg-paper hover:text-ink transition-colors focus-ring"
          >
            Start a Conversation
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-paper/30 font-mono text-sm uppercase tracking-wide px-6 py-3.5 hover:border-paper transition-colors focus-ring"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </Reveal>

        <Reveal delay={0.25} className="mt-16 pt-10 border-t border-paper/15 grid sm:grid-cols-3 gap-8 font-mono text-sm">
          <a href="mailto:creativintergity@gmail.com" className="flex items-center gap-3 text-paper/80 hover:text-signal transition-colors focus-ring">
            <Mail className="w-4 h-4 shrink-0" /> creativintergity@gmail.com
          </a>
          <span className="flex items-center gap-3 text-paper/50">
            <Linkedin className="w-4 h-4 shrink-0" /> [LinkedIn URL]
          </span>
          <a href="https://mcability.wixsite.com/mack" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-paper/80 hover:text-signal transition-colors focus-ring">
            <Globe className="w-4 h-4 shrink-0" /> mcability.wixsite.com/mack
          </a>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 font-mono text-xs uppercase tracking-widest text-paper/40">
          Nairobi, Kenya · Available for selected global projects
        </Reveal>
      </div>
    </section>
  );
}
