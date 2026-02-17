import { CtaSection } from '@/components/landing/CtaSection';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Showcase } from '@/components/landing/Showcase';
import { Testimonials } from '@/components/landing/Testimonials';
import { Bonus } from '@/components/landing/Bonus';
import { Guarantee } from '@/components/landing/Guarantee';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Bonus />
        <CtaSection />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
