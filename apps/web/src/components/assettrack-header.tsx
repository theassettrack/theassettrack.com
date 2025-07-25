// ABOUTME: AssetTrack navigation header with logo, services dropdown and CTA buttons
// ABOUTME: Fixed positioned header with exact styling and interactions from original design

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "react-i18next";

interface AssetTrackHeaderProps {
  className?: string;
}

export function AssetTrackHeader({ className }: AssetTrackHeaderProps) {
  const { t, i18n } = useTranslation();

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-asset-light-bg font-mono",
        "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)]",
        "bg-[url('/patterns/nnnoise.svg')] bg-repeat",
        className
      )}
      role="banner"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-9">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/Logo_Astr_long_black.webp" 
                alt="AssetTrack" 
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            </div>
          </div>

          {/* Right side - Language Switcher + Login + Consultation */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Log in Link - Exact from original */}
            <a
              href={`https://fleet.theassettrack.com/?lang=${i18n.language}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[16px] leading-[1.4] px-3 py-2.5 text-asset-dark hover:text-asset-gray transition-colors duration-200 cursor-pointer hidden sm:block"
            >
              {t("header.login")}
            </a>

            {/* Free Consultation Button */}
            <Button 
              variant="asset-primary"
              data-cal-link="assettrack/sales"
              data-cal-namespace="sales"
              data-cal-config='{"layout":"month_view"}'
              className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
              style={{ cursor: 'pointer' }}
            >
              <span className="hidden sm:inline">{t("hero.cta.consultation")}</span>
              <span className="sm:hidden">{t("hero.cta.consultation").split(' ')[0]}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}