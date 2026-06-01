// @flow strict
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Full Stack Development",
    description: "I build complete web applications from the ground up. This means I handle everything from the hidden logic in the background to the beautiful, interactive interface your users see.",
    icon: <FaLayerGroup size={42} />,
    color: "from-emerald-400 via-emerald-500 to-cyan-500",
    tag: "Complete"
  },
  {
    title: "Frontend Engineering",
    description: "I specialize in creating lightning-fast, responsive websites that look great on any device. I focus on making sure your users have a smooth and enjoyable experience every time they visit.",
    icon: <BiCodeAlt size={42} />,
    color: "from-cyan-400 via-cyan-500 to-blue-500",
    tag: "Visual"
  },
  {
    title: "Backend & API Architecture",
    description: "Behind every great app is a solid foundation. I design secure and reliable server systems that manage your data safely and connect perfectly with other tools and services.",
    icon: <FaDatabase size={42} />,
    color: "from-violet-500 via-violet-600 to-fuchsia-500",
    tag: "Stability"
  },
  {
    title: "CMS & WordPress",
    description: "Need to manage your own content? I build custom WordPress sites that are incredibly easy to use, so you can update your website whenever you want without needing any technical help.",
    icon: <FaWordpress size={42} />,
    color: "from-amber-400 via-amber-500 to-orange-500",
    tag: "Control"
  }
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background-color)] relative bg-grid">

      <main className="relative z-10 py-20 md:py-24">
        <div className="nb-container">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <Link
               to="/"
               className="inline-flex items-center gap-2 text-white/50 hover:text-emerald-400 transition-colors group font-mono text-[10px] tracking-[0.2em] uppercase mb-12"
            >
               <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
               <span>Return to Home</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
               <div className="max-w-4xl">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-12 h-1 bg-emerald-500 rounded-full" />
                    <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.4em]">Expertise Catalog</span>
                  </div>
                  <h1 className="nb-h1">Custom solutions for your ideas</h1>
               </div>
               <p className="nb-body max-w-md border-l-2 border-[var(--nb-border)] pl-6">
                  Helping you build high-performance digital products that actually solve real-world problems.
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group relative h-full"
              >
                <div className="h-full p-8 rounded-[2rem] bg-[var(--nb-surface)] border-2 border-[var(--nb-border)] shadow-[8px_8px_0_0_var(--nb-shadow)] flex flex-col items-start">
                   <div className="flex items-center justify-between w-full mb-12">
                      <div className={`p-6 rounded-[2rem] bg-gradient-to-br ${service.color} text-[#0d1224] shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em]">{service.tag}</span>
                   </div>

                   <h3 className="nb-h3 mt-2">
                      {service.title}
                   </h3>
                   
                   <p className="nb-body mt-4 mb-10">
                      {service.description}
                   </p>

                   <div className="mt-auto w-full pt-8 border-t border-white/5 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em] group/btn transition-all"
                      >
                         <span>Start a Project</span>
                         <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform text-emerald-500" />
                      </Link>
                      <div className="text-[10px] font-mono font-bold text-white/10 group-hover:text-white/20 transition-colors uppercase">PRO-LVL-0{index + 1}</div>
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-10 rounded-[2rem] bg-[var(--nb-surface)] border-2 border-[var(--nb-border)] shadow-[10px_10px_0_0_var(--nb-shadow)]">
             <div className="max-w-4xl">
                <h2 className="nb-h2">Ready to start?</h2>
                <p className="nb-body mt-4 mb-8">Let’s align on goals and build the next version of your product.</p>
                
                <Link
                   to="/contact"
                   className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--nb-accent)] text-[var(--nb-bg)] border-2 border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] rounded-xl font-black text-[11px] uppercase tracking-[0.18em]"
                >
                   <span>Start a Conversation</span>
                   <FaArrowRight />
                </Link>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ServicesPage;
