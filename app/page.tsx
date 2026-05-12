import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ToolsSection from '@/components/ToolsSection';
import LogoCarousel from '@/components/LogoCarousel';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BioBlock from '@/components/BioBlock';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection variant="photo" />

        {/* Services Grid */}
        <ServicesGrid />

        {/* NEW: Tools Section (position 3) */}
        <ToolsSection />

        {/* Logo Carousel Section */}
        <LogoCarousel
          partners={[
            { name: 'Clarsi', logo: '/logos/clarsi.png' },
            { name: 'CréActifs', logo: '/logos/creactifs.png' },
            { name: 'Eneko', logo: '/logos/eneko.png' },
            { name: 'Gedaf Elsete', logo: '/logos/gedaf-elsete.png' },
            { name: 'Mantion', logo: '/logos/mantion.png' },
          ]}
        />

        {/* Stats Section with TrustIndex */}
        <StatsSection />

        {/* Testimonials Section (via TrustIndex) */}
        <TestimonialsSection />

        {/* Bio/About Block */}
        <BioBlock />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
