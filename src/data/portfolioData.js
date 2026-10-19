/**
 * DevConnect Portfolio Data
 * 
 * Edit this file to easily customize your name, bio, skills,
 * projects, and social links without changing component code!
 */

export const portfolioData = {
  personal: {
    name: "Alex Rivera",
    role: "Full-Stack Web Developer",
    tagline: "Building Digital Experiences That Matter",
    shortBio:
      "Passionate developer focused on building modern, responsive, and performant web applications using clean code, modern JavaScript, React, and Next.js.",
    fullBio:
      "Hello! I am a full-stack web developer passionate about crafting intuitive digital products that solve real-world problems. With a strong foundation in modern web technologies, I love translating complex designs into clean, resilient code with high attention to user experience, performance, and accessibility.",
    location: "Available for Remote & Local Opportunities",
    statusBadge: "Open to Work & Collaborations",
    email: "alex.rivera.developer@example.com",
    githubUrl: "https://github.com/example-username",
    linkedinUrl: "https://linkedin.com/in/example-username",
    twitterUrl: "https://twitter.com/example-username",
    resumeUrl: "#contact", // or link to PDF in public/
  },

  about: {
    cards: [
      {
        id: "learning",
        title: "Learning",
        subtitle: "Continuous Growth",
        iconName: "BookOpen",
        description:
          "Constantly exploring modern web frameworks, App Router conventions, cloud architecture, and web performance optimization to stay at the cutting edge.",
        badge: "Growth Mindset",
        gradient: "from-blue-500/20 to-cyan-500/10",
        borderGlow: "group-hover:border-blue-500/50",
        iconColor: "text-blue-400",
      },
      {
        id: "building",
        title: "Building",
        subtitle: "Practical Projects",
        iconName: "Code2",
        description:
          "Transforming concepts into scalable, clean-coded applications with intuitive UI/UX, reusable components, and resilient full-stack architectures.",
        badge: "Clean Architecture",
        gradient: "from-purple-500/20 to-indigo-500/10",
        borderGlow: "group-hover:border-purple-500/50",
        iconColor: "text-purple-400",
      },
      {
        id: "improving",
        title: "Improving",
        subtitle: "Excellence in Craft",
        iconName: "TrendingUp",
        description:
          "Relentlessly refining web accessibility (a11y), responsive breakpoints, SEO structure, Core Web Vitals, and clean developer documentation.",
        badge: "Quality & A11y",
        gradient: "from-emerald-500/20 to-teal-500/10",
        borderGlow: "group-hover:border-emerald-500/50",
        iconColor: "text-emerald-400",
      },
    ],
    highlights: [
      { label: "Completed Projects", value: "12+" },
      { label: "Core Technologies", value: "8+" },
      { label: "Code Commit Consistency", value: "100%" },
      { label: "Focus", value: "Next.js & React" },
    ],
  },

  skills: {
    disclaimer:
      "These skills represent sample developer competencies configured for DevConnect. You can edit this list in src/data/portfolioData.js to reflect your personal qualifications.",
    categories: ["All", "Frontend", "Backend", "Tools"],
    items: [
      {
        name: "HTML5",
        category: "Frontend",
        level: "Semantic & Accessible",
        iconName: "FileCode2",
        color: "#e34f26",
        featured: true,
      },
      {
        name: "CSS3",
        category: "Frontend",
        level: "Responsive & Animations",
        iconName: "Palette",
        color: "#264de4",
        featured: true,
      },
      {
        name: "JavaScript",
        category: "Frontend",
        level: "ES6+, Async, APIs",
        iconName: "Braces",
        color: "#f7df1e",
        featured: true,
      },
      {
        name: "React",
        category: "Frontend",
        level: "Hooks, State, Architecture",
        iconName: "Atom",
        color: "#61dafb",
        featured: true,
      },
      {
        name: "Next.js",
        category: "Frontend",
        level: "App Router, SSR, Turbopack",
        iconName: "Globe",
        color: "#ffffff",
        featured: true,
      },
      {
        name: "Node.js",
        category: "Backend",
        level: "REST APIs, Express, Runtime",
        iconName: "Server",
        color: "#339933",
        featured: true,
      },
      {
        name: "Git",
        category: "Tools",
        level: "Branching, PRs, Version Control",
        iconName: "GitBranch",
        color: "#f05032",
        featured: true,
      },
      {
        name: "GitHub",
        category: "Tools",
        level: "CI/CD, Workflows, Collaboration",
        iconName: "Github",
        color: "#9333ea",
        featured: true,
      },
    ],
  },

  projects: [
    {
      id: "school-management-system",
      title: "School Management System",
      category: "Full-Stack Web Application",
      description:
        "A comprehensive academic management system designed to streamline student enrollments, daily attendance recording, course grading schedules, and administrative reports with role-based dashboard views.",
      technologies: ["Next.js", "React", "Node.js", "Tailwind CSS"],
      githubUrl: "https://github.com/example-username/school-management-system",
      demoUrl: "https://school-management-demo.example.com",
      status: "Sample Project",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      type: "school",
      stats: [
        { label: "Modules", val: "Attendance, Grades, Rosters" },
        { label: "Auth", val: "Role-Based Access" },
      ],
    },
    {
      id: "ecommerce-website",
      title: "E-Commerce Website",
      category: "Interactive Online Store",
      description:
        "A modern, responsive e-commerce storefront featuring dynamic category filtering, real-time search, cart drawer state management, quantity adjustment, and a seamless simulated checkout workflow.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "LocalStorage API"],
      githubUrl: "https://github.com/example-username/ecommerce-website",
      demoUrl: "https://ecommerce-store-demo.example.com",
      status: "Sample Project",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      type: "ecommerce",
      stats: [
        { label: "Features", val: "Filter, Cart, Checkout" },
        { label: "Storage", val: "Persistent LocalStorage" },
      ],
    },
    {
      id: "restaurant-landing-page",
      title: "Restaurant Landing Page",
      category: "Brand & Hospitality Experience",
      description:
        "An elegant, high-conversion culinary landing page with a seasonal chef menu showcase, customer testimonials, interactive Google Maps integration, and an intuitive online table reservation form.",
      technologies: ["Next.js", "Tailwind CSS", "Semantic HTML5", "Responsive Design"],
      githubUrl: "https://github.com/example-username/restaurant-landing-page",
      demoUrl: "https://restaurant-landing-demo.example.com",
      status: "Sample Project",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      type: "restaurant",
      stats: [
        { label: "UI Focus", val: "Micro-animations & Booking" },
        { label: "A11y", val: "100% Mobile Ready" },
      ],
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      category: "Live Data & Forecast Tool",
      description:
        "A weather forecasting application delivering current temperature, 5-day predictive forecasts, hourly trends, wind speed, UV index, and dynamic atmospheric theme changes based on live location queries.",
      technologies: ["JavaScript", "React", "REST Weather API", "Tailwind CSS"],
      githubUrl: "https://github.com/example-username/weather-dashboard",
      demoUrl: "https://weather-dashboard-demo.example.com",
      status: "Sample Project",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      type: "weather",
      stats: [
        { label: "Data", val: "Live Hourly & 5-Day" },
        { label: "Geolocation", val: "City Search & Coordinates" },
      ],
    },
  ],

  contact: {
    heading: "Let's Build Something Together",
    subheading:
      "Whether you're looking to discuss a university project, collaborate on open-source code, or inquire about developer roles, feel free to reach out!",
    disclaimer:
      "Client-side verification only: Submission verifies all fields locally. Real-world message dispatch requires connecting this form to an email delivery service (such as Resend, EmailJS, Formspree, or a Next.js server route).",
    channels: [
      {
        name: "Direct Email",
        value: "alex.rivera.developer@example.com",
        href: "mailto:alex.rivera.developer@example.com",
        iconName: "Mail",
        note: "Sample email placeholder",
      },
      {
        name: "GitHub Profile",
        value: "github.com/example-username",
        href: "https://github.com/example-username",
        iconName: "Github",
        note: "Explore sample repositories",
      },
      {
        name: "LinkedIn Network",
        value: "linkedin.com/in/example-username",
        href: "https://linkedin.com/in/example-username",
        iconName: "Linkedin",
        note: "Connect professionally",
      },
      {
        name: "Location",
        value: "San Francisco, CA / Remote",
        href: "#",
        iconName: "MapPin",
        note: "Open to remote work worldwide",
      },
    ],
  },
};
