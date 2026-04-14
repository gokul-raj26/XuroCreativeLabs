import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import { fadeUp, staggerContainer } from '../animations/motionVariants';
import { orgSchemaScript, projects, services, testimonials, timeline } from '../utils/content';

export default function Home() {
  return (
    <>
      <SEO
        title="Xuro CreativeLabs | Futuristic Branding, Web, and Motion Studio"
        description="Xuro CreativeLabs builds high-performance brand identities, websites, and campaign systems for ambitious businesses."
        keywords="Xuro CreativeLabs, creative agency, branding studio, web design agency, motion design"
        path="/"
      >
        <script type="application/ld+json">{orgSchemaScript}</script>
      </SEO>

      <Hero />
      <Stats />

      <SectionWrapper
        id="about-preview"
        className="bg-bg"
        eyebrow="About Xuro"
        title="A Lab for Bold Ideas"
        subtitle="We combine strategic thinking with fearless design execution to build unforgettable brands."
      >
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {timeline.slice(0, 2).map((item) => (
            <article key={item.year} className="glass-panel rounded-sm p-6">
              <p className="font-heading text-sm uppercase tracking-[0.16em] text-neon">{item.year}</p>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <Link className="btn-outline mt-8" to="/about">
          Read Full Story
        </Link>
      </SectionWrapper>

      <SectionWrapper
        id="services-preview"
        className="bg-bg2"
        eyebrow="What We Do"
        title="Services That Drive Results"
        subtitle="From identity to digital experience, we cover every high-impact creative touchpoint."
        center
      >
        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="projects-preview"
        className="bg-bg"
        eyebrow="Our Work"
        title="Selected Projects"
        subtitle="A curated slice of our recent brand, campaign, and product work."
      >
        <motion.div
          className="mt-12 grid gap-3 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} />
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="testimonials-preview"
        className="bg-bg2"
        eyebrow="Client Love"
        title="What Partners Say"
        subtitle="Long-term relationships built on quality, speed, and measurable outcomes."
        center
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

      <section className="bg-neon py-12">
        <motion.div
          className="section-shell py-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-extrabold text-bg md:text-5xl">
            From Concept to Impact - We Hit Every Target
          </h2>
          <Link to="/contact" className="mt-6 inline-flex border border-bg px-6 py-3 font-heading text-xs uppercase tracking-[0.16em] text-bg">
            Launch with Xuro
          </Link>
        </motion.div>
      </section>
    </>
  );
}
