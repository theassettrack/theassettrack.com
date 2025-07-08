import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/video-background";
import { ServiceCard } from "@/components/service-card";
import { TeamMember } from "@/components/team-member";
import { LogoGrid } from "@/components/logo-grid";
import { AssetTrackHeader } from "@/components/assettrack-header";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { Service, TeamMember as TeamMemberType, Partner } from "@/types";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

// Exact services content from original AssetTrack website
const mockServices: Service[] = [
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    description: 'Hardware, software, connectivity — complete setup with expert support.',
    features: [
      'Real-time, advanced fleet tracking',
      'Optional video telematics', 
      'Seamless API integration',
      'Next-gen 4G LTE Cat 1 GPS trackers',
      'Global multi-network connectivity',
      'Simple pricing. No long-term contracts'
    ],
    videoUrl: '/videos/astr-service-fleetmanagement.mp4',
    ctaText: 'Learn More',
    ctaLink: '#fleet-management'
  },
  {
    id: 'audits-consulting',
    title: 'Audits & Consulting',
    description: 'Support for GPS companies and fleet operators — whether you\'re growing your telematics business or refining your tracking system.',
    features: [
      'Technical consulting for GPS tracking providers',
      'Device assessment, configuration, and rollout strategy',
      'White-label platform evaluation and setup',
      'Audit of existing customer installations',
      'Data handling, report design, and value delivery',
      'Independent, vendor-neutral guidance'
    ],
    videoUrl: '/videos/astr-service-consulting.mp4',
    ctaText: 'Get Consultation',
    ctaLink: '#audits-consulting'
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Helping deliver value beyond dots on a map.',
    features: [
      'Automated data exports and transformation workflows',
      'Custom visualizations, KPI dashboards, and trend analyses',
      'Real-time and historical fleet metrics with AI-enhanced insights',
      'Executive-ready actionable intelligence reports'
    ],
    videoUrl: '/videos/astr-service-dataviz.mp4',
    ctaText: 'View Demo',
    ctaLink: '#data-visualization'
  }
];

const mockTeamMembers: TeamMemberType[] = [
  {
    id: 'siarhei-havarunou',
    name: 'Siarhei Havarunou',
    role: 'Fleet Management Expert & Conference Speaker',
    imageUrl: '/images/siarhei-placeholder.svg',
    linkedIn: 'https://linkedin.com/in/siarhei-havarunou'
  }
];

const mockPartners: Partner[] = [
  { id: 'teltonika', name: 'Teltonika', logoUrl: '/images/partners/teltonika.svg', website: 'https://teltonika-gps.com' },
  { id: '1nce', name: '1NCE', logoUrl: '/images/partners/1nce.svg', website: 'https://1nce.com' },
  { id: 'gurtam', name: 'Gurtam', logoUrl: '/images/partners/gurtam.svg', website: 'https://gurtam.com' },
  { id: 'flespi', name: 'flespi', logoUrl: '/images/partners/flespi.svg', website: 'https://flespi.com' }
];

function HomeComponent() {
  const handleConsultationClick = () => {
    // Cal.com integration will be added here
    console.log('Opening Cal.com consultation booking');
  };

  const handleDemoLogin = () => {
    window.open('https://fleet.theassettrack.com', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* AssetTrack Header */}
      <AssetTrackHeader onConsultationClick={handleConsultationClick} />

      {/* Hero Section - Exact Match */}
      <Section variant="hero" backgroundPattern="noise" className="lg:flex lg:items-center lg:gap-10 pt-20">
        <div className="lg:w-1/2">
          {/* Badge - Exact from original */}
          <a 
            href="https://conference.gurtam.com/#speakers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-asset-border bg-transparent px-2 py-1 mb-6 hover:bg-asset-border/30 transition-colors duration-200"
          >
            <span className="text-xs font-mono text-asset-gray">Speaker at Telematics '25</span>
            <ExternalLink className="w-3 h-3 ml-1 text-asset-gray" />
          </a>
          
          {/* Main Heading - Exact from original */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight text-asset-dark mb-6">
            Fleet Management Solutions & Telematics Expertise
          </h1>
          
          {/* Subtitle - Exact from original */}
          <p className="text-base md:text-lg text-asset-gray mb-8 leading-relaxed">
            Helping your business grow with reliable tracking, smart data, and hands-on experience.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="asset-primary" onClick={handleConsultationClick}>
              Free Consultation
            </Button>
            <Button variant="asset-secondary" onClick={handleDemoLogin}>
              Demo Login
            </Button>
          </div>
        </div>
        
        {/* Hero Video - Right Side */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <VideoBackground 
            src="/videos/astr-hero.mp4"
            className="rounded-3xl overflow-hidden h-80 lg:h-96"
            showLoader={true}
          />
        </div>
      </Section>

      {/* Services Section */}
      <Section variant="card" backgroundPattern="noise">
        <div className="space-y-12 md:space-y-16">
          {/* Services Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-asset-dark">
              Services
            </h2>
          </div>

          {/* Services Content */}
          {mockServices.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={cn(
                "flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Service Content */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-mono font-bold text-asset-dark">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-asset-gray leading-relaxed">
                  <strong>{service.description}</strong>
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-asset-gray">
                      <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="asset-primary" 
                  onClick={service.ctaText === 'Get Consultation' ? handleConsultationClick : undefined}
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

      {/* Partners Section */}
      <Section variant="card" backgroundPattern="noise">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-asset-dark">
            Trusted by Industry Leaders
          </h2>
          <LogoGrid 
            partners={mockPartners} 
            variant="grayscale"
            columns={4}
          />
        </div>
      </Section>

      {/* Team Section */}
      <Section variant="card" backgroundPattern="noise">
        <div className="text-center space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-asset-dark mb-4">
              Expert Team
            </h2>
            <p className="text-base md:text-lg text-asset-gray max-w-2xl mx-auto">
              Meet the professionals behind AssetTrack's success in fleet management and telematics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockTeamMembers.map((member) => (
              <TeamMember 
                key={member.id} 
                member={member}
                className="bg-asset-white border border-asset-border"
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section variant="card" backgroundPattern="noise">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-asset-dark">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="text-base md:text-lg text-asset-gray max-w-2xl mx-auto">
            Get expert consultation and start improving your fleet management today
          </p>
          <Button variant="asset-primary" className="text-base px-8 py-3">
            Schedule Free Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
}
