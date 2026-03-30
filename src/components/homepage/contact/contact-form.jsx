import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';

const EMAILJS_SERVICE_ID = 'service_portfolio';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = '_YOUR_EMAILJS_PUBLIC_KEY_';

const ContactForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Primary identity required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Identity too short';
    if (!formData.email.trim()) newErrors.email = 'Comms channel required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid comms protocol';
    if (!formData.message.trim()) newErrors.message = 'Transmission payload required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== '_YOUR_EMAILJS_PUBLIC_KEY_') {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      } else {
        const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.open(`mailto:yasirraeesit@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }

      confetti({ particleCount: 150, spread: 100, origin: { y: 0.7 }, colors: ['#10b981', '#22d3ee', '#6366f1'] });
      toast.success("Transmission Received 🚀");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Transmission Failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-6 py-4 rounded-2xl bg-[#111827] border ${errors[field] ? 'border-red-500' : 'border-white/10'} text-white placeholder-white/20 focus:outline-none focus:border-emerald-500/50 transition-all font-bold text-sm`;

  return (
    <div className="p-8 md:p-12 rounded-[3rem] bg-[#111827] border border-white/5 relative overflow-hidden group shadow-2xl">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tighter uppercase">Initiate Protocol</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Identity</label>
               <input
                 type="text" name="name"
                 value={formData.name} onChange={handleChange}
                 className={inputClass('name')}
                 placeholder="FULL NAME"
                 disabled={isSubmitting}
               />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Protocol</label>
               <input
                 type="email" name="email"
                 value={formData.email} onChange={handleChange}
                 className={inputClass('email')}
                 placeholder="EMAIL ADDRESS"
                 disabled={isSubmitting}
               />
            </div>
          </div>
          <div className="space-y-2">
             <label className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Transmission Payload</label>
             <textarea
               name="message"
               value={formData.message} onChange={handleChange}
               rows="4"
               className={`${inputClass('message')} resize-none`}
               placeholder="DETAILS OF YOUR VISION..."
               disabled={isSubmitting}
             />
          </div>
          <button
            type="submit" disabled={isSubmitting}
            className={`w-full group/btn overflow-hidden relative px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all duration-300 ${isSubmitting
                ? 'bg-white/5 text-white/20 cursor-not-allowed'
                : 'bg-white text-[#0d1224] hover:bg-emerald-500 transition-colors'
              }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
               {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
               {!isSubmitting && <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;