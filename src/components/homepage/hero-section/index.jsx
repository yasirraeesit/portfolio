// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { personalData } from "../../../utils/data/personal-data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--background-color)] pt-[100px] pb-8 lg:pb-12 overflow-hidden transition-colors">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-[100px] opacity-40" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px] opacity-40" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 blur-[2px]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] leading-tight">
                I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic font-medium">web apps</span> that people actually use.
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              I'm <span className="text-[var(--text-primary)] font-semibold">{personalData.name}</span>, a software engineer who loves building things with React and Node.js. I take ideas from messy requirements to working products.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 hover:text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Let's Talk <MdEmail size={20} />
              </button>
              <div className="relative group/btn overflow-hidden rounded-xl p-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500">
                <a
                  href={personalData.resume}
                  target="_blank"
                  className="relative px-8 py-4 bg-[var(--background-color)] hover:bg-emerald-500/5 text-[var(--text-primary)] font-bold rounded-xl transition-all flex items-center gap-2"
                >
                  Download CV <HiDownload size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4 border-t border-[var(--card-border)]">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <FaGithub size={28} />
              </a>
              <a href={personalData.linkedIn} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-emerald-400 transition-colors">
                <FaLinkedin size={28} />
              </a>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Profile Image with Glassmorphism Effect */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-emerald-500/30">
                <img
                  src={personalData.profile}
                  alt={personalData.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-2xl blur-2xl -z-10"
              />
              <motion.div
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl -z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;