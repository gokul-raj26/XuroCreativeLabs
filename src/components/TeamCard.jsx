import { motion } from 'framer-motion';
import { fadeUp } from '../animations/motionVariants';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5 1.9 5.5 1 4.6 1 3.5 1 2.4 1.9 1.5 3 1.5c1.1 0 1.98.9 1.98 2zm.02 4.5H1v13h4V8zm7 0h-3.98v13h4V14c0-2.7 3.5-2.9 3.5 0v7h4V13c0-6.3-7-6.1-7-2.5V8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.5a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm4.65-.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" />
    </svg>
  );
}

export default function TeamCard({ member }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-[32px] border border-neon/40 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] w-full max-w-[320px] transition duration-500 hover:-translate-y-2 hover:border-neon/60 hover:bg-white/10 hover:shadow-[0_12px_60px_rgba(230,242,29,0.16)] hover:ring-1 hover:ring-neon/20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,60,222,0.18),_transparent_45%)] opacity-90" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8 flex h-72 w-full items-center justify-center">
          <div className="absolute inset-x-1/2 top-3 h-60 w-60 -translate-x-1/2 rounded-[42%_58%_51%_49%] bg-electric/20 blur-3xl opacity-80 animate-float" />
          <div className="absolute inset-x-1/2 top-8 h-44 w-44 -translate-x-1/2 rounded-[50%_40%_60%_40%] bg-neon/15 blur-3xl opacity-70 animate-pulseGlow" />

          <div className="relative h-56 w-56 overflow-hidden rounded-[32px] border border-neon/20 bg-slate-950/90 shadow-[0_24px_80px_rgba(0,0,0,0.26)]">
            <img
              src={member.image}
              alt={`${member.name} portrait`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            />
          </div>
        </div>

        <div className="relative z-10 text-center">
          <h3 className="font-heading text-xl font-semibold text-white">{member.name}</h3>
          <p className="mt-3 text-sm text-slate-300">{member.role}</p>
          {member.handle && <p className="mt-4 text-sm font-medium text-electric">{member.handle}</p>}

          <div className="mt-5 flex items-center justify-center gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neon/30 bg-white/5 text-white transition hover:border-neon/60 hover:bg-neon/10"
                aria-label={`${member.name} LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neon/30 bg-white/5 text-white transition hover:border-neon/60 hover:bg-neon/10"
                aria-label={`${member.name} Instagram`}
              >
                <InstagramIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
