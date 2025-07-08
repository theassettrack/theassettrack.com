// ABOUTME: AssetTrack navigation header with logo, services dropdown and CTA buttons
// ABOUTME: Fixed positioned header with exact styling and interactions from original design

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

interface AssetTrackHeaderProps {
  onConsultationClick: () => void;
  className?: string;
}

const services = [
  { name: "Fleet Management", href: "#fleet-management" },
  { name: "Audits & Consulting", href: "#audits-consulting" },
  { name: "Data Visualization", href: "#data-visualization" }
];

export function AssetTrackHeader({ onConsultationClick, className }: AssetTrackHeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-asset-light-bg font-mono",
        "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)]",
        "border-b border-asset-border",
        className
      )}
      role="banner"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo + Services */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-asset-dark">AssetTrack</span>
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-asset-gray hover:text-asset-dark transition-colors duration-200 rounded-lg hover:bg-asset-border/50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-asset-white rounded-xl shadow-lg border border-asset-border z-10"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-asset-gray hover:text-asset-dark hover:bg-asset-border/30 transition-colors duration-200"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
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