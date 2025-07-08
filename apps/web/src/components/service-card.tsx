// ABOUTME: Service card component displaying service information with video/image backgrounds
// ABOUTME: Features responsive design, feature lists, and customizable CTA buttons for AssetTrack services

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "./video-background";
import type { Service } from "@/types";
import { Check } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  className?: string;
  onCtaClick?: (service: Service) => void;
}

export function ServiceCard({ service, className, onCtaClick }: ServiceCardProps) {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick(service);
    }
  };

  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300",
        "min-h-[400px] flex flex-col",
        className
      )}
      data-testid="service-card"
    >
      {/* Background Media */}
      {service.videoUrl ? (
        <VideoBackground 
          src={service.videoUrl}
          className="absolute inset-0"
          ariaLabel={`Background video for ${service.title}`}
        />
      ) : service.imageUrl ? (
        <div className="absolute inset-0">
          <img
            src={service.imageUrl}
            alt={`Background for ${service.title}`}
            className="w-full h-full object-cover"
            data-testid="background-image"
          />
        </div>
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{service.title}</h3>
          
          <p className="text-lg opacity-90 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              variant="asset-cta"
              onClick={handleCtaClick}
              className="w-full sm:w-auto"
            >
              {service.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}