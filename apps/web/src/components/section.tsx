import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

interface SectionComponentProps extends SectionProps {
  children: React.ReactNode;
  padding?: "none" | "small" | "default" | "large";
  variant?: "default" | "card" | "hero";
}

export function Section({ 
  children, 
  className,
  id,
  backgroundPattern = "none",
  padding = "default",
  variant = "default"
}: SectionComponentProps) {
  const paddingClasses = {
    none: "",
    small: "py-8 md:py-12",
    default: "py-20 md:py-20",
    large: "py-20 md:py-24"
  };

  const patternClasses = {
    none: "",
    noise: "relative before:absolute before:inset-0 before:bg-[url('/patterns/nnnoise.svg')] before:opacity-10 before:pointer-events-none",
    gyrate: "relative before:absolute before:inset-0 before:bg-[url('/patterns/gggyrate.svg')] before:opacity-10 before:pointer-events-none"
  };

  const variantClasses = {
    default: "",
    card: "bg-asset-white rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)] mx-auto max-w-5xl mb-6",
    hero: "bg-asset-white rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)] mx-auto max-w-5xl mt-16 md:mt-20 mb-6"
  };

  const innerPadding = variant === "card" || variant === "hero" 
    ? "px-20 md:px-20" 
    : "";

  return (
    <section
      id={id}
      className={cn(
        paddingClasses[padding],
        patternClasses[backgroundPattern],
        variantClasses[variant],
        className
      )}
    >
      <div className={cn("relative z-10", innerPadding)}>
        {children}
      </div>
    </section>
  );
}