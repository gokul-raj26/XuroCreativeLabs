import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import { projects, testimonials } from '../utils/content';
import { staggerContainer } from '../animations/motionVariants';

export default function Projects() {
  return (
    <>
      <SEO
        title="Projects | Xuro CreativeLabs Portfolio and Case Highlights"
        description="See selected Xuro CreativeLabs projects across branding, campaigns, product websites, and social content systems."
        keywords="creative agency portfolio, branding projects, web design case studies, campaign showcase"
        path="/projects"
      />

      <SectionWrapper
        id="projects"
        className="pt-20"
        eyebrow="Our Work"
        title="Showcase of Impact-Driven Projects"
        subtitle="Every project balances visual direction, business clarity, and execution speed."
        h1
      >
        <motion.div
          className="mt-12 grid gap-3 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="project-testimonials"
        className="bg-bg2"
        eyebrow="Client Feedback"
        title="Results from Long-Term Partners"
        subtitle="We collaborate closely with teams that need strategic creative execution, not one-off design output."
      >
        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
