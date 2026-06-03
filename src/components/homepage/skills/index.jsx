// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

function Skills() {
  // Helper to get category specific colors
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Frontend': return { text: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', glow: 'shadow-cyan-500/10' };
      case 'Backend': return { text: 'text-violet-400', border: 'border-violet-500/20', bg: 'bg-violet-500/5', glow: 'shadow-violet-500/10' };
      case 'Mobile': return { text: 'text-indigo-400', border: 'border-indigo-500/20', bg: 'bg-indigo-500/5', glow: 'shadow-indigo-500/10' };
      case 'Databases': return { text: 'text-amber-400', border: 'border-amber-500/20', bg: 'bg-amber-500/5', glow: 'shadow-amber-500/10' };
      case 'Tools': return { text: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', glow: 'shadow-emerald-500/10' };
      default: return { text: 'text-white', border: 'border-white/10', bg: 'bg-white/5', glow: 'shadow-white/5' };
    }
  };

  return (
    <section id="skills" className="nb-section nb-section-shell">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Skills"
          title="Tech stack"
          subtitle="A practical toolkit for building production web and mobile apps."
        />

        <div className="mt-10">
        {Object.entries(skillsData).map(([category, skills]) => {
          const styles = getCategoryStyles(category);
          return (
            <div
              key={category}
              className="mb-14 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full border-2 border-[var(--nb-border)] shadow-[4px_4px_0_0_var(--nb-shadow)] ${styles.bg} ${styles.text}`}>
                  {category}
                </span>
                <div className="h-px flex-grow bg-gradient-to-r from-[var(--nb-border)] via-[var(--nb-accent)] to-transparent" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className={`group rounded-2xl border-2 border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] ${styles.bg}`}
                  >
                    <Card className="p-5 h-32 md:h-36 flex flex-col items-center justify-center text-center border-none shadow-none bg-transparent">
                      <div className="w-12 h-12 mb-4 p-2 rounded-2xl border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] shadow-[4px_4px_0_0_var(--nb-shadow)]">
                        <img src={skillsImage(skill)} alt={skill} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.18em]">{skill}</span>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
