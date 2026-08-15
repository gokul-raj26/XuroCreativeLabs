import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scaleIn } from '../animations/motionVariants';

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <motion.article
        variants={scaleIn}
        whileHover={{ scale: 1.02 }}
        className={`glass-panel card-hover group relative overflow-hidden p-6 cursor-pointer transition-all duration-300 hover:border-neon ${featured ? 'md:col-span-2' : ''}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,60,222,0.25),transparent_65%)]" />
        <span className="absolute right-4 top-3 font-heading text-6xl font-extrabold text-[rgba(31,60,222,0.2)] transition-all duration-300 group-hover:text-neon">
          {project.id}
        </span>
        <div className="relative flex h-full min-h-52 flex-col justify-end">
          <p className="font-heading text-xs uppercase tracking-[0.16em] text-neon">{project.category}</p>
          <h3 className="mt-2 font-heading text-2xl font-bold transition-colors duration-300 group-hover:text-neon">{project.name}</h3>
          <p className="mt-2 text-sm text-muted">{project.summary}</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-electric opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Project →
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
