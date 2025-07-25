import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/video-background";
import { ServiceCard } from "@/components/service-card";
import { TeamMember } from "@/components/team-member";
import { ScrollingLogos } from "@/components/scrolling-logos";
import { AssetTrackHeader } from "@/components/assettrack-header";
import { Footer } from "@/components/footer";
import { TawkChat } from "@/components/tawk-chat";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Service, TeamMember as TeamMemberType, Partner } from "@/types";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const mockPartners: Partner[] = [
  { id: 'flespi', name: 'flespi', logoUrl: '/images/partners/flespi-real.svg', website: 'https://flespi.com' },
  { id: 'domo', name: 'DOMO', logoUrl: '/images/partners/domo-real.svg', website: 'https://domo.com' },
  { id: '1nce', name: '1NCE', logoUrl: '/images/partners/1nce-real.svg', website: 'https://1nce.com' },
  { id: 'gurtam', name: 'GURTAM', logoUrl: '/images/partners/gurtam-real.svg', website: 'https://gurtam.com' },
  { id: 'looker', name: 'Looker', logoUrl: '/images/partners/looker-real.svg', website: 'https://looker.com' },
  { id: 'teltonika', name: 'TELTONIKA', logoUrl: '/images/partners/teltonika-real.svg', website: 'https://teltonika-gps.com' }
];

