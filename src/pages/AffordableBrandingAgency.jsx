import SEOLandingPage from './SEOLandingPageTemplate';

const AffordableBrandingAgency = () => {
  const sections = [
    {
      eyebrow: 'The Problem',
      title: 'Premium Brand Identity Doesn\'t Have to Cost a Fortune',
      subtitle: 'Professional branding starting at ₹20,000',
      type: 'grid',
      items: [
        {
          icon: '🎨',
          title: 'Logo Design',
          description: 'Custom, unique to your business',
          points: ['Custom logo design', 'Works on all mediums', 'Timeless design', '3 revision rounds']
        },
        {
          icon: '🎯',
          title: 'Brand Identity',
          description: 'Complete visual system',
          points: ['Color palette', 'Typography', 'Imagery style', 'Icon system']
        },
        {
          icon: '📋',
          title: 'Brand Guidelines',
          description: 'Professional documentation',
          points: ['Logo usage rules', 'Color codes', 'Font specs', 'Tone of voice']
        },
        {
          icon: '📱',
          title: 'Ready-to-Use Assets',
          description: 'Start using your brand immediately',
          points: ['All file formats', 'Social templates', 'Email signature', 'Business card design']
        }
      ]
    },
    {
      eyebrow: 'Packages',
      title: 'Affordable Branding Packages',
      subtitle: 'Quality branding at fair prices',
      type: 'grid',
      items: [
        {
          icon: '⭐',
          title: 'Starter Brand',
          description: 'For: Solopreneurs, freelancers, side hustles',
          points: ['₹20,000', 'Custom logo', 'Color palette', 'Logo files', '10-14 days']
        },
        {
          icon: '🎯',
          title: 'Growth Brand',
          description: 'For: Small businesses, growing startups',
          points: ['₹35,000', 'Full brand system', 'Brand guidelines', 'Social templates', '14-21 days']
        },
        {
          icon: '🚀',
          title: 'Premium Brand',
          description: 'For: Competitive markets, premium positioning',
          points: ['₹60,000', 'Brand strategy', 'Messaging', 'Icon system', '21-28 days']
        },
        {
          icon: '💎',
          title: 'Enterprise Brand',
          description: 'For: Complex needs, full ecosystem',
          points: ['₹100K+', 'Brand research', 'Complete system', 'Custom scope', 'Ongoing support']
        }
      ]
    },
    {
      eyebrow: 'Why Us',
      title: 'Why We\'re Different',
      subtitle: 'Affordable but not cheap',
      type: 'list',
      items: [
        {
          title: 'Proven Process',
          description: '100+ brands built. We know what works.'
        },
        {
          title: 'Quality Over Quantity',
          description: 'Selective with projects. Not outsourced or offshore.'
        },
        {
          title: 'Efficient Delivery',
          description: 'Streamlined process saves you money, not quality.'
        },
        {
          title: 'Real Results',
          description: 'Brands that win work and impress customers.'
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: '₹20,000 seems cheap for branding. Is it actually good?',
      answer: 'Yes. We\'re efficient (not expensive overhead), selective with projects (quality over quantity), and experienced (100+ brands built).'
    },
    {
      question: 'Can I make changes to the brand later?',
      answer: 'Yes. We include revisions until you\'re happy. After that, small tweaks are ₹1K-₹3K each.'
    },
    {
      question: 'What if we outgrow our brand?',
      answer: 'Good brands scale with you. If you eventually need to refresh, that\'s much cheaper than full rebranding.'
    },
    {
      question: 'Will you help implement the brand?',
      answer: 'We provide guidelines and templates. Implementation (website, social media, etc.) is a separate service.'
    }
  ];

  return (
    <SEOLandingPage
      seoTitle="Affordable Branding Agency India | Premium Brand Identity from ₹20,000"
      seoDescription="Budget-friendly branding agency. Logo design, brand identity, visual guidelines. Get a premium brand without premium prices. Trusted by 50+ Indian brands."
      seoKeywords="affordable branding agency India, cheap logo design, budget branding, startup branding"
      seoPath="/affordable-branding-agency"
      heroHeadline="Premium Brand Identity Doesn't Have to Cost a Fortune"
      heroSubheading="Professional branding starting at ₹20,000. No compromise on quality. No hidden charges. Just smart design for growing businesses."
      heroCTA="Start Your Brand Today"
      sections={sections}
      faqItems={faqItems}
      finalCTA={{
        headline: 'Ready to Build Your Brand?',
        description: 'Stop looking amateur. Start looking professional.'
      }}
    />
  );
};

export default AffordableBrandingAgency;
