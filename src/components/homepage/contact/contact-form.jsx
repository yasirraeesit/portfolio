import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';

// EmailJS config — fill these in from https://emailjs.com dashboard
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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
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
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // If EmailJS keys are configured, use EmailJS; otherwise open mailto
      if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== '_YOUR_EMAILJS_PUBLIC_KEY_') {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
      } else {
        // Fallback: open mailto
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.open(`mailto:yasirraeesit@gmail.com?subject=${subject}&body=${body}`, '_blank');
      }

      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
      toast.success("Message sent! I'll get back to you soon. 🚀");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send. Please email me directly at yasirraeesit@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border ${errors[field] ? 'border-red-500' : 'border-[var(--card-border)]'
    } text-[var(--text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors`;

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px w-8 bg-[var(--accent-color)]" />
          <span className="text-[var(--accent-color)] text-xs font-bold uppercase tracking-widest">Get In Touch</span>
        </div>
        <h3 className="text-3xl font-black text-[var(--text-primary)] mb-2">
          Send Me a Message
        </h3>
        <p className="text-[var(--text-secondary)]">
          Have a project in mind? Let's build something great together.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
            Name *
          </label>
          <input
            type="text" id="name" name="name"
            value={formData.name} onChange={handleChange}
            className={inputClass('name')}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
            Email *
          </label>
          <input
            type="email" id="email" name="email"
            value={formData.email} onChange={handleChange}
            className={inputClass('email')}
            placeholder="your.email@example.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
            Message *
          </label>
          <textarea
            id="message" name="message"
            value={formData.message} onChange={handleChange}
            rows="5" maxLength={maxCharacters}
            className={`${inputClass('message')} resize-none`}
            placeholder="Tell me about your project..."
            disabled={isSubmitting}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message
              ? <p className="text-sm text-red-400">{errors.message}</p>
              : <span />}
            <p className={`text-xs ${characterCount > maxCharacters * 0.9 ? 'text-orange-400' : 'text-[var(--text-secondary)]'}`}>
              {characterCount}/{maxCharacters}
            </p>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit" disabled={isSubmitting}
          className={`w-full px-6 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
              ? 'bg-gray-600 cursor-not-allowed text-gray-400'
              : 'bg-[var(--accent-color)] hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] text-[var(--background-color)] shadow-lg shadow-emerald-500/20'
            }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : 'Send Message →'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;