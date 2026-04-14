import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SectionWrapper from '../components/SectionWrapper';
import TeamCard from '../components/TeamCard';
import { fadeUp, staggerContainer } from '../animations/motionVariants';
import { orgSchemaScript, teamMembers, timeline } from '../utils/content';

export default function About() {
  return (
    <>
      <SEO
        title="About Xuro CreativeLabs | Story, Team, and Creative Method"
        description="Learn how Xuro CreativeLabs evolved into a global creative partner blending strategy, design, and technology."
        keywords="about xuro, creative lab, branding team, agency story"
        path="/about"
      >
        <script type="application/ld+json">{orgSchemaScript}</script>
      </SEO>

      <SectionWrapper
        id="about"
        className="pt-20"
        eyebrow="About Xuro"
        title="We Build Brands People Remember"
        subtitle="Xuro was born from a single idea: great design should perform, not just look good."
        h1
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glass-panel rounded-sm p-8"
          >
            <h2 className="font-heading text-2xl font-extrabold text-neon">Xuro Snapshot</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li>Headquarters: India, serving clients worldwide</li>
              <li>Team: 30+ designers, strategists, and engineers</li>
              <li>Expertise: Branding, web systems, campaigns, motion</li>
              <li>Approach: Fast iterations, measurable creative outcomes</li>
            </ul>
          </motion.aside>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {timeline.map((item) => (
              <motion.article key={item.year} variants={fadeUp} className="glass-panel rounded-sm p-6">
                <p className="font-heading text-xs uppercase tracking-[0.18em] text-neon">{item.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-tag">Meet The Team</div>
          <h2 className="section-title text-3xl md:text-5xl">
            The Minds Behind <span className="text-neon">Xuro</span>
          </h2>
          <p className="section-subtitle max-w-2xl">
            A focused creative team blending strategy, storytelling, and execution to deliver bold outcomes.
          </p>

          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
