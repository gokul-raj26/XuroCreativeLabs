import SEOLandingPage from './SEOLandingPageTemplate';

const CreativeAgencyForStartups = () => {
  const sections = [
    {
      eyebrow: 'The Startup Problem',
      title: 'Designed Specifically for Startups',
      subtitle: 'Fast, affordable, founder-friendly',
      type: 'list',
      items: [
        {
          title: 'Speed',
          description: 'Launch in 4-6 weeks, not 4-6 months'
        },
        {
          title: 'Affordability',
          description: 'Designed for bootstrap budgets, not enterprise pricing'
        },
        {
          title: 'Growth Focus',
          description: 'Every design choice optimized for conversions and traction'
        },
        {
          title: 'Founder-Friendly',
          description: 'We speak your language, understand your constraints'
        }
      ]
    },
    {
      eyebrow: 'Services',
      title: 'Our Startup Services',
      subtitle: 'Everything you need to launch',
      type: 'grid',
      items: [
        {
          icon: '🎨',
          title: 'Founder Branding',
          description: 'Professional brand without the ₹5L agency fee',
          points: ['Brand positioning & messaging', 'Logo design', 'Visual identity', 'Brand guidelines', '₹25K-₹50K, 10-14 days']
        },
        {
          icon: '💻',
          title: 'Founder Website',
          description: 'Convert visitors into early users and investors',
          points: ['High-converting landing pages', 'Product showcase sites', 'Investor pitch-ready', 'Mobile-first design', '₹30K-₹75K, 2-3 weeks']
        },
        {
          icon: '⚡',
          title: 'MVP Development',
          description: 'Go from idea to testable product fast',
          points: ['Web app development', 'SaaS dashboards', 'Payment integration', 'User-friendly interfaces', '₹50K-₹150K, 3-6 weeks']
        },
        {
          icon: '🚀',
          title: 'Launch Strategy',
          description: 'Maximize your launch impact',
          points: ['Pre-launch buzz campaigns', 'Product hunt optimization', 'Social media growth', 'Media outreach']
        },
        {
          icon: '🤖',
          title: 'Growth Systems',
          description: 'Acquire and retain users efficiently',
          points: ['WhatsApp automation', 'Email sequences', 'Social media automation', 'Lead qualification']
        }
      ]
    },
    {
      eyebrow: 'Success Stories',
      title: 'Startup Launches We\'ve Led',
      subtitle: 'Real startups, real results',
      type: 'list',
      items: [
        {
          title: 'HealthTech SaaS Startup',
          description: 'Complete branding, investor-ready website, LinkedIn strategy. Raised ₹1.5Cr in seed funding.',
          points: ['Used our materials in pitch deck']
        },
        {
          title: 'E-commerce D2C Brand',
          description: 'Full brand development, Shopify store, Instagram growth system. ₹8L revenue in first month.',
          points: ['25% CAC reduction with our automation']
        },
        {
          title: 'SaaS Tool for Creators',
          description: 'Unique brand positioning, viral landing page, Product Hunt launch. #1 Product of the Day.',
          points: ['2000+ early users in week one']
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How fast can you launch?',
      answer: 'Minimum 4 weeks. With clear requirements and responsive feedback, we can do it faster.'
    },
    {
      question: 'What if we don\'t have a big budget?',
      answer: 'Perfect. We have starter packages designed for bootstrapped startups.'
    },
    {
      question: 'Can we scale from a small package to bigger projects?',
      answer: 'Yes. Many clients start with branding and add development later as they grow.'
    },
    {
      question: 'Do you help with go-to-market strategy?',
      answer: 'Yes. Our Launch Lab includes positioning, launch campaigns, and growth setup.'
    }
  ];

  return (
    <SEOLandingPage
      seoTitle="Creative Agency for Startups in India | Launch Faster with Xuro"
      seoDescription="Full-service creative agency for startups. Branding, web design, development, automation & launch strategy. Turn your idea into a high-performing business in weeks."
      seoKeywords="creative agency for startups India, startup branding agency, startup web design"
      seoPath="/creative-agency-startups"
      heroHeadline="The Creative Agency Built for Startups"
      heroSubheading="From brand identity to product launch—we handle the creative complexity so you can focus on traction."
      heroCTA="Let's Launch Your Startup"
      sections={sections}
      faqItems={faqItems}
      finalCTA={{
        headline: 'Ready to Launch?',
        description: 'Let\'s turn your idea into a real business.'
      }}
    />
  );
};

export default CreativeAgencyForStartups;
