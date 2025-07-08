// ABOUTME: Video background component with autoplay, mute and accessibility features
// ABOUTME: Supports overlay content, custom styling and loading states for AssetTrack videos

import { cn } from "@/lib/utils";
import { useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  showLoader?: boolean;
}

export function VideoBackground({
  src,
  poster,
  children,
  className,
  ariaLabel = "Background video",
  showLoader = false,
}: VideoBackgroundProps) {
  const [isLoading, setIsLoading] = useState(showLoader);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className={cn("relative overflow-hidden", className)}
      data-testid="video-background"
    >
      {/* Video Element */}
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label={ariaLabel}
        onLoadedData={handleLoadedData}
        data-testid="background-video"
      />

      {/* Loading State */}
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-asset-light"
          data-testid="video-loader"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-asset-blue"></div>
        </div>
      )}

      {/* Overlay Content */}
      {children && (
        <div className="relative z-10 h-full">
          {children}
        </div>
      )}
    </div>
  );
}