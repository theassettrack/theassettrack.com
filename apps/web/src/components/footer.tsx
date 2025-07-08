import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer 
      className={cn(
        "bg-asset-light-bg font-mono py-12 mt-20",
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
              className="h-8 w-auto opacity-80"
            />
            <p className="text-sm text-asset-gray">
              © Asset Track sp. z.o.o – Your Fleet Management Provider
            </p>
          </div>

          {/* Right side - Newsletter (Optional) */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-asset-gray">
              Ready to optimize your fleet?
            </p>
            <a 
              href="mailto:info@theassettrack.com" 
              className="text-sm text-asset-blue hover:text-asset-blue/80 transition-colors cursor-pointer"
            >
              info@theassettrack.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}