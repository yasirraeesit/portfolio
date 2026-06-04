// @flow strict
import { experiences } from "@/utils/data/experience";
import { personalData } from "@/utils/data/personal-data";
import { HiArrowDown } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--nb-muted)] shadow-[4px_4px_0_0_var(--nb-shadow)] ${className}`}
    >
      {children}
    </span>
  );
}

function ToolChip({ children }) {
  return (
    <span className="inline-flex items-center rounded-xl border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--nb-muted)] shadow-[4px_4px_0_0_var(--nb-shadow)]">
      {children}
    </span>
  );
}

function BulletList({ items, limit = 2 }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className="grid gap-3">
      {items.slice(0, limit).map((item) => (
        <li key={item} className="flex gap-3 nb-body">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--nb-accent)] border-2 border-[var(--nb-border)] shadow-[2px_2px_0_0_var(--nb-shadow)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EditorialExperienceCard({ experience, accent }) {
  return (
    <Card className="relative overflow-hidden p-0">
      <div className={`h-2 bg-gradient-to-r ${accent}`} />
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="bg-[var(--nb-accent)] text-[var(--nb-bg)]">{experience.period}</Tag>
              <Tag>{experience.duration}</Tag>
            </div>

            <h3 className="nb-h3 mt-5">{experience.title}</h3>
            <p className="mt-2 text-[13px] md:text-[14px] font-black uppercase tracking-[0.22em] text-[var(--nb-fg)]">
              {experience.company}
              {experience.location ? ` • ${experience.location}` : ""}
            </p>
          </div>

          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[var(--nb-border)] bg-[var(--nb-accent)] text-[var(--nb-bg)] shadow-[4px_4px_0_0_var(--nb-shadow)] shrink-0">
            <HiOutlineSparkles size={20} />
          </div>
        </div>

        <p className="nb-body mt-4 max-w-3xl">{experience.description}</p>

        <div className="mt-5 rounded-[1.5rem] border-2 border-[var(--nb-border)] bg-[var(--nb-bg)] p-5 shadow-[6px_6px_0_0_var(--nb-shadow)]">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--nb-muted)]">Highlights</p>
          <div className="mt-4">
            <BulletList items={experience.highlights} limit={2} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.tools.map((tool) => (
            <ToolChip key={tool}>{tool}</ToolChip>
          ))}
        </div>
      </div>
    </Card>
  );
}

function Experience() {
  const accents = [
    "from-emerald-400 to-cyan-400",
    "from-cyan-400 to-violet-400",
    "from-amber-400 to-rose-400",
  ];

  return (
    <section id="experience" className="nb-section nb-section-shell">
      <div className="nb-container">
        <SectionHeader
          eyebrow="Experience"
          title="Career highlights"
          subtitle="A cleaner, more editorial layout for the roles I’ve actually shipped."
        />

        <div className="mt-10 grid gap-6">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="grid gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[var(--nb-border)] bg-[var(--nb-accent)] text-[var(--nb-bg)] shadow-[4px_4px_0_0_var(--nb-shadow)] font-black text-[11px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-[12px] md:text-[13px] font-black uppercase tracking-[0.22em] text-[var(--nb-fg)]">
                    {experience.company}
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--nb-muted)]">
                    {experience.period}
                  </p>
                </div>
              </div>

              <EditorialExperienceCard experience={experience} accent={accents[index % accents.length]} />
            </div>
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
