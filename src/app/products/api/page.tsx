import type { Metadata } from 'next';
import { Code } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export const metadata: Metadata = {
  title: 'Messaging API — Msgify',
  description: 'Integrate WhatsApp messaging into your stack with Msgify\'s RESTful API. API key auth, rate limiting, priority queuing, and webhooks.',
};

export default function ApiProductPage() {
  return (
    <main>
      <ProductPage
        icon={Code}
        name="Messaging API"
        tagline="Developer API"
        headline="Integrate WhatsApp into"
        headlineHighlight="Your Stack"
        description="Send WhatsApp messages programmatically with our RESTful API. API key authentication, configurable rate limits, priority queuing, and delivery webhooks."
        screenshotAlt="RESTful API for programmatic WhatsApp messaging"
        features={[
          { title: 'RESTful API', desc: 'Clean, well-documented REST endpoints for sending messages, managing templates, and checking delivery status. Get started in minutes.' },
          { title: 'API Key Authentication', desc: 'Secure per-customer API keys with hashed storage. Generate, rotate, and revoke keys from your dashboard.' },
          { title: 'Rate Limiting', desc: 'Configurable TPM (throughput per minute) and TPS (throughput per second) controls protect your accounts while maximizing delivery.' },
          { title: 'Priority Queue', desc: 'API messages are sent with higher priority than campaign messages. Critical transactional messages are never delayed by bulk campaigns.' },
          { title: 'Delivery Status', desc: 'Track message status from queued to sent to delivered to read. Get real-time delivery confirmations for every message.' },
          { title: 'Template Support', desc: 'Reference templates by name in API calls. Variables are substituted automatically — send personalized messages with minimal payload.' },
        ]}
        highlights={[
          'Simple REST API — send a message with one POST request',
          'API key authentication with per-customer rate limiting',
          'Priority queue — API messages sent before campaign messages',
          'Configurable TPM and TPS throttle controls',
          'Send text, images, videos, PDFs, and audio via API',
          'Template variable substitution in API calls',
          'Message status tracking: queued, sent, delivered, read, failed',
          'Available on Business plan and above',
        ]}
      />
    </main>
  );
}
