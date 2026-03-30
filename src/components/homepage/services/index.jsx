// @flow strict
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress, FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Full Stack Development",
    description: "End-to-end MERN stack solutions. I build scalable architectures from database schema to responsive pixel-perfect frontends.",
    icon: <FaLayerGroup size={32} />,
    color: "from-emerald-400 to-cyan-500",
    shadow: "shadow-emerald-500/10"
  },
  {
    title: "Frontend Engineering",
    description: "High-performance React & Next.js interfaces. Focused on Core Web Vitals, accessibility, and high-quality user experiences.",
    icon: <BiCodeAlt size={32} />,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/10"
  },
  {
    title: "Backend & API Architecture",
    description: "Robust Node.js & Express backends. Designing secure RESTful APIs with MongoDB/PostgreSQL and smooth third-party integrations.",
    icon: <FaDatabase size={32} />,
    color: "from-violet-500 to-fuchsia-500",
    shadow: "shadow-violet-500/10"
  },
  {
    title: "CMS & WordPress",
    description: "Custom headless CMS or traditional WordPress development. Optimized for speed, SEO, and easy content management.",
    icon: <FaWordpress size={32} />,
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/10"
  }
];

function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-emerald-500 rounded-full" />
            <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Technical Solutions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            SCALABLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 italic">CAPABILITIES.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative"
             >
                <div className={`h-full p-10 rounded-[2.5rem] bg-[#111827] border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col items-start relative overflow-hidden ${service.shadow}`}>
                   {/* Background Glow */}
                   <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity blur-3xl`} />
                   
                   <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-[#0d1224] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                   </div>
                   
                   <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                   </h3>
                   
                   <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                      {service.description}
                   </p>

                   <div className="mt-auto pt-6 border-t border-white/5 w-full">
                      <div className="flex items-center gap-2 text-white/20 font-bold uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                         View Details <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex justify-center"
        >
           <a
             href="/services"
             className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white text-white hover:text-[#0d1224] rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3"
           >
              VIEW ALL EXPERTISE <FaArrowRight size={14} />
           </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

