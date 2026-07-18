import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">About</p>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl leading-[0.95]">
            Design has always been about making information work better.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            I started where most publication designers start — inside the page. At King's Script
            Publishers and later WordAlive Publishers, I learned typography and print production the
            way it's best learned: under deadline, with real books going to press. That foundation still
            shapes how I approach every project today.
          </p>
          <p>
            Over time the scope of what I was solving changed. At Brandworld Communications I moved
            into managing a creative team. At Chrome Partners, and now as Creative Lead at English
            Press Ltd, that responsibility grew into directing creative production end-to-end.
          </p>
          <p>
            Alongside full-time roles, I've kept a consistent freelance practice since 2004 — annual
            reports for ILRI, campaign materials for brands, and publisher branding work.
          </p>
          <p>
            What hasn't changed is the underlying problem I care about: most organisations have
            information that's too complex for the audience that needs it. My job is to give it a
            visual form people can actually engage with.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
