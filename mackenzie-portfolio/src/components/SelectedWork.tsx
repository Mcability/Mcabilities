import { projects } from "../data/work";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function SelectedWork() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">Selected Work</p>
        <h2 className="font-display font-black uppercase text-3xl sm:text-5xl leading-[0.95] max-w-3xl">
          Complex information.
          <br />
          Clear visual outcomes.
        </h2>
      </Reveal>

      <div>
        {projects.map((p, i) => (
          <ProjectCard key={p.number} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
