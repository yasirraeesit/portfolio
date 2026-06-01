import { personalData } from '../utils/data/personal-data';
import { contactsData } from '../utils/data/contactsData';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaClock, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiFramer, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import { Link } from 'react-router-dom';

function Footer() {
  const [time, setTime] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  // Social media links array
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: contactsData.github, color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: contactsData.linkedIn, color: 'hover:text-blue-400' },
    { name: 'Email', icon: <FaEnvelope />, url: `mailto:${contactsData.email}`, color: 'hover:text-red-400' },
  ];

  // Remove empty social links
  const validSocialLinks = socialLinks.filter(link => link.url && link.url !== '');

  return (
    <footer className="relative bg-[var(--background-color)] py-16 lg:py-20 overflow-hidden border-t border-[var(--card-border)] transition-colors">
      {/* Immersive Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="lg:col-span-1">
            <a href="/" className="text-[var(--accent-color)] text-2xl font-bold mb-4 block">
              YASIR RAEES
            </a>
            <p className="text-[var(--text-secondary)] text-base max-w-xs mb-6">
              Engineering high-performance digital solutions with a focus on scalability and user experience.
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">Available</span>
            </div>
          </div>

          {/* Combined Navigation and Connect for Mobile - Shows only on mobile */}
          <div className="sm:col-span-2 lg:col-span-2 lg:hidden">
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation Column */}
              <div>
                <h4 className="text-[var(--text-primary)] font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="/#about" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/#experience" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="/#skills" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="/#projects" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                      Services
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect Column */}
              <div>
                <h4 className="text-[var(--text-primary)] font-bold mb-6 uppercase tracking-widest text-sm">Connect</h4>
                <ul className="space-y-4">
                  <li>
                    <a href={`mailto:${contactsData.email}`} className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                      <FaEnvelope className="text-sm" /> {contactsData.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${contactsData.phone}`} className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                      <span className="text-sm">{contactsData.phone}</span>
                    </a>
                  </li>
                  <li>
                    <div className="text-[var(--text-secondary)] flex items-center gap-2">
                      {contactsData.address}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links - Show on desktop */}
          <div className="hidden lg:block">
            <h4 className="text-[var(--text-primary)] font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="/#about" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/#experience" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="/#skills" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="/services" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section - Show on desktop */}
          <div className="hidden lg:block">
            <h4 className="text-[var(--text-primary)] font-bold mb-6 uppercase tracking-widest text-sm">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${contactsData.email}`} className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  <FaEnvelope className="text-sm" /> {contactsData.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactsData.phone}`} className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-sm">{contactsData.phone}</span>
                </a>
              </li>
              <li>
                <div className="text-[var(--text-secondary)] flex items-center gap-2">
                  {contactsData.address}
                </div>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col">
            <h4 className="text-[var(--text-primary)] font-bold mb-6 uppercase tracking-widest text-sm">Let's Connect</h4>
            <Link
              to="/contact"
              className="group flex items-center gap-3 text-emerald-400 font-bold text-lg hover:text-[var(--text-primary)] transition-colors mb-6"
            >
              START A PROJECT
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              {validSocialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`text-[var(--text-secondary)] hover:text-emerald-400 transition-colors duration-300 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Local Time Display */}
            <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm opacity-60">
              <FaClock className="text-emerald-500/50" />
              <span className="font-mono">PK: {time || "Checking..."}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--card-border)] pt-8 transition-colors">
          {/* Bottom Section: Copyright and Tech Stack */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[var(--text-secondary)] text-sm">
                © {currentYear} <span className="text-[var(--text-primary)] font-medium">{personalData.name}</span>. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4 text-[var(--text-secondary)] text-sm">
              <span>Made with</span>
              <div className="flex gap-2">
                <SiTailwindcss className="text-blue-400" size={20} title="Tailwind CSS" />
                <SiFramer className="text-gray-400" size={20} title="Framer Motion" />
                <SiJavascript className="text-yellow-400" size={20} title="JavaScript" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
