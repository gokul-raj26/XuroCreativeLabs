import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../utils/content';

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const answerVariants = {
  hidden: { opacity: 0, height: 0 },
  show: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } }
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
{/* 
  No background color here.
  Uses the global page grid background from the parent layout.
*/}
  return (

   <section className="relative py-[100px] px-5 sm:px-8">
      <div className="mx-auto max-w-[1100px] rounded-[32px] border border-[rgba(255,255,255,0.08)] bg-[rgba(11,16,32,0.96)] p-[80px] shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-[#0E1734] px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[1.5px] text-[#E6F21D]">
            SPOTLESS • HOME SOLUTION
          </span>
          <h2 className="mt-5 text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[rgba(255,255,255,0.72)]">
            Explore common questions about our creative systems, web experiences, and automation services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col gap-4"
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                layout
                whileHover={{ y: -2 }}
                className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0B1020] p-6 transition-all duration-300"
              >
                <span className="absolute left-0 top-0 h-full w-1.5 rounded-full bg-[#1F3CDE]" />
                <div className="relative flex items-center justify-between gap-4">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex-1 text-left"
                  >
                    <h3 className="font-heading text-[20px] font-semibold text-white">
                      {item.question}
                    </h3>
                  </button>

                  <button
                    type="button"
                    aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex h-9 w-9 items-center justify-center rounded-full bg-[#1F3CDE] text-white shadow-[0_10px_30px_rgba(31,60,222,0.18)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M12 15.25a.75.75 0 0 1-.53-.22l-5-5a.75.75 0 0 1 1.06-1.06L12 13.44l4.47-4.47a.75.75 0 0 1 1.06 1.06l-5 5a.75.75 0 0 1-.53.22Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-answer-${index}`}
                      variants={answerVariants}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="mt-4 overflow-hidden"
                    >
                      <p className="text-[15px] leading-8 text-[rgba(255,255,255,0.72)]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
