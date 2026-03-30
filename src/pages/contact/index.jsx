// @flow strict
import Booking from "../../components/homepage/booking";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background-color)] relative py-24 lg:py-32">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-emerald-400 transition-colors group font-mono text-[10px] tracking-[0.2em] uppercase mb-8"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-4">
             <div className="max-w-4xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-1 bg-emerald-500 rounded-full" />
                  <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Let's Connect</span>
                </div>
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                  Let’s Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 underline decoration-white/5">Something Great.</span>
                </h1>
             </div>
             <p className="text-lg text-white/40 max-w-sm font-medium leading-relaxed uppercase border-l-2 border-white/5 pl-8 italic">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
             </p>
          </div>
        </motion.div>
        
        <div className="relative">
           <Booking />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
