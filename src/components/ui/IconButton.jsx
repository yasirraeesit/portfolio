import { cn } from "./cn";

export default function IconButton({ as: Component = "button", className, ...props }) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center w-11 h-11 rounded-xl border-2 border-[var(--nb-border)] bg-[var(--nb-surface)] text-[var(--nb-fg)] shadow-[6px_6px_0_0_var(--nb-shadow)] hover:-translate-y-[1px] hover:shadow-[8px_8px_0_0_var(--nb-shadow)] transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--nb-accent)]/30",
        className
      )}
      {...props}
    />
  );
}

