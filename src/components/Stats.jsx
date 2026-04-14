import { motion } from 'framer-motion';
import { stats } from '../utils/content';
import { fadeUp, staggerContainer } from '../animations/motionVariants';

export default function Stats() {
  return (
    <section className="border-y border-[rgba(31,60,222,0.3)] bg-[rgba(31,60,222,0.07)]">
      <motion.div
        className="section-shell grid grid-cols-2 gap-6 py-10 md:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((item) => (
          <motion.div key={item.label} variants={fadeUp} className="text-center">
            <p className="font-heading text-4xl font-extrabold text-neon md:text-5xl">{item.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
