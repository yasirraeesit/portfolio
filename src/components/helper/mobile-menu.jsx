import { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';

function MobileMenu({ isOpen, onClose }) {
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuItems = [
        { label: 'ABOUT', href: '/#about' },
        { label: 'EXPERIENCE', href: '/#experience' },
        { label: 'SKILLS', href: '/#skills' },
        { label: 'PROJECTS', href: '/#projects' },
        { label: 'GITHUB', href: '/#github' },
        { label: 'SERVICES', href: '/#services' },
        { label: 'EDUCATION', href: '/#education' },
        { label: 'BLOG', href: '/#blogs' },
    ];

    const handleLinkClick = () => {
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                        onClick={onClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-0 right-0 h-full w-[300px] bg-[#0d1224]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[9999] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-8 border-b border-white/5">
                            <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em]">Navigation</span>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                                aria-label="Close menu"
                            >
                                <HiX className="text-[var(--text-primary)] w-6 h-6" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="p-6">
                            <ul className="space-y-2">
                                {menuItems.map((item, index) => (
                                    <motion.li
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                                            <Link
                                                to={item.href}
                                                onClick={handleLinkClick}
                                                className="block px-4 py-3 rounded-lg text-[var(--text-primary)] hover:bg-[var(--accent-color)]/10 hover:text-[var(--accent-color)] transition-all duration-300 font-medium"
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="block px-4 py-3 rounded-lg text-[var(--text-primary)] hover:bg-[var(--accent-color)]/10 hover:text-[var(--accent-color)] transition-all duration-300 font-medium"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* Contact CTA */}
                        <div className="p-6 border-t border-[var(--card-border)] mt-auto">
                            <Link
                                to="/contact"
                                onClick={handleLinkClick}
                                className="block w-full text-center rounded-full bg-gradient-to-r from-green-400 to-emerald-600 px-6 py-3 text-sm font-extrabold text-[#0d1224] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg uppercase tracking-widest"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;
