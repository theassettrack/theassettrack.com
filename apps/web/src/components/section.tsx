import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

interface SectionComponentProps extends SectionProps {
  children: React.ReactNode;
  padding?: "none" | "small" | "default" | "large";
}

export function Section({ 
  children, 
  className,
  id,
  backgroundPattern = "none",
  padding = "default"
}: SectionComponentProps) {
  const paddingClasses = {
    none: "",
    small: "py-8 md:py-12",
    default: "py-16 md:py-24",
    large: "py-24 md:py-32"
  };

  const patternClasses = {
    none: "",
    noise: "relative before:absolute before:inset-0 before:bg-[url('/patterns/noise.svg')] before:opacity-5 before:pointer-events-none",
    gyrate: "relative before:absolute before:inset-0 before:bg-[url('/patterns/gyrate.svg')] before:opacity-5 before:pointer-events-none"
  };

  return (
    <section
      id={id}
      className={cn(
        paddingClasses[padding],
        patternClasses[backgroundPattern],
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}