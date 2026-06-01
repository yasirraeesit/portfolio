// @flow strict
import { personalData } from '../../../utils/data/personal-data';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import IconButton from '@/components/ui/IconButton';

function ContactSection() {
  const socials = [
    { icon: <IoLogoGithub />, url: personalData.github, label: "GitHub" },
    { icon: <BiLogoLinkedin />, url: personalData.linkedIn, label: "LinkedIn" },
    { icon: <FaXTwitter />, url: personalData.twitter, label: "Twitter/X" },
    { icon: <FaStackOverflow />, url: personalData.stackOverflow, label: "StackOverflow" },
    { icon: <FaFacebook />, url: personalData.facebook, label: "Facebook" },
  ].filter((s) => Boolean(s.url));

  return (
    <section id="contact" className="nb-section">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build"
          subtitle="Tell me about your project. I’ll reply with next steps and a realistic timeline."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 md:p-8">
              <h3 className="nb-h3">Direct</h3>
              <div className="mt-5 space-y-4">
                {[
                  { icon: <MdAlternateEmail />, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
                  { icon: <IoMdCall />, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}` },
                  { icon: <CiLocationOn />, label: "Location", value: personalData.address },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[var(--nb-accent)]">{item.icon}</span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a className="font-bold text-[var(--nb-fg)] break-all underline" href={item.href}>
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-bold text-[var(--nb-fg)] break-words">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {socials.length ? (
              <Card className="p-6 md:p-8">
                <h3 className="nb-h3">Links</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <IconButton
                      key={s.label}
                      as="a"
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      title={s.label}
                    >
                      {s.icon}
                    </IconButton>
                  ))}
                </div>
              </Card>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
