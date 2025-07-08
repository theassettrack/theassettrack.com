// ABOUTME: Scrolling logos component with infinite horizontal animation for partner showcase
// ABOUTME: Creates seamless left-moving ticker animation with partner logos

import { cn } from "@/lib/utils";
import type { Partner } from "@/types";

interface ScrollingLogosProps {
  partners: Partner[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export function ScrollingLogos({ 
  partners, 
  className,
  speed = "normal"
}: ScrollingLogosProps) {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div 
      className={cn(
        "overflow-hidden bg-asset-light-bg py-5",
        className
      )}
      data-testid="scrolling-logos"
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        <div className="flex gap-12 ticker-track whitespace-nowrap">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center justify-center flex-shrink-0 min-w-[140px]"
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className="h-12 w-auto object-contain"
                loading="lazy"
                style={{ maxWidth: '140px' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error(`Failed to load logo: ${partner.logoUrl}`);
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}