import type { Metadata } from 'next';
import { SolutionPage } from '@/components/solution-page';
import {
  Plane, Map, Hotel, Compass,
  Globe, Camera,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'WhatsApp for Travel & Hospitality — Msgify',
  description:
    'Delight travelers with WhatsApp automation. Send booking confirmations, itinerary updates, check-in reminders, travel deals, and real-time trip support.',
};

export default function TravelPage() {
  return (
    <main>
      <SolutionPage
        industry="Travel"
        tagline="WhatsApp for Travel & Hospitality"
        headline="Delight Travelers with"
        headlineHighlight="WhatsApp Automation"
        description="Create unforgettable travel experiences with instant WhatsApp communication. Automate booking confirmations, share itineraries, send check-in reminders, and provide real-time trip support."
        heroImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop"
        stats={[
          { value: '92%', label: 'Guest Satisfaction' },
          { value: '4x', label: 'Faster Booking Response' },
          { value: '35%', label: 'More Repeat Bookings' },
          { value: '60%', label: 'Support Queries Automated' },
        ]}
        features={[
          { icon: Plane, title: 'Booking Confirmations', desc: 'Send instant booking confirmations with trip details, reservation codes, payment receipts, and calendar-ready itinerary links via WhatsApp.' },
          { icon: Map, title: 'Itinerary Sharing', desc: 'Share day-by-day itineraries with maps, activity details, restaurant recommendations, and local tips. Update travelers in real-time if plans change.' },
          { icon: Hotel, title: 'Check-In & Check-Out', desc: 'Send pre-arrival check-in instructions, room details, Wi-Fi credentials, and check-out reminders. Streamline the guest experience.' },
          { icon: Compass, title: 'Travel Deals & Packages', desc: 'Promote seasonal travel packages, last-minute deals, loyalty offers, and early bird discounts to segmented traveler lists.' },
          { icon: Globe, title: 'Real-Time Trip Support', desc: 'Provide instant support for flight changes, hotel issues, local recommendations, and emergency assistance through WhatsApp auto-replies.' },
          { icon: Camera, title: 'Post-Trip Engagement', desc: 'Request reviews, share photo memories, send loyalty points updates, and promote future trips to past travelers.' },
        ]}
        useCases={[
          { title: 'Booking Confirmation & Pre-Trip Info', desc: 'Automatically send booking details, visa requirements, packing lists, weather forecasts, and travel insurance information after reservation.' },
          { title: 'Day-of-Travel Notifications', desc: 'Send flight gate changes, hotel check-in times, transfer pickup locations, and activity reminders on the day of travel for a seamless experience.' },
          { title: 'Seasonal Campaign Blasts', desc: 'Promote holiday packages, summer deals, ski season offers, and festival travel to targeted segments based on past preferences and travel history.' },
          { title: 'Guest Feedback & Reviews', desc: 'Request feedback during and after trips. Send satisfaction surveys, collect Google/TripAdvisor reviews, and identify issues before they become complaints.' },
          { title: 'Loyalty Program Communication', desc: 'Send points balance updates, tier upgrades, exclusive member offers, and birthday rewards to keep loyal travelers engaged and booking.' },
        ]}
        benefits={[
          'Respond to booking inquiries instantly with auto-replies and templates',
          'Share rich media — photos, videos, PDFs, and location pins',
          'Reduce support calls by 60% with automated trip information',
          'Segment travelers by destination, budget, and travel style',
          'Multi-language messaging for international travelers',
          'Send time-zone aware notifications for global travelers',
          'Track engagement to identify your most interested prospects',
          'Flat pricing — send unlimited messages without per-message fees',
        ]}
        testimonial={{
          quote: 'Our guests love getting trip updates on WhatsApp. We went from email-only communication to 92% guest satisfaction. Msgify handles everything from booking to post-trip reviews.',
          name: 'Elena Rodriguez',
          role: 'VP of Guest Experience',
          company: 'Wanderlust Travel Group',
        }}
        ctaTitle="Elevate Your Guest Experience"
        ctaDescription="Join travel companies using Msgify to delight guests, boost bookings, and build loyalty through WhatsApp automation."
      />
    </main>
  );
}
