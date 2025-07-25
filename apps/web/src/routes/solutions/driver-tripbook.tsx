import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { AssetTrackHeader } from "@/components/assettrack-header";
import { Footer } from "@/components/footer";
import { TawkChat } from "@/components/tawk-chat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, FileSpreadsheet, Shield, Clock, Smartphone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/solutions/driver-tripbook")({
  component: DriverTripbookComponent,
  head: () => ({
    meta: [
      {
        title: "Driver Tripbook - Modern Fleet Trip Management | AssetTrack",
      },
      {
        name: "description",
        content: "Transform how you manage vehicle trips with seamless Wialon integration. Driver Tripbook brings clarity to your fleet data through an intuitive interface.",
      },
    ],
  }),
});

function DriverTripbookComponent() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Clock,
      title: t("solutions.driverTripbook.capabilities.realTimeData.title"),
      description: t("solutions.driverTripbook.capabilities.realTimeData.description")
    },
    {
      icon: FileSpreadsheet,
      title: t("solutions.driverTripbook.capabilities.smartClassification.title"),
      description: t("solutions.driverTripbook.capabilities.smartClassification.description")
    },
    {
      icon: Users,
      title: t("solutions.driverTripbook.capabilities.bulkManagement.title"),
      description: t("solutions.driverTripbook.capabilities.bulkManagement.description")
    },
    {
      icon: FileSpreadsheet,
      title: t("solutions.driverTripbook.capabilities.exportReports.title"),
      description: t("solutions.driverTripbook.capabilities.exportReports.description")
    },
    {
      icon: Shield,
      title: t("solutions.driverTripbook.capabilities.secureIntegration.title"),
      description: t("solutions.driverTripbook.capabilities.secureIntegration.description")
    },
    {
      icon: Smartphone,
      title: t("solutions.driverTripbook.capabilities.worksEverywhere.title"),
      description: t("solutions.driverTripbook.capabilities.worksEverywhere.description")
    }
  ];

  const benefits = [
    {
      title: t("solutions.driverTripbook.whoBenefits.fleetManagers.title"),
      description: t("solutions.driverTripbook.whoBenefits.fleetManagers.description")
    },
    {
      title: t("solutions.driverTripbook.whoBenefits.businessOwners.title"),
      description: t("solutions.driverTripbook.whoBenefits.businessOwners.description")
    },
    {
      title: t("solutions.driverTripbook.whoBenefits.financeTeams.title"),
      description: t("solutions.driverTripbook.whoBenefits.financeTeams.description")
    },
    {
      title: t("solutions.driverTripbook.whoBenefits.operationsTeams.title"),
      description: t("solutions.driverTripbook.whoBenefits.operationsTeams.description")
    }
  ];

  return (
    <>
      <AssetTrackHeader />
      <main>
        {/* Main White Card Container - With noise pattern */}
        <div className="bg-asset-white dark:bg-asset-white-dark rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_25px_-5px_rgba(255,255,255,0.05),0_10px_10px_-5px_rgba(255,255,255,0.05)] mx-4 sm:mx-6 md:mx-auto max-w-[1200px] mt-[60px] md:mt-[90px] mb-6 bg-[url('/patterns/nnnoise.svg')] bg-repeat">
          
          {/* Hero Section */}
          <Section variant="default" backgroundPattern="noise" className="pt-20 md:pt-24 px-[40px] sm:px-[60px] md:px-[80px]">
            <div className="max-w-4xl mx-auto text-center">
              <img 
                src="/images/driver-tripbook-logo.svg" 
                alt="Driver Tripbook Logo" 
                className="h-20 w-auto mx-auto mb-8"
              />
              <h1 className="text-[34px] sm:text-[40px] md:text-[2.5rem] font-mono text-asset-dark dark:text-asset-dark-dark mb-6" style={{fontWeight: 400}}>
                {t("solutions.driverTripbook.title")}
              </h1>
              <p className="text-xl font-mono text-asset-gray dark:text-asset-gray-dark mb-8">
                {t("solutions.driverTripbook.subtitle")}
              </p>
              <p className="text-lg font-mono text-asset-gray dark:text-asset-gray-dark mb-8 max-w-3xl mx-auto">
                {t("solutions.driverTripbook.longDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="asset-primary"
                  onClick={() => window.open('https://tripbook.theassettrack.com', '_blank')}
                >
                  {t("solutions.driverTripbook.cta.tryIt")}
                </Button>
                <Button 
                  size="lg" 
                  variant="asset-secondary"
                  data-cal-link="assettrack/sales"
                  data-cal-namespace="sales"
                  data-cal-config='{"layout":"month_view"}'
                >
                  {t("solutions.driverTripbook.cta.scheduleDemo")}
                </Button>
              </div>
            </div>
          </Section>

          {/* Key Capabilities */}
          <Section className="py-16 px-[40px] sm:px-[60px] md:px-[80px]">
            <div className="text-center mb-12">
              <h2 className="text-[28px] sm:text-[32px] font-mono text-asset-dark dark:text-asset-dark-dark mb-4" style={{fontWeight: 400}}>
                {t("solutions.driverTripbook.capabilities.title")}
              </h2>
              <p className="text-lg font-mono text-asset-gray dark:text-asset-gray-dark max-w-2xl mx-auto">
                {t("solutions.driverTripbook.capabilities.subtitle")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-asset-border dark:border-asset-border-dark bg-asset-white dark:bg-asset-white-dark">
                    <CardContent className="p-6">
                      <Icon className="h-10 w-10 text-asset-blue dark:text-asset-blue-dark mb-4" />
                      <h3 className="font-mono font-normal text-asset-dark dark:text-asset-dark-dark mb-2">{feature.title}</h3>
                      <p className="font-mono text-sm text-asset-gray dark:text-asset-gray-dark">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Section>

          {/* Built for Real-World */}
          <Section className="py-16 px-[40px] sm:px-[60px] md:px-[80px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[28px] sm:text-[32px] font-mono text-asset-dark dark:text-asset-dark-dark mb-6 text-center" style={{fontWeight: 400}}>
                {t("solutions.driverTripbook.realWorld.title")}
              </h2>
              <p className="text-lg font-mono text-asset-gray dark:text-asset-gray-dark mb-8 text-center">
                {t("solutions.driverTripbook.realWorld.description")}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-asset-secondary-btn dark:bg-asset-secondary-btn-dark p-6 rounded-lg">
                  <h3 className="text-xl font-mono font-normal text-asset-dark dark:text-asset-dark-dark mb-4">
                    {t("solutions.driverTripbook.realWorld.evolving.title")}
                  </h3>
                  <p className="font-mono text-asset-gray dark:text-asset-gray-dark">
                    {t("solutions.driverTripbook.realWorld.evolving.description")}
                  </p>
                </div>
                <div className="bg-asset-secondary-btn dark:bg-asset-secondary-btn-dark p-6 rounded-lg">
                  <h3 className="text-xl font-mono font-normal text-asset-dark dark:text-asset-dark-dark mb-4">
                    {t("solutions.driverTripbook.realWorld.getStarted.title")}
                  </h3>
                  <p className="font-mono text-asset-gray dark:text-asset-gray-dark">
                    {t("solutions.driverTripbook.realWorld.getStarted.description")}
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Who Benefits */}
          <Section className="py-16 px-[40px] sm:px-[60px] md:px-[80px]">
            <div className="text-center mb-12">
              <h2 className="text-[28px] sm:text-[32px] font-mono text-asset-dark dark:text-asset-dark-dark mb-4" style={{fontWeight: 400}}>
                {t("solutions.driverTripbook.whoBenefits.title")}
              </h2>
              <p className="text-lg font-mono text-asset-gray dark:text-asset-gray-dark max-w-2xl mx-auto">
                {t("solutions.driverTripbook.whoBenefits.subtitle")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-asset-blue dark:text-asset-blue-dark mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-mono font-normal text-asset-dark dark:text-asset-dark-dark mb-1">{benefit.title}</h3>
                    <p className="font-mono text-sm text-asset-gray dark:text-asset-gray-dark">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA Section */}
          <Section className="py-16 px-[40px] sm:px-[60px] md:px-[80px] pb-24">
            <div className="max-w-3xl mx-auto text-center p-8 bg-asset-secondary-btn dark:bg-asset-secondary-btn-dark rounded-lg">
              <h2 className="text-[28px] sm:text-[32px] font-mono text-asset-dark dark:text-asset-dark-dark mb-4" style={{fontWeight: 400}}>
                {t("solutions.driverTripbook.cta.needAssistance")}
              </h2>
              <p className="text-lg font-mono text-asset-gray dark:text-asset-gray-dark mb-8">
                {t("solutions.moreComing.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="asset-primary"
                  data-cal-link="assettrack/sales"
                  data-cal-namespace="sales"
                  data-cal-config='{"layout":"month_view"}'
                >
                  {t("solutions.driverTripbook.cta.bookSession")}
                </Button>
                <Button 
                  size="lg" 
                  variant="asset-secondary"
                  onClick={() => {
                    if (window.Tawk_API && window.Tawk_API.maximize) {
                      window.Tawk_API.maximize();
                    }
                  }}
                >
                  {t("solutions.driverTripbook.cta.chatWithUs")}
                </Button>
              </div>
              <p className="mt-6 text-sm font-mono text-asset-gray dark:text-asset-gray-dark">
                {t("solutions.driverTripbook.cta.visitWebsite")}{" "}
                <a 
                  href="https://tripbook.theassettrack.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-asset-blue dark:text-asset-blue-dark hover:underline"
                >
                  tripbook.theassettrack.com
                </a>
                {" "}{t("solutions.driverTripbook.cta.toStart")}
              </p>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
      <TawkChat />
    </>
  );
}