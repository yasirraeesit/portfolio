// @flow strict
import { experiences } from "@/utils/data/experience";
import { personalData } from "@/utils/data/personal-data";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function Experience() {
  return (
    <section id="experience" className="nb-section">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Experience"
          title="Professional timeline"
          subtitle="A few roles where I shipped real products and learned fast."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="nb-h3">{experience.title}</h3>
                  <p className="mt-2 text-[11px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                    {experience.company}
                  </p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)] whitespace-nowrap">
                  {experience.duration}
                </span>
              </div>

              <p className="nb-body mt-4">
                {experience.description ||
                  "Delivered full-stack features with a focus on security, performance, and maintainability."}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button as="a" href={personalData.resume} target="_blank" rel="noreferrer" variant="ghost">
            Download resume <HiArrowDown size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Experience;
