import { motion } from 'framer-motion';
import { fadeUp } from '../animations/motionVariants';

export default function TestimonialCard({ item }) {
  return (
    <motion.article variants={fadeUp} className="glass-panel card-hover rounded-sm p-7">
      <p className="text-xs text-neon">Rating: 5/5</p>
      <p className="mt-4 text-sm leading-relaxed text-text">"{item.quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(31,60,222,0.4)] bg-electric font-heading text-xs font-bold text-white">
          {item.initials}
        </div>
        <div>
          <p className="font-heading text-sm font-bold">{item.name}</p>
          <p className="text-xs text-muted">{item.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
