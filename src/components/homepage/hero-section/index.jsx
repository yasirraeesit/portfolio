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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[var(--background-color)] pt-[80px] overflow-hidden bg-grid">
      {/* Decorative background glows - using opaque colors/gradients instead of blurs for scroll perf */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div 
               variants={itemVariants} 
               className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">Open to Collaboration</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 italic">NEXT-GEN</span> <br />
              WEB APPS.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-10"
            >
              I'm <span className="text-white font-bold">{personalData.name}</span>. 
              I design and develop high-performance MERN stack applications with a focus on clean architecture and beautiful UI.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-[#0d1224] font-black rounded-2xl transition-all hover:scale-105 flex items-center gap-2 shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
              >
                Hire Me <MdEmail size={20} className="group-hover:rotate-12 transition-transform" />
              </button>

              <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-transparent">
                <a
                  href={personalData.resume}
                  target="_blank"
                  className="px-8 py-4 bg-[#111827] hover:bg-[#1a2333] text-white font-bold rounded-2xl transition-all flex items-center gap-2 border border-white/5"
                >
                  Resume <HiDownload size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8 w-full max-w-xs">
              <a href={personalData.github} target="_blank" className="text-white/40 hover:text-white transition-colors">
                <FaGithub size={28} />
              </a>
              <a href={personalData.linkedIn} target="_blank" className="text-white/40 hover:text-emerald-400 transition-colors">
                <FaLinkedin size={28} />
              </a>
            </motion.div>
          </div>

          {/* Visual Profile / Identity Card */}
          <div className="lg:col-span-5 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full aspect-square md:aspect-auto md:h-[600px] bg-gradient-to-br from-[#1a1f35] to-[#0d1224] rounded-[2.5rem] border border-white/10 p-1 project-card-glow"
            >
              <div className="absolute inset-0 bg-grid opacity-20" />
              
              {/* Profile Wrapper */}
              <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden flex flex-col">
                <div className="p-8 pb-4 flex items-center gap-4 border-b border-white/10">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                   </div>
                   <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">Identity_Kernel.log</span>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center p-8">
                  <div className="relative mb-8 group">
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                    <img
                      src={personalData.profile}
                      alt={personalData.name}
                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>

                  <h2 className="text-3xl font-black text-white text-center mb-2">{personalData.name}</h2>
                  <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6">MERN Stack Engineer</p>

                  <div className="grid grid-cols-2 gap-3 w-full">
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <span className="block text-2xl font-black text-white">2+</span>
                        <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">Exp. Years</span>
                     </div>
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <span className="block text-2xl font-black text-emerald-400">10+</span>
                        <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">Projects</span>
                     </div>
                  </div>
                </div>
                
                {/* Decorative Footer */}
                <div className="p-6 bg-white/[0.02] border-t border-white/10 text-center">
                   <div className="flex justify-center gap-2">
                      <div className="px-2 py-1 bg-white/5 rounded-md text-[8px] text-white/40 font-mono">REACT</div>
                      <div className="px-2 py-1 bg-white/5 rounded-md text-[8px] text-white/40 font-mono">NODE</div>
                      <div className="px-2 py-1 bg-white/5 rounded-md text-[8px] text-white/40 font-mono">MONGODB</div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;