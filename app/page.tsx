import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesGrid from '@/components/ServicesGrid';
import LogoCarousel from '@/components/LogoCarousel';
import LocalNordReviews from '@/components/LocalNordReviews';
import BioBlock from '@/components/BioBlock';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* 1. Hero — variante Photo (approuvée) */}
        <HeroSection variant="photo" />

        {/* 2. Stats — chiffres clés réels */}
        <StatsSection />

        {/* 3. Services — grille, données réelles (5 services) */}
        <ServicesGrid />

        {/* 4. Logos partenaires réels */}
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

        {/* 5. Témoignages (widget LocalNord) */}
        <LocalNordReviews />

        {/* 6. Bio William */}
        <BioBlock />

        {/* 7. FAQ (aperçu) */}
        <FAQSection />

        {/* 8. CTA finale */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