function HomeComponent() {
  const { t } = useTranslation();

  // Services data with translations
  const services: Service[] = [
    {
      id: 'fleet-management',
      title: t('services.fleetManagement.title'),
      description: t('services.fleetManagement.description'),
      features: [
        t('services.fleetManagement.features.tracking'),
        t('services.fleetManagement.features.video'),
        t('services.fleetManagement.features.api'),
        t('services.fleetManagement.features.trackers'),
        t('services.fleetManagement.features.connectivity'),
        t('services.fleetManagement.features.pricing')
      ],
      videoUrl: '/videos/astr-service-fleetmanagement.mp4',
      ctaText: t('services.fleetManagement.cta'),
      ctaLink: '#fleet-management'
    },
    {
      id: 'audits-consulting',
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [
        t('services.consulting.features.technical'),
        t('services.consulting.features.device'),
        t('services.consulting.features.whiteLabel'),
        t('services.consulting.features.audit'),
        t('services.consulting.features.data'),
        t('services.consulting.features.guidance')
      ],
      videoUrl: '/videos/astr-service-consulting.mp4',
      ctaText: t('services.consulting.cta'),
      ctaLink: '#audits-consulting'
    },
    {
      id: 'data-visualization',
      title: t('services.dataVisualization.title'),
      description: t('services.dataVisualization.description'),
      features: [
        t('services.dataVisualization.features.exports'),
        t('services.dataVisualization.features.custom'),
        t('services.dataVisualization.features.metrics'),
        t('services.dataVisualization.features.reports')
      ],
      videoUrl: '/videos/astr-service-dataviz.mp4',
      ctaText: t('services.dataVisualization.cta'),
      ctaLink: '#data-visualization'
    }
  ];

  // Initialize Cal.com when component mounts
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Cal.com with sales namespace like in original
      if ((window as any).Cal) {
        try {
          (window as any).Cal("init", "sales", { origin: "https://app.cal.com" });
          (window as any).Cal.ns.sales("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
          });
        } catch (error) {
          console.log('Cal.com initialization error:', error);
        }
      }
    }
  }, []);

  const handleDemoLogin = () => {
    console.log('Demo Login button clicked!');
    window.open('https://fleet.theassettrack.com', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* AssetTrack Header */}
      <AssetTrackHeader />

      {/* Single White Card Container for Entire Site - Exact 1200px from original */}
      <div className="bg-asset-white rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)] mx-4 sm:mx-6 md:mx-auto max-w-[1200px] mt-[60px] md:mt-[90px] mb-6 bg-[url('/patterns/nnnoise.svg')] bg-repeat">
        {/* Hero Section - Exact Match */}
        <Section variant="default" backgroundPattern="noise" className="pt-20 md:pt-24 px-[40px] sm:px-[60px] md:px-[80px]">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-[45%]">
              {/* Badge - Exact from original */}
              <a 
                href="https://conference.gurtam.com/#speakers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-asset-border bg-transparent px-2 py-1 mb-6 hover:bg-asset-border/30 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-xs font-mono text-asset-gray">{t('header.badge')}</span>
                <ExternalLink className="w-3 h-3 ml-1 text-asset-gray" />
              </a>
              
              {/* Main Heading - Exact from original */}
              <h1 className="text-[34px] sm:text-[40px] md:text-[48px] font-mono leading-[104%] text-asset-dark mb-4 max-w-[450px]" style={{fontWeight: 400}}>
                {t('hero.title')}
              </h1>
              
              {/* Subtitle - Exact from original */}
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed max-w-[350px]" style={{fontWeight: 500}}>
                {t('hero.subtitle')}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="asset-primary" 
                  data-cal-link="assettrack/sales"
                  data-cal-namespace="sales"
                  data-cal-config='{"layout":"month_view"}'
                  style={{ cursor: 'pointer' }}
                >
                  {t('hero.cta.consultation')}
                </Button>
                <Button variant="asset-secondary" onClick={handleDemoLogin}>
                  {t('hero.cta.demo')}
                </Button>
              </div>
            </div>
            
            {/* Hero Video - Right Side */}
            <div className="lg:w-[55%] mt-10 lg:mt-0">
              <VideoBackground 
                src="/videos/astr-hero.mp4"
                className="rounded-3xl overflow-hidden h-[280px] lg:h-[320px] w-full"
                showLoader={true}
              />
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section variant="default" backgroundPattern="noise" className="px-[40px] sm:px-[60px] md:px-[80px]">
          <div className="space-y-[80px]">
            {/* Services Title */}
            <div className="text-center">
              <h2 className="text-[34px] sm:text-[40px] md:text-[2rem] font-mono text-asset-dark" style={{fontWeight: 400}}>
                {t('services.title')}
              </h2>
            </div>

            {/* Services Content */}
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={cn(
                  "flex flex-col lg:flex-row lg:items-center gap-[40px] lg:gap-[80px]",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                {/* Service Content */}
                <div className="lg:w-1/2 space-y-[16px]">
                  <h3 className="text-[1.5rem] font-mono text-asset-medium" style={{fontWeight: 400}}>
                    {service.title}
                  </h3>
                  <p className="text-[18px] font-mono text-asset-medium leading-[150%]" style={{fontWeight: 400}}>
                    <strong>{service.description}</strong>
                  </p>
                  <ul className="space-y-[12px]">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-[12px] text-asset-medium">
                        <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                        <span className="text-[16px] font-mono leading-[150%]" style={{fontWeight: 400}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="asset-primary" 
                    onClick={() => {
                      console.log(`Service button clicked: ${service.ctaText}`);
                      if (service.ctaText === t('services.fleetManagement.cta')) {
                        console.log('Scrolling to fleet-management section');
                        const element = document.getElementById('fleet-management');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          console.log('fleet-management element not found');
                        }
                      } else if (service.ctaText === t('services.dataVisualization.cta')) {
                        handleDemoLogin();
                      }
                    }}
                    {...(service.ctaText === t('services.consulting.cta') ? {
                      'data-cal-link': 'assettrack/sales',
                      'data-cal-namespace': 'sales',
                      'data-cal-config': '{"layout":"month_view"}'
                    } : {})}
                  >
                    {service.ctaText}
                  </Button>
                </div>
                
                {/* Service Video */}
                <div className="lg:w-1/2">
                  <VideoBackground 
                    src={service.videoUrl || `/videos/astr-service-${service.id.replace('-', '')}.mp4`}
                    className="rounded-3xl overflow-hidden h-64 lg:h-80"
                    showLoader={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Partners Section - Full card width */}
        <ScrollingLogos partners={mockPartners} speed="normal" className="mx-0" />

        {/* About Section */}
        <Section variant="default" backgroundPattern="noise" className="px-[40px] sm:px-[60px] md:px-[80px]">
          <div className="text-center space-y-[50px]">
            <div>
              <h2 className="text-[34px] sm:text-[40px] md:text-[2rem] font-mono text-asset-dark mb-8 sm:mb-12 md:mb-16" style={{fontWeight: 400}}>
                {t('about.title')}
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[80px]">
              {/* Left side - Profile */}
              <div className="flex flex-col items-center text-center lg:w-1/3">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-asset-blue mb-4 sm:mb-6 relative">
                  <img 
                    src="/images/Siarhei_Havarunou.webp" 
                    alt={t('about.name')} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-[8px]">
                  <p className="font-mono text-asset-dark" style={{fontWeight: 600}}>
                    <strong>{t('about.name')}</strong>
                  </p>
                  <p className="font-mono text-asset-gray" style={{fontWeight: 400}}>
                    {t('about.role')}
                  </p>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="lg:w-2/3 text-left">
                <h3 className="text-[1.5rem] font-mono text-asset-dark mb-4 sm:mb-6" style={{fontWeight: 400}}>
                  {t('about.sectionTitle')}
                </h3>
                <div className="space-y-6 text-[16px] font-mono text-asset-gray leading-relaxed" style={{fontWeight: 400}}>
                  <p>{t('about.bio.part1')}</p>
                  <p>{t('about.bio.part2')}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Final CTA Section */}
        <Section variant="default" backgroundPattern="noise" className="px-[40px] sm:px-[60px] md:px-[80px]">
          <div className="text-center space-y-[32px]">
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-asset-dark">
              {t('finalCta.title')}
            </h2>
            <p className="text-[16px] md:text-[18px] text-asset-gray max-w-2xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            <Button 
              variant="asset-primary" 
              data-cal-link="assettrack/sales"
              data-cal-namespace="sales"
              data-cal-config='{"layout":"month_view"}'
              className="text-base px-8 py-3"
              style={{ cursor: 'pointer' }}
            >
              {t('finalCta.button')}
            </Button>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <Footer />
      
      {/* Tawk.to Chat Widget */}
      <TawkChat />
    </div>
  );
}