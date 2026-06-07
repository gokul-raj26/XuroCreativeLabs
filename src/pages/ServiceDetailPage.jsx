import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SectionWrapper from '../components/SectionWrapper';
import { services } from '../utils/content';
import { fadeUp, staggerContainer } from '../animations/motionVariants';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.title} | Xuro CreativeLabs`}
        description={service.desc}
        keywords={`${service.title.toLowerCase()}, xuro creativelabs, creative lab, service lab`}
        path={`/labs/${service.slug}`}
      />

      <SectionWrapper
        id="service-lab-hero"
        className="bg-bg2 pt-20"
        eyebrow="Service Lab"
        title={service.title}
        subtitle={service.tagline}
        h1
      >
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-sm leading-relaxed text-muted">
            <p>{service.desc}</p>
            <p>
              At Xuro CreativeLabs, each lab is built to deliver a polished experience with the same
              bold visual system, fast execution, and measurable growth outcomes.
            </p>
            <p>
              This lab blends our signature neon-driven aesthetic, magnetic typography, and engineered
              digital systems so your brand feels premium, distinctive, and ready to scale.
            </p>
          </div>

          <div className="glass-panel rounded-sm border-[rgba(31,60,222,0.3)] p-8">
            <p className="font-heading text-xs uppercase tracking-[0.24em] text-neon">What you get</p>
            <h2 className="mt-4 text-3xl font-bold text-text">A focused lab workflow</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Every lab is designed as a complete creative engine: strategy, design, systems, launch
              readiness, and live growth support.
            </p>
            <div className="mt-8 space-y-3">
              {service.points.map((point) => (
                <div key={point} className="rounded-sm border border-[rgba(31,60,222,0.16)] bg-[rgba(31,60,222,0.08)] p-4 text-sm text-text">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-bg">
        <div className="section-shell">
          <motion.div
            className="grid gap-5 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <article className="glass-panel rounded-sm p-8">
              <motion.div variants={fadeUp} className="space-y-4">
                <span className="section-tag">Why this lab</span>
                <h2 className="section-title">Built to move quickly without losing refinement.</h2>
                <p className="section-subtitle">
                  This lab is ideal when you need a premium outcome that is also deliverable fast.
                  We keep the process lean, the visuals strong, and the technology ready for growth.
                </p>
              </motion.div>
            </article>

            <article className="glass-panel rounded-sm p-8">
              <motion.div variants={fadeUp} className="space-y-4">
                <span className="section-tag">How we work</span>
                <ul className="space-y-3 text-sm leading-relaxed text-muted">
                  <li>1. Rapid discovery and strategy aligned to your business goal.</li>
                  <li>2. High-impact creative direction with clear visual systems.</li>
                  <li>3. Product-ready execution across web, motion, content or automation.</li>
                  <li>4. Real launch support and optimization for performance.</li>
                </ul>
              </motion.div>
            </article>
          </motion.div>

          <div className="mt-12 rounded-sm border border-[rgba(31,60,222,0.22)] bg-[rgba(255,255,255,0.02)] p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="font-heading text-xs uppercase tracking-[0.24em] text-neon">Need a custom path?</p>
                <h3 className="text-2xl font-bold">Launch your next phase with Xuro.</h3>
              </div>
              <div className="flex items-center justify-start">
                <Link to="/contact" className="btn-primary">
                  Book a discovery call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
