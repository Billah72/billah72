// Skills Section Tech Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import reduxLogo from './assets/tech_logo/redux.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import pythonLogo from './assets/tech_logo/python.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import gsapLogo from './assets/tech_logo/gsap.png';

// Personal Information
export const personalInfo = {
  name: "Mottasim Billah",
  title: "Frontend & MERN Stack Developer",
  tagline: "Building scalable, high-performance & visually stunning web applications with modern technologies.",
  bio: "Passionate and detail-oriented Frontend & MERN Stack Developer with hands-on experience in engineering responsive, user-friendly, and accessible web experiences. Specializing in modern JavaScript, React.js, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. Dedicated to writing clean, maintainable code and bringing innovative ideas to life.",
  resumeUrl: "https://drive.google.com/file/d/1RwqOCrnv8lWldqm6zQQ6nBD9RKiBL2W-/view?usp=sharing",
  email: "muttasimbillah21@gmail.com",
  phone: "+880 1700-000000",
  location: "Dhaka, Bangladesh",
  socials: {
    github: "https://github.com/Billah72",
    linkedin: "https://www.linkedin.com/in/billah72/",
    facebook: "https://www.facebook.com/billah2005/",
  },
  stats: [
    { label: "Projects Completed", value: "12+" },
    { label: "Technologies Mastered", value: "16+" },
    { label: "Code Dedication", value: "100%" },
    { label: "Hands-on Experience", value: "2+ Years" },
  ]
};

// Categorized Skills
export const SkillsInfo = [
  {
    title: "Frontend Development",
    category: "frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo, level: "Advanced" },
      { name: "Next JS", logo: nextjsLogo, level: "Intermediate" },
      { name: "JavaScript", logo: javascriptLogo, level: "Advanced" },
      { name: "TypeScript", logo: typescriptLogo, level: "Intermediate" },
      { name: "Tailwind CSS", logo: tailwindcssLogo, level: "Advanced" },
      { name: "Redux Toolkit", logo: reduxLogo, level: "Intermediate" },
      { name: "HTML5", logo: htmlLogo, level: "Expert" },
      { name: "CSS3", logo: cssLogo, level: "Expert" },
      { name: "Bootstrap", logo: bootstrapLogo, level: "Advanced" },
      { name: "Sass", logo: sassLogo, level: "Intermediate" },
      { name: "GSAP", logo: gsapLogo, level: "Familiar" },
    ],
  },
  {
    title: "Backend & Databases",
    category: "backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo, level: "Intermediate" },
      { name: "Express JS", logo: expressjsLogo, level: "Intermediate" },
      { name: "MongoDB", logo: mongodbLogo, level: "Intermediate" },
      { name: "Firebase", logo: firebaseLogo, level: "Intermediate" },
      { name: "MySQL", logo: mysqlLogo, level: "Familiar" },
      { name: "PostgreSQL", logo: postgreLogo, level: "Familiar" },
    ],
  },
  {
    title: "Programming Languages",
    category: "languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo, level: "Advanced" },
      { name: "TypeScript", logo: typescriptLogo, level: "Intermediate" },
      { name: "Python", logo: pythonLogo, level: "Familiar" },
      { name: "C++", logo: cppLogo, level: "Familiar" },
      { name: "C", logo: cLogo, level: "Familiar" },
      { name: "Java", logo: javaLogo, level: "Familiar" },
      { name: "C#", logo: csharpLogo, level: "Familiar" },
    ],
  },
  {
    title: "Tools & Platforms",
    category: "tools",
    skills: [
      { name: "Git", logo: gitLogo, level: "Advanced" },
      { name: "GitHub", logo: githubLogo, level: "Advanced" },
      { name: "VS Code", logo: vscodeLogo, level: "Expert" },
      { name: "Postman", logo: postmanLogo, level: "Advanced" },
      { name: "Figma", logo: figmaLogo, level: "Intermediate" },
      { name: "Vercel", logo: vercelLogo, level: "Advanced" },
      { name: "Netlify", logo: netlifyLogo, level: "Advanced" },
    ],
  },
];

// Services / Capabilities
export const services = [
  {
    id: 1,
    title: "Frontend Web Development",
    icon: "💻",
    description: "Building responsive, mobile-first, and ultra-fast Single Page Applications using React, Next.js, Tailwind CSS, and modern state management.",
    features: ["Responsive Web Design", "Custom Component Architecture", "Dynamic State Management", "Cross-browser Compatibility"],
  },
  {
    id: 2,
    title: "MERN Full Stack Solutions",
    icon: "⚡",
    description: "Creating full-stack dynamic web applications with secure RESTful APIs, Express backend, MongoDB database modeling, and JWT authentication.",
    features: ["REST API Development", "MongoDB Integration", "JWT Authentication", "CRUD Operations"],
  },
  {
    id: 3,
    title: "Figma to React Pixel-Perfect",
    icon: "🎨",
    description: "Transforming design prototypes from Figma and Adobe XD into clean, modular, and interactive React components with smooth animations.",
    features: ["Pixel-perfect UI Implementation", "Glassmorphic & Dark Themes", "Micro-interactions & Hover Effects", "Accessible Semantic HTML"],
  },
  {
    id: 4,
    title: "Performance & SEO Optimization",
    icon: "🚀",
    description: "Enhancing web performance, core web vitals, Lighthouse score optimization, and search engine friendly structure for maximum reach.",
    features: ["Lighthouse Optimization", "Code Splitting & Lazy Loading", "SEO Metadata Setup", "Fast Asset Delivery"],
  },
];

