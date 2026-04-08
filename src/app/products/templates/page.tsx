import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export const metadata: Metadata = {
  title: 'Message Templates — Msgify',
  description: 'Create reusable WhatsApp message templates with dynamic variables. Personalize bulk campaigns at scale.',
};

export default function TemplatesProductPage() {
  return (
    <main>
      <ProductPage
        icon={FileText}
        name="Message Templates"
        tagline="Template Engine"
        headline="Craft Messages Once,"
        headlineHighlight="Use Everywhere"
        description="Create reusable message templates with dynamic variable substitution. Build a library of proven messages for campaigns, auto-replies, and quick responses."
        screenshotAlt="Create and manage reusable WhatsApp message templates"
        features={[
          { title: 'Dynamic Variables', desc: 'Insert variables like {{name}}, {{phone}}, {{company}} that get replaced with actual contact data when messages are sent.' },
          { title: 'Template Library', desc: 'Build a searchable library of templates organized by category. Reuse winning messages across multiple campaigns.' },
          { title: 'Rich Media Templates', desc: 'Templates aren\'t just text. Include images, videos, and document attachments for richer, more engaging messages.' },
          { title: 'Quick Reply Integration', desc: 'Use templates as quick replies in the inbox. Respond to common questions in seconds with pre-crafted responses.' },
          { title: 'Campaign Ready', desc: 'Select any template when creating a campaign. Variables are automatically populated from your contact data.' },
          { title: 'API Access', desc: 'Access your templates via the Messaging API. Send templated messages programmatically from your own applications.' },
        ]}
        highlights={[
          'Dynamic variable substitution: {{name}}, {{phone}}, custom fields',
          'Rich media support: images, video, PDFs in templates',
          'Organize templates by category for easy discovery',
          'Use templates in campaigns, inbox, quick send, and API',
          'Preview templates with sample data before sending',
          'Unlimited templates on all plans',
          'Share templates across team members',
        ]}
      />
    </main>
  );
}
