import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import ToolsSection from '@/components/ToolsSection';
import LogoCarousel from '@/components/LogoCarousel';
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
            { name: 'Clarsi', logo: '/tools/Clarsi.png' },
            { name: 'CréActifs', logo: '/tools/Créactifs.png' },
            { name: 'Eneko', logo: '/tools/Eneko.png' },
            { name: 'Gedaf Elsete', logo: '/tools/Gedaf Elsete Formation Conseil.png' },
            { name: 'Mantion', logo: '/tools/Mantion.png' },
            { name: 'Mill Forma', logo: '/tools/Mill Forma.png' },
            { name: 'Simeuble.fr', logo: '/tools/Simeuble.png' },
          ]}
        />

        {/* Testimonials Section (Carousel with Reviews) */}
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
