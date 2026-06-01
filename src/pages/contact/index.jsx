// @flow strict
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ContactSection from "../../components/homepage/contact";

function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background-color)] relative py-20 md:py-24 bg-grid">
      
      <div className="nb-container relative z-10">
        <div className="mb-16">
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
                <h1 className="nb-h1">Let’s build something great</h1>
             </div>
             <p className="nb-body max-w-sm border-l-2 border-[var(--nb-border)] pl-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
             </p>
          </div>
        </div>
        
        <div className="relative">
           <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
