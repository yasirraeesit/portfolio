import { personalData } from "@/utils/data/personal-data";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

function AboutSection() {
   const socialLinks = [
      {
         name: "GitHub",
         href: personalData.github,
         Icon: FaGithub,
         style: { color: "#FFFFFF" },
      },
      {
         name: "LinkedIn",
         href: personalData.linkedIn,
         Icon: FaLinkedin,
         style: { color: "#0A66C2" },
      },
   ];

   return (
      <section id="about" className="nb-section nb-section-shell">
         <div className="nb-container">
            <SectionHeader
               eyebrow="About"
               title="Identity behind the code"
               subtitle="Focused on scalable full-stack systems, clean UI, and secure APIs."
            />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
               <Card className="lg:col-span-7 p-6 md:p-8 overflow-hidden relative">
                  <div className="absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle,rgba(52,211,153,0.22),transparent_70%)]" />
                  <div className="flex flex-wrap gap-2 mb-6">
                     {["Scalable APIs", "Modern UI", "Production Ready"].map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] text-[10px] font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_0_var(--nb-shadow)]">
                           {tag}
                        </span>
                     ))}
                  </div>
                  <h3 className="nb-h3">What I do</h3>
                  <p className="nb-body mt-4">
                     Based in <span className="text-[var(--nb-fg)] font-black">{personalData.address}</span>, I build web and
                     mobile products end-to-end using MERN, NestJS, PostgreSQL, and React Native (Expo).
                  </p>
                  <p className="nb-body mt-4">
                     I care about maintainable architecture, database performance, and shipping production-ready features.
                  </p>
               </Card>

               <Card className="lg:col-span-5 p-6 md:p-8">
                  <h3 className="nb-h3">Quick facts</h3>
                  <div className="mt-5 grid gap-3 text-[12px] font-bold">
                     <div className="flex items-center justify-between gap-4 rounded-2xl border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] px-4 py-3 shadow-[4px_4px_0_0_var(--nb-shadow)]">
                        <span className="text-[var(--nb-muted)] uppercase tracking-[0.18em] text-[10px] font-black">Location</span>
                        <span className="text-[var(--nb-fg)]">{personalData.address}</span>
                     </div>
                     <div className="flex items-center justify-between gap-4 rounded-2xl border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] px-4 py-3 shadow-[4px_4px_0_0_var(--nb-shadow)]">
                        <span className="text-[var(--nb-muted)] uppercase tracking-[0.18em] text-[10px] font-black">Education</span>
                        <span className="text-[var(--nb-fg)]">BS (Hons) Computer Science</span>
                     </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                     {socialLinks.map(({ name, href, Icon, style }) => (
                        <IconButton
                           key={name}
                           as="a"
                           href={href}
                           target="_blank"
                           rel="noreferrer"
                           aria-label={name}
                           style={style}
                        >
                           <Icon size={18} />
                        </IconButton>
                     ))}
                     <Button as="a" href={`mailto:${personalData.email}`} variant="muted" className="flex-1">
                        Email <FaEnvelope size={14} />
                     </Button>
                  </div>
               </Card>
            </div>
         </div>
      </section>
   );
}

export default AboutSection;
