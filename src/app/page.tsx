import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Authority from '@/components/Authority';
import Services from '@/components/Services';
import ThePlan from '@/components/ThePlan';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background min-h-screen relative selection:bg-primary/30 selection:text-primary">
      <div className="noise-overlay" />
      <Hero />
      <SocialProof />
      <Authority />
      <Services />
      <ThePlan />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
