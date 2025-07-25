import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer 
      className={cn(
        "bg-asset-light-bg dark:bg-asset-light-bg-dark font-mono py-12 mt-20",
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Left side - Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src="/images/Logo_Astr_long_black.webp" 
              alt="AssetTrack" 
              className="h-8 w-auto opacity-80 dark:invert dark:opacity-70"
            />
            <p className="text-sm text-asset-gray dark:text-asset-gray-dark">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Center - Legal Links */}
          <div className="flex items-center gap-4">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-asset-gray dark:text-asset-gray-dark hover:text-asset-blue dark:hover:text-asset-blue-dark transition-colors cursor-pointer"
            >
              {t('footer.privacyPolicy')}
            </Link>
          </div>

          {/* Right side - Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-asset-gray dark:text-asset-gray-dark">
              {t('footer.ready')}
            </p>
            <a 
              href="mailto:info@theassettrack.com" 
              className="text-sm text-asset-blue dark:text-asset-blue-dark hover:text-asset-blue/80 dark:hover:text-asset-blue-dark/80 transition-colors cursor-pointer"
            >
              info@theassettrack.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}