// ABOUTME: Logo grid component for displaying partner/client logos in responsive layouts
// ABOUTME: Supports clickable links, grayscale filters and customizable grid columns for partner sections

import { cn } from "@/lib/utils";
import type { Partner } from "@/types";

interface LogoGridProps {
  partners: Partner[];
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "grayscale";
}

export function LogoGrid({ 
  partners, 
  className,
  columns = 4,
  variant = "default"
}: LogoGridProps) {
  const gridCols = {
    2: "grid-cols-2 md:grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
  };

  const LogoComponent = ({ partner }: { partner: Partner }) => {
    const logoElement = (
      <img
        src={partner.logoUrl}
        alt={`${partner.name} logo`}
        className={cn(
          "h-12 w-auto max-w-full object-contain transition-all duration-300",
          variant === "grayscale" 
            ? "grayscale hover:grayscale-0 opacity-70 hover:opacity-100" 
            : "hover:scale-105"
        )}
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.opacity = '0.3';
        }}
      />
    );

    if (partner.website) {
      return (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          aria-label={`Visit ${partner.name} website`}
        >
          {logoElement}
        </a>
      );
    }

    return (
      <div className="flex items-center justify-center p-4">
        {logoElement}
      </div>
    );
  };

  return (
    <div 
      className={cn(
        "grid gap-8 items-center",
        gridCols[columns],
        className
      )}
      data-testid="logo-grid"
    >
      {partners.map((partner) => (
        <LogoComponent key={partner.id} partner={partner} />
      ))}
    </div>
  );
}