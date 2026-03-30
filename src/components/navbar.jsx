// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import ThemeToggle from './helper/theme-toggle';
import MobileMenu from './helper/mobile-menu';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const sections = ['about', 'experience', 'skills', 'projects', 'github', 'services', 'education', 'blogs'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });

        let foundActive = current;
        if (!foundActive) {
          const scrollPosition = window.scrollY + 150;
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                foundActive = section;
                break;
              }
            }
          }
        }
        setActiveSection(foundActive || '');
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const displayActiveSection = location.pathname === '/' ? activeSection : '';

  const navLinks = [
    { label: 'ABOUT', href: '/#about', id: 'about' },
    { label: 'EXPERIENCE', href: '/#experience', id: 'experience' },
    { label: 'SKILLS', href: '/#skills', id: 'skills' },
    { label: 'PROJECTS', href: '/#projects', id: 'projects' },
    { label: 'GITHUB', href: '/#github', id: 'github' },
    { label: 'SERVICES', href: '/#services', id: 'services' },
    { label: 'EDUCATION', href: '/#education', id: 'education' },
    { label: 'BLOG', href: '/#blogs', id: 'blogs' },
  ];

  return (
    <>
      <nav className={`fixed top-0 z-[9999] bg-[var(--nav-bg)] pointer-events-auto border-b transition-all duration-500 ${scrolled
        ? 'left-0 right-0 border-[var(--card-border)]/40 shadow-lg shadow-black/10 bg-opacity-95'
        : 'left-[5%] right-[5%] border-[var(--card-border)]/20 rounded-full mt-4 bg-opacity-90'
        }`}>
        <div className="relative flex items-center px-6 py-3">
          <div className="flex flex-1 items-center justify-start">
            <Link to="/" className="text-[var(--accent-color)] text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap tracking-tight">
              YASIR RAEES
            </Link>
          </div>

          <div className="hidden md:flex flex-shrink-0 items-center justify-center">
            <ul className="flex items-center space-x-1 lg:space-x-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`block px-2 lg:px-3 py-2 no-underline outline-none hover:no-underline transition-all duration-300 ${displayActiveSection === link.id
                      ? 'text-emerald-400 font-bold scale-110'
                      : 'text-white/70 hover:text-emerald-400'
                      } relative group font-mono text-[10px] tracking-[0.2em] uppercase`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Open menu"
            >
              <HiMenuAlt3 className="text-[var(--text-primary)] w-6 h-6" />
            </button>

            <ThemeToggle />

            <Link
               className="relative group overflow-hidden hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-xs font-black text-[#0d1224] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_15px_rgba(16,185,129,0.2)]"
               to="/contact"
            >
               <span className="relative z-10 uppercase tracking-[0.2em]">Contact Me</span>
            </Link>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

export default Navbar;