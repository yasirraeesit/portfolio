import { cn } from "./cn";

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-black uppercase tracking-[0.18em] rounded-xl border-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--nb-accent)]/30 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3 text-[11px]",
    lg: "px-8 py-4 text-[12px]",
  };

  const variants = {
    primary:
      "bg-[var(--nb-accent)] text-[var(--nb-bg)] border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] hover:-translate-y-[1px] hover:shadow-[8px_8px_0_0_var(--nb-shadow)] transition",
    ghost:
      "bg-transparent text-[var(--nb-fg)] border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] hover:bg-[var(--nb-surface)] transition",
    muted:
      "bg-[var(--nb-surface)] text-[var(--nb-fg)] border-[var(--nb-border)] shadow-[6px_6px_0_0_var(--nb-shadow)] hover:-translate-y-[1px] transition",
  };

  return (
    <Component
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}

