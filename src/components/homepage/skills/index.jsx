// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Helper to get category specific colors
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Frontend': return { text: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', glow: 'shadow-cyan-500/10' };
      case 'Backend': return { text: 'text-violet-400', border: 'border-violet-500/20', bg: 'bg-violet-500/5', glow: 'shadow-violet-500/10' };
      case 'Tools': return { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', glow: 'shadow-emerald-500/10' };
      default: return { text: 'text-white', border: 'border-white/10', bg: 'bg-white/5', glow: 'shadow-white/5' };
    }
  };

  return (
    <div id="skills" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10"
        >
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-violet-400 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">Technical Arsenal</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
          MASTERING THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-500">ECOSYSTEM.</span>
        </h2>
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg md:text-xl">
          I leverage a diverse set of technologies to build scalable, high-performance applications from scratch.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {Object.entries(skillsData).map(([category, skills]) => {
          const styles = getCategoryStyles(category);
          return (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-24 last:mb-0"
            >
              <div className="flex items-center gap-6 mb-12">
                <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight ${styles.text}`}>
                  {category}
                </h3>
                <div className={`h-px flex-grow ${styles.bg.replace('bg-', 'bg-')}`} style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="group"
                  >
                    <div className={`relative h-40 md:h-48 flex flex-col items-center justify-center rounded-3xl bg-[#111827] border ${styles.border} p-6 transition-all duration-500 group-hover:${styles.border.replace('border-', 'border-')} group-hover:shadow-2xl ${styles.glow}`}>
                       {/* Background highlight */}
                       <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.bg}`} />
                       
                       <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                          <img
                            src={skillsImage(skill)}
                            alt={skill}
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                       </div>
                       <span className="relative z-10 text-white font-bold text-xs md:text-sm uppercase tracking-widest text-center">
                          {skill}
                       </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;