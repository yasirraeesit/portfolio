// @flow strict
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Full Stack Development",
    description: "End-to-end MERN stack solutions. I build scalable architectures from database schema to responsive pixel-perfect frontends.",
    icon: <FaLayerGroup size={42} />,
    color: "from-emerald-400 via-emerald-500 to-cyan-500",
    tag: "Scale"
  },
  {
    title: "Frontend Engineering",
    description: "High-performance React & Next.js interfaces. Focused on Core Web Vitals, accessibility, and high-quality user experiences.",
    icon: <BiCodeAlt size={42} />,
    color: "from-cyan-400 via-cyan-500 to-blue-500",
    tag: "Speed"
  },
  {
    title: "Backend & API Architecture",
    description: "Robust Node.js & Express backends. Designing secure RESTful APIs with MongoDB/PostgreSQL and smooth third-party integrations.",
    icon: <FaDatabase size={42} />,
    color: "from-violet-500 via-violet-600 to-fuchsia-500",
    tag: "Security"
  },
  {
    title: "CMS & WordPress",
    description: "Custom headless CMS or traditional WordPress development. Optimized for speed, SEO, and easy content management.",
    icon: <FaWordpress size={42} />,
    color: "from-amber-400 via-amber-500 to-orange-500",
    tag: "Content"
  }
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background-color)] relative">
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />

      <main className="relative z-10 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <Link
               to="/"
               className="inline-flex items-center gap-2 text-white/50 hover:text-emerald-400 transition-colors group font-mono text-[10px] tracking-[0.2em] uppercase mb-12"
            >
               <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
               <span>Return to Core</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
               <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-12 h-1 bg-emerald-500 rounded-full" />
                    <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.4em]">Expertise Catalog</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">
                    Technical <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500">Capabilities.</span>
                  </h1>
               </div>
               <p className="text-lg md:text-xl text-white/40 max-w-md font-medium leading-relaxed uppercase border-l-2 border-white/5 pl-8 italic">
                  Architecting resilient digital infrastructures for the next generation of web performance.
               </p>
            </div>
          </motion.div>

          {/* Detailed Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-full"
              >
                <div className="h-full p-12 rounded-[4rem] bg-[#111827] border border-white/5 hover:border-white/10 transition-all duration-700 flex flex-col items-start relative overflow-hidden group shadow-2xl">
                   {/* Background Glow */}
                   <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity blur-[80px] -translate-y-1/2 translate-x-1/2`} />
                   
                   <div className="flex items-center justify-between w-full mb-12">
                      <div className={`p-6 rounded-[2rem] bg-gradient-to-br ${service.color} text-[#0d1224] shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em]">{service.tag}</span>
                   </div>

                   <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">
                      {service.title}
                   </h3>
                   
                   <p className="text-xl text-white/50 leading-relaxed mb-12 font-medium">
                      {service.description}
                   </p>

                   <div className="mt-auto w-full pt-8 border-t border-white/5 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em] group/btn transition-all"
                      >
                         <span>Synthesize Project</span>
                         <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform text-emerald-500" />
                      </Link>
                      <div className="text-[10px] font-mono font-bold text-white/10 group-hover:text-white/20 transition-colors uppercase">PRO-LVL-0{index + 1}</div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* High Impact Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-16 rounded-[4rem] bg-white text-[#0d1224] relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute top-0 right-0 p-12 text-black/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                <FaLayerGroup size={180} />
             </div>
             
             <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none uppercase tracking-tighter italic">
                   Ready to Build <br /> 
                   <span className="text-emerald-600">Legendary Tech?</span>
                </h2>
                <p className="text-xl mb-12 font-bold opacity-70 uppercase tracking-tight">Let's align on your strategic goals and engineer the future together.</p>
                
                <Link
                   to="/contact"
                   className="inline-flex items-center gap-4 px-10 py-5 bg-[#0d1224] text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all duration-300 shadow-xl"
                >
                   <span>Initiate Protocol</span>
                   <FaArrowRight />
                </Link>
             </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default ServicesPage;
