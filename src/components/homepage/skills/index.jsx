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
    <section id="skills" className="nb-section">
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
              className="mb-24 last:mb-0"
            >
              <div className="flex items-center gap-6 mb-12">
                <h3 className={`nb-h3 ${styles.text}`}>
                  {category}
                </h3>
                <div className={`h-px flex-grow ${styles.bg.replace('bg-', 'bg-')}`} style={{ backgroundColor: 'rgba(255,255,255,0.05)' }} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="group"
                  >
                    <Card className="p-5 h-32 md:h-36 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 mb-4">
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
