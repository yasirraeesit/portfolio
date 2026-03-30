import { personalData } from "@/utils/data/personal-data";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";

function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };



  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-[var(--background-color)] transition-colors">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch"
        >
          {/* Left Column: Developer IDE */}
          <motion.div variants={itemVariants} className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-emerald-500" />
              <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">Compiling Profile...</span>
            </div>

            <div className="relative group flex-grow h-full min-h-[400px]">
              {/* Window Header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--card-border)] rounded-t-2xl border-t border-x border-[var(--card-border)] flex items-center px-4 gap-2 z-20 transition-colors">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-grow text-center text-[10px] text-[var(--text-secondary)] font-mono uppercase tracking-tighter">
                  developer_profile.js — 1280×800
                </div>
              </div>

              {/* IDE Content */}
              <div className="absolute inset-0 pt-10 pb-6 px-6 bg-[var(--card-bg)]/95 rounded-2xl border border-[var(--card-border)] shadow-[var(--card-light-shadow)] overflow-hidden font-mono text-sm md:text-base cursor-text group-hover:border-emerald-500/30 transition-colors">
                <div className="h-full overflow-auto scrollbar-hide py-4 relative">
                  {/* Line Numbers Decorator */}
                  <div className="absolute left-0 top-4 w-6 text-[var(--text-secondary)] text-right pr-4 select-none italic text-xs">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  <div className="pl-10 space-y-1">
                    <div className="flex flex-wrap gap-x-2">
                      <span className="text-pink-500">const</span>
                      <span className="text-emerald-400">developer</span>
                      <span className="text-[var(--text-primary)]">=</span>
                      <span className="text-amber-300">{"{"}</span>
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-[var(--text-primary)]">name:</span>
                      <span className="text-emerald-300">'{personalData.name}'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-[var(--text-primary)]">role:</span>
                      <span className="text-emerald-300">'Software Engineer'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-[var(--text-primary)]">specialty:</span>
                      <span className="text-emerald-300">'MERN Stack'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-[var(--text-primary)]">location:</span>
                      <span className="text-emerald-300">'{personalData.address}'</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-[var(--text-primary)]">hardWorker:</span>
                      <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-[var(--text-primary)]">quickLearner:</span>
                      <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-[var(--text-primary)]">problemSolver:</span>
                      <span className="text-orange-400">true</span>,
                    </div>
                    <div className="pl-6 flex gap-2">
                      <span className="text-pink-500 italic">hireable:</span>
                      <span className="text-pink-500">function</span>
                      <span className="text-[var(--text-primary)]">() {"{"}</span>
                    </div>
                    <div className="pl-12 flex gap-2">
                      <span className="text-pink-500">return</span>
                      <span className="text-amber-300">{"("}</span>
                    </div>
                    <div className="pl-18 flex flex-wrap gap-2 text-[var(--text-primary)]">
                      this.hardWorker && this.problemSolver && <span className="text-cyan-400">this.skills.length</span> {">="} <span className="text-orange-400">5</span>
                    </div>
                    <div className="pl-12">
                      <span className="text-amber-300">{")"}</span>;
                    </div>
                    <div className="pl-6 text-[var(--text-primary)]">{"}"}</div>
                    <div className="text-amber-300">{"}"}</div>
                  </div>

                  {/* Typing Cursor Effect */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-[2px] h-4 bg-emerald-500 ml-1 translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bento Grid Stats */}
          <div className="flex flex-col justify-between py-2">
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-5xl font-black text-[var(--text-primary)] mb-6 leading-[0.9]">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">web apps</span> that work.
              </h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-lg mb-8">
                I write code that solves real problems. Whether it's a dashboard, an API, or a full-stack app, I focus on making things that work well and are easy to maintain.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Stat 1: 1+ Year Experience */}
              <GlowCard identifier="about-exp">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    loading="lazy"
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-emerald-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaBriefcase size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-[var(--text-primary)]">
                        1+ Year Experience
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        Expertise in Building Real Products
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>

              {/* Stat 2: Modern Stack */}
              <GlowCard identifier="about-stack">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    loading="lazy"
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-cyan-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaCode size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-[var(--text-primary)]">
                        Modern Stack
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        React, Next.js, Node, MongoDB
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>

              {/* Stat 3: Quality Code */}
              <GlowCard identifier="about-quality">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    loading="lazy"
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-amber-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaGraduationCap size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-[var(--text-primary)]">
                        Quality Code
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        Clean, Maintainable Code
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>

              {/* Stat 4: Lahore, Pakistan */}
              <GlowCard identifier="about-location">
                <div className="p-5 relative h-full">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    loading="lazy"
                    className="absolute bottom-0 left-0 opacity-80"
                  />
                  <div className="flex items-center gap-x-6 h-full">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125 flex-shrink-0">
                      <FaMapMarkerAlt size={32} />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg mb-1 font-bold text-[var(--text-primary)]">
                        {personalData.address}
                      </p>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        Open to Remote Work
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;