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

  const handleVideoError = () => {
    setIsLoading(false);
    console.warn(`Video failed to load: ${src}`);
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
        onError={handleVideoError}
        data-testid="background-video"
      />

      {/* Video Error Fallback */}
      {!src && (
        <div className="absolute inset-0 bg-gradient-to-br from-asset-blue/20 to-asset-dark/20 flex items-center justify-center">
          <div className="text-center text-asset-gray">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-asset-border flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="text-sm">Video placeholder</p>
          </div>
        </div>
      )}

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