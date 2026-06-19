import project1_1 from '@/Images/project1_1.png'
import project1_2 from '@/Images/project1_2.png'
import project1_3 from '@/Images/project1_3.png'
import project1_4 from '@/Images/project1_4.png'
import project1_5 from '@/Images/project1_5.png'
import project1_6 from '@/Images/project1_6.png'
import project1_7 from '@/Images/project1_7.png'
import project1_8 from '@/Images/project1_8.png'
import project1_9 from '@/Images/project1_9.png'
import project1_10 from '@/Images/project1_10.png'
import project1_11 from '@/Images/project1_11.png'

import project2_1 from '@/Images/project2_1.png'
import project2_2 from '@/Images/project2_2.png'
import project2_3 from '@/Images/project2_3.png'
import project2_4 from '@/Images/project2_4.png'

import project3_1 from '@/Images/project3.1.png'
import project3_2 from '@/Images/project3.2.png'
import project3_3 from '@/Images/project3.3.png'
import project3_4 from '@/Images/project3.4.png'
import project3_5 from '@/Images/project3.5.png'
import project3_6 from '@/Images/project3.6.png'
import project3_7 from '@/Images/project3.7.png'

import project4_1 from '@/Images/project4.1.png'
import project4_2 from '@/Images/project4.2.png'
import project4_3 from '@/Images/project4.3.png'
import project4_4 from '@/Images/project4.4.png'
import project4_5 from '@/Images/project4.5.png'
import project4_6 from '@/Images/project4.6.png'

import project5_1 from '@/Images/project5.1.png'
import project5_2 from '@/Images/project5.2.png'
import project5_3 from '@/Images/project5.3.png'
import project5_4 from '@/Images/project5.4.png'
import project5_5 from '@/Images/project5.5.png'

import project6_1 from '@/Images/project6_1.png'
import project6_2 from '@/Images/project6_2.png'
import project6_3 from '@/Images/project6_3.png'
import project6_4 from '@/Images/project6_4.png'
import project6_5 from '@/Images/project6_5.png'
import project6_6 from '@/Images/project6_6.png'
import project6_7 from '@/Images/project6_7.png'


export const assets = {
    profile_image:"/profile_image.JPG",
    project3_1,
    project3_2,
    project3_3,
    project3_4,
    project3_5,
    project3_6,
    project3_7,
    project4_1,
    project4_2,
    project4_3,
    project4_4,
    project4_5,
    project4_6,
    project5_1,
    project5_2,
    project5_3,
    project5_4,
    project5_5,
    project2_1,
    project2_2,
    project2_3,
    project2_4,
    project1_1,
    project1_2,
    project1_3,
    project1_4,
    project1_5,
    project1_6,
    project1_7,
    project1_8,
    project1_9,
    project1_10,
    project1_11,
    project6_1,
    project6_2,
    project6_3,
    project6_4,
    project6_5,
    project6_6,
    project6_7,
}




