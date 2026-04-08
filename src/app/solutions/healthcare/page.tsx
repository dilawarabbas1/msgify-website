import type { Metadata } from 'next';
import { SolutionPage } from '@/components/solution-page';
import {
  Heart, Clock, FileText, Shield,
  Stethoscope, Pill,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'WhatsApp for Healthcare — Msgify',
  description:
    'Improve patient engagement with WhatsApp automation. Send appointment reminders, health tips, prescription alerts, lab results, and wellness campaigns.',
};

export default function HealthcarePage() {
  return (
    <main>
      <SolutionPage
        industry="Healthcare"
        tagline="WhatsApp for Healthcare"
        headline="Better Patient Care with"
        headlineHighlight="WhatsApp Automation"
        description="Reduce no-shows, improve medication adherence, and keep patients engaged with automated WhatsApp communication. Send appointment reminders, health tips, and lab result notifications."
        heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
        stats={[
          { value: '65%', label: 'Fewer No-Shows' },
          { value: '89%', label: 'Patient Satisfaction' },
          { value: '50%', label: 'Less Admin Work' },
          { value: '3x', label: 'Faster Follow-Ups' },
        ]}
        features={[
          { icon: Clock, title: 'Appointment Reminders', desc: 'Reduce no-shows by 65% with automated appointment reminders sent 48 hours, 24 hours, and 2 hours before scheduled visits. Include rescheduling links.' },
          { icon: Stethoscope, title: 'Post-Visit Follow-Ups', desc: 'Automatically check in with patients after visits. Send care instructions, medication reminders, and satisfaction surveys to improve outcomes.' },
          { icon: Pill, title: 'Prescription & Refill Alerts', desc: 'Remind patients when prescriptions are ready for pickup or when it\'s time to refill. Improve medication adherence with timely notifications.' },
          { icon: FileText, title: 'Lab Results & Reports', desc: 'Notify patients when lab results are ready and share secure links to view reports. Reduce phone calls and front desk burden.' },
          { icon: Heart, title: 'Wellness Campaigns', desc: 'Send seasonal health tips, vaccination reminders, preventive care schedules, and wellness program invitations to your patient base.' },
          { icon: Shield, title: 'Insurance & Billing Updates', desc: 'Send billing statements, insurance claim updates, payment reminders, and co-pay notifications to keep patients informed about their accounts.' },
        ]}
        useCases={[
          { title: 'Appointment Reminders & Confirmations', desc: 'Send multi-stage reminders (48h, 24h, 2h) with doctor name, clinic address, and one-tap confirm/reschedule options to minimize no-shows.' },
          { title: 'Vaccination & Screening Campaigns', desc: 'Run targeted campaigns for flu shots, COVID boosters, annual screenings, and preventive health checkups based on patient age and history.' },
          { title: 'Post-Discharge Care Instructions', desc: 'Automatically send detailed care instructions, medication schedules, warning signs to watch for, and follow-up appointment details after discharge.' },
          { title: 'Patient Feedback Collection', desc: 'Request patient feedback after each visit to measure satisfaction, identify improvement areas, and collect testimonials for quality reporting.' },
          { title: 'Staff & Department Communication', desc: 'Coordinate shift schedules, emergency protocols, policy updates, and training announcements across departments and locations.' },
        ]}
        benefits={[
          'Reduce appointment no-shows by up to 65% with multi-stage reminders',
          'Improve medication adherence with timely prescription alerts',
          'Cut front desk phone calls by 50% with automated notifications',
          'Send care instructions with images and PDF documents',
          'HIPAA-conscious design — no PHI stored in message content',
          'Segment patients by condition, age group, or care provider',
          'Multi-language support for diverse patient populations',
          'Track message delivery and read rates for compliance reporting',
        ]}
        testimonial={{
          quote: 'Our no-show rate dropped from 28% to under 10% within the first month of using Msgify. Patients love getting WhatsApp reminders — it\'s where they already communicate.',
          name: 'Dr. Ahmed Hassan',
          role: 'Medical Director',
          company: 'CareFirst Medical Group',
        }}
        ctaTitle="Improve Patient Outcomes Today"
        ctaDescription="Join healthcare providers using Msgify to reduce no-shows, engage patients, and streamline clinical communication."
      />
    </main>
  );
}
