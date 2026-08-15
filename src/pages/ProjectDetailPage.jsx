import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SectionWrapper from '../components/SectionWrapper';
import CircularGallery from '../components/CircularGallery';
import { projects } from '../utils/content';
import { fadeUp, staggerContainer } from '../animations/motionVariants';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const hasGallery = project.galleryItems && project.galleryItems.length > 0;
  const hasVideo = Boolean(project.videoUrl);
  const hasResources = project.projectLinks && project.projectLinks.length > 0;

  return (
    <>
      <SEO
        title={`${project.name} | Xuro CreativeLabs Portfolio`}
        description={project.description}
        keywords={`${project.category}, ${project.name}, creative project, portfolio case study`}
        path={`/projects/${project.slug}`}
      />

      {/* Hero Section */}
      <SectionWrapper
        id="project-hero"
        className="bg-bg2 pt-20"
        eyebrow={project.category}
        title={project.name}
        subtitle={project.tagline}
        h1
      >
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-sm leading-relaxed text-muted">
            <p className="text-base">{project.description}</p>
            <div>
              <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-[0.16em] text-neon">
                The Challenge
              </h3>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-[0.16em] text-neon">
                Our Solution
              </h3>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="glass-panel rounded-sm border-[rgba(31,60,222,0.3)] p-8">
            <p className="font-heading text-xs uppercase tracking-[0.24em] text-neon">Impact Metrics</p>
            <div className="mt-6 space-y-3">
              {project.impact.map((metric) => (
                <div key={metric} className="border-l-2 border-electric pl-4 py-1">
                  <p className="text-sm font-semibold text-text">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {hasGallery && (
        <section className="bg-bg py-20">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-12">
                <p className="section-tag">Visual Assets</p>
                <h2 className="section-title">Design Showcase</h2>
                <p className="section-subtitle">
                  Explore the key visual elements that brought this project to life. Scroll through logos, banners, and design systems.
                </p>
              </div>

              <div className="relative h-[600px] w-full overflow-hidden rounded-[28px] border border-[rgba(31,60,222,0.28)] bg-[rgba(31,60,222,0.08)]">
                <CircularGallery
                  items={project.galleryItems}
                  bend={2.5}
                  textColor="#e6f21d"
                  borderRadius={0.05}
                  scrollEase={0.02}
                  fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
                  font="bold 24px Orbitron"
                />
              </div>
              <p className="mt-6 text-center text-sm text-muted">
                💡 Tip: Scroll or drag to explore all assets
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {hasVideo && (
        <section className="bg-bg2 py-20">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-12">
                <p className="section-tag">Live Demo</p>
                <h2 className="section-title">Project in Motion</h2>
                <p className="section-subtitle">
                  Watch the project come to life with our video demo showcasing key features and results.
                </p>
              </div>

              <motion.div
                className="overflow-hidden rounded-[28px] border border-[rgba(31,60,222,0.28)] bg-[rgba(31,60,222,0.08)] p-1"
                whileHover={{ borderColor: 'rgba(230, 242, 29, 0.4)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={project.videoUrl}
                    title={`${project.name} Demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {hasResources && (
        <section className="bg-bg py-20">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-12">
                <p className="section-tag">Resources</p>
                <h2 className="section-title">View & Explore</h2>
                <p className="section-subtitle">
                  Access the live project, documentation, and additional resources.
                </p>
              </div>

              <motion.div
                className="grid gap-4 md:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {project.projectLinks.map((link) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    whileHover={{ scale: 1.02, translateY: -4 }}
                    className="glass-panel card-hover group relative overflow-hidden rounded-[24px] border border-[rgba(31,60,222,0.28)] p-8 transition-all duration-300 hover:border-neon"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(31,60,222,0.1)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                      <div className="mb-4 text-5xl">{link.icon}</div>
                      <h3 className="font-heading text-xl font-bold text-text">{link.title}</h3>
                      <p className="mt-2 text-xs text-muted">Click to visit →</p>
                    </div>

                    <div className="absolute inset-0 border-l-4 border-electric opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-bg2 py-20">
        <div className="section-shell">
          <motion.div
            className="glass-panel rounded-lg border-[rgba(31,60,222,0.3)] p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="section-title mb-4">Ready to Bring Your Idea to Life?</h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-muted">
              Every project we showcase tells a story of transformation and growth. Let's create yours.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/projects" className="btn-outline">
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
