import { useEffect, useRef, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

// AssetTrack's public Mapbox token
mapboxgl.accessToken = "pk.eyJ1IjoidGhlYXNzZXR0cmFjayIsImEiOiJjbG44czVsYjkwMHNjMmlsNzNuYXoxOHVuIn0.q90QmXU6YVdUDd58E2ur5g";

interface MapboxBackgroundProps {
  className?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  pitch?: number;
  bearing?: number;
  style?: string;
}

export function MapboxBackground({ 
  className,
  lat = 52.2297,
  lng = 21.0122,
  zoom = 11,
  pitch = 45,
  bearing = -17.6,
  style
}: MapboxBackgroundProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const { theme } = useTheme();
  const lastScrollY = useRef(0);
  const animationFrame = useRef<number>();
  
  // Use custom monochrome style for light mode, dark-v11 for dark mode
  const mapStyle = style || (theme === 'dark' 
    ? "mapbox://styles/mapbox/dark-v11"
    : "mapbox://styles/theassettrack/cmditn5zc004401s8a3mbghpi");

  useEffect(() => {
    if (!mapContainer.current) return;

    // If map exists and style changed, update the style
    if (map.current) {
      map.current.setStyle(mapStyle);
      return;
    }

    console.log('Initializing Mapbox with:', { lat, lng, zoom, style: mapStyle });

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapStyle,
        center: [lng, lat],
        zoom: zoom,
        pitch: pitch,
        bearing: bearing,
        interactive: false,
        attributionControl: false
      });

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
      });

      map.current.on('load', () => {
        console.log('Mapbox loaded successfully');
        
        // Remove labels for cleaner look
        const layers = map.current?.getStyle().layers;
        layers?.forEach((layer) => {
          if (layer.type === 'symbol' && layer.layout?.['text-field']) {
            map.current?.setLayoutProperty(layer.id, 'visibility', 'none');
          }
        });
      });
    } catch (error) {
      console.error('Failed to initialize Mapbox:', error);
    }

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [lat, lng, zoom, pitch, bearing, mapStyle]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!map.current) return;

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrollDelta = scrollY - lastScrollY.current;
        
        // Move map in opposite direction of scroll
        // Adjust the multiplier (0.05) to control the speed of movement
        const center = map.current!.getCenter();
        map.current!.panBy([0, scrollDelta * 0.05], {
          duration: 0,
          animate: false
        });
        
        lastScrollY.current = scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className={cn("fixed inset-0", className)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/30 dark:from-black/30 dark:via-black/20 dark:to-black/30" />
    </div>
  );
}