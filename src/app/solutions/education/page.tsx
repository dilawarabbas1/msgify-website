import type { Metadata } from 'next';
import { SolutionPage } from '@/components/solution-page';
import {
  GraduationCap, BookOpen, ClipboardList, Users,
  Bell, Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'WhatsApp for Education — Msgify',
  description:
    'Engage students and parents with WhatsApp automation. Send admission updates, class schedules, fee reminders, exam results, and important announcements at scale.',
};

export default function EducationPage() {
  return (
    <main>
      <SolutionPage
        industry="Education"
        tagline="WhatsApp for Education"
        headline="Engage Students & Parents with"
        headlineHighlight="WhatsApp Automation"
        description="Keep students, parents, and staff connected with instant WhatsApp communication. Automate admissions, send fee reminders, share exam results, and broadcast important announcements."
        heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
        stats={[
          { value: '95%', label: 'Parent Read Rate' },
          { value: '40%', label: 'Fewer Missed Payments' },
          { value: '80%', label: 'Faster Communication' },
          { value: '50K+', label: 'Students Reached Daily' },
        ]}
        features={[
          { icon: GraduationCap, title: 'Admission Campaigns', desc: 'Run targeted admission campaigns with course brochures, program details, and application links. Track inquiries and follow up automatically.' },
          { icon: BookOpen, title: 'Class & Schedule Updates', desc: 'Send timetable changes, class cancellations, substitute teacher notifications, and assignment reminders to students and parents instantly.' },
          { icon: ClipboardList, title: 'Fee Reminders & Receipts', desc: 'Automate fee payment reminders before due dates, send payment confirmations, and reduce late payments by 40% with timely notifications.' },
          { icon: Users, title: 'Parent Communication', desc: 'Share attendance reports, progress updates, parent-teacher meeting invites, and school event announcements directly with parents.' },
          { icon: Bell, title: 'Emergency Alerts', desc: 'Broadcast urgent school announcements, weather closures, safety alerts, and schedule changes to all parents and staff within minutes.' },
          { icon: Award, title: 'Results & Certificates', desc: 'Send exam results, report cards, and achievement certificates directly to students and parents with personalized messages.' },
        ]}
        useCases={[
          { title: 'Admission Inquiry Follow-Up', desc: 'Automatically follow up with prospective students who inquire about courses. Share brochures, schedule campus visits, and nurture until enrollment.' },
          { title: 'Fee Payment Reminders', desc: 'Send automated reminders 7 days, 3 days, and 1 day before fee deadlines. Include payment links and outstanding balance details.' },
          { title: 'Exam & Result Notifications', desc: 'Broadcast exam schedules, hall ticket details, and results to students. Send personalized report cards to parents with performance summaries.' },
          { title: 'Event & Activity Announcements', desc: 'Promote school events, sports days, cultural programs, and extracurricular activities. Collect RSVPs and send reminders.' },
          { title: 'Alumni Engagement', desc: 'Stay connected with alumni through reunion invitations, newsletter updates, mentorship program announcements, and fundraising campaigns.' },
        ]}
        benefits={[
          'Reach 95% of parents instantly — far beyond email or SMS',
          'Reduce late fee payments by 40% with automated reminders',
          'Share PDFs, images, and videos — brochures, report cards, certificates',
          'Segment by class, grade, department, or custom groups',
          'Multi-language support for diverse parent communities',
          'Broadcast to thousands of parents in minutes, not hours',
          'Track delivery and read status for every message',
          'FERPA-friendly — no sensitive data stored in messages',
        ]}
        testimonial={{
          quote: 'We used to spend 3 days calling parents about fee deadlines. With Msgify, we send one campaign and reach every parent in minutes. Our on-time payment rate improved by 40%.',
          name: 'Dr. Priya Sharma',
          role: 'Principal',
          company: 'Greenwood International School',
        }}
        ctaTitle="Modernize Your School Communication"
        ctaDescription="Join hundreds of educational institutions using Msgify to engage parents, streamline operations, and improve student outcomes."
      />
    </main>
  );
}
