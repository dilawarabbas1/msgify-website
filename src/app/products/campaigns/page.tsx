import type { Metadata } from 'next';
import { Send } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export const metadata: Metadata = {
  title: 'Bulk Campaigns — Msgify',
  description: 'Send targeted WhatsApp campaigns to thousands of contacts with throttle controls, media support, and real-time tracking.',
};

export default function CampaignsProductPage() {
  return (
    <main>
      <ProductPage
        icon={Send}
        name="Bulk Campaigns"
        tagline="Campaign Engine"
        headline="Send Thousands of Messages with"
        headlineHighlight="One Click"
        description="Create, schedule, and send targeted WhatsApp campaigns to your entire contact list or specific segments. Track delivery, reads, and responses in real-time."
        screenshotAlt="Create and manage bulk WhatsApp campaigns with real-time tracking"
        features={[
          { title: 'Smart Throttling', desc: 'Configure message delivery speed from 1 to 60 messages per minute per number to protect account health and maximize delivery.' },
          { title: 'Media Attachments', desc: 'Send campaigns with images, videos, PDFs, and audio files. Rich media messages get 3x higher engagement than text-only.' },
          { title: 'Multi-Account Distribution', desc: 'Spread campaign load across multiple WhatsApp accounts automatically. Balance throughput while protecting each account.' },
          { title: 'Tag-Based Targeting', desc: 'Target all contacts or specific segments by tags. Send the right message to the right audience for higher conversion rates.' },
          { title: 'Template Variables', desc: 'Personalize every message with dynamic variables like {{name}}, {{phone}}, and custom fields. Bulk messages that feel personal.' },
          { title: 'Real-Time Progress', desc: 'Track campaign progress live — see sent, delivered, read, and failed counts updating in real-time on your dashboard.' },
        ]}
        highlights={[
          'Send to unlimited contacts with flat monthly pricing',
          'Schedule campaigns for optimal delivery times',
          'Pause, resume, and retry failed campaigns at any time',
          'Automatic retry for temporarily failed messages',
          'Detailed post-campaign reports with delivery analytics',
          'Campaign lifecycle: Draft, Scheduled, Running, Paused, Completed',
          'CSV export of campaign results and message logs',
        ]}
      />
    </main>
  );
}
