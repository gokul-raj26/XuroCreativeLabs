import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../utils/content';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled
          ? 'border-[rgba(31,60,222,0.35)] bg-[rgba(5,8,18,0.82)] backdrop-blur-2xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto w-full max-w-7xl px-5 md:px-10" aria-label="Main">
        <div className="flex h-20 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Go to homepage">
            <img
              src={logo}
              alt="Xuro CreativeLabs logo"
              width="36"
              height="36"
              className="h-9 w-9 rounded-sm object-cover"
              decoding="async"
              fetchPriority="high"
            />
            <span className="hidden font-heading text-lg font-extrabold tracking-tight text-neon sm:inline">Xuro CreativeLabs</span>
          </NavLink>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `font-heading text-xs uppercase tracking-[0.18em] transition ${
                      isActive ? 'text-neon' : 'text-muted hover:text-text'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <NavLink to="/contact" className="btn-red hidden text-[11px] md:inline-flex">
              Get Started
            </NavLink>
            <button
              type="button"
              className="inline-flex border border-[rgba(31,60,222,0.45)] px-3 py-2 text-[11px] font-heading uppercase tracking-[0.14em] text-neon md:hidden"
              aria-expanded={open}
              aria-label="Toggle mobile menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              Menu
            </button>
          </div>
        </div>

        <div className={`${open ? 'block' : 'hidden'} pb-4 md:hidden`}>
          <ul className="glass-panel rounded-sm p-4">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 font-heading text-xs uppercase tracking-[0.16em] ${
                      isActive ? 'text-neon' : 'text-muted'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <NavLink to="/contact" onClick={() => setOpen(false)} className="btn-red w-full text-center text-[11px]">
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
