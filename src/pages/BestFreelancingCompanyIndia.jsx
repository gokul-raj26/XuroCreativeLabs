import SEOLandingPage from './SEOLandingPageTemplate';

const BestFreelancingCompanyIndia = () => {
  const sections = [
    {
      eyebrow: 'Why Choose Us',
      title: 'Why Choose Xuro as Your Freelancing Partner',
      subtitle: 'Trust, quality, and affordability combined',
      type: 'grid',
      items: [
        {
          icon: '✓',
          title: 'Trust & Track Record',
          description: 'Proven experience with consistent quality delivery',
          points: ['50+ successful projects', '98% client satisfaction', 'Founded 2023', 'Trusted by brands across India']
        },
        {
          icon: '⚡',
          title: 'Freelancer Flexibility',
          description: 'Like top freelancing companies, we adapt to your needs',
          points: ['Rapid turnaround', 'Competitive pricing', 'Dedicated teams', 'Flexible engagement']
        },
        {
          icon: '🎯',
          title: 'Full-Spectrum Services',
          description: 'Everything under one roof',
          points: ['End-to-end brand development', 'Custom web development', 'AI & automation', 'Content & strategy']
        }
      ]
    },
    {
      eyebrow: 'Our Services',
      title: 'Freelancing Services We Offer',
      subtitle: 'Complete solutions for every business need',
      type: 'grid',
      items: [
        {
          icon: '🎨',
          title: 'Brand & Design',
          description: 'Affordable branding without compromising quality',
          points: ['Logo & brand identity design', 'UI/UX design', 'Social media assets', 'Brand guidelines', 'Starting at ₹15,000']
        },
        {
          icon: '💻',
          title: 'Web Development',
          description: 'Fast, custom websites that convert',
          points: ['Business websites', 'E-commerce stores', 'Landing pages', 'Web apps & dashboards', 'Starting at ₹25,000']
        },
        {
          icon: '🤖',
          title: 'Automation & AI',
          description: 'Save time, increase revenue',
          points: ['WhatsApp automation', 'AI chatbots', 'Workflow automation', 'Lead generation systems', 'Starting at ₹10,000/month']
        }
      ]
    },
    {
      eyebrow: 'Success Stories',
      title: 'Client Success Stories',
      subtitle: 'Real results from real businesses',
      type: 'list',
      items: [
        {
          title: 'TechPulse Rebrand',
          description: '"Xuro gave us a brand identity that matched our ambitions. Fast, professional, and affordable."',
          points: ['Founder, B2B SaaS startup']
        },
        {
          title: 'NeoBank Campaign',
          description: '"We needed a complete visual system in 2 weeks. They delivered, and it worked better than expected."',
          points: ['Marketing Lead, Fintech Startup']
        },
        {
          title: 'Local Clinic Automation',
          description: '"Our WhatsApp automation increased bookings by 40%. Best freelance investment we made."',
          points: ['Dr. Sharma, Multi-Clinic Chain']
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How much do your services cost?',
      answer: 'Depends on scope. We offer packages starting at ₹10,000 for automation, ₹15,000 for branding, ₹25,000 for web development. Custom quotes available after consultation.'
    },
    {
      question: 'How long does a project take?',
      answer: 'Typically 1-4 weeks depending on complexity. We prioritize quality delivery over artificial deadlines.'
    },
    {
      question: 'Do you provide support after delivery?',
      answer: 'Yes, 30 days of free support included. Extended support available on retainer.'
    },
    {
      question: 'Can you scale with us as we grow?',
      answer: 'Absolutely. Many clients start with one project and become long-term partners.'
    }
  ];

  return (
    <SEOLandingPage
      seoTitle="Best Freelancing Company in India | Xuro CreativeLabs"
      seoDescription="Top-rated freelancing company in India offering creative design, web development, automation & AI solutions. 50+ projects, 98% satisfaction. Get started today."
      seoKeywords="best freelancing company in India, top freelancers India, freelance agency India"
      seoPath="/best-freelancing-company-in-india"
      heroHeadline="The Best Freelancing Company in India for Design, Development & Automation"
      heroSubheading="Skip the agency markup. Get premium creative and technical execution with freelancer-level flexibility and speed."
      heroCTA="Start Your Project"
      sections={sections}
      faqItems={faqItems}
      finalCTA={{
        headline: 'Ready to Work with the Best?',
        description: 'Let\'s discuss your project. It\'s free.'
      }}
    />
  );
};

export default BestFreelancingCompanyIndia;
