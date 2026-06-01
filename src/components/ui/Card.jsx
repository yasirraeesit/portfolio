import { cn } from "./cn";

export default function Card({ as: Component = "div", className, ...props }) {
  return (
    <Component
      className={cn(
        "bg-[var(--nb-surface)] border-2 border-[var(--nb-border)] rounded-2xl shadow-[8px_8px_0_0_var(--nb-shadow)]",
        className
      )}
      {...props}
    />
  );
}

