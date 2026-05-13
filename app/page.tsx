import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroMinimal from '@/components/HeroMinimal';
import LogoCarousel from '@/components/LogoCarousel';
import ServicesComparison from '@/components/ServicesComparison';
import FeaturesGrid from '@/components/FeaturesGrid';
import ReviewCarouselNew from '@/components/ReviewCarouselNew';
import StatsNew from '@/components/StatsNew';
import BioBlock from '@/components/BioBlock';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import { REVIEWS } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* 1. Hero — Épuré et centré */}
        <HeroMinimal />

        {/* 2. Logo Carousel — Crédibilité immédiate */}
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

        {/* 3. Services Comparison — Layout asymétrique */}
        <ServicesComparison />

        {/* 4. Features Grid — Avantages clés */}
        <FeaturesGrid />

        {/* 5. Testimonials Carousel — Auto-scroll */}
        <ReviewCarouselNew reviews={REVIEWS} autoScroll={true} interval={6000} />

        {/* 6. Stats — 4 cartes avec chiffres clés */}
        <StatsNew />

        {/* 7. Bio/About Block */}
        <BioBlock />

        {/* 8. FAQ Section */}
        <FAQSection />

        {/* 9. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
