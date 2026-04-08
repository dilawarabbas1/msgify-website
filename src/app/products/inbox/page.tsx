import type { Metadata } from 'next';
import { Inbox } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export const metadata: Metadata = {
  title: 'Real-Time Inbox — Msgify',
  description: 'Manage all WhatsApp conversations from one unified inbox. Reply instantly, share media, and track read receipts.',
};

export default function InboxProductPage() {
  return (
    <main>
      <ProductPage
        icon={Inbox}
        name="Real-Time Inbox"
        tagline="Unified Inbox"
        headline="Every Conversation in"
        headlineHighlight="One Place"
        description="Manage all your WhatsApp conversations from a single real-time dashboard. Reply instantly with text, media, templates, and never miss a customer message."
        screenshotAlt="Unified inbox for all WhatsApp conversations across accounts"
        features={[
          { title: 'Live Message Sync', desc: 'Messages appear instantly via WebSocket connection. No refreshing needed — see incoming messages the moment they arrive.' },
          { title: 'Rich Media Support', desc: 'Send and receive images, videos, documents, audio messages, voice notes, and location pins directly in the conversation thread.' },
          { title: 'Quick Reply Templates', desc: 'Respond in seconds using saved message templates. Insert personalized variables and send pre-approved responses with one click.' },
          { title: 'Read Receipts & Status', desc: 'See exactly when your messages were delivered and read. Double blue ticks give you confidence your message was seen.' },
          { title: 'Contact Context', desc: 'View contact details, tags, quality score, and conversation history alongside each chat for informed, personalized responses.' },
          { title: 'Multi-Account Inbox', desc: 'All conversations from all your WhatsApp accounts appear in one unified inbox. No switching between phones or sessions.' },
        ]}
        highlights={[
          'Real-time message delivery via WebSocket — no polling delays',
          'Full media support: images, video, PDFs, audio, and locations',
          'Contact quality scoring: saved, interacted, cold, unknown',
          'Message search across all conversations',
          'Auto-reply configuration per WhatsApp account',
          'Conversation history preserved across sessions',
          'Direct message sending to any phone number (Quick Send)',
        ]}
      />
    </main>
  );
}
