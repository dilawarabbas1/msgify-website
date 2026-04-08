import { Hero } from '@/components/hero';
import { Brands } from '@/components/brands';
import { Features } from '@/components/features';
import { HowItWorks } from '@/components/how-it-works';
import { Capabilities } from '@/components/capabilities';
import { Pricing } from '@/components/pricing';
import { ApiSection } from '@/components/api-section';
import { CtaSection } from '@/components/cta-section';
import { API_BASE, type Plan } from '@/lib/constants';

async function getPlans(): Promise<Plan[]> {
  try {
    const res = await fetch(`${API_BASE}/api/subscription/plans/public`, {
      cache: 'no-store',
    });
    const data = await res.json();
    return data.success ? data.plans : [];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const plans = await getPlans();

  return (
    <main>
      <Hero />
      <Brands />
      <Features />
      <HowItWorks />
      <Capabilities />
      <Pricing plans={plans} />
      <ApiSection />
      <CtaSection />
    </main>
  );
}
