import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export function TawkChat() {
  useEffect(() => {
    // Initialize Tawk_API if not already exists
    if (!window.Tawk_API) {
      window.Tawk_API = {};
      window.Tawk_LoadStart = new Date();
    }

    // Check if script already loaded
    const existingScript = document.querySelector('script[src*="tawk.to"]');
    if (existingScript) {
      return;
    }

    // Create and inject Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/685fddb6b431d41910941002/1iur7k50t';
    script.charset = 'UTF-8';
    script.setAttribute('_SiteOne_CO_', '*');
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      const tawkScript = document.querySelector('script[src*="tawk.to"]');
      if (tawkScript && tawkScript.parentNode) {
        tawkScript.parentNode.removeChild(tawkScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}