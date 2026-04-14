import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../animations/motionVariants';
import useParallax from '../hooks/useParallax';
import HeroRobotScene from './HeroRobotScene';

export default function Hero() {
  const { x, y } = useParallax(0.025);

  return (
    <section className="relative overflow-hidden pt-32">
      <div className="section-shell min-h-[88vh] py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-3xl">
            <motion.p variants={fadeUp} className="section-tag">
              Rocket-Driven Creative Agency
            </motion.p>
            <motion.h1 variants={fadeUp} className="section-title text-5xl md:text-7xl">
              We Build <span className="text-neon drop-shadow-[0_0_16px_rgba(230,242,29,0.45)]">Bold</span> and{' '}
              <span className="text-electric drop-shadow-[0_0_20px_rgba(31,60,222,0.55)]">Beautiful</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="section-subtitle max-w-xl">
              Xuro CreativeLabs transforms brands into visual powerhouses. We craft identities, digital
              experiences, and campaigns that hit hard and perform.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                View Our Work
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="relative mx-auto h-[360px] w-full max-w-[560px] md:h-[430px] lg:h-[520px]"
            style={{ transform: `translate3d(${x + 26}px, ${y}px, 0)` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.21, 1, 0.25, 1], delay: 0.2 }}
          >
            <div className="relative h-full w-full">
              <HeroRobotScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
