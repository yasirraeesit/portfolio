// @flow strict
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress, FaArrowRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const servicesData = [
  {
    title: "Full Stack Development",
    description: "End-to-end MERN stack solutions. I build scalable architectures from database schema to responsive pixel-perfect frontends.",
    icon: <FaLayerGroup size={32} />,
    color: "from-emerald-400 to-cyan-500",
    shadow: "shadow-emerald-500/10"
  },
  {
    title: "Frontend Engineering",
    description: "High-performance React & Next.js interfaces. Focused on Core Web Vitals, accessibility, and high-quality user experiences.",
    icon: <BiCodeAlt size={32} />,
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/10"
  },
  {
    title: "Backend & API Architecture",
    description: "Robust Node.js & Express backends. Designing secure RESTful APIs with MongoDB/PostgreSQL and smooth third-party integrations.",
    icon: <FaDatabase size={32} />,
    color: "from-violet-500 to-fuchsia-500",
    shadow: "shadow-violet-500/10"
  },
  {
    title: "CMS & WordPress",
    description: "Custom headless CMS or traditional WordPress development. Optimized for speed, SEO, and easy content management.",
    icon: <FaWordpress size={32} />,
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/10"
  }
];

function Services() {
  return (
    <section id="services" className="nb-section">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Services"
          title="How I can help"
          subtitle="Clear deliverables, clean code, and a product-first mindset."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
             <div
               key={index}
               className="group relative"
             >
                <Card className="h-full p-6 md:p-8 flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[var(--nb-bg)] bg-[var(--nb-accent)] border-2 border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] rounded-2xl p-3">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                      Service
                    </span>
                  </div>

                  <h3 className="nb-h3 mt-5">{service.title}</h3>
                  <p className="nb-body mt-3">{service.description}</p>

                  <div className="mt-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                      Deliverable-focused
                    </span>
                  </div>
                </Card>
             </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as="a" href="/services" variant="ghost">
            View details <FaArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