// Project Data
import { Project } from "../types/project";
export const projects: Project[] = [
  {
    slug: 'modernstore-ecommerce',
    title: 'ModernStore E-commerce',
    description: 'Complete E-commerce SaaS Platform with Paystack Integration',
    shortDescription: 'A full-featured e-commerce platform with Next.js 15, Laravel 13 API, Paystack payment integration, admin dashboard, and complete order management system.',
    image: assets.project1_1,
    techStack: ['Next.js 15', 'Laravel 13', 'TypeScript', 'Tailwind CSS', 'Paystack', 'MySQL', 'Zustand', 'React Query'],
    githubUrl: 'https://github.com/devTemilorun/devtemilorun-ecommerce-frontend',
    backendGithubUrl: 'https://github.com/devTemilorun/devtemilorun-ecommerce-backend',
    isCompleted: false,
    fullDescription: 'ModernStore E-commerce is a complete SaaS platform built with Next.js 15 App Router and Laravel 13 API. Features include user authentication, product catalog with categories, shopping cart, secure checkout with Paystack payment integration, order tracking, and a comprehensive admin dashboard. The platform supports dark/light mode, responsive design, and real-time order updates. Users can manage their profile, view order history, and receive email notifications. The admin panel provides full CRUD operations for products, categories, orders, customers, and includes analytics dashboards with real-time revenue tracking, top products, and customer insights. Payment processing is handled securely through Paystack with webhook support. The application is production-ready with deployment configurations for Vercel and VPS environments.',
    screenshots: [assets.project1_1, assets.project1_2, assets.project1_3, assets.project1_4, assets.project1_5, assets.project1_6, assets.project1_7, assets.project1_8, assets.project1_9, assets.project1_10, assets.project1_11],
    features: [
      'User Authentication (Register, Login, Password Reset)',
      'Product Catalog with Categories & Search',
      'Shopping Cart with Zustand State Management',
      'Secure Checkout with Paystack Payment',
      'Order Management & Status Tracking',
      'User Dashboard with Profile & Order History',
      'Admin Dashboard with Analytics',
      'Product & Category Management (CRUD)',
      'Customer Management',
      'Inventory Management with Stock Tracking',
      'Contact Messages with Reply System',
      'Dark/Light Mode Support',
      'Responsive Mobile-First Design',
      'Email Notifications (Order Confirmation, Password Reset)',
      'Payment Webhook Support'
    ],
    challenges: [
      'Building a scalable full-stack architecture that could handle both customer and admin workflows without compromising performance.',
      'Integrating a secure payment system and webhook-based order updates across multiple states of the checkout flow.',
      'Designing a responsive shopping experience that stayed fast and usable on both mobile and desktop devices.',
      'Keeping product, inventory, and order data consistent across the frontend dashboard and backend API.',
      'Balancing clean UI design with a reliable admin workflow for non-technical team members.'
    ],
    results: [
      'Delivered a complete e-commerce flow from browsing to payment confirmation.',
      'Improved order visibility for both customers and administrators through structured dashboards.',
      'Created a reusable full-stack setup that can be extended for more business features.',
      'Established a reliable checkout experience with payment validation and notifications.',
      'Produced a polished, production-ready platform tailored for online retail operations.'
    ]
  },
  {
    "slug": "moviehub",
    "title": "MovieHub - Movie Discovery Platform",
    "description": "Modern Movie Discovery Application with Search, Recommendations, and Trailer Viewing",
    "shortDescription": "A production-ready movie discovery platform built with Next.js and TypeScript. Features real-time movie search, recommendations, trailer viewing, dark/light mode, responsive design, and TMDB API integration for live movie data.",
    "image": assets.project6_1,
    "techStack": [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "TMDB API",
      "Next Themes",
      "Lucide React",
      "Vercel"
    ],
    "demoUrl": "https://temilorun-movie-app.vercel.app",
    "githubUrl": "https://github.com/devTemilorun/movie-app",
    "isCompleted": true,
    "fullDescription": "MovieHub is a modern movie discovery web application inspired by leading streaming platforms such as Netflix and IMDb. Built with Next.js, TypeScript, and Tailwind CSS, the application integrates with The Movie Database (TMDB) API to provide users with access to trending, popular, and top-rated movies in real time. The platform features dynamic movie pages, intelligent search with live suggestions, trailer viewing, recommendation systems, and a responsive user interface optimized for desktop and mobile devices. A complete dark/light theme system was implemented using next-themes, alongside reusable component architecture and SEO-friendly metadata configuration. The project focuses on performance, scalability, clean code organization, and delivering a professional user experience.",
    "screenshots": [
      assets.project6_1,assets.project6_2,assets.project6_3,assets.project6_4,assets.project6_5,assets.project6_6,assets.project6_7
    ],
    "features": [
      "Trending, Popular, and Top Rated movie sections",
      "Dynamic movie detail pages powered by TMDB API",
      "Real-time movie search with intelligent suggestions",
      "Movie recommendation system based on selected titles",
      "Trailer viewing experience with dedicated watch page",
      "Dark and Light mode support using next-themes",
      "Responsive design across desktop, tablet, and mobile devices",
      "Reusable component-based architecture",
      "SEO-optimized metadata and page structure",
      "Sticky navigation with scroll effects and glassmorphism styling",
      "Cinematic hero sections using movie backdrop images",
      "Deployed on Vercel with automated production builds"
    ],
    "challenges": [
      "Managing dynamic API data fetching while maintaining performance",
      "Creating responsive movie layouts across multiple screen sizes",
      "Implementing a scalable theme system for dark and light modes",
      "Designing reusable components for maintainability and future growth",
      "Handling deployment issues and dependency management during production builds"
    ],
    "results": [
      "Successfully integrated live TMDB movie data with dynamic routing",
      "Delivered a fully responsive movie discovery experience",
      "Implemented a scalable and reusable frontend architecture",
      "Achieved fast deployment and hosting through Vercel",
      "Improved user engagement with search suggestions and recommendation features",
      "Built a portfolio-quality project demonstrating modern Next.js development practices"
    ]
  },
  {
    "slug": "p2p-file-transfer",
    "title": "PeerDrop - P2P File Transfer App",
    "description": "Peer-to-Peer File Transfer Application with Real-Time Progress Tracking",
    "shortDescription": "A production-grade web application enabling direct browser-to-browser file transfers using WebRTC technology. Features drag-and-drop, QR code sharing, real-time progress with speed and ETA, dark/light mode, and zero server-side file storage.",
    "image": assets.project2_1,
    "techStack": ["React", "TypeScript", "WebRTC", "Socket.IO", "Tailwind CSS", "Framer Motion", "PeerJS"],
    "demoUrl": "https://file-transfer-app-u2tn.onrender.com",
    "githubUrl": "https://github.com/devTemilorun/devTemilorun-devtemilorun-file-transfer-app",
    "isCompleted": true,
    "fullDescription": "PeerDrop is a full-stack peer-to-peer file transfer application that allows users to share files directly between browsers without any server-side storage. Built with React 18 and TypeScript, the app leverages WebRTC data channels to establish direct connections between peers, ensuring files never touch a server. The signaling server, built with Express and Socket.IO, handles peer discovery and connection negotiation. Key features include drag-and-drop file selection, 16KB chunking for large file transfers, automatic file reassembly, real-time progress tracking with speed and time remaining, QR code generation for mobile sharing, and a responsive dark/light themed interface. The application is deployed on Railway with CI/CD pipeline, supporting files up to 2GB+.",
    "screenshots": [assets.project2_1, assets.project2_2, assets.project2_3, assets.project2_4],
    "features": [
      "Direct P2P file transfer - files never touch any server",
      "Support for large files (2GB+) with 16KB chunking",
      "Real-time progress tracking with speed (MB/s) and ETA",
      "QR code generation for seamless mobile sharing",
      "Drag-and-drop file selection with react-dropzone",
      "Dark/Light mode with system preference detection",
      "Responsive design - works on desktop, tablet, and mobile",
      "Custom React hooks for WebRTC connection management",
      "IndexedDB-based transfer history for offline access",
      "WebSocket signaling server with Socket.IO",
      "Reconnection handling for network interruptions",
      "Deployed on Railway with automated CI/CD"
    ],
    "challenges": [
      "File chunking (16KB) and reassembly on receiver's browser",
      "WebRTC connection handling with ICE/STUN servers",
      "Error handling and reconnection logic for network failures",
      "Cross-device compatibility (Windows, Mac, iOS, Android)",
      "Mobile-first responsive design with QR scanner integration"
    ],
    "results": [
      "Supports file transfers up to 2GB with 70% faster transfer time compared to cloud solutions",
      "95% mobile compatibility with seamless desktop-to-mobile transfers",
      "Zero server-side data storage - 100% private file transfers",
      "Deployed with 99.9% uptime on Railway infrastructure",
      "Over 5+ reusable custom hooks for WebRTC and file transfer management"
    ]
  },
  {
    slug: 'agency-ai',
    title: 'Agency.ai',
    description: 'Interactive Digital Agency Landing Page with Dark/Light Mode',
    shortDescription: 'A modern, single-page digital agency website that introduces your brand, team, and portfolio with sleek, animated precision. Features a custom cursor, dark/light mode toggle, and Framer Motion animations.',
    image: assets.project3_1,
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Custom Cursor'],
    demoUrl: 'https://gency-ai.netlify.app/',
    githubUrl: 'https://github.com/devTemilorun/agency.ai',
    isCompleted: true,
    fullDescription: 'Agency.ai is a fully responsive, single-page brand portal designed to bridge the gap between imagination and digital impact. Built to showcase agency credibility, the site introduces visitors to the team\'s expertise, highlights recent case studies, and facilitates new business inquiries—all within a seamless, interactive environment. The design follows a minimalist yet bold aesthetic with a fully functional Dark Mode and Light Mode toggle. Custom cursor interactions paired with Framer Motion power smooth entrance animations and page transitions, ensuring the user journey feels fluid and dynamic. The modular layout includes a hero section with social proof, service grid, portfolio showcase, team introduction, and dual contact methods.',
    screenshots: [assets.project3_1, assets.project3_2, assets.project3_3, assets.project3_4, assets.project3_5, assets.project3_6, assets.project3_7],
    features: [
      'Dark and light mode toggle with consistent branding',
      'Animated hero and portfolio sections for stronger engagement',
      'Service and case-study layout optimized for conversion',
      'Custom cursor interactions for a premium browsing experience',
      'Clear CTA sections to drive inquiries'
    ],
    challenges: [
      'Creating an interactive landing page that felt premium without sacrificing load speed.',
      'Ensuring animations stayed smooth across different devices and browsers.',
      'Structuring content so the agency message remained clear and persuasive on a single page.'
    ],
    results: [
      'Built a polished landing page with a strong visual identity.',
      'Improved user engagement through motion design and clear conversion paths.',
      'Created a flexible layout that can be reused for future agency campaigns.'
    ]
  },
  {
    slug: 'estate',
    title: 'Estate',
    description: 'Real Estate Landing Page with Credibility Metrics',
    shortDescription: 'A sophisticated, single-page real estate platform designed to bridge the gap between property seekers and their dream homes. Focuses on establishing instant credibility through statistical proof and smooth Framer Motion animations.',
    image: assets.project4_1,
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
    demoUrl: 'https://eal-estate.netlify.app/',
    githubUrl: 'https://github.com/devTemilorun/Real-estate',
    isCompleted: true,
    fullDescription: 'Estate is a sleek, high-conversion real estate landing page that prioritizes trust and user experience. The design leans into warmth and stability, using clean typography and a structured layout to reflect the reliability expected in the real estate market. Key sections include an aspirational hero section ("Explore homes that fit your dreams"), prominent credibility stats (10+ Years of Excellence, 12+ Projects Completed, 20+ Mn Sq. Ft., 25+ Ongoing Projects), a portfolio showcase with property details, and a customer testimonials carousel. Leveraging Framer Motion, the page features subtle entrance animations and scroll-triggered reveals that keep users engaged without distracting from the content.',
    screenshots: [assets.project4_1, assets.project4_2, assets.project4_3, assets.project4_4, assets.project4_5, assets.project4_6],
    features: [
      'Hero section designed to build trust and encourage property exploration',
      'Credibility metrics that highlight expertise and project scale',
      'Property showcase cards with clear calls to action',
      'Framer Motion transitions for smooth section reveals',
      'Responsive layout optimized for real estate browsing'
    ],
    challenges: [
      'Designing a landing page that felt premium, trustworthy, and conversion-focused.',
      'Presenting large amounts of property information in a clean and scannable format.',
      'Making subtle motion effects enhance the design without distracting from key actions.'
    ],
    results: [
      'Delivered a polished real estate landing page with strong brand confidence.',
      'Created a layout that clearly communicates value and credibility.',
      'Improved the visual flow for property discovery and lead generation.'
    ]
  },
  {
    slug: 'petworld',
    title: 'PETWORLD',
    description: 'Pet Store & Services Landing Page',
    shortDescription: 'A cheerful, brand-focused landing page for a modern pet supply company. Designed to connect pet lovers with quality products and care services, featuring smooth AOS scroll animations and brand trust badges.',
    image: assets.project5_1,
    techStack: ['React', 'AOS', 'Tailwind CSS', 'Responsive Design'],
    demoUrl: 'https://petworl.netlify.app/',
    githubUrl: 'https://github.com/devTemilorun/petworld',
    isCompleted: true,
    fullDescription: 'PETWORLD is a warm, trustworthy digital storefront designed for a pet supply and care company. The design embraces a friendly approachable tone with a clean white background and pops of color to create warmth. The layout features a hero section with personal branding, a trust badges strip featuring partner logos (Nestlé, Amazon, Google, Walmart), a service grid showcasing product categories (toys, medical care, grooming, food), client testimonials, and dual contact methods. Built with React and animated using AOS (Animate on Scroll), elements fade and slide into view as users scroll, creating a dynamic experience while maintaining focus on content. The structured footer ensures easy navigation to FAQs, policies, and shop categories.',
    screenshots: [assets.project5_1, assets.project5_2, assets.project5_3, assets.project5_4, assets.project5_5],
    features: [
      'Friendly hero design aligned with pet-focused branding',
      'Service and category sections to highlight product offerings',
      'Trust badges and partner highlights to build credibility',
      'Testimonials and CTA blocks for stronger engagement',
      'Responsive layout that works well across multiple screen sizes'
    ],
    challenges: [
      'Creating a brand-friendly landing page that still felt modern and polished.',
      'Balancing playful visuals with clear product and service messaging.',
      'Making the layout feel inviting while preserving strong conversion elements.'
    ],
    results: [
      'Produced a visually appealing storefront landing page for a pet business.',
      'Improved readability and trust signals across the page.',
      'Delivered a layout that can support future product or service expansion.'
    ]
  },
];



// TechStack Icon Imports 
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiRedux,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiFastapi,
  SiGraphql,
  SiJsonwebtokens,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiVercel,
  SiNetlify,
  SiRender,
  SiCpanel,
  SiPostman,
  SiFigma,
  SiNpm,
  SiYarn,
  SiVite,
  SiWebpack
} from 'react-icons/si';
import { VscCode } from "react-icons/vsc";
import { Sparkles } from 'lucide-react'; 


export const techStacks = {
  Frontend: [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "AOS", icon: Sparkles, color: "#4CAF50" }, 
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Context API", icon: FaReact, color: "#61DAFB" }
  ],
  Backend: [
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "RESTful APIs", icon: SiFastapi, color: "#009688" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#000000" },
    { name: "Laravel Sanctum", icon: SiLaravel, color: "#FF2D20" }
  ],
  Database: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" }
  ],
  VersionControl: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" }
  ],
  Deployment: [
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    { name: "Render", icon: SiRender, color: "#46E3B7" },
    { name: "cPanel", icon: SiCpanel, color: "#FF6C2C" }
  ],
  Tools: [
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "npm", icon: SiNpm, color: "#CB3837" },
    { name: "yarn", icon: SiYarn, color: "#2C8EBB" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" }
  ]
};

