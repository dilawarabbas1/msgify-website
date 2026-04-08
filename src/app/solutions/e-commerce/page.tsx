import type { Metadata } from 'next';
import { SolutionPage } from '@/components/solution-page';
import {
  ShoppingCart, Package, CreditCard, Truck,
  RefreshCw, Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'WhatsApp for E-Commerce — Msgify',
  description:
    'Boost e-commerce sales with WhatsApp automation. Send order updates, abandoned cart reminders, product launches, and promotional campaigns at scale.',
};

export default function ECommercePage() {
  return (
    <main>
      <SolutionPage
        industry="E-Commerce"
        tagline="WhatsApp for E-Commerce"
        headline="Sell More with"
        headlineHighlight="WhatsApp Automation"
        description="Turn WhatsApp into your highest-converting sales channel. Send abandoned cart reminders, order confirmations, delivery updates, and flash sale alerts that get 98% open rates."
        heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
        stats={[
          { value: '98%', label: 'Open Rate' },
          { value: '45%', label: 'Click-Through Rate' },
          { value: '3x', label: 'Higher Conversions' },
          { value: '60%', label: 'Cart Recovery Rate' },
        ]}
        features={[
          { icon: ShoppingCart, title: 'Abandoned Cart Recovery', desc: 'Automatically remind customers about items left in their cart with personalized WhatsApp messages that include product images and direct checkout links.' },
          { icon: Package, title: 'Order Confirmations', desc: 'Send instant order confirmation messages with order details, expected delivery dates, and tracking links — all automatically triggered from your store.' },
          { icon: Truck, title: 'Shipping & Delivery Updates', desc: 'Keep customers informed with real-time shipping notifications, delivery confirmations, and feedback requests after delivery completion.' },
          { icon: CreditCard, title: 'Flash Sales & Promotions', desc: 'Launch targeted promotional campaigns for new products, seasonal sales, and exclusive offers to segmented customer lists.' },
          { icon: RefreshCw, title: 'Re-Engagement Campaigns', desc: 'Win back inactive customers with personalized WhatsApp messages featuring product recommendations based on their purchase history.' },
          { icon: Star, title: 'Review & Feedback Collection', desc: 'Automatically request product reviews and ratings after delivery. Collect customer feedback to improve your products and service.' },
        ]}
        useCases={[
          { title: 'Abandoned Cart Reminders', desc: 'Recover lost sales by sending timely reminders with product images, prices, and one-tap checkout links within 1 hour of cart abandonment.' },
          { title: 'Product Launch Announcements', desc: 'Build excitement for new arrivals by sending early access notifications to VIP customers and generating pre-launch buzz.' },
          { title: 'Order Status Notifications', desc: 'Automate the entire post-purchase journey — confirmation, shipped, out for delivery, delivered — keeping customers informed at every step.' },
          { title: 'Loyalty & Rewards Programs', desc: 'Send exclusive discount codes, birthday rewards, and loyalty points updates to your most valuable customers.' },
          { title: 'Customer Support Automation', desc: 'Handle common queries like order status, return requests, and sizing questions with auto-replies and quick-response templates.' },
        ]}
        benefits={[
          'Recover up to 60% of abandoned carts with timely WhatsApp reminders',
          'Reduce customer support load by 40% with automated order updates',
          '98% message open rate vs 20% for email marketing',
          'Send product images, videos, and catalog links directly in chat',
          'Segment customers by purchase history, location, and preferences',
          'No per-message fees — flat monthly pricing for unlimited campaigns',
          'Integrate with Shopify, WooCommerce, and custom stores via API',
          'Real-time delivery and read receipt tracking',
        ]}
        testimonial={{
          quote: 'Since switching to Msgify, our abandoned cart recovery rate jumped from 8% to 45%. WhatsApp messages get opened and acted on — email just can\'t compete with that.',
          name: 'Sarah Chen',
          role: 'Head of Marketing',
          company: 'StyleVault',
        }}
        ctaTitle="Start Selling More on WhatsApp"
        ctaDescription="Join thousands of e-commerce brands using Msgify to drive sales, recover carts, and delight customers. Start your free trial today."
      />
    </main>
  );
}
