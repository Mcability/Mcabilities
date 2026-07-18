import { career } from "../data/career";
import Reveal from "./Reveal";

export default function CareerJourney() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">Experience</p>
        <h2 className="font-display font-black uppercase text-3xl sm:text-5xl leading-[0.95] max-w-3xl">
          Two decades of creative evolution.
        </h2>
      </Reveal>

      <ol className="mt-14 divide-y divide-line border-t border-line">
        {career.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.05} className="py-8 sm:py-10">
            <li className="grid sm:grid-cols-[1fr_auto] gap-4 sm:gap-8">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display font-bold uppercase text-xl sm:text-2xl">{role.company}</h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-signal">{role.title}</span>
                </div>
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {role.points.map((p) => (
                    <li key={p} className="text-ink/75 leading-relaxed text-sm sm:text-base">{p}</li>
                  ))}
                </ul>
              </div>
              <div className="font-mono text-sm text-ink/50 sm:text-right whitespace-nowrap">{role.years}</div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
