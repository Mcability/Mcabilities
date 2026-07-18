import Reveal from "./Reveal";

export default function ModernPractice() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28 border-t border-line">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">Evolving Practice</p>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl leading-[0.95]">
            20+ years of design. A changing landscape.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="text-lg leading-relaxed text-ink/80 space-y-5">
          <p>
            Twenty years in this field means tools changing around a constant problem: how to structure
            information so people understand it. Production software has evolved from InDesign fundamentals
            into a broader set of creative technologies.
          </p>
          <p>
            I approach each new tool as something in service of clearer communication. That means using
            modern tools where they speed up concept exploration, while keeping editorial judgment and
            production discipline exactly where they belong: with the designer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
