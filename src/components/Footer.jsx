import { Link } from 'react-router-dom';
import { footerCols, contactLinks } from '../utils/content';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(31,60,222,0.35)] bg-bg2">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Xuro CreativeLabs logo"
                width="42"
                height="42"
                className="h-10 w-10 rounded-sm object-cover"
                loading="lazy"
                decoding="async"
              />
              <h2 className="font-heading text-2xl font-extrabold text-neon">Xuro CreativeLabs</h2>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Bold, high-contrast creative systems for brands that need measurable impact.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-neon">{col.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition hover:text-text" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(31,60,222,0.25)] pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Xuro CreativeLabs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="transition hover:text-neon" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="transition hover:text-neon" href={contactLinks.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="transition hover:text-neon" href={`mailto:${contactLinks.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
