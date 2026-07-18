import { expertise } from "../data/misc";
import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <section id="expertise" className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">Expertise</p>
          <h2 className="font-display font-black uppercase text-3xl sm:text-5xl leading-[0.95] max-w-3xl">
            Design at the intersection of information and communication.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/15 mt-16 border border-paper/15">
          {expertise.map((e, i) => (
            <Reveal key={e.number} delay={i * 0.05} className="bg-ink p-8 sm:p-10">
              <span className="font-mono text-signal text-sm">{e.number}</span>
              <h3 className="font-display font-bold uppercase text-xl mt-4 mb-3">{e.title}</h3>
              <p className="text-paper/70 leading-relaxed">{e.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
