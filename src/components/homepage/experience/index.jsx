// @flow strict
import { experiences } from "@/utils/data/experience";
import { personalData } from "@/utils/data/personal-data";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";

function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-40 bg-[var(--background-color)]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Synthesis */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mb-24 lg:mb-32"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-12 h-1 bg-cyan-500 rounded-full" />
            <span className="text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-[0.4em]">Career Path</span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none uppercase italic">
            Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Timeline.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Neural Trace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
             {experiences.map((experience, index) => (
                <motion.div
                   key={experience.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1, duration: 0.6 }}
                   className={`group relative ${index % 2 === 0 ? 'lg:mt-4' : 'lg:-mt-4'}`}
                >
                   {/* Role Identifer Tag */}
                   <div className="absolute -top-4 -right-4 z-20 px-4 py-2 bg-white text-black font-mono text-[10px] font-bold rounded-xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform">
                      CP-0{experience.id}
                   </div>

                   <div className="h-full p-10 lg:p-14 rounded-[4rem] bg-[#111827] border border-white/5 hover:border-cyan-500/30 transition-all duration-700 flex flex-col items-start relative overflow-hidden group shadow-2xl">
                      {/* Matrix Background Glow */}
                      <div className="absolute inset-0 bg-grid opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" />
                      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex items-center justify-between w-full mb-10 relative z-10">
                         <div className="p-5 rounded-3xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
                            <BsBriefcaseFill size={32} />
                         </div>
                         <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em]">{experience.duration}</span>
                      </div>

                      <div className="relative z-10 w-full">
                         <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 uppercase tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">
                            {experience.title}
                         </h3>
                         <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-10 border-l-2 border-emerald-500/20 pl-4">{experience.company}</p>
                         
                         <div className="space-y-4 pt-10 border-t border-white/5">
                            <p className="text-lg text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors italic">
                               {experience.description || "Deploying resilient technical infrastructures and driving scalable digital product lifecycles."}
                            </p>
                         </div>
                      </div>

                      {/* Connection Pulse */}
                      <div className="absolute bottom-10 right-10">
                         <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_#22d3ee]">
                            <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-25" />
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* SVG Neural Path (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
             <svg className="w-full h-full opacity-[0.05]" preserveAspectRatio="none">
                <motion.path
                   d="M 50,150 C 200,250 400,100 600,300 S 800,500 1100,450"
                   fill="none"
                   stroke="url(#experience-gradient)"
                   strokeWidth="3"
                   initial={{ pathLength: 0 }}
                   whileInView={{ pathLength: 1 }}
                   transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                <defs>
                   <linearGradient id="experience-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#818cf8" />
                   </linearGradient>
                </defs>
             </svg>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-32 flex flex-col items-center gap-8"
        >
           <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.4em] text-center">Full Professional Records Available</p>
           <a
             href={personalData.resume}
             target="_blank"
             rel="noreferrer"
             className="group relative px-12 py-6 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
           >
              <span>Download Full Dossier</span>
              <HiArrowDown className="inline-block ml-3 animate-bounce" size={16} />
           </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;