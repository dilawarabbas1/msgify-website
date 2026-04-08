import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Msgify — The Most Powerful WhatsApp Automation Platform',
  description:
    'Send bulk WhatsApp messages, manage real-time conversations, automate replies, and run targeted campaigns across multiple accounts. Try Msgify free.',
  keywords: [
    'WhatsApp automation',
    'WhatsApp bulk messaging',
    'WhatsApp campaign',
    'WhatsApp marketing',
    'WhatsApp API',
    'bulk messaging platform',
    'WhatsApp business',
  ],
  openGraph: {
    title: 'Msgify — WhatsApp Automation Platform',
    description: 'Send bulk messages, manage conversations, and automate WhatsApp at scale.',
    url: 'https://msgify.io',
    siteName: 'Msgify',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Msgify — WhatsApp Automation Platform',
    description: 'Send bulk messages, manage conversations, and automate WhatsApp at scale.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Msgify',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description: 'WhatsApp bulk messaging and campaign automation platform',
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'USD',
                lowPrice: '20',
                offerCount: '4',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased text-gray-800 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
