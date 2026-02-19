import dynamic from 'next/dynamic';
import { Hero } from '@/components/landing/Hero';

const Problem = dynamic(() => import('@/components/landing/Problem').then(mod => mod.Problem));
const HowItWorks = dynamic(() => import('@/components/landing/HowItWorks').then(mod => mod.HowItWorks));
const Showcase = dynamic(() => import('@/components/landing/Showcase').then(mod => mod.Showcase));
const Testimonials = dynamic(() => import('@/components/landing/Testimonials').then(mod => mod.Testimonials));
const Bonus = dynamic(() => import('@/components/landing/Bonus').then(mod => mod.Bonus));
const CtaSection = dynamic(() => import('@/components/landing/CtaSection').then(mod => mod.CtaSection));
const Guarantee = dynamic(() => import('@/components/landing/Guarantee').then(mod => mod.Guarantee));
const Faq = dynamic(() => import('@/components/landing/Faq').then(mod => mod.Faq));


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Bonus />
        <CtaSection />
        <Guarantee />
        <Faq />
      </main>
    </div>
  );
}
