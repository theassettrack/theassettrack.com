// ABOUTME: AssetTrack navigation header with logo, services dropdown and CTA buttons
// ABOUTME: Fixed positioned header with exact styling and interactions from original design

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface AssetTrackHeaderProps {
  onConsultationClick: () => void;
  className?: string;
}

export function AssetTrackHeader({ onConsultationClick, className }: AssetTrackHeaderProps) {

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-asset-light-bg font-mono",
        "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)]",
        className
      )}
      role="banner"
    >
      <div className="max-w-[1200px] mx-auto px-9">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/Logo_Astr_long_black.webp" 
                alt="AssetTrack" 
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Right side - Login + Consultation */}
          <div className="flex items-center gap-4">
            {/* Log in Link */}
            <a
              href="https://fleet.theassettrack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-asset-gray hover:text-asset-dark transition-colors duration-200"
            >
              Log in
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Free Consultation Button */}
            <Button 
              variant="asset-primary"
              onClick={onConsultationClick}
              className="text-sm"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}