import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen">
      <Section className="bg-gradient-to-br from-asset-blue to-asset-dark text-white">
        <Container>
          <div className="text-center py-20">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🎯 AssetTrack Migration in Progress</span>
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
                Test AssetTrack CTA
              </Button>
              <Button variant="asset-secondary" size="xl">
                Demo Login
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-6 text-asset-dark">
              Component Testing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
                <div className="space-y-2">
                  <Button variant="asset-primary" className="w-full">
                    Asset Primary
                  </Button>
                  <Button variant="asset-secondary" className="w-full">
                    Asset Secondary
                  </Button>
                  <Button variant="asset-cta" className="w-full">
                    Asset CTA
                  </Button>
                </div>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Container Sizes</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-asset-light rounded">Default Container</div>
                  <div className="p-2 bg-asset-light rounded">Wide Container</div>
                  <div className="p-2 bg-asset-light rounded">Full Container</div>
                </div>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Section Variants</h3>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-asset-light rounded">Default Section</div>
                  <div className="p-2 bg-asset-light rounded">Pattern Section</div>
                  <div className="p-2 bg-asset-light rounded">Large Padding</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
