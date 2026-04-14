import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { contactLinks, orgSchemaScript } from '../utils/content';
import { fadeUp } from '../animations/motionVariants';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Xuro CreativeLabs | Start Your Branding or Website Project"
        description="Contact Xuro CreativeLabs for branding, web design, motion design, and campaign execution."
        keywords="contact creative agency, hire branding agency, website project inquiry"
        path="/contact"
      >
        <script type="application/ld+json">{orgSchemaScript}</script>
      </SEO>

      <SectionWrapper
        id="contact"
        className="pt-20"
        eyebrow="Let Us Build Together"
        title="Ready to Launch Your Next Big Move?"
        subtitle="Share your goals and timeline. We respond within 24 hours with clear next steps."
        h1
      >
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <a
              className="glass-panel block rounded-sm p-5 transition hover:border-electric"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <p className="font-heading text-xs uppercase tracking-[0.16em] text-neon">WhatsApp</p>
              <p className="mt-1 text-sm text-muted">+91 8122016648</p>
            </a>

            <a
              className="glass-panel block rounded-sm p-5 transition hover:border-electric"
              href={contactLinks.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <p className="font-heading text-xs uppercase tracking-[0.16em] text-neon">Telegram</p>
              <p className="mt-1 text-sm text-muted">@xurocreativelabs</p>
            </a>

            <a className="glass-panel block rounded-sm p-5 transition hover:border-electric" href={`mailto:${contactLinks.email}`}>
              <p className="font-heading text-xs uppercase tracking-[0.16em] text-neon">Email</p>
              <p className="mt-1 text-sm text-muted">{contactLinks.email}</p>
            </a>
          </motion.aside>

          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
