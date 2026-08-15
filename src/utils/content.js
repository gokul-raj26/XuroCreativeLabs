import { organizationSchema } from "../seo/schema";
import diva from "../assets/diva.png";
import gokul from "../assets/Gokul.png";
import ja from "../assets/ja.png";
import Guna from "../assets/guna.png";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: "140+", label: "Projects Launched" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "6+", label: "Years of Excellence" },
];

export const timeline = [
  {
    year: "2021",
    tagline: "Building trust through freelancing",
    text: "We started our journey as freelancers, taking on projects one by one and building trust with our clients through quality work and reliability.",
  },
  {
    year: "2023",
    tagline: "Growing Into a Team",
    text: "As demand grew, we expanded to a team of 4 members. Working together, we realized we had something special—a collaborative spirit combined with strong individual skills. We began structuring ourselves as a proper agency, establishing processes and standards that helped us scale our capabilities and deliver better results.",
  },
  {
    year: "2024",
    tagline: "Launching Xuro Creative Labs",
    text: "We officially launched Xuro Creative Labs, transforming years of freelance experience into a structured creative and technology agency focused on helping businesses grow through design, technology, content, and automation.",
  },
  {
    year: "Now",
    tagline: "Empowering Talent. Building the Future.",
    text: "we operate as a startup focused on connecting quality freelancers with meaningful projects while empowering the next generation of creative professionals.",
  },
];

export const services = [
  {
    slug: "ai-automation-lab",
    title: "AI Automation Lab",
    tagline: "Automating workflows. Amplifying results.",
    desc: "We design intelligent systems that automate workflows, enhance customer experience, and reduce manual effort for businesses and creators.",
    points: [
      "AI Chatbot Development",
      "Business Process Automation",
      "WhatsApp / Instagram Automation",
      "Creator Workflow Systems",
      "Lead Generation Automation",
    ],
  },
  {
    slug: "brand-experience-lab",
    title: "Brand Experience Lab",
    tagline: "Crafting memorable brands and digital experiences.",
    desc: "We craft high-impact brand identities and user experiences that turn visitors into customers and ideas into memorable brands.",
    points: [
      "Brand Identity & Logo Systems",
      "Visual Identity Design",
      "UX/UI Design",
      "Brand Guidelines",
    ],
  },
  {
    slug: "product-tech-lab",
    title: "Product Tech Lab",
    tagline: "Engineering scalable products built for growth.",
    desc: "We build fast, scalable digital products engineered to support growth, performance, and long-term success.",
    points: [
      "High-Performance Websites",
      "Web & Mobile Applications",
      "SaaS Platforms & Dashboards",
      "API Development & Backend Systems",
    ],
  },
  {
    slug: "content-growth-lab",
    title: "Content Growth Lab",
    tagline: "Transforming attention into engagement and revenue.",
    desc: "We help you attract, engage, and convert your audience through strategic content and growth-driven systems.",
    points: [
      "Short-form Content (Reels / Shorts)",
      "Video Editing & Production",
      "Social Media Growth Systems",
      "Personal Branding Strategy",
    ],
  },
  {
    slug: "launch-lab",
    title: "Launch Lab",
    tagline: "From concept to launch, faster and smarter.",
    desc: "We help you turn ideas into real products by handling everything from branding to launch and growth setup.",
    points: [
      "MVP Development",
      "Startup Branding",
      "Landing Pages & Funnels",
      "Go-to-Market Strategy",
    ],
  },
];

