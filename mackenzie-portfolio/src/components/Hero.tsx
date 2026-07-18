import { motion } from "framer-motion";
import { scatterWords } from "../data/misc";

const positions = [
  { x: -180, y: -90, rot: -14 },
  { x: 160, y: -60, rot: 10 },
  { x: -140, y: 70, rot: 8 },
  { x: 190, y: 100, rot: -8 },
  { x: 0, y: -140, rot: 4 },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(to right,#D9D4C8 1px,transparent 1px), linear-gradient(to bottom,#D9D4C8 1px,transparent 1px)',
        backgroundSize: '64px 64px',
        opacity: 0.4,
        pointerEvents: 'none'
      }} />

      <div className="relative h-40 sm:h-56 mb-6 sm:mb-10 max-w-7xl mx-auto w-full px-5 sm:px-8">
        <div className="relative h-full w-full">
          {scatterWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{
                opacity: 0,
                x: positions[i].x,
                y: positions[i].y,
                rotate: positions[i].rot,
              }}
              animate={{ opacity: [0, 0.7, 0], x: 0, y: 0, rotate: 0 }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs sm:text-sm uppercase tracking-widest text-ink/50 whitespace-nowrap"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-xs sm:text-sm uppercase tracking-widest text-signal whitespace-nowrap"
          >
            Clarity
          </motion.span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-black uppercase text-hero-sm sm:text-hero-lg leading-[0.9] tracking-tight"
        >
          I Design
          <br />
          <span className="text-signal">Clarity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg sm:text-xl font-medium"
        >
          Turning complex information into visual communication people understand.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 max-w-xl text-ink/70"
        >
          For more than two decades, I have transformed reports, publications, brands and ideas
          into clear, engaging visual experiences for corporate, publishing and development-sector
          organisations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center bg-ink text-paper font-mono text-sm uppercase tracking-wide px-6 py-3.5 hover:bg-signal transition-colors focus-ring"
          >
            View Selected Work
          </a>
          <a
            href="#experience"
            className="inline-flex items-center border border-ink/30 font-mono text-sm uppercase tracking-wide px-6 py-3.5 hover:border-ink transition-colors focus-ring"
          >
            Explore My Experience
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 pt-8 border-t border-line font-mono text-xs uppercase tracking-widest text-ink/60"
        >
          Makenzi — Creative Lead · Graphic Designer · Visual Communication Specialist
        </motion.div>
      </div>
    </section>
  );
}
