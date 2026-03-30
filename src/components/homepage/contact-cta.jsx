// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const ContactCTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="p-12 md:p-24 rounded-[4rem] bg-[#111827]/60 border border-white/5 backdrop-blur-3xl text-center relative overflow-hidden group shadow-2xl"
        >
           {/* Animated Grid Background */}
           <div className="absolute inset-0 bg-grid opacity-10 group-hover:opacity-20 transition-opacity" />
           
           <div className="relative z-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-8">
                 <span className="w-8 h-1 bg-emerald-500 rounded-full animate-pulse" />
                 <span className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-[0.4em]">Ready Phase</span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-12 uppercase italic">
                 Initiate <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500">Protocol.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/50 mb-16 font-medium leading-relaxed">
                 Transforming grand visions into high-performance <br className="hidden md:block" /> 
                 digital realities. Let's sync on your next project.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#0d1224] rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-emerald-400 transition-all duration-500 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-emerald-500/20 active:scale-95 group/btn"
              >
                <span>Launch Connection</span>
                <HiArrowRight className="text-lg group-hover/btn:translate-x-2 transition-transform" />
              </Link>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