export const projects = [
  {
    id: "01",
    slug: "techpulse-rebrand",
    category: "Branding",
    name: "TechPulse Rebrand",
    summary: "A complete identity overhaul for a SaaS growth push.",
    tagline: "From legacy to cutting-edge—TechPulse's full visual renaissance.",
    description:
      "TechPulse needed a complete identity refresh to match their market position. We created a bold, modern brand system that communicates innovation, speed, and reliability across all touchpoints.",
    challenge:
      "TechPulse was a solid product with an outdated visual identity. They were losing market share to newer competitors despite superior technology. The rebrand had to signal evolution without alienating existing users.",
    solution:
      "We designed a neon-forward identity with dynamic typography and a modular design system. The result: 40% increase in demo requests within 3 months of launch.",
    impact: [
      "40% increase in demo requests",
      "2.3x improvement in brand recall",
      "Expanded product line launch readiness",
      "Enterprise client acquisition",
    ],
    galleryItems: [
      {
        image:
          "https://images.unsplash.com/photo-1545235617-7465005b4eea?w=500&h=500&fit=crop",
        text: "Logo Design",
      },
      {
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
        text: "Brand System",
      },
      {
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
        text: "Marketing Materials",
      },
      {
        image:
          "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&h=500&fit=crop",
        text: "Visual Guide",
      },
      {
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
        text: "Brand Application",
      },
      {
        image:
          "https://images.unsplash.com/photo-1545235617-7465005b4eea?w=500&h=500&fit=crop",
        text: "Design Elements",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    projectLinks: [
      { title: "Website", url: "https://www.techpulse.io", icon: "🌐" },
      { title: "Behance Portfolio", url: "https://behance.net", icon: "🎨" },
      { title: "Case Study", url: "#", icon: "📄" },
    ],
  },
  {
    id: "02",
    slug: "launchpad-campaign",
    category: "Campaign",
    name: "Launchpad Campaign",
    summary: "A multi-channel launch with motion-first storytelling.",
    tagline: "Multi-channel momentum. From teaser to conversion.",
    description:
      "Launchpad's product launch campaign needed to generate massive buzz. We designed an integrated motion-first campaign spanning TikTok, Instagram Reels, YouTube, and web.",
    challenge:
      "Launchpad had 2 weeks to launch. They needed to reach Gen Z and millennial audiences with authentic, scroll-stopping creative. Budget was lean but impact had to be massive.",
    solution:
      "We created a 360° campaign with 12 hero pieces of motion content, a landing page, and influencer seeding. The campaign hit 2M views in week one and generated 15K qualified leads.",
    impact: [
      "2M+ views in week one",
      "15K qualified leads generated",
      "8.2% CTR (industry avg: 2.1%)",
      "Sold out in 3 days",
    ],
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    projectLinks: [
      {
        title: "Live Website",
        url: "https://launchpad-campaign.com",
        icon: "🌐",
      },
    ],
  },
  {
    id: "03",
    slug: "orbis-digital-platform",
    category: "Web Platform",
    name: "Orbis Digital Platform",
    summary: "A fast and modular product site with enterprise UX.",
    tagline: "Enterprise SaaS meets delightful design.",
    description:
      "Orbis needed a next-gen product website that balanced complex feature architecture with intuitive user experience. We built a modular, performance-first platform.",
    challenge:
      "Orbis serves enterprise clients with complex product features. The site needed to educate, convert, and support sales without overwhelming visitors. Load time and accessibility were critical.",
    solution:
      "We built a modular React application with Framer Motion animations, optimized images, and a clear information hierarchy. The site loads in <2s and converts at 12% (industry avg: 2.5%).",
    impact: [
      "<2s load time (LCP)",
      "12% conversion rate",
      "Zero accessibility violations",
      "$2.3M pipeline generated",
    ],
    galleryItems: [
      {
        image:
          "https://images.unsplash.com/photo-1633356714697-de8d3e7c88d5?w=500&h=500&fit=crop",
        text: "Home Page",
      },
      {
        image:
          "https://images.unsplash.com/photo-1579762294602-06617f1514cb?w=500&h=500&fit=crop",
        text: "Feature Section",
      },
      {
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
        text: "Pricing Layout",
      },
      {
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
        text: "Dashboard UI",
      },
      {
        image:
          "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&h=500&fit=crop",
        text: "Mobile View",
      },
      {
        image:
          "https://images.unsplash.com/photo-1633356714697-de8d3e7c88d5?w=500&h=500&fit=crop",
        text: "Components",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    projectLinks: [
      { title: "Live Site", url: "https://orbis-digital.io", icon: "🌐" },
      { title: "GitHub Repo", url: "https://github.com", icon: "👨‍💻" },
      { title: "Dev Story", url: "#", icon: "📖" },
    ],
  },
  {
    id: "04",
    slug: "auracraft-product-line",
    category: "Packaging",
    name: "AuraCraft Product Line",
    summary: "Premium shelf language for a new personal care line.",
    tagline: "Luxury packaging that stops traffic.",
    description:
      "AuraCraft is a new premium skincare line targeting conscious consumers. We created a cohesive visual system across 8 SKUs that communicates luxury, sustainability, and efficacy.",
    challenge:
      "AuraCraft needed to stand out on premium retail shelves against established players. Packaging had to communicate sustainability without sacrificing luxury perception.",
    solution:
      "We designed a minimalist aesthetic with sustainable materials, bold typography, and a modular grid system. Each product maintains visual unity while showcasing unique benefits.",
    impact: [
      "99% shelf pick-up rate in testing",
      "Luxury retail partnerships secured",
      "Sustainability messaging clarity",
      "40K units sold in first month",
    ],
    galleryItems: [
      {
        image:
          "https://images.unsplash.com/photo-1556640996-e52b88a62ffd?w=500&h=500&fit=crop",
        text: "Package Design 1",
      },
      {
        image:
          "https://images.unsplash.com/photo-1596401643398-a3c18c1b8dfa?w=500&h=500&fit=crop",
        text: "Package Design 2",
      },
      {
        image:
          "https://images.unsplash.com/photo-1599599810694-200fc297e8c4?w=500&h=500&fit=crop",
        text: "Label Details",
      },
      {
        image:
          "https://images.unsplash.com/photo-1556640996-e52b88a62ffd?w=500&h=500&fit=crop",
        text: "Product Line",
      },
      {
        image:
          "https://images.unsplash.com/photo-1596401643398-a3c18c1b8dfa?w=500&h=500&fit=crop",
        text: "Sustainability",
      },
      {
        image:
          "https://images.unsplash.com/photo-1599599810694-200fc297e8c4?w=500&h=500&fit=crop",
        text: "Packaging System",
      },
    ],
    projectLinks: [
      { title: "Live Website", url: "https://auracraft.com", icon: "🌐" },
    ],
  },
  {
    id: "05",
    slug: "neobank-content-stack",
    category: "Social System",
    name: "NeoBank Content Stack",
    summary: "A full social design system for weekly campaign output.",
    tagline: "Consistency at scale. Content that converts.",
    description:
      "NeoBank needed a repeatable content system to maintain brand presence across channels with minimal creative overhead. We designed a modular framework for 50+ pieces monthly.",
    challenge:
      "NeoBank's in-house team was stretched. They needed a system that allowed non-designers to create on-brand content quickly while maintaining quality and consistency.",
    solution:
      "We created a complete design system with templates, component library, and usage guidelines. Training took 2 hours. Now they produce 50+ pieces monthly, 100% on-brand.",
    impact: [
      "50+ pieces produced monthly",
      "100% brand consistency maintained",
      "75% faster content creation",
      "23% increase in social engagement",
    ],
    galleryItems: [
      {
        image:
          "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=500&h=500&fit=crop",
        text: "Template Set 1",
      },
      {
        image:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=500&fit=crop",
        text: "Social Posts",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
        text: "Design System",
      },
      {
        image:
          "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=500&h=500&fit=crop",
        text: "Brand Elements",
      },
      {
        image:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=500&fit=crop",
        text: "Component Library",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
        text: "Usage Guide",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/wZZ7oFKsKzY",
    projectLinks: [
      {
        title: "Follow NeoBank",
        url: "https://instagram.com/neobank",
        icon: "📱",
      },
      { title: "Design Guide", url: "#", icon: "📚" },
      { title: "Template Access", url: "#", icon: "🎨" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Xuro completely transformed our brand identity. The process felt sharp, and outcomes exceeded expectations.",
    name: "Aryan Kapoor",
    role: "CEO, TechPulse",
    initials: "AK",
  },
  {
    quote:
      "Their motion design team is world class. The campaign film passed two million views in week one.",
    name: "Neha Mehta",
    role: "Marketing Head, Launchpad",
    initials: "NM",
  },
  {
    quote:
      "Working with Xuro feels like having a top creative agency on call. They deliver at high speed without compromise.",
    name: "Rahul Sharma",
    role: "Founder, Orbis Digital",
    initials: "RS",
  },
];

export const teamMembers = [
  {
    name: "Gokul Raj ",
    role: "Founder & Strategy Lead",
    image: gokul,
    linkedin: "https://www.linkedin.com/in/gokulraj-gimzr/",
    instagram: "https://www.instagram.com/gokul.docx/",
  },
  {
    name: "Divakar",
    role: "Creative Innovation Lead",
    image: diva,
    linkedin: "https://www.linkedin.com/in/divakargwork/",
    instagram: "https://www.instagram.com/divakarjk/",
  },
  {
    name: "Jayashree ",
    role: "Client Success & Finance Lead",
    image: ja,
    linkedin: "https://www.linkedin.com/in/jayashreevenkatesan/",
    instagram: "https://www.instagram.com/_jayashree_24/",
  },

  {
    name: "Gunasekar",
    role: "Growth & Operations Lead",
    image: Guna,
    linkedin: "https://www.linkedin.com/in/gunasekar-v-3a4270227/",
    instagram: "https://www.instagram.com/_._.comrade_.boy_._/",
  },
];

export const contactLinks = {
  whatsapp:
    "https://wa.me/918122016648?text=Hi%20Xuro%20CreativeLabs%2C%20I%20want%20to%20discuss%20a%20new%20project.",
  telegram: "https://t.me/xurocreativelabs",
  email: "xurocreativelabs@gmail.com",
};

export const faqs = [
  {
    question: "How long does a project typically take?",
    answer:
      "It depends on the scope. A brand identity project takes 7–14 days. A website takes 2–4 weeks. An automation setup can take 1–2 weeks. We'll give you a clear timeline before we start.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. While we're based in India, we work with clients globally. All communication happens remotely via WhatsApp, email, or video call.",
  },
  {
    question: "What information do I need to share to get started?",
    answer:
      "Just tell us what you're trying to solve. We'll guide you through the rest with a short discovery conversation. You don't need to arrive with a perfect brief.",
  },
  {
    question: "Do you offer ongoing retainer services?",
    answer:
      "Yes. For content, automation maintenance, and design support, we offer monthly retainer arrangements. Ask us about it during your first conversation.",
  },
  {
    question: "What's the minimum budget to work with Xuro?",
    answer:
      "We work with budgets of all sizes. We'll always be upfront about what's achievable within your budget and won't overpromise.",
  },
];

export const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Brand & Experience Lab", to: "/services" },
      { label: "Product & Tech Lab", to: "/services" },
      { label: "Content & Growth Lab", to: "/services" },
      { label: "Launch Lab", to: "/services" },
      { label: "AI & Automation Lab", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Testimonials", to: "/projects" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export const orgSchemaScript = JSON.stringify(organizationSchema);
