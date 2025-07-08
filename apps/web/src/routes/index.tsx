import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/video-background";
import { ServiceCard } from "@/components/service-card";
import { TeamMember } from "@/components/team-member";
import { LogoGrid } from "@/components/logo-grid";
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
      {/* Hero Section with Video Background */}
      <Section className="relative min-h-screen flex items-center">
        <VideoBackground 
          src="/videos/hero-bg.mp4"
          className="absolute inset-0"
          showLoader={true}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </VideoBackground>
        
        <Container className="relative z-10">
          <div className="text-center text-white py-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🎯 AssetTrack Migration - Component Testing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fleet Management
              <br />
              <span className="text-asset-light">Solutions</span>
            </h1>
            <p className="text-xl text-asset-light mb-8 max-w-2xl mx-auto">
              Modern telematics and fleet management platform built with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="asset-cta" size="xl">
                Free Consultation
              </Button>
              <Button variant="asset-secondary" size="xl">
                Demo Login
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-asset-dark">
              Our Services
            </h2>
            <p className="text-lg text-asset-gray max-w-2xl mx-auto">
              Comprehensive solutions for fleet management and telematics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                onCtaClick={(service) => console.log('CTA clicked:', service.title)}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Partners Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-asset-dark">
              Trusted by Industry Leaders
            </h2>
          </div>
          <LogoGrid 
            partners={mockPartners} 
            variant="grayscale"
            columns={4}
          />
        </Container>
      </Section>

      {/* Team Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-asset-dark">
              Our Expert Team
            </h2>
            <p className="text-lg text-asset-gray max-w-2xl mx-auto">
              Meet the professionals behind AssetTrack's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {mockTeamMembers.map((member) => (
              <TeamMember 
                key={member.id} 
                member={member}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Component Testing Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-6 text-asset-dark">
              Component Integration Test
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Team Member Compact</h3>
                <TeamMember 
                  member={mockTeamMembers[0]}
                  variant="compact"
                />
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Logo Grid (2 columns)</h3>
                <LogoGrid 
                  partners={mockPartners.slice(0, 2)} 
                  columns={2}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
