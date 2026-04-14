import { motion } from 'framer-motion';
import { scaleIn } from '../animations/motionVariants';

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ scale: 1.02 }}
      className={`glass-panel card-hover relative overflow-hidden p-6 ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,60,222,0.25),transparent_65%)]" />
      <span className="absolute right-4 top-3 font-heading text-6xl font-extrabold text-[rgba(31,60,222,0.2)]">
        {project.id}
      </span>
      <div className="relative flex h-full min-h-52 flex-col justify-end">
        <p className="font-heading text-xs uppercase tracking-[0.16em] text-neon">{project.category}</p>
        <h3 className="mt-2 font-heading text-2xl font-bold">{project.name}</h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
      </div>
    </motion.article>
  );
}
