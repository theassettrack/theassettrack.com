import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/video-background";
import { ServiceCard } from "@/components/service-card";
import { TeamMember } from "@/components/team-member";
import { LogoGrid } from "@/components/logo-grid";
import { cn } from "@/lib/utils";
import type { Service, TeamMember as TeamMemberType, Partner } from "@/types";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

// Mock data for testing components
const mockServices: Service[] = [
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    description: 'Comprehensive fleet tracking and management solutions for modern businesses',
    features: ['Real-time GPS tracking', 'Route optimization', 'Fuel monitoring', 'Driver behavior analysis'],
    ctaText: 'Learn More',
    ctaLink: '/services/fleet-management'
  },
  {
    id: 'consulting',
    title: 'Audits & Consulting',
    description: 'Expert consultation and audit services to optimize your fleet operations',
    features: ['Fleet audits', 'Process optimization', 'Cost reduction strategies', 'Compliance consulting'],
    ctaText: 'Get Consultation',
    ctaLink: '/services/consulting'
  },
  {
    id: 'data-viz',
    title: 'Data Visualization',
    description: 'Transform your fleet data into actionable insights with advanced visualization',
    features: ['Custom dashboards', 'Real-time analytics', 'Performance metrics', 'Reporting tools'],
    ctaText: 'View Demo',
    ctaLink: '/services/data-visualization'
  }
];

const mockTeamMembers: TeamMemberType[] = [
  {
    id: 'siarhei-havarunou',
    name: 'Siarhei Havarunou',
    role: 'Fleet Management Expert & Speaker',
    imageUrl: '/images/team/siarhei.jpg',
    linkedIn: 'https://linkedin.com/in/siarhei-havarunou'
  },
  {
    id: 'expert-2',
    name: 'Jane Smith',
    role: 'Telematics Specialist',
    imageUrl: '/images/team/jane.jpg',
    linkedIn: 'https://linkedin.com/in/janesmith'
  }
];

const mockPartners: Partner[] = [
  { id: 'partner-1', name: 'Company A', logoUrl: '/images/partners/company-a.png', website: 'https://company-a.com' },
  { id: 'partner-2', name: 'Company B', logoUrl: '/images/partners/company-b.png', website: 'https://company-b.com' },
  { id: 'partner-3', name: 'Company C', logoUrl: '/images/partners/company-c.png' },
  { id: 'partner-4', name: 'Company D', logoUrl: '/images/partners/company-d.png' }
];

function HomeComponent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Exact Match */}
      <Section variant="hero" backgroundPattern="noise" className="lg:flex lg:items-center lg:gap-10">
        <div className="lg:w-1/2">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-asset-border bg-transparent px-2 py-1 mb-6">
            <span className="text-xs font-mono text-asset-gray">🎯 Speaker at Telematics '25</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight text-asset-dark mb-6">
            Fleet Management Solutions & Telematics Expertise
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg text-asset-gray mb-8 leading-relaxed">
            Professional telematics consulting and fleet management solutions. Expert guidance for optimizing your fleet operations with modern technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="asset-primary">
              Free Consultation
            </Button>
            <Button variant="asset-secondary">
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
          {mockServices.map((service, index) => (
            <div 
              key={service.id} 
              className={cn(
                "flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Service Content */}
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-mono font-bold text-asset-dark">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-asset-gray leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-asset-gray">
                      <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="asset-primary">
                  {service.ctaText}
                </Button>
              </div>
              
              {/* Service Video */}
              <div className="lg:w-1/2">
                <VideoBackground 
                  src={`/videos/astr-service-${service.id.replace('-', '')}.mp4`}
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
