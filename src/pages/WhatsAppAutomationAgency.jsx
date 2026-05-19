import SEOLandingPage from './SEOLandingPageTemplate';

const WhatsAppAutomationAgency = () => {
  const sections = [
    {
      eyebrow: 'The Opportunity',
      title: 'Scale Your Business Without Scaling Your Team',
      subtitle: 'WhatsApp is THE channel for India. Automation converts it into revenue.',
      type: 'grid',
      items: [
        {
          icon: '🎯',
          title: 'Lead Generation',
          description: 'Capture & qualify leads 24/7',
          points: ['Instant lead capture', 'Auto-qualification', '24/7 responses', '+40-60% more leads']
        },
        {
          icon: '💰',
          title: 'Sales Acceleration',
          description: 'Shorter sales cycles, higher AOV',
          points: ['Follow-up sequences', 'Payment links', 'Order tracking', '+30-50% AOV']
        },
        {
          icon: '🛠️',
          title: 'Customer Support',
          description: '70% fewer manual support tickets',
          points: ['Instant responses', 'Ticket routing', '24/7 availability', '70% less admin']
        },
        {
          icon: '📈',
          title: 'Retention',
          description: 'Bring back inactive customers',
          points: ['Personalized messages', 'Loyalty rewards', 'Feedback loops', '+40% repeat orders']
        }
      ]
    },
    {
      eyebrow: 'Industries',
      title: 'Who Uses WhatsApp Automation',
      subtitle: 'Works for every business type',
      type: 'grid',
      items: [
        {
          icon: '🏥',
          title: 'Healthcare & Clinics',
          description: 'Appointment booking & reminders',
          points: ['50% no-show reduction', '30% appointment increase', 'Medicine order delivery']
        },
        {
          icon: '🛍️',
          title: 'E-commerce & D2C',
          description: 'Automated order & customer experience',
          points: ['25% repeat rate', '₹5L+ ARR for most', 'Product recommendations']
        },
        {
          icon: '💇',
          title: 'Salons & Services',
          description: 'Booking & retention automation',
          points: ['40% appointment increase', '50% no-show reduction', 'Loyalty programs']
        },
        {
          icon: '🍔',
          title: 'Restaurants & Food',
          description: 'Automated order taking & delivery',
          points: ['30% more orders', '60% faster fulfillment', 'Loyalty rewards']
        },
        {
          icon: '🏢',
          title: 'B2B & SaaS',
          description: 'Lead qualification & onboarding',
          points: ['50% shorter sales cycle', '3x better onboarding', 'Demo scheduling']
        },
        {
          icon: '🎓',
          title: 'Education',
          description: 'Enrollment & engagement',
          points: ['40% enrollment increase', '20% better attendance', 'Progress tracking']
        }
      ]
    },
    {
      eyebrow: 'Packages',
      title: 'WhatsApp Automation Pricing',
      subtitle: 'Flexible plans for every business size',
      type: 'list',
      items: [
        {
          title: '📱 Starter Automation',
          description: 'Up to 1,000 chats/month. Perfect for: Small businesses, local services',
          points: ['₹10,000/month', '3 automation sequences', 'Lead capture setup', 'Basic analytics']
        },
        {
          title: '🎯 Growth Automation',
          description: 'Up to 5,000 chats/month. Perfect for: Growing businesses, e-commerce',
          points: ['₹25,000/month', '10 automation sequences', 'CRM + Payment integration', 'Team collaboration']
        },
        {
          title: '🚀 Enterprise Automation',
          description: 'Unlimited chats. Perfect for: Multi-location, high-volume',
          points: ['₹50,000+/month', 'Unlimited sequences', 'Full API access', 'Custom integrations']
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How quickly can we see results?',
      answer: 'Lead capture and automation responses are instant. Sales lift typically visible within 2-4 weeks.'
    },
    {
      question: 'Do customers mind automated messages?',
      answer: 'No. When automation feels personal and provides value, customers prefer it. Response rates are 80%+ higher on WhatsApp than email.'
    },
    {
      question: 'Can we customize the conversations?',
      answer: 'Yes. Every automation is custom-built for your business. We don\'t use generic templates.'
    },
    {
      question: 'Is WhatsApp automation legal?',
      answer: 'Yes. We use official WhatsApp Business API. It\'s completely legal and compliant.'
    }
  ];

  return (
    <SEOLandingPage
      seoTitle="WhatsApp Automation Agency India | Increase Leads & Sales with Automation"
      seoDescription="Top WhatsApp automation agency in India. Automate customer acquisition, support, and sales. Boost leads by 40%, reduce manual work by 70%. Get started with ₹10,000/month."
      seoKeywords="WhatsApp automation India, WhatsApp automation agency, WhatsApp bot development"
      seoPath="/whatsapp-automation-agency"
      heroHeadline="Scale Your Business Without Scaling Your Team"
      heroSubheading="WhatsApp automation that actually converts. Acquire more customers, close more deals, support faster—with less manual work."
      heroCTA="See Automation in Action"
      sections={sections}
      faqItems={faqItems}
      finalCTA={{
        headline: 'Ready to Automate?',
        description: 'Let\'s set up WhatsApp automation that actually converts.'
      }}
    />
  );
};

export default WhatsAppAutomationAgency;
