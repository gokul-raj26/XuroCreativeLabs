import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';
import SectionWrapper from '../components/SectionWrapper';
import { fadeUp, staggerContainer } from '../animations/motionVariants';

/**
 * Reusable SEO Landing Page Template
 * Used for all keyword-targeted landing pages
 */
export default function SEOLandingPage({
  seoTitle,
  seoDescription,
  seoKeywords,
  seoPath,
  heroHeadline,
  heroSubheading,
  heroCTA,
  heroCTALink,
  sections,
  faqItems,
  finalCTA,
}) {
  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        path={seoPath}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 md:px-8 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-text via-neon to-text"
          >
            {heroHeadline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto"
          >
            {heroSubheading}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/918122016648?text=Hi%20Xuro%20CreativeLabs,%20I%20want%20to%20discuss%20a%20new%20project."
              className="glass-panel px-8 py-3 rounded-sm font-medium text-neon hover:bg-neon/10 transition-all"
            >
              {heroCTA}
            </a>
            <Link
              to="/contact"
              className="glass-panel px-8 py-3 rounded-sm font-medium text-accent hover:bg-accent/10 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Dynamic Content Sections */}
      {sections?.map((section, idx) => (
        <SectionWrapper
          key={idx}
          id={`section-${idx}`}
          className={idx % 2 === 0 ? 'bg-bg' : 'bg-black/50'}
          eyebrow={section.eyebrow}
          title={section.title}
          subtitle={section.subtitle}
        >
          <div className="mt-12">
            {section.type === 'grid' && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.items?.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    variants={fadeUp}
                    className="glass-panel p-6 rounded-sm hover:bg-neon/5 transition-all"
                  >
                    <div className="text-2xl font-bold text-neon mb-2">{item.icon}</div>
                    <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted mb-4">{item.description}</p>
                    {item.points && (
                      <ul className="text-sm space-y-2">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-text/80 flex items-start gap-2">
                            <span className="text-neon mt-1">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {section.type === 'list' && (
              <div className="space-y-4">
                {section.items?.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    variants={fadeUp}
                    className="glass-panel p-6 rounded-sm"
                  >
                    <h3 className="font-heading text-lg font-bold mb-2 text-neon">
                      {item.title}
                    </h3>
                    <p className="text-muted mb-3">{item.description}</p>
                    {item.points && (
                      <ul className="text-sm space-y-2 ml-4">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-text/80">• {point}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {section.type === 'content' && (
              <div className="prose prose-invert max-w-none">
                <p className="text-text/80 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </div>
            )}
          </div>
        </SectionWrapper>
      ))}

      {/* FAQ Section */}
      {faqItems && faqItems.length > 0 && (
        <SectionWrapper
          id="faq"
          className="bg-black/50"
          eyebrow="Questions"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
        >
          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, idx) => (
              <motion.details
                key={idx}
                variants={fadeUp}
                className="glass-panel p-6 rounded-sm cursor-pointer group"
              >
                <summary className="font-heading font-bold text-neon flex items-center justify-between">
                  {faq.question}
                  <span className="text-xl group-open:rotate-180 transition-transform">›</span>
                </summary>
                <p className="text-muted mt-4 text-sm leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Success Stories */}
      {/* Case Studies Section - Optional */}

      {/* Final CTA */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
          >
            {finalCTA?.headline || 'Ready to Get Started?'}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-muted mb-8">
            {finalCTA?.description || "Let's discuss how we can help your business."}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/918122016648?text=Hi%20Xuro%20CreativeLabs,%20I%20want%20to%20discuss%20a%20new%20project."
              className="glass-panel px-8 py-3 rounded-sm font-medium text-neon hover:bg-neon/10 transition-all"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:xurocreativelabs@gmail.com"
              className="glass-panel px-8 py-3 rounded-sm font-medium text-accent hover:bg-accent/10 transition-all"
            >
              📧 Email
            </a>
            <a
              href="https://t.me/xurocreativelabs"
              className="glass-panel px-8 py-3 rounded-sm font-medium text-text hover:bg-text/10 transition-all"
            >
              📱 Telegram
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
