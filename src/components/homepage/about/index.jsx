// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { personalData } from "@/utils/data/personal-data";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

function AboutSection() {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
   };

   return (
      <section id="about" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
         <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-16"
            >
               <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-1 bg-emerald-500 rounded-full" />
                  <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.3em]">Discovery Phase</span>
               </div>
               <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter uppercase">
                  THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">IDENTITY</span> <br />
                  BEHIND THE CODE.
               </h2>
            </motion.div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
               {/* Tile 1: Main Bio - Large 2x4 */}
               <motion.div
                  variants={itemVariants}
                  className="md:col-span-4 lg:col-span-4 lg:row-span-2 bg-[#111827] rounded-[2rem] border border-white/10 p-8 md:p-12 relative overflow-hidden group"
               >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                     <BsFillLightningChargeFill size={120} className="text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">The Story So Far</h3>
                  <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                     I’m based in <span className="text-white font-bold">Lahore</span> and I’ve always been fascinated by how technology can solve everyday problems. I don’t just write code; I look for the best way to build something so that it feels natural and easy for the user.
                  </p>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                     Whether it's a small startup tool or a complex platform, I'm dedicated to making it work perfectly using the MERN stack. My goal is to build digital products that people actually enjoy using.
                  </p>
               </motion.div>

               {/* Tile 2: Quick Stats - Square */}
               <motion.div
                  variants={itemVariants}
                  className="md:col-span-2 bg-emerald-500 rounded-[2rem] p-8 flex flex-col justify-between group hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(16,185,129,0.2)]"
               >
                  <div className="flex justify-between items-start">
                     <div className="p-3 bg-black/20 rounded-2xl">
                        <BsFillLightningChargeFill className="text-white" size={24} />
                     </div>
                     <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Active Status</span>
                  </div>
                  <div>
                     <span className="block text-6xl font-black text-white leading-none mb-2">2+</span>
                     <span className="text-sm font-bold text-[#0d1224] uppercase tracking-wider">Years Experience</span>
                  </div>
               </motion.div>

               {/* Tile 3: Tech Stack Pills */}
               <motion.div
                  variants={itemVariants}
                  className="md:col-span-2 bg-[#1a1f35] rounded-[2rem] border border-white/5 p-8 flex flex-col justify-center gap-4"
               >
                  <div className="flex flex-wrap gap-2">
                     {['React', 'Node.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'Express', 'Tailwind', 'Docker'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/5 rounded-xl border border-white/10 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                           {tech}
                        </span>
                     ))}
                  </div>
                  <span className="text-xs text-white/30 font-bold uppercase tracking-widest mt-4">Core Ecosystem</span>
               </motion.div>

               {/* Tile 4: Location/Education - Map-like tile */}
               <motion.div
                  variants={itemVariants}
                  className="md:col-span-3 bg-[#111827] rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between group overflow-hidden relative"
               >
                  <div className="absolute inset-0 bg-grid opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="flex items-center gap-4 relative z-10">
                     <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                        <FaMapMarkerAlt className="text-cyan-400" size={20} />
                     </div>
                     <div>
                        <span className="block text-white font-bold text-lg">{personalData.address}</span>
                        <span className="text-xs text-white/40 font-bold uppercase tracking-widest">Available Remotely</span>
                     </div>
                  </div>
                  <div className="mt-8 relative z-10 flex items-center gap-4">
                     <div className="p-3 bg-violet-500/10 border border-violet-500/20 rounded-2xl">
                        <FaGraduationCap className="text-violet-400" size={20} />
                     </div>
                     <span className="text-white/60 text-sm font-medium">BS (Hons) Computer Science</span>
                  </div>
               </motion.div>

               {/* Tile 5: Connect / Socials */}
               <motion.div
                  variants={itemVariants}
                  className="md:col-span-3 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden"
               >
                  <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                  <h3 className="text-2xl font-black text-white relative z-10">Let's build <br /> together.</h3>
                  <div className="flex items-center gap-4 relative z-10 mt-8">
                     <a href={personalData.github} target="_blank" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors">
                        <FaGithub className="text-white" size={24} />
                     </a>
                     <a href={personalData.linkedIn} target="_blank" className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors">
                        <FaLinkedin className="text-white" size={24} />
                     </a>
                     <a href={`mailto:${personalData.email}`} className="flex-grow flex items-center justify-center gap-3 p-4 bg-white text-[#0d1224] rounded-2xl font-black text-sm transition-transform hover:scale-105 active:scale-95">
                        <FaEnvelope size={18} />
                        CHAT
                     </a>
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}

export default AboutSection;