import type { Metadata } from 'next';
import { SolutionPage } from '@/components/solution-page';
import {
  Home, Users, Calendar, MapPin,
  FileText, Bell,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'WhatsApp for Real Estate — Msgify',
  description:
    'Close more deals with WhatsApp automation for real estate. Send property listings, schedule viewings, follow up with leads, and nurture buyers at scale.',
};

export default function RealEstatePage() {
  return (
    <main>
      <SolutionPage
        industry="Real Estate"
        tagline="WhatsApp for Real Estate"
        headline="Close More Deals with"
        headlineHighlight="WhatsApp Automation"
        description="Convert property inquiries into closed deals faster. Share listings with rich media, automate follow-ups, schedule viewings, and nurture buyer relationships — all through WhatsApp."
        heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
        stats={[
          { value: '5x', label: 'Faster Response Time' },
          { value: '72%', label: 'Lead Conversion Lift' },
          { value: '90%', label: 'Viewing Show-Up Rate' },
          { value: '35%', label: 'Shorter Sales Cycle' },
        ]}
        features={[
          { icon: Home, title: 'Property Listing Broadcasts', desc: 'Share new listings with high-quality images, virtual tour links, floor plans, and pricing to targeted buyer segments instantly.' },
          { icon: Users, title: 'Lead Capture & Nurturing', desc: 'Capture leads from ads and portals, auto-assign to agents, and nurture with personalized property recommendations over time.' },
          { icon: Calendar, title: 'Viewing Scheduler', desc: 'Automate viewing appointment scheduling with confirmation messages, reminders 24 hours before, and follow-ups after each visit.' },
          { icon: MapPin, title: 'Location & Area Updates', desc: 'Send neighborhood guides, nearby amenities, school information, and development updates to buyers interested in specific areas.' },
          { icon: FileText, title: 'Document Sharing', desc: 'Share brochures, contracts, floor plans, and legal documents securely through WhatsApp. Track when documents are opened and read.' },
          { icon: Bell, title: 'Price Drop & New Listing Alerts', desc: 'Notify interested buyers instantly when properties they saved drop in price or when new listings match their search criteria.' },
        ]}
        useCases={[
          { title: 'New Listing Announcements', desc: 'Broadcast new properties to your buyer database with photos, pricing, and location. Segment by budget, area preference, and property type.' },
          { title: 'Automated Viewing Reminders', desc: 'Reduce no-shows by 60% with automatic viewing confirmation and reminder messages sent 24 hours and 1 hour before scheduled viewings.' },
          { title: 'Post-Viewing Follow-Up', desc: 'Automatically follow up with buyers after viewings to gather feedback, answer questions, and schedule second visits or make offers.' },
          { title: 'Lead Re-Engagement', desc: 'Re-activate cold leads with new listing alerts, market reports, and personalized property suggestions based on their original search criteria.' },
          { title: 'Tenant Communication', desc: 'Send rent reminders, maintenance updates, lease renewal notifications, and community announcements to tenants across your portfolio.' },
        ]}
        benefits={[
          'Respond to property inquiries within seconds with auto-replies',
          'Share property images, videos, and virtual tours directly in WhatsApp',
          'Reduce viewing no-shows by 60% with automated reminders',
          'Segment buyers by budget, location, and property preferences',
          'Manage multiple agents and properties from one dashboard',
          'Track which listings generate the most engagement',
          'Send PDF brochures and contracts without leaving the chat',
          'Flat pricing — no per-message fees regardless of volume',
        ]}
        testimonial={{
          quote: 'Msgify transformed how we communicate with buyers. Our response time went from hours to seconds, and our viewing show-up rate increased to 90%. It\'s the best tool in our tech stack.',
          name: 'Michael Torres',
          role: 'Sales Director',
          company: 'Horizon Properties',
        }}
        ctaTitle="Transform Your Real Estate Business"
        ctaDescription="Join leading real estate agencies using Msgify to respond faster, close more deals, and build lasting client relationships."
      />
    </main>
  );
}
