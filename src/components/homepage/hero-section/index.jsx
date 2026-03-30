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
    <section className="relative min-h-screen flex items-center bg-[var(--background-color)] pt-32 lg:pt-20 overflow-hidden bg-grid">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
               variants={itemVariants} 
               className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em]">Open to Collaboration</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase"
            >
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 italic">NEXT-GEN</span> <br />
              WEB APPS.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-12"
            >
              I'm <span className="text-white font-bold">{personalData.name}</span>. 
              I design and develop high-performance MERN stack applications with a focus on clean architecture and beautiful UI.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto relative group overflow-hidden px-10 py-5 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 bg-[length:200%_auto] hover:bg-[100%_0] transition-all duration-1000 text-[#0d1224] font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_25px_50px_rgba(34,211,238,0.4)]"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me <MdEmail size={22} className="group-hover:rotate-[20deg] transition-transform duration-500" />
                </span>
                
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl bg-cyan-400/20 -z-10 animate-pulse-slow" />
              </motion.button>

              <motion.div 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto relative p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-transparent group"
              >
                <a
                  href={personalData.resume}
                  target="_blank"
                  className="px-10 py-5 bg-[#111827] hover:bg-[#1a2333] text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 border border-white/5 active:scale-95"
                >
                  Resume <HiDownload size={22} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
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
          <div className="lg:col-span-5 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full lg:min-h-[660px] bg-gradient-to-br from-[#1a1f35] to-[#0d1224] rounded-[3rem] border border-white/10 p-1 project-card-glow shadow-2xl"
            >
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
              
              {/* Profile Wrapper */}
              <div className="relative h-full w-full rounded-[2.8rem] overflow-hidden flex flex-col">
                <div className="p-8 lg:p-10 pb-6 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/30" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/30" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
                   </div>
                   <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Identity_Kernel.log</span>
                </div>

                <div className="flex-grow flex flex-col items-center justify-center p-10 lg:p-14">
                  <div className="relative mb-10 group">
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
                    <img
                      src={personalData.profile}
                      alt={personalData.name}
                      className="relative w-48 h-48 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-black text-white text-center mb-3 tracking-tighter uppercase leading-none">{personalData.name}</h2>
                  <p className="text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] text-center mb-10">MERN Stack Engineer</p>

                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-4">
                     <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center group/stat hover:border-emerald-500/30 transition-colors">
                        <span className="block text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">2+</span>
                        <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Exp. Years</span>
                     </div>
                     <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center group/stat hover:border-cyan-500/30 transition-colors">
                        <span className="block text-3xl font-black text-cyan-400 group-hover:scale-110 transition-transform">10+</span>
                        <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Projects</span>
                     </div>
                  </div>
                </div>
                
                {/* Decorative Footer */}
                <div className="p-8 bg-white/[0.03] border-t border-white/5 text-center mt-auto">
                   <div className="flex justify-center gap-3">
                      {['REACT', 'NODE', 'MONGODB'].map(tech => (
                         <div key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[8px] text-white/30 font-mono font-bold tracking-[0.2em]">
                            {tech}
                         </div>
                      ))}
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