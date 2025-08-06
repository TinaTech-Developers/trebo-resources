import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectsGallery from "./components/ProjectsGallery";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import ContactForm from "./components/ContactForm";
import ContactInfoSection from "./components/ContactInfoSection";
import AwardsCertifications from "./components/AwardsCertifications";
import NewsletterSubscription from "./components/NewsletterSubscription";
import PartnersLogos from "./components/PartnersMarquee";
import PartnersMarquee from "./components/PartnersMarquee";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsGallery />

      <CTABanner />
      {/* <ContactForm /> */}
      {/* <ContactInfoSection /> */}
      <AwardsCertifications />
      <NewsletterSubscription />
      <PartnersMarquee />
      <Testimonials />
    </>
  );
}
