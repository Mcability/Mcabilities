import { motion } from "framer-motion";
import { clients } from "../data/misc";
import Reveal from "./Reveal";

export default function ClientWall() {
  const row = clients.join("   ·   ") + "   ·   ";

  return (
    <section className="border-y border-line py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal mb-2">
            Client &amp; Collaboration Experience
          </p>
        </Reveal>
      </div>

      <div className="mt-8 relative">
        <motion.div
          className="whitespace-nowrap font-display font-black uppercase text-3xl sm:text-5xl text-ink/15"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <span className="pr-4">{row}</span>
          <span className="pr-4">{row}</span>
        </motion.div>
      </div>
    </section>
  );
}
