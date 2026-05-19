import SEOLandingPage from './SEOLandingPageTemplate';

const DoctorClinicAutomation = () => {
  const sections = [
    {
      eyebrow: 'The Problem',
      title: 'Stop Losing Patients to Manual Processes',
      subtitle: 'Complete clinic automation that doctors actually use',
      type: 'grid',
      items: [
        {
          icon: '📱',
          title: '24/7 Online Booking',
          description: 'Patients book appointments anytime',
          points: ['Website booking', 'WhatsApp booking', 'Google Maps integration', 'Instagram DMs']
        },
        {
          icon: '🔔',
          title: 'Auto Reminders',
          description: 'Reduce no-shows by 50%',
          points: ['SMS reminders', 'WhatsApp alerts', 'Email notifications', 'Customizable messages']
        },
        {
          icon: '📋',
          title: 'Patient Management',
          description: 'Complete patient records in cloud',
          points: ['Medical history', 'Previous prescriptions', 'Cloud backup', 'HIPAA compliant']
        },
        {
          icon: '💊',
          title: 'Prescription Tracking',
          description: 'Digital prescriptions that work',
          points: ['Digital delivery', 'Pharmacy integration', 'Refill reminders', 'No lost prescriptions']
        },
        {
          icon: '💰',
          title: 'Online Payments',
          description: 'Faster collections, better cash flow',
          points: ['Payment collection', 'Automated invoices', 'Billing history', 'Revenue analytics']
        },
        {
          icon: '🤖',
          title: 'Smart Automation',
          description: 'Answer FAQs automatically',
          points: ['WhatsApp chatbot', 'Symptom checker', 'Urgent vs routine triage', 'Follow-up automation']
        }
      ]
    },
    {
      eyebrow: 'By The Numbers',
      title: 'Clinic Automation Results',
      subtitle: 'What happens when you automate',
      type: 'list',
      items: [
        {
          title: '🎯 Before',
          description: 'Manual clinics losing revenue'
        },
        {
          title: '✨ After (6 months)',
          description: 'Automated, efficient, profitable'
        },
        {
          title: '📊 Metrics',
          description: 'No-show Rate: 45% → 15% | Appointments: 100/mo → 140/mo | Staff Time: 20 hrs/week → 6 hrs/week'
        }
      ]
    },
    {
      eyebrow: 'Packages',
      title: 'Clinic Automation Solutions',
      subtitle: 'For clinics of any size',
      type: 'grid',
      items: [
        {
          icon: '🏥',
          title: 'Clinic Automation',
          description: 'Single clinics getting started',
          points: ['₹30K setup + ₹5K/month', 'Online booking', 'SMS+WhatsApp reminders', 'Patient management', 'Billing system']
        },
        {
          icon: '🏢',
          title: 'Hospital System',
          description: 'Multi-location clinics',
          points: ['₹100K setup + ₹15K/month', 'Everything above plus', 'Multi-location management', 'Telemedicine integration', 'Insurance management']
        },
        {
          icon: '🌐',
          title: 'Telemedicine Enabled',
          description: 'Expand beyond physical location',
          points: ['₹75K setup + ₹10K/month', 'Video consultations', 'Remote patient intake', 'Digital prescriptions', 'Cloud storage']
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Is patient data secure?',
      answer: 'Yes. Complete encryption, cloud backup, HIPAA compliant. Your patient data is safer than paper records.'
    },
    {
      question: 'Can we integrate with our existing systems?',
      answer: 'Most likely yes. We work with many EHRs and practice management software.'
    },
    {
      question: 'How long to see results?',
      answer: 'No-show reduction in first 2 weeks. Appointment increase in 4-6 weeks as word spreads.'
    },
    {
      question: 'What if we need telemedicine?',
      answer: 'We can add it anytime. Many start with booking + reminders, add telemedicine later.'
    }
  ];

  return (
    <SEOLandingPage
      seoTitle="Doctor Clinic Automation Solutions India | Increase Appointments & Reduce No-Shows"
      seoDescription="Complete clinic automation solutions. WhatsApp booking, appointment reminders, patient management, telemedicine integration. Reduce no-shows by 50%, increase appointments by 40%."
      seoKeywords="clinic automation software India, doctor appointment system, telemedicine automation"
      seoPath="/doctor-clinic-automation"
      heroHeadline="Stop Losing Patients to Manual Processes"
      heroSubheading="Complete clinic automation. Instant appointment booking. 50% fewer no-shows. 40% more appointments. Doctor-focused, not IT-focused."
      heroCTA="Automate Your Clinic Today"
      sections={sections}
      faqItems={faqItems}
      finalCTA={{
        headline: 'Ready to Automate Your Clinic?',
        description: 'Stop leaving money on the table. Stop wasting time on manual processes.'
      }}
    />
  );
};

export default DoctorClinicAutomation;
