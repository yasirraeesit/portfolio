import { cn } from "./cn";

export default function Badge({ children, tone = "default", className }) {
  const tones = {
    default: "bg-[var(--nb-surface)] text-[var(--nb-fg)]",
    accent: "bg-[var(--nb-accent)] text-[var(--nb-bg)]",
    warning: "bg-[var(--nb-warn)] text-[var(--nb-bg)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full border-2 border-[var(--nb-border)] font-black text-[10px] uppercase tracking-[0.18em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

