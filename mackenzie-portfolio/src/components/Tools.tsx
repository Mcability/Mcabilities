import { tools } from "../data/misc";
import Reveal from "./Reveal";

export default function Tools() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">Tools</p>
        <h2 className="font-display font-black uppercase text-3xl sm:text-5xl leading-[0.95] max-w-2xl">
          Production toolkit.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line mt-14 border border-line">
        {tools.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05} className="bg-paper p-8">
            <span className="font-mono font-bold text-2xl text-signal">{t.code}</span>
            <h3 className="font-display font-bold uppercase text-lg mt-4">{t.name}</h3>
            {t.level && (
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50 mt-1">{t.level}</p>
            )}
            <p className="text-ink/70 text-sm mt-3">{t.focus}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
