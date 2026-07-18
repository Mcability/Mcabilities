import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["COMPLEXITY", "STRUCTURE", "CLARITY", "MAKENZI"];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("makenzi_intro_seen");
    if (alreadySeen) {
      setVisible(false);
      onDone();
      return;
    }
    const step = 480;
    const timers = WORDS.map((_, i) =>
      setTimeout(() => setIndex(i), i * step)
    );
    const done = setTimeout(() => {
      sessionStorage.setItem("makenzi_intro_seen", "1");
      setVisible(false);
      onDone();
    }, WORDS.length * step + 350);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-ink text-paper flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="font-display font-black text-4xl sm:text-6xl tracking-tight uppercase text-center px-6"
            >
              {WORDS[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
