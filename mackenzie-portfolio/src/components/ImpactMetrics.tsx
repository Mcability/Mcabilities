import { motion } from "framer-motion";
import { metrics } from "../data/misc";
import Reveal from "./Reveal";

export default function ImpactMetrics() {
  return (
    <section className="border-y border-line bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-mono text-4xl sm:text-6xl font-bold text-signal"
              >
                {m.value}
              </motion.div>
              <div className="mt-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-paper/60">
                {m.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
