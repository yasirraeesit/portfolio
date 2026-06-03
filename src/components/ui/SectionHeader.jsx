import { cn } from "./cn";

export default function SectionHeader({ eyebrow, title, subtitle, align = "left", className }) {
  const isCenter = align === "center";

  return (
    <header className={cn("nb-section-header max-w-4xl", isCenter ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow ? (
        <div className={cn("flex items-center gap-3 mb-4", isCenter ? "justify-center" : "justify-start")}>
          <span className="h-2 w-2 bg-[var(--nb-accent)] border-2 border-[var(--nb-border)] shadow-[3px_3px_0_0_var(--nb-shadow)]" />
          <span className="font-black uppercase tracking-[0.22em] text-[10px] text-[var(--nb-muted)]">
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2 className="nb-h2">{title}</h2>

      {subtitle ? (
        <p className={cn("mt-4 nb-body max-w-2xl", isCenter ? "mx-auto" : "")}>{subtitle}</p>
      ) : null}
    </header>
  );
}
