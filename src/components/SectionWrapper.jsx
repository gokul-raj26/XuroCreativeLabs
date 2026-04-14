import { motion } from 'framer-motion';
import { fadeUp } from '../animations/motionVariants';

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  className = '',
  center = false,
  children,
  h1 = false
}) {
  const HeadingTag = h1 ? 'h1' : 'h2';

  return (
    <section id={id} className={className}>
      <div className="section-shell">
        {(eyebrow || title || subtitle) && (
          <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={center ? 'mx-auto max-w-3xl text-center' : ''}
          >
            {eyebrow ? (
              <span className={`section-tag ${center ? 'justify-center' : ''}`}>{eyebrow}</span>
            ) : null}
            {title ? <HeadingTag className="section-title">{title}</HeadingTag> : null}
            {subtitle ? <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p> : null}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