// Education & Experience
export const education = [
  {
    id: 1,
    img: "https://i.ibb.co.com/Lz5RSRYY/image.png",
    school: "BD Calling Academy",
    date: "September 2025 - January 2026",
    grade: "Industrial Attachment",
    desc: "Specialized in MERN stack front-end development through hands-on industrial training. Built scalable SPAs with React, Node, Express, MongoDB, implemented REST APIs, and collaborated on real-world team projects.",
    degree: "MERN Stack FrontEnd Development Attachment",
    badge: "Industry Certified",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/KpQH3GVs/image.png",
    school: "Sherpur Polytechnic Institute",
    date: "March 2022 - March 2026",
    grade: "3.50 CGPA",
    desc: "Successfully completing a 4-year Diploma in Computer Science and Technology. Acquired deep foundational knowledge in data structures, algorithms, database management, software engineering, and web development.",
    degree: "Diploma in Computer Science & Technology",
    badge: "Academic",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/F4ynmYdZ/image.png",
    school: "Hazrabari High School",
    date: "January 2016 - April 2021",
    grade: "4.78 GPA",
    desc: "Completed Secondary School Certificate (SSC) in Science discipline with stellar academic standing, developing early passion for computer science, mathematics, and logic.",
    degree: "Secondary School Certificate (SSC) - Science",
    badge: "Graduated",
  },
];

// Featured Projects
export const projects = [
  {
    id: 0,
    title: "Real Estate Management Platform",
    category: "Full Stack",
    description: "A comprehensive real estate portal for finding, filtering, and inquiring about luxury homes, commercial spaces, and apartments with a modern user experience.",
    longDescription: "A full-featured real estate solution designed to simplify property browsing and acquisition. Includes detailed property filtering by location, price, and category, an interactive advisor consultation inquiry system, and high-performance image galleries.",
    image: "https://i.ibb.co.com/20S4Qw9s/image.png",
    tags: ["React JS", "Tailwind CSS", "React Router", "JavaScript", "Responsive UI", "Vite"],
    github: "https://github.com/Billah72/real-eastate",
    webapp: "https://estate-billah72.netlify.app/",
    features: [
      "Dynamic search & multi-parameter category filters",
      "Interactive property gallery & amenity breakdowns",
      "Lead generation & inquiry consultation form",
      "Fluid glassmorphic UI with mobile responsive layout"
    ],
  },
  {
    id: 1,
    title: "ElectroCart - Modern MERN E-Commerce",
    category: "Full Stack",
    description: "A feature-rich digital electronics e-commerce store with real-time product filtering, persistent shopping cart, and smooth checkout flow.",
    longDescription: "ElectroCart provides an end-to-end shopping experience featuring category browsing, price filters, persistent state cart with quantity controls, wishlist management, and modern responsive product cards.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Tailwind CSS", "Redux"],
    github: "https://github.com/Billah72",
    webapp: "https://estate-billah72.netlify.app/",
    features: [
      "Dynamic catalog with instant search & multi-filter",
      "Persistent Redux shopping cart & wishlists",
      "Checkout preview & order management flow",
      "Dark mode aesthetic with high performance"
    ],
  },
  {
    id: 2,
    title: "FoodieBite - Culinary & Order Web App",
    category: "Frontend",
    description: "Interactive culinary platform featuring online dish menus, recipe spotlights, live order calculating, and animated UI components.",
    longDescription: "A modern culinary web application crafted with React and Tailwind CSS. Features dynamic dietary filter tabs (Dessert, Main Course, Drinks), animated cart drawers, customer reviews carousel, and location delivery estimators.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    tags: ["React JS", "Tailwind CSS", "React Icons", "Context API", "GSAP"],
    github: "https://github.com/Billah72",
    webapp: "https://estate-billah72.netlify.app/",
    features: [
      "Interactive food menu with dynamic filtering",
      "Instant cart calculations & item incrementor",
      "Responsive customer testimonial carousel",
      "Engaging micro-animations and parallax effects"
    ],
  },
  {
    id: 3,
    title: "Nexus Portfolio & Developer Hub",
    category: "Frontend",
    description: "An ultra-modern glassmorphic developer portfolio featuring dark theme, dynamic typing, EmailJS message pipeline, and interactive 3D elements.",
    longDescription: "The current portfolio engineered with React 19, Tailwind CSS, and Vite. Designed to impress recruiters and clients with ambient glowing visuals, smooth scroll-spy navigation, category-filtered project showcase, and instant toast notifications.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["React JS", "Tailwind CSS", "EmailJS", "Parallax Tilt", "Vite"],
    github: "https://github.com/Billah72",
    webapp: "https://estate-billah72.netlify.app/",
    features: [
      "Glassmorphism design system with neon ambient lighting",
      "Functional EmailJS contact system with toast feedback",
      "ScrollSpy active section tracking & mobile menu",
      "Interactive 3D tilt and filterable skill matrix"
    ],
  },
];