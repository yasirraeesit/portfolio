// @flow strict
import { educations } from "@/utils/data/educations";
import { FaGraduationCap, FaBook, FaProjectDiagram, FaCode } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const Education = () => {
  const education = educations[0]; // Focus on the single entry

  return (
    <section id="education" className="nb-section">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Education"
          title="Foundation"
          subtitle="Formal CS education backed by hands-on product delivery."
          align="center"
        />

        <div className="mt-10 max-w-5xl mx-auto">
          <Card className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className="inline-flex items-center gap-3 bg-[var(--nb-accent)] text-[var(--nb-bg)] border-2 border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] rounded-2xl px-4 py-3">
                  <FaGraduationCap size={18} />
                  <span className="text-[11px] font-black uppercase tracking-[0.18em]">Degree</span>
                </div>
                <h3 className="nb-h3 mt-5">{education.title}</h3>
                <p className="nb-body mt-3">{education.institution}</p>
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">
                  {education.duration}
                </p>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <FaCode />, label: "Web Engineering" },
                  { icon: <FaBook />, label: "Computer Science" },
                  { icon: <FaProjectDiagram />, label: "Project Management" },
                  { icon: <FaGraduationCap />, label: "OOP" },
                ].map((module) => (
                  <Card key={module.label} className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--nb-accent)]">{module.icon}</span>
                      <span className="text-[11px] font-black uppercase tracking-[0.18em]">{module.label}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
