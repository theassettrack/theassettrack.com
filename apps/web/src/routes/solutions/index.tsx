import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { AssetTrackHeader } from "@/components/assettrack-header";
import { Footer } from "@/components/footer";
import { TawkChat } from "@/components/tawk-chat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/solutions/")({
  component: SolutionsComponent,
  head: () => ({
    meta: [
      {
        title: "Solutions - AssetTrack Fleet Management",
      },
      {
        name: "description",
        content: "Explore our fleet management solutions designed to optimize your operations with seamless integrations and powerful features.",
      },
    ],
  }),
});

function SolutionsComponent() {
  const { t } = useTranslation();
  
  const solutions = [
    {
      id: "driver-tripbook",
      title: t("solutions.driverTripbook.title"),
      description: t("solutions.driverTripbook.description"),
      features: [
        t("solutions.driverTripbook.features.realtime"),
        t("solutions.driverTripbook.features.classification"),
        t("solutions.driverTripbook.features.bulk"),
        t("solutions.driverTripbook.features.export")
      ],
      icon: Truck,
      link: "/solutions/driver-tripbook",
      status: t("solutions.driverTripbook.status")
    }
  ];

  return (
    <>
      <AssetTrackHeader />
      <main>
        {/* Main White Card Container - With noise pattern */}
        <div className="bg-asset-white dark:bg-asset-white-dark rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_25px_-5px_rgba(255,255,255,0.05),0_10px_10px_-5px_rgba(255,255,255,0.05)] mx-4 sm:mx-6 md:mx-auto max-w-[1200px] mt-[60px] md:mt-[90px] mb-6 bg-[url('/patterns/nnnoise.svg')] bg-repeat">
          <Section variant="default" backgroundPattern="noise" className="pt-20 md:pt-24 px-[40px] sm:px-[60px] md:px-[80px]">
            <div className="text-center mb-12">
              <h1 className="text-[34px] sm:text-[40px] md:text-[2rem] font-mono text-asset-dark dark:text-asset-dark-dark mb-8" style={{fontWeight: 400}}>
                {t("solutions.title")}
              </h1>
              <p className="text-lg font-mono text-asset-gray dark:text-asset-gray-dark max-w-3xl mx-auto">
                {t("solutions.subtitle")}
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <Card key={solution.id} className="relative overflow-hidden border-asset-border dark:border-asset-border-dark bg-asset-white dark:bg-asset-white-dark">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        {solution.id === "driver-tripbook" ? (
                          <img 
                            src="/images/driver-tripbook-logo.svg" 
                            alt="Driver Tripbook Logo" 
                            className="h-10 w-auto"
                          />
                        ) : (
                          <Icon className="h-10 w-10 text-asset-blue dark:text-asset-blue-dark" />
                        )}
                        <span className="text-sm font-medium text-green-600 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full">
                          {solution.status}
                        </span>
                      </div>
                      <CardTitle className="text-2xl font-mono font-normal text-asset-dark dark:text-asset-dark-dark">{solution.title}</CardTitle>
                      <CardDescription className="text-base font-mono text-asset-gray dark:text-asset-gray-dark">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {solution.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-asset-blue dark:text-asset-blue-dark mr-2">•</span>
                            <span className="text-sm font-mono text-asset-gray dark:text-asset-gray-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={solution.link}>
                        <Button variant="asset-primary" className="w-full group">
                          {t("solutions.driverTripbook.cta.learnMore")}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="mt-16 text-center p-8 bg-asset-secondary-btn dark:bg-asset-secondary-btn-dark rounded-lg">
              <h2 className="text-2xl font-mono font-normal text-asset-dark dark:text-asset-dark-dark mb-4">
                {t("solutions.moreComing.title")}
              </h2>
              <p className="text-asset-gray dark:text-asset-gray-dark mb-6 max-w-2xl mx-auto font-mono">
                {t("solutions.moreComing.description")}
              </p>
              <Button 
                size="lg" 
                variant="asset-primary" 
                data-cal-link="assettrack/sales"
                data-cal-namespace="sales"
                data-cal-config='{"layout":"month_view"}'
              >
                {t("solutions.moreComing.cta")}
              </Button>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
      <TawkChat />
    </>
  );
}