import type { Project } from "../data/work";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal className="border-t border-line py-14 sm:py-20">
      <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${reversed ? "lg:[direction:rtl]" : ""}`}>
        <div className="lg:[direction:ltr]">
          <img 
            src={project.image}
            alt={`${project.title} — ${project.client}`}
            className="aspect-[4/3] w-full object-cover border border-line rounded"
          />
        </div>

        <div className="lg:[direction:ltr]">
          <div className="flex items-start gap-4 mb-6">
            <span className="font-mono text-signal text-sm mt-1">{project.number}</span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">
                {project.category}
              </p>
              <h3 className="font-display font-black uppercase text-2xl sm:text-4xl leading-[0.95]">
                {project.client}
              </h3>
              <p className="font-display font-bold uppercase text-lg sm:text-2xl text-ink/70 mt-1">
                {project.title}
              </p>
            </div>
          </div>

          <dl className="space-y-5 mt-8">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-signal mb-1.5">Challenge</dt>
              <dd className="text-ink/80 leading-relaxed">{project.challenge}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-signal mb-1.5">Creative Approach</dt>
              <dd className="text-ink/80 leading-relaxed">{project.approach}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-signal mb-1.5">Result</dt>
              <dd className="text-ink/80 leading-relaxed font-medium">{project.result}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
