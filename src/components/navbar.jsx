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
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['about', 'experience', 'skills', 'projects', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      // Alternative method using scroll position
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset active section when route changes
  useEffect(() => {
    setActiveSection('');
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 z-[9999] bg-[var(--nav-bg)] backdrop-blur-xl pointer-events-auto border-b transition-all duration-500 ${scrolled
        ? 'left-0 right-0 border-[var(--card-border)]/40 shadow-lg shadow-black/10'
        : 'left-[5%] right-[5%] border-[var(--card-border)]/20 rounded-full mt-4'
        }`}>
        <div className="relative flex items-center px-6 py-3">
          {/* Logo - Left Side */}
          <div className="flex flex-1 items-center justify-start">
            <Link
              to="/"
              className="text-[var(--accent-color)] text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap tracking-tight">
              YASIR RAEES
            </Link>
          </div>

          {/* Menu Items - Hidden on mobile */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center">
            <ul className="flex items-center space-x-2 lg:space-x-6 text-sm font-medium" id="navbar-default">
              <li>
                <a
                  className={`block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 ${activeSection === 'about'
                    ? 'text-[var(--accent-color)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-color)]'
                    } relative group`}
                  href="/#about"
                >
                  ABOUT
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeSection === 'about'
                    ? 'w-full bg-[var(--accent-color)]'
                    : 'w-0 bg-[var(--accent-color)] group-hover:w-full'
                    }`}></span>
                </a>
              </li>
              <li>
                <a
                  className={`block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 ${activeSection === 'experience'
                    ? 'text-[var(--accent-color)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-color)]'
                    } relative group`}
                  href="/#experience"
                >
                  EXPERIENCE
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeSection === 'experience'
                    ? 'w-full bg-[var(--accent-color)]'
                    : 'w-0 bg-[var(--accent-color)] group-hover:w-full'
                    }`}></span>
                </a>
              </li>
              <li>
                <a
                  className={`block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 ${activeSection === 'skills'
                    ? 'text-[var(--accent-color)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-color)]'
                    } relative group`}
                  href="/#skills"
                >
                  SKILLS
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeSection === 'skills'
                    ? 'w-full bg-[var(--accent-color)]'
                    : 'w-0 bg-[var(--accent-color)] group-hover:w-full'
                    }`}></span>
                </a>
              </li>
              <li>
                <a
                  className={`block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 ${activeSection === 'projects'
                    ? 'text-[var(--accent-color)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-color)]'
                    } relative group`}
                  href="/#projects"
                >
                  PROJECTS
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeSection === 'projects'
                    ? 'w-full bg-[var(--accent-color)]'
                    : 'w-0 bg-[var(--accent-color)] group-hover:w-full'
                    }`}></span>
                </a>
              </li>
              <li>
                <Link
                  className={`block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 ${location.pathname === '/services'
                    ? 'text-[var(--accent-color)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-color)]'
                    } relative group`}
                  to="/services"
                >
                  SERVICES
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${location.pathname === '/services'
                    ? 'w-full bg-[var(--accent-color)]'
                    : 'w-0 bg-[var(--accent-color)] group-hover:w-full'
                    }`}></span>
                </Link>
              </li>
              <li>
                <a
                  className={`block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 ${activeSection === 'education'
                    ? 'text-[var(--accent-color)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-color)]'
                    } relative group`}
                  href="/#education"
                >
                  EDUCATION
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeSection === 'education'
                    ? 'w-full bg-[var(--accent-color)]'
                    : 'w-0 bg-[var(--accent-color)] group-hover:w-full'
                    }`}></span>
                </a>
              </li>
              <li>
                <Link
                  className={`block px-3 py-2 no-underline outline-none hover:no-underline transition-colors duration-300 ${location.pathname === '/blog'
                    ? 'text-[var(--accent-color)] font-semibold'
                    : 'text-[var(--text-primary)] hover:text-[var(--accent-color)]'
                    } relative group`}
                  to="/blog"
                >
                  BLOG
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${location.pathname === '/blog'
                    ? 'w-full bg-[var(--accent-color)]'
                    : 'w-0 bg-[var(--accent-color)] group-hover:w-full'
                    }`}></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side: Mobile Menu + Theme Toggle + Contact Button */}
          <div className="flex flex-1 items-center justify-end gap-3">
            {/* Mobile Menu Button - visible on small screens */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Open menu"
            >
              <HiMenuAlt3 className="text-[var(--text-primary)] w-6 h-6" />
            </button>

            <ThemeToggle />

            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 15px rgba(16,185,129,0.2)", "0 0 0px rgba(16,185,129,0)"]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="hidden sm:block"
            >
              <Link
                className="relative group overflow-hidden flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-bold text-[var(--background-color)] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                to="/booking"
              >
                {/* Shimmer Effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-10"
                />

                <span className="relative z-10 uppercase tracking-wider font-semibold">Book a Meeting</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

export default Navbar;