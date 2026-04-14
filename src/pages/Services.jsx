import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/content';
import { servicesSchema } from '../seo/schema';
import { staggerContainer } from '../animations/motionVariants';

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Xuro CreativeLabs Branding, Motion, and Web Development"
        description="Explore Xuro CreativeLabs services including brand identity, motion design, websites, social systems, and growth strategy."
        keywords="branding services, motion design services, web design and development, creative strategy agency"
        path="/services"
      >
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
      </SEO>

      <SectionWrapper
        id="services"
        className="bg-bg2 pt-20"
        eyebrow="What We Do"
        title="Creative Services Built for Growth"
        subtitle="Each offer is structured for speed, consistency, and measurable business outcomes."
        h1
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
    </>
  );
}
