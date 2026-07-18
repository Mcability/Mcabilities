import { process } from "../data/misc";
import Reveal from "./Reveal";

export default function CreativeProcess() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">Process</p>
          <h2 className="font-display font-black uppercase text-3xl sm:text-5xl leading-[0.95] max-w-2xl">
            From information to impact.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-16 sm:mt-20">
          {process.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="w-3 h-3 rounded-full bg-signal mb-5 hidden sm:block" />
              <span className="font-mono text-signal text-sm">{step.number}</span>
              <h3 className="font-display font-bold uppercase text-lg mt-4 mb-3">{step.title}</h3>
              <p className="text-paper/65 text-sm leading-relaxed">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
