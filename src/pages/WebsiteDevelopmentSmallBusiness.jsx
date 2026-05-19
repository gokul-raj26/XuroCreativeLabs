import SEOLandingPage from './SEOLandingPageTemplate';

const WebsiteDevelopmentSmallBusiness = () => {
  const sections = [
    {
      eyebrow: 'Your Website Should',
      title: 'Your Website Should Make You Money',
      subtitle: 'Professional websites for small businesses. Built for conversion. Affordable. Fast.',
      type: 'grid',
      items: [
        {
          icon: '🌐',
          title: 'Professional Design',
          description: 'Modern, mobile-first design that builds trust',
          points: ['Professional branding', 'Fast loading speeds', 'Mobile-optimized', 'Instant credibility']
        },
        {
          icon: '🔍',
          title: 'Google Search Visibility',
          description: 'Show up when customers search for you',
          points: ['SEO optimization', 'Local search ranking', 'Free organic traffic', '40%+ traffic in 6 months']
        },
        {
          icon: '🛒',
          title: 'Conversion Tools',
          description: 'Turn visitors into customers',
          points: ['Clear CTAs', 'Contact forms', 'WhatsApp integration', 'Customer testimonials']
        },
        {
          icon: '📊',
          title: 'Analytics & Insights',
          description: 'Understand your customers',
          points: ['Visitor tracking', 'Behavior analytics', 'Conversion metrics', 'Data-driven decisions']
        }
      ]
    },
    {
      eyebrow: 'Website Types',
      title: 'Types of Websites We Build',
      subtitle: 'Perfect for every business',
      type: 'grid',
      items: [
        {
          icon: '🏢',
          title: 'Business Website',
          description: 'For: Consulting, services, local shops, salons',
          points: ['₹25K-₹50K', '2-3 weeks', 'About page', 'Services showcase', 'Contact forms']
        },
        {
          icon: '🛍️',
          title: 'E-commerce Store',
          description: 'For: Selling products, D2C brands',
          points: ['₹50K-₹100K', '3-4 weeks', 'Product catalog', 'Payment integration', 'Order management']
        },
        {
          icon: '📄',
          title: 'Landing Page',
          description: 'For: Campaigns, lead generation',
          points: ['₹15K-₹30K', '1 week', 'High conversion design', 'Email capture', 'Analytics tracking']
        },
        {
          icon: '📱',
          title: 'Portfolio Site',
          description: 'For: Photographers, designers, contractors',
          points: ['₹20K-₹40K', '10-14 days', 'Image galleries', 'Project showcase', 'Social integration']
        }
      ]
    },
    {
      eyebrow: 'Why Us',
      title: 'Why Small Businesses Love Xuro',
      subtitle: 'Affordable, fast, conversion-focused',
      type: 'list',
      items: [
        {
          title: '💰 Affordable Pricing',
          description: 'Starting at just ₹25,000. No hidden costs. Fixed pricing.'
        },
        {
          title: '⚡ Fast Turnaround',
          description: 'Launch in 2-3 weeks, not 2-3 months.'
        },
        {
          title: '🎯 Conversion-Focused',
          description: 'Every design choice is about converting visitors.'
        },
        {
          title: '🔍 SEO-Ready',
          description: 'Optimized for Google from day one.'
        },
        {
          title: '🛠️ Easy to Use',
          description: 'Update content yourself. No coding needed.'
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Can I update the website myself?',
      answer: 'Yes. We include training on how to update content, add products, or make changes yourself.'
    },
    {
      question: 'What if I need changes after launch?',
      answer: 'We include 30 days of free support. After that, small updates are ₹2,000-₹5,000 each.'
    },
    {
      question: 'Does it help with Google rankings?',
      answer: 'Yes. We optimize for SEO from day one. Most clients see significant visibility within 3-6 months.'
    },
    {
      question: 'What about email hosting?',
      answer: 'Included with professional email setup (yourname@yourbusiness.com).'
    }
  ];

  return (
    <SEOLandingPage
      seoTitle="Website Development for Small Businesses India | Fast, Affordable, Results-Driven"
      seoDescription="Professional website development for small businesses. Custom sites, e-commerce, landing pages. Get online, get customers. From ₹25,000. 10+ years combined experience."
      seoKeywords="website development small business India, affordable website design, small business website"
      seoPath="/website-development-small-business"
      heroHeadline="Your Website Should Make You Money, Not Cost You Money"
      heroSubheading="Professional websites for small businesses. Built for conversion. Affordable. Fast. No hidden costs."
      heroCTA="Get Your Website Now"
      sections={sections}
      faqItems={faqItems}
      finalCTA={{
        headline: 'Let\'s Build Your Website',
        description: 'You deserve a website that brings in customers.'
      }}
    />
  );
};

export default WebsiteDevelopmentSmallBusiness;
