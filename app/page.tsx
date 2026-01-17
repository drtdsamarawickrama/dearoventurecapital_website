import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import AboutSection from "@/components/About/AboutSection";

import SectorsSection from "@/components/Sectors/SectorsSection";
import AwardsSection from "@/components/Awards/AwardsSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import ContactSection from "@/components/Contact/ContactSection";
import CommunitySection from "@/components/Community/CommunitySection";
import NewsSection from "@/components/News/NewsSection";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
     
      <SectorsSection />
      {/* <AwardsSection /> */}
      {/* <TestimonialsSection /> */}
      <CommunitySection />
      <NewsSection/>
      <ContactSection />
    </>
  );
}
