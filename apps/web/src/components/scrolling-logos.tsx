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
  // Speed mapping - much faster
  const speedMap = {
    slow: '30s',
    normal: '20s',
    fast: '10s'
  };

  return (
    <div 
      className={cn(
        "overflow-hidden bg-asset-light-bg py-5 group",
        className
      )}
      data-testid="scrolling-logos"
    >
      <div className="relative flex">
        {/* First set */}
        <div 
          className="flex gap-12 animate-scroll-logos group-hover:[animation-play-state:paused] pr-12"
          style={{
            animationDuration: speedMap[speed],
          }}
        >
          {partners.map((partner) => (
            <div
              key={`first-${partner.id}`}
              className="flex items-center justify-center flex-shrink-0 w-[140px] h-[48px]"
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className="max-h-[40px] max-w-[120px] w-auto h-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
        {/* Second set - duplicate for seamless loop */}
        <div 
          className="flex gap-12 animate-scroll-logos group-hover:[animation-play-state:paused] pr-12"
          style={{
            animationDuration: speedMap[speed],
          }}
          aria-hidden="true"
        >
          {partners.map((partner) => (
            <div
              key={`second-${partner.id}`}
              className="flex items-center justify-center flex-shrink-0 w-[140px] h-[48px]"
            >
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className="max-h-[40px] max-w-[120px] w-auto h-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}