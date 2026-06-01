import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

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

      toast.success("Message sent");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Transmission Failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-5 py-3 rounded-xl bg-[var(--nb-bg)] border-2 ${errors[field] ? 'border-red-500' : 'border-[var(--nb-border)]'} text-white placeholder-white/30 nb-focus font-bold text-sm`;

  return (
    <Card className="p-6 md:p-8">
      <div>
        <h3 className="nb-h3">Send a message</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-[10px] font-black text-[var(--nb-muted)] uppercase tracking-[0.22em] ml-1">Name</label>
               <input
                 type="text" name="name"
                 value={formData.name} onChange={handleChange}
                 className={inputClass('name')}
                 placeholder="FULL NAME"
                 disabled={isSubmitting}
               />
            </div>
            <div className="space-y-2">
               <label className="text-[10px] font-black text-[var(--nb-muted)] uppercase tracking-[0.22em] ml-1">Email</label>
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
             <label className="text-[10px] font-black text-[var(--nb-muted)] uppercase tracking-[0.22em] ml-1">Message</label>
             <textarea
               name="message"
               value={formData.message} onChange={handleChange}
               rows="4"
               className={`${inputClass('message')} resize-none`}
               placeholder="DETAILS OF YOUR VISION..."
               disabled={isSubmitting}
             />
          </div>
          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
