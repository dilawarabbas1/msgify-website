import type { Metadata } from 'next';
import { Radio } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export const metadata: Metadata = {
  title: 'WhatsApp Channels — Msgify',
  description: 'Create and manage WhatsApp newsletter channels. Schedule posts, attach media, and track reactions.',
};

export default function ChannelsProductPage() {
  return (
    <main>
      <ProductPage
        icon={Radio}
        name="WhatsApp Channels"
        tagline="Channel Manager"
        headline="Broadcast Updates via"
        headlineHighlight="WhatsApp Channels"
        description="Create and manage WhatsApp newsletter channels from your dashboard. Schedule posts, attach rich media, track emoji reactions, and grow your subscriber base."
        screenshotAlt="Manage WhatsApp newsletter channels with scheduled posts"
        features={[
          { title: 'Channel Creation', desc: 'Create WhatsApp Channels directly from Msgify. Set up your channel name, description, and profile to start broadcasting.' },
          { title: 'Scheduled Posts', desc: 'Plan your content calendar and schedule posts in advance. Posts are published automatically at your chosen date and time.' },
          { title: 'Media Attachments', desc: 'Attach images, videos, and documents to your channel posts. Rich media posts get significantly higher engagement.' },
          { title: 'Reaction Tracking', desc: 'Monitor emoji reactions on every post. Understand what content resonates with your audience and optimize accordingly.' },
          { title: 'Post Management', desc: 'View all posts with their status: scheduled, posted, or failed. Edit or reschedule pending posts before they go live.' },
          { title: 'Multi-Channel Support', desc: 'Manage multiple WhatsApp Channels from one dashboard. Different channels for different topics or audiences.' },
        ]}
        highlights={[
          'Create and manage WhatsApp Channels without leaving Msgify',
          'Schedule posts for optimal publishing times',
          'Attach images, videos, and documents to posts',
          'Track emoji reactions to measure engagement',
          'Manage multiple channels from one dashboard',
          'Post status tracking: scheduled, posted, failed',
          'No subscriber limits — grow your channel audience freely',
        ]}
      />
    </main>
  );
}
