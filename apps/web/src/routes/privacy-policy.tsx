import { createFileRoute } from "@tanstack/react-router";
import { AssetTrackHeader } from "@/components/assettrack-header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyComponent,
  head: () => ({
    meta: [
      {
        title: "Privacy Policy - AssetTrack",
      },
      {
        name: "description",
        content: "AssetTrack privacy policy - Learn how we collect, use, and protect your personal information.",
      },
    ],
  }),
});

function PrivacyPolicyComponent() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* AssetTrack Header */}
      <AssetTrackHeader />

      {/* Single White Card Container - Matching website style */}
      <div className="bg-asset-white rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.1)] mx-4 sm:mx-6 md:mx-auto max-w-[1200px] mt-[60px] md:mt-[90px] mb-6 bg-[url('/patterns/nnnoise.svg')] bg-repeat">
        <div className="px-[40px] sm:px-[60px] md:px-[80px] py-20">
          {/* Back to Home */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="asset-secondary" size="sm">
                {t('privacyPolicy.backHome')}
              </Button>
            </Link>
          </div>

          {/* Privacy Policy Content */}
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-[34px] sm:text-[40px] md:text-[48px] font-mono leading-[104%] text-asset-dark mb-8 pb-4 border-b-[3px] border-asset-blue" style={{fontWeight: 400}}>
              {t('privacyPolicy.title')}
            </h1>
            
            <section className="mb-12">
              <p className="text-[16px] font-mono text-asset-gray mb-4">{t('privacyPolicy.lastUpdated')}</p>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                Asset Track S.p. z.o.o ("Asset Track", or "we," "our," or "us") and its affiliates is an asset tracking and fleet management solutions developer. Asset Track is committed to protecting your privacy. This Privacy Policy tells you what to expect us to do with your personal information when you contact us or use one of our services.
              </p>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                This Privacy Policy applies to websites (<a href="https://theassettrack.com" className="text-asset-blue hover:underline">https://theassettrack.com</a> and its subdomains), emails (<a href="mailto:contact@theassettrack.com" className="text-asset-blue hover:underline">contact@theassettrack.com</a>, <a href="mailto:support@theassettrack.com" className="text-asset-blue hover:underline">support@theassettrack.com</a>, <a href="mailto:jobs@theassettrack.com" className="text-asset-blue hover:underline">jobs@theassettrack.com</a>, <a href="mailto:privacy@theassettrack.com" className="text-asset-blue hover:underline">privacy@theassettrack.com</a>), offline and online events, products and services owned or controlled by Asset Track and its affiliates, including but not limited to Asset Track platform and the associated apps ("App") (collectively, our "Services"). By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                We take your privacy seriously. All personal data will be collected, stored and used by us in accordance with the <a href="https://gdpr.eu/" target="_blank" rel="noopener" className="text-asset-blue hover:underline">European Union General Data Protection Regulation No. 2016/679 ("GDPR")</a> and/or other applicable statutory regulations including Polish data protection laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                Personal Data that we collect from you
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                We collect Personal Data about you in a variety of ways. Sometimes we collect Personal Data automatically when you interact with the Services, and sometimes we collect the Personal Data directly from you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                Personal Data that you provide to us directly:
              </h2>
              <ul className="space-y-2 pl-5">
                {[
                  "First and last name;",
                  "Business/company name;",
                  "Company financial information;",
                  "Payment information;",
                  "Job title;",
                  "ID (for limited purposes);",
                  "Year of birth;",
                  "Gender;",
                  "Email address;",
                  "Phone number;",
                  "Password or passcode;",
                  "Place of residence and associated location information;",
                  "Vehicle and asset information;",
                  "Driver and operator information."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                Personal Data that we collect automatically:
              </h2>
              
              <p className="text-[16px] font-mono text-asset-gray mb-3 leading-relaxed font-semibold">Location Information:</p>
              <ul className="space-y-2 pl-5 mb-6">
                {[
                  "IP address;",
                  "Time zone;",
                  "GPS coordinates and tracking data;",
                  "Route and movement patterns."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[16px] font-mono text-asset-gray mb-3 leading-relaxed font-semibold">Device Information:</p>
              <ul className="space-y-2 pl-5 mb-6">
                {[
                  "Device model;",
                  "Unique device identifiers;",
                  "Information about the operating system and its version;",
                  "Mobile operator and network information;",
                  "Device storage information;",
                  "Version of your device system;",
                  "Tracking device data and telemetry."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[16px] font-mono text-asset-gray mb-3 leading-relaxed font-semibold">Data about your use of the Services includes, among others:</p>
              <ul className="space-y-2 pl-5">
                {[
                  "Frequency of use;",
                  "Areas and features of the Services you access, visit or use;",
                  "Engagement with particular features;",
                  "Asset tracking and monitoring data;",
                  "Fleet management activities."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                For what purposes, on what grounds we process your Personal Data
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="space-y-2 pl-5 mb-6">
                {[
                  "To provide and maintain our Services, including monitoring the usage of our Services and providing asset tracking functionality.",
                  "To manage your account: to manage your registration as a user of the Services. The Personal Data you provide can give you access to different functionalities of the Services that are available to you as a registered user.",
                  "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services you have purchased or of any other contract with us through the Services.",
                  "To provide you with special offers, news and general information about other goods, services and events we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.",
                  "To contact you: by email, through telephone calls, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
                  "To manage your requests: to attend and manage your requests to us.",
                  "For asset tracking and fleet management: to provide real-time tracking, monitoring, and management of your assets and vehicles.",
                  "For other purposes: we may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services, products, marketing and your experience."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                We will process your Personal Data based on one or more of the following legal bases depending on which features of the Services you use:
              </p>
              <ul className="space-y-2 pl-5">
                {[
                  "Your consent. For example, on the registration screen when you give us permission to process your Personal Data;",
                  "Legitimate interest. We may process your Personal Data in relation to our interests in providing the Services to you, our commercial interest;",
                  "To fulfill our contractual obligations to you in order to provide the Services to you;",
                  "Legal obligation. We may be obligated to process some of your Personal Data to comply with applicable laws and regulations."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                How long do we keep your information?
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                We keep your information only as long as we need it to provide Services to you and fulfill the purposes described in this Privacy Policy. This is also the case for anyone that we share your information with. When we no longer need your information and there is no need for us to keep it to comply with our legal or regulatory obligations, we'll either remove it from our systems or depersonalize it so that we can't identify you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                Your privacy rights
              </h2>
              <ul className="space-y-2 pl-5 mb-6">
                {[
                  "The right to access the Personal Data Asset Track holds about you. You have a right to request information about what Personal Data we process about you.",
                  "The right to data portability. You have a right to access all your Personal Data, and receive a copy of it, including in a structured, commonly used and machine-readable format.",
                  "The right to correct any Personal Data we hold about you if it is inaccurate or incomplete. If you believe that your Personal Data is inaccurate, you have a right to contact us and ask us to correct such Personal Data.",
                  "The right to erase your Personal Data. You may ask us to erase your Personal Data if you withdraw your consent to processing when you believe such processing is unlawful. Please be aware that erasing some Personal Data may affect your experience using certain features of the Services that rely on historical data.",
                  "The right to restrict (i.e., prevent) the processing of your Personal Data.",
                  "The right to object to Asset Track using your personal data for particular purposes. In certain circumstances we may not be able to stop using your personal data, if that is the case, we'll let you know why.",
                  "The right to withdraw consent. If we process your data based on your consent, you have the right to withdraw your consent at any time. If you would like to exercise your right to withdraw your consent, please contact us."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                In case some questions about your Personal Data protection remain, contact us via email <a href="mailto:privacy@theassettrack.com" className="text-asset-blue hover:underline">privacy@theassettrack.com</a>, and we will do our best to solve the problem for you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                With whom do we share your personal information?
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                In addition to the specific situations discussed elsewhere in this policy, we may share personal information in the following situations:
              </p>
              <ul className="space-y-2 pl-5 mb-6">
                {[
                  "Affiliates. We may share information with our corporate affiliates.",
                  "Other disclosures with your consent. We may ask if you would like us to share your information with other unaffiliated third parties who are not described elsewhere in this Privacy Policy.",
                  "Other disclosures without your consent. We may disclose information in response to subpoenas, warrants, or court orders, or in connection with any legal process, or to comply with relevant laws. We may also share your information in order to establish or exercise our rights, to defend against a legal claim, to investigate, prevent, or take action regarding possible illegal activities, suspected fraud, safety of person or property, or a violation of our policies, or to comply with your request.",
                  "Service providers. We share your information with service providers. Among other things service providers help us to administer our websites, send email communications, conduct surveys, provide technical support, detect fraud, process payments, and assist in the fulfillment of orders. Our service providers will be given access to your personal information as is reasonably necessary to provide the website and related Services. Our service providers are contractually obligated to use your personal information only at our direction and in accordance with our Privacy Policy; to handle your personal information in confidence; and to not disclose your personal information to unauthorized third parties."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-asset-gray">
                    <div className="w-1.5 h-1.5 bg-asset-blue rounded-full flex-shrink-0 mt-2" />
                    <span className="text-[16px] font-mono leading-relaxed" style={{fontWeight: 400}}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                Except as otherwise stated in this Privacy Policy, we do not sell, trade, rent or otherwise share for marketing purposes your personal information with third-parties without your consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                Automated decisions
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                We neither use automated decision-making nor your Personal Data to automatically assess aspects of your personality (automated profiling).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                Complaint
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                Pursuant to Art.77 GDPR, you have the right to file a complaint with a supervisory authority of the EU Member State where you permanently reside, work or where there was an alleged violation of your information privacy. In Poland, you can contact the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                How do we protect your information?
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">
                We implement a variety of technical, organizational and legal security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your Personal Data. For example, our employees have different levels of access to your Personal Data and only those in charge of data management get access to your Personal Data and only for limited purposes required for the operation of the Services. We offer the use of a secure server. Among other practices, your account is protected by a password for your privacy and security. You must prevent unauthorized access to your account and personal information by selecting and protecting your password appropriately and limiting access to your computer or other device and browser by signing off after you finished accessing your account. We cannot, however, ensure or guarantee the absolute security of any information you provide to Asset Track or guarantee that your information on the Services may not be accessed, disclosed, altered, or destroyed by a breach of any of our physical, technical, or managerial safeguards.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-[1.5rem] font-mono text-asset-medium mb-6 pl-4 border-l-4 border-asset-blue" style={{fontWeight: 400}}>
                Contact information
              </h2>
              <p className="text-[16px] font-mono text-asset-gray mb-4 leading-relaxed">If you have any questions or concerns about your privacy, contact us at:</p>
              <div className="pl-5 space-y-2">
                <p className="text-[16px] font-mono text-asset-gray">Email: <a href="mailto:privacy@theassettrack.com" className="text-asset-blue hover:underline">privacy@theassettrack.com</a></p>
                <p className="text-[16px] font-mono text-asset-gray">Company: Asset Track S.p. z.o.o</p>
                <p className="text-[16px] font-mono text-asset-gray">Website: <a href="https://theassettrack.com" target="_blank" rel="noopener" className="text-asset-blue hover:underline">https://theassettrack.com</a></p>
              </div>
              <p className="text-[16px] font-mono text-asset-gray mt-4 leading-relaxed">
                You may also contact your local data protection authority. In Poland, you can contact the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych). A list of EU data protection authorities is available <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener" className="text-asset-blue hover:underline">here</a>.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}