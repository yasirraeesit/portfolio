// @flow strict
import { educations } from "@/utils/data/educations";
import { FaGraduationCap, FaBook, FaProjectDiagram, FaCode } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Education = () => {
  const education = educations[0]; // Focus on the single entry

  return (
    <section id="education" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-indigo-500 rounded-full" />
            <span className="text-indigo-400 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Academic Blueprint</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
            SCHOLARLY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-500 italic">FOUNDATION.</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative p-1 rounded-[3rem] bg-gradient-to-br from-indigo-500/20 to-transparent border border-white/5"
           >
              <div className="bg-[#111827] rounded-[2.8rem] p-10 md:p-16 overflow-hidden relative shadow-2xl">
                 <div className="absolute inset-0 bg-grid opacity-10" />
                 
                 {/* Decorative background circle */}
                 <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />

                 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Icon & Title */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                       <div className="p-6 rounded-[2rem] bg-gradient-to-br from-indigo-500 to-cyan-500 text-[#0d1224] shadow-[0_20px_40px_rgba(99,102,241,0.3)] mb-8">
                          <FaGraduationCap size={48} />
                       </div>
                       <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-none">{education.title}</h3>
                       <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-8">{education.institution}</p>
                       <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-bold text-white/40">{education.duration}</span>
                    </div>

                    {/* Academic Modules / Details */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[
                         { icon: <FaCode />, label: "Web Engineering", desc: "Advanced frontend and backend technologies." },
                         { icon: <FaBook />, label: "Computer Science", desc: "Deep dive into algorithms and data structures." },
                         { icon: <FaProjectDiagram />, label: "Software Project Management", desc: "Agile methodologies and team collaboration." },
                         { icon: <FaGraduationCap />, label: "Object Oriented Programming", desc: "Mastering core software design principles." }
                       ].map((module, i) => (
                         <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all group">
                            <div className="flex items-start gap-4">
                               <div className="text-indigo-400 mt-1">{module.icon}</div>
                               <div>
                                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{module.label}</h4>
                                  <p className="text-[10px] text-white/40 leading-relaxed uppercase font-black">{module.desc}</p>
                               </div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;