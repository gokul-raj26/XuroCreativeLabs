import SEOLandingPage from './SEOLandingPageTemplate';

const FastWebsiteDevelopment = () => {
  const sections = [
    {
      eyebrow: 'The Speed Advantage',
      title: 'Launch Your Website in 2 Weeks, Not 2 Months',
      subtitle: 'Fast website development without cutting corners',
      type: 'grid',
      items: [
        {
          icon: '⚡',
          title: 'Streamlined Process',
          description: 'No unnecessary meetings or delays',
          points: ['Direct communication', 'Parallel design & development', 'Pre-built components', 'Proven workflows']
        },
        {
          icon: '📋',
          title: 'Clear Requirements',
          description: 'No scope creep mid-project',
          points: ['Upfront clarity', 'Structured feedback rounds', 'Defined deliverables', 'No guessing']
        },
        {
          icon: '🔧',
          title: 'Technical Efficiency',
          description: 'Modern tech stack for speed',
          points: ['React & Next.js', 'Reusable components', 'Automated testing', 'Modern practices']
        },
        {
          icon: '👥',
          title: 'Dedicated Team',
          description: 'Your project gets full focus',
          points: ['Core team assigned', 'Daily standups', 'Quick decisions', 'No context switching']
        }
      ]
    },
    {
      eyebrow: 'Website Types',
      title: 'Fast Website Development for Every Need',
      subtitle: 'Speed without sacrificing quality',
      type: 'grid',
      items: [
        {
          icon: '🚀',
          title: 'MVP Website',
          description: 'For: Pre-launch startups, validation',
          points: ['₹30K-₹50K', '2 weeks', 'Landing page', 'High conversion', 'Mobile responsive']
        },
        {
          icon: '💼',
          title: 'Business Website',
          description: 'For: Service businesses, professional services',
          points: ['₹40K-₹65K', '2.5 weeks', '5-10 pages', 'CMS included', 'SEO setup']
        },
        {
          icon: '🛍️',
          title: 'E-commerce Store',
          description: 'For: Product selling, D2C brands',
          points: ['₹60K-₹100K', '3 weeks', 'Product catalog', 'Payment integration', 'Inventory system']
        },
        {
          icon: '⚙️',
          title: 'Web App',
          description: 'For: Complex applications, SaaS',
          points: ['₹80K-₹200K', '3-6 weeks', 'Custom features', 'Database design', 'API development']
        }
      ]
    },
    {
      eyebrow: 'Why Fast Works',
      title: 'How We Build Fast Without Sacrificing Quality',
      subtitle: '50+ websites built. We know what works.',
      type: 'list',
      items: [
        {
          title: '50+ Sites Built',
          description: 'Patterns we repeat save weeks. We know every pitfall.'
        },
        {
          title: 'Parallel Execution',
          description: 'Design and development happen at same time, not sequentially.'
        },
        {
          title: 'Structured Feedback',
          description: 'Feedback loops that move projects forward, not backward.'
        },
        {
          title: 'Modern Tech Stack',
          description: 'React/Next.js = faster to build, deploy, and optimize.'
        },
        {
          title: 'Experienced Team',
          description: 'Done this 100+ times. Confident in what we build.'
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How do you build fast without sacrificing quality?',
      answer: '50+ sites built + parallelized process + proven tech = speed without cutting corners.'
    },
    {
      question: 'What if we need changes mid-project?',
      answer: 'Small changes are fine. Scope changes delay by 1 week per major change. That\'s why we lock requirements upfront.'
    },
    {
      question: 'Is the site maintainable after launch?',
      answer: 'Yes. Clean code, documentation, and you can update content yourself. We provide 30 days support.'
    },
    {
      question: 'What about SEO if we\'re rushing?',
      answer: 'SEO is built-in. Technical SEO, meta tags, structure all done right the first time.'
    },
    {
      question: 'Can you integrate with existing tools?',
      answer: 'Likely yes. We integrate with Shopify, payment gateways, CRMs, etc. Let us know upfront.'
    }
  ];

  return (
    <SEOLandingPage
      seoTitle="Fast Website Development Company India | Launch in 2 Weeks Not 2 Months"
      seoDescription="Fast website development without compromising quality. 2-3 weeks delivery, ₹30,000-₹100,000. Custom sites for startups, SMBs, enterprises."
      seoKeywords="fast website development, quick website builder India, fast web development company"
      seoPath="/fast-website-development"
      heroHeadline="Launch Your Website in 2 Weeks, Not 2 Months"
      heroSubheading="Fast website development without cutting corners. High-performance sites built right the first time. Perfect for startups who need to move."
      heroCTA="Get Your Website Fast"
      sections={sections}
      faqItems={faqItems}
      finalCTA={{
        headline: 'Ready to Launch Fast?',
        description: 'Your market window won\'t wait. Let\'s move.'
      }}
    />
  );
};

export default FastWebsiteDevelopment;
