import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/motionVariants';
import TeamCard from './TeamCard';
import { teamMembers } from '../utils/content';

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-10 lg:px-14">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-heading text-[0.75rem] uppercase tracking-[0.35em] text-neon">THE TEAM</p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meet The Minds Behind XuroCreative
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            A small team building bold digital experiences, brands, products, and systems.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
