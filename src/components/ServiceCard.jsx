import { motion } from 'framer-motion';
import { scaleIn } from '../animations/motionVariants';

export default function ServiceCard({ service }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-panel card-hover relative overflow-hidden rounded-sm p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,60,222,0.18),transparent_55%)]" />
      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center border border-[rgba(31,60,222,0.4)] bg-[rgba(31,60,222,0.2)] font-heading text-xs font-bold tracking-[0.08em] text-neon">
          {service.icon}
        </div>
        <h3 className="font-heading text-xl font-bold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.desc}</p>
      </div>
    </motion.article>
  );
}
