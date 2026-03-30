// @flow strict
import { personalData } from '../../../utils/data/personal-data';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[var(--background-color)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <span className="w-8 h-1 bg-emerald-500 rounded-full" />
            <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Direct Connection</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            PROFESSIONAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 italic">INQUIRIES.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Info Tiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { icon: <MdAlternateEmail />, label: "Email", value: personalData.email, color: "text-[#db4437]", bg: "bg-[#db4437]/10" },
                { icon: <IoMdCall />, label: "Phone", value: personalData.phone, color: "text-[#00c853]", bg: "bg-[#00c853]/10" },
                { icon: <CiLocationOn />, label: "Location", value: personalData.address, color: "text-[#f44336]", bg: "bg-[#f44336]/10" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-[#111827] border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className={`p-4 w-fit rounded-2xl ${item.bg} ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                     {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest block mb-2">{item.label}</span>
                  <p className="text-xl font-bold text-white tracking-tight">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#1a1f35] to-[#0d1224] border border-white/5"
            >
              <h4 className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest mb-8">System Sync</h4>
              <div className="grid grid-cols-5 gap-4">
                {[
                  { icon: <IoLogoGithub />, url: personalData.github, color: "hover:text-white" },
                  { icon: <BiLogoLinkedin />, url: personalData.linkedIn, color: "hover:text-[#0077b5]" },
                  { icon: <FaXTwitter />, url: personalData.twitter, color: "hover:text-white" },
                  { icon: <FaStackOverflow />, url: personalData.stackOverflow, color: "hover:text-[#f48024]" },
                  { icon: <FaFacebook />, url: personalData.facebook, color: "hover:text-[#1877f2]" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-4 rounded-xl bg-white/5 border border-white/5 text-white/40 ${social.color} hover:bg-white/10 transition-all flex items-center justify-center`}
                  >
                     <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;