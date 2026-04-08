import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export const metadata: Metadata = {
  title: 'Contact Management — Msgify',
  description: 'Import, organize, and segment your WhatsApp contacts. CSV upload, tag-based segmentation, and personalization variables.',
};

export default function ContactsProductPage() {
  return (
    <main>
      <ProductPage
        icon={Users}
        name="Contact Management"
        tagline="Contact Hub"
        headline="Organize Your Audience for"
        headlineHighlight="Targeted Campaigns"
        description="Import thousands of contacts via CSV, tag and segment your audience, validate WhatsApp numbers, and personalize campaigns with custom variables."
        screenshotAlt="Manage, tag, and segment contacts for targeted WhatsApp campaigns"
        features={[
          { title: 'CSV Bulk Import', desc: 'Upload thousands of contacts at once from CSV files. Map columns to fields automatically and import in seconds.' },
          { title: 'Tag-Based Segmentation', desc: 'Organize contacts with custom tags like VIP, New Lead, or Hot Prospect. Filter and target campaigns by any tag combination.' },
          { title: 'Custom Variables', desc: 'Add custom fields like order ID, city, or product interest. Use them as template variables for hyper-personalized messaging.' },
          { title: 'WhatsApp Number Validation', desc: 'Bulk-check which contacts have active WhatsApp accounts before running campaigns. Save time and improve delivery rates.' },
          { title: 'Quality Scoring', desc: 'Contacts are automatically scored based on interaction history: saved, interacted, cold, or unknown. Focus efforts on engaged contacts.' },
          { title: 'Search & Filter', desc: 'Find any contact instantly with full-text search across names, phone numbers, and tags. Advanced filters for targeted actions.' },
        ]}
        highlights={[
          'Import unlimited contacts via CSV with automatic field mapping',
          'Tag contacts individually or in bulk for precise segmentation',
          'Custom variables for deep personalization ({{name}}, {{city}}, etc.)',
          'Bulk WhatsApp number validation before campaigns',
          'Contact quality scoring based on interaction history',
          'Export contacts to CSV for backup or migration',
          'Duplicate detection prevents duplicate phone numbers',
        ]}
      />
    </main>
  );
}
