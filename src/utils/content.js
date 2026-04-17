import { organizationSchema } from '../seo/schema';
import diva from '../assets/diva.png';
import gokul from '../assets/Gokul.png';
import ja from '../assets/ja.png';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
];

export const stats = [
  { value: '140+', label: 'Projects Launched' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '6+', label: 'Years of Excellence' },
  { value: '25+', label: 'Industry Awards' }
];

export const timeline = [
  {
    year: '2018',
    text: 'Founded with a vision to redefine creative agency execution in South Asia.'
  },
  {
    year: '2020',
    text: 'Expanded into digital strategy and motion design, serving 50+ clients.'
  },
  {
    year: '2023',
    text: 'Won 10 industry awards and launched our UX and web engineering division.'
  },
  {
    year: '2024',
    text: 'Reached 140+ projects and expanded globally with a 30+ expert team.'
  }
];

export const services = [
  {
    icon: 'BI',
    title: 'Brand & Experience Lab',
    tagline: 'Design that doesn’t just look good — it performs.',
    desc: 'We craft high-impact brand identities and user experiences that turn visitors into customers and ideas into memorable brands.',
    points: [
      'Brand Identity & Logo Systems',
      'Visual Identity Design',
      'UX/UI Design',
      'Brand Guidelines'
    ]
  },
  {
    
    title: 'Product & Tech Lab',
    tagline: 'Built for speed. Designed to scale.',
    desc: 'We build fast, scalable digital products engineered to support growth, performance, and long-term success.',
    points: [
      'High-Performance Websites',
      'Web & Mobile Applications',
      'SaaS Platforms & Dashboards',
      'API Development & Backend Systems'
    ]
  },
  {
    icon: 'CG',
    title: 'Content & Growth Lab',
    tagline: 'Attention → Engagement → Growth.',
    desc: 'We help you attract, engage, and convert your audience through strategic content and growth-driven systems.',
    points: [
      'Short-form Content (Reels / Shorts)',
      'Video Editing & Production',
      'Social Media Growth Systems',
      'Personal Branding Strategy'
    ]
  },
  {
    icon: 'LL',
    title: 'Launch Lab',
    tagline: 'From idea to launch — faster than ever.',
    desc: 'We help you turn ideas into real products by handling everything from branding to launch and growth setup.',
    points: [
      'MVP Development',
      'Startup Branding',
      'Landing Pages & Funnels',
      'Go-to-Market Strategy'
    ]
  },
  {
    icon: 'AA',
    title: 'AI & Automation Lab',
    tagline: 'Work smarter. Scale faster.',
    desc: 'We design intelligent systems that automate workflows, enhance customer experience, and reduce manual effort for businesses and creators.',
    points: [
      'AI Chatbot Development',
      'Business Process Automation',
      'WhatsApp / Instagram Automation',
      'Creator Workflow Systems',
      'Lead Generation Automation'
    ]
  }
];

export const projects = [
  { id: '01', category: 'Branding', name: 'TechPulse Rebrand', summary: 'A complete identity overhaul for a SaaS growth push.' },
  { id: '02', category: 'Campaign', name: 'Launchpad Campaign', summary: 'A multi-channel launch with motion-first storytelling.' },
  { id: '03', category: 'Web Platform', name: 'Orbis Digital Platform', summary: 'A fast and modular product site with enterprise UX.' },
  { id: '04', category: 'Packaging', name: 'AuraCraft Product Line', summary: 'Premium shelf language for a new personal care line.' },
  { id: '05', category: 'Social System', name: 'NeoBank Content Stack', summary: 'A full social design system for weekly campaign output.' }
];

export const testimonials = [
  {
    quote:
      'Xuro completely transformed our brand identity. The process felt sharp, and outcomes exceeded expectations.',
    name: 'Aryan Kapoor',
    role: 'CEO, TechPulse',
    initials: 'AK'
  },
  {
    quote:
      'Their motion design team is world class. The campaign film passed two million views in week one.',
    name: 'Neha Mehta',
    role: 'Marketing Head, Launchpad',
    initials: 'NM'
  },
  {
    quote:
      'Working with Xuro feels like having a top creative agency on call. They deliver at high speed without compromise.',
    name: 'Rahul Sharma',
    role: 'Founder, Orbis Digital',
    initials: 'RS'
  }
];

export const teamMembers = [
  {
    name: 'Diva',
    role: 'Creative Director',
    image: diva,
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com'
  },
  {
    name: 'Gokul',
    role: 'Brand Strategist',
    image: gokul,
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com'
  },
  {
    name: 'JA',
    role: 'Visual Designer',
    image: ja,
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com'
  }
];

export const contactLinks = {
  whatsapp:
    'https://wa.me/918122016648?text=Hi%20Xuro%20CreativeLabs%2C%20I%20want%20to%20discuss%20a%20new%20project.',
  telegram: 'https://t.me/xurocreativelabs',
  email: 'xurocreativelabs@gmail.com'
};

export const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'Brand Identity', to: '/services' },
      { label: 'Motion Design', to: '/services' },
      { label: 'Web Design', to: '/services' },
      { label: 'Social Content', to: '/services' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Testimonials', to: '/projects' },
      { label: 'Contact', to: '/contact' }
    ]
  }
];

export const orgSchemaScript = JSON.stringify(organizationSchema);
