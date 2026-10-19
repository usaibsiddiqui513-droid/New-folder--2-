# 🚀 DevConnect — Modern Developer Portfolio

A complete, modern, and high-performance developer portfolio built with **Next.js (App Router)**, **React**, **JavaScript**, **Tailwind CSS**, and **Lucide React**. 

Designed with a premium dark navy aesthetic, vibrant purple and blue glow gradients, glassmorphism card panels, smooth scrolling, and accessible semantic HTML.

---

## 📸 Overview & Features

- **Navbar**: Sticky navigation with smooth glassmorphism blur, responsive mobile hamburger drawer, and section scrolling (`#home`, `#about`, `#skills`, `#projects`, `#contact`).
- **Hero Section**: 
  - Dynamic headline: *"Building Digital Experiences That Matter"*
  - Status badge: *"Available for new opportunities"* with pulsing indicator
  - Action buttons: *"Explore Projects"* & *"Contact Me"*
  - Interactive code visualizer widget with switchable tabs (`DevConnect.jsx`, `config.js`, `terminal`)
  - Clickable social icons for GitHub and LinkedIn
- **About Section**: Professional introduction highlighting full-stack web development, problem-solving, and modern tooling with three pillar cards:
  - 📖 **Learning**: Continuous skill expansion & modern frameworks
  - 🛠️ **Building**: Resilient architecture & practical projects
  - 📈 **Improving**: Web accessibility (a11y), performance, and clean code
- **Skills Section**: Responsive grid showcasing **HTML5, CSS3, JavaScript, React, Next.js, Node.js, Git, and GitHub** with category filters (*All, Frontend, Backend, Tools*) and an editable sample data disclaimer.
- **Projects Section**: Four bespoke project showcases featuring simulated app UI mockups, technology badges, and placeholder link modals:
  1. 🎓 **School Management System** (Next.js, React, Node.js, Tailwind CSS)
  2. 🛒 **E-Commerce Website** (React, JavaScript, Tailwind CSS, LocalStorage)
  3. 🍽️ **Restaurant Landing Page** (Next.js, Tailwind CSS, Responsive Design)
  4. 🌤️ **Weather Dashboard** (JavaScript, React, REST Weather API, Tailwind CSS)
- **Contact Section**:
  - Full client-side form validation (name, email, subject, message)
  - Error messages with icons and highlight borders
  - Instant success confirmation banner explaining backend integration requirements
  - Direct communication channels (Email with copy button, GitHub, LinkedIn, Location)
- **Footer**: Dynamic copyright year (`getFullYear()`), social links, and a smooth **Back to Top** button.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: JavaScript (ES6+)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Scalable Brand SVGs
- **Fonts**: Geist Sans & Geist Mono via `next/font`

---

## 📂 Project Structure

```text
devconnect-portfolio/
├── public/                     # Static assets (favicons, images)
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, dark scrollbar & glassmorphism
│   │   ├── layout.js           # Root layout, SEO metadata & ambient glow orbs
│   │   └── page.js             # Composed portfolio page
│   ├── components/
│   │   ├── Navbar.js           # Header with mobile menu & smooth scroll
│   │   ├── Hero.js             # Main hero section & CTAs
│   │   ├── CodeVisual.js       # Interactive animated IDE window
│   │   ├── About.js            # About section & 3 pillar cards
│   │   ├── Skills.js           # Interactive skills grid & filter tabs
│   │   ├── Projects.js         # Projects grid container
│   │   ├── ProjectCard.js      # Individual card with UI preview & modal
│   │   ├── Contact.js          # Validated contact form & channels
│   │   ├── Footer.js           # Dynamic footer & Back-to-Top button
│   │   └── SocialIcons.js      # Scalable SVG brand icons (GitHub, LinkedIn, etc.)
│   └── data/
│       └── portfolioData.js    # 🌟 Centralized data file to customize content!
├── jsconfig.json               # Import alias paths (@/*)
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## ⚡ Terminal Commands to Run the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application with hot reloading.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

---

## 🎨 How to Customize With Your Own Information

All sample content has been centralized in **`src/data/portfolioData.js`**. You do not need to modify component code to personalize your portfolio!

### 1. Personal Details & Social Links
Open `src/data/portfolioData.js` and edit the `personal` object:
```javascript
personal: {
  name: "Your Name",
  role: "Your Title (e.g. Full-Stack Developer)",
  tagline: "Building Digital Experiences That Matter",
  shortBio: "Your custom introduction...",
  fullBio: "Your detailed journey and background...",
  location: "Your City, Country / Remote",
  statusBadge: "Open to Work",
  email: "your.email@example.com",
  githubUrl: "https://github.com/your-username",
  linkedinUrl: "https://linkedin.com/in/your-username",
  twitterUrl: "https://twitter.com/your-username",
}
```

### 2. Updating Skills
In `src/data/portfolioData.js`, add, remove, or modify items under `skills.items`:
```javascript
{
  name: "TypeScript",
  category: "Frontend",
  level: "Types & Generics",
  iconName: "FileCode2",
  color: "#3178c6",
  featured: true,
}
```

### 3. Updating Projects & Links
In `src/data/portfolioData.js`, customize the `projects` array with your real project details:
```javascript
{
  id: "my-real-project",
  title: "My Awesome Project",
  category: "Full-Stack Web App",
  description: "What this project does...",
  technologies: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
  githubUrl: "https://github.com/your-username/my-project",
  demoUrl: "https://my-project.vercel.app",
  type: "school", // "school", "ecommerce", "restaurant", "weather"
}
```

### 4. Connecting Real Email Delivery
The contact form in `src/components/Contact.js` validates user input on the client. To deliver emails directly to your inbox:
1. **Option A (Formspree / Formkeep)**: Set your endpoint URL in the form submit handler.
2. **Option B (Resend / SendGrid)**: Create an API route in `src/app/api/contact/route.js` and call it from `handleSubmit`.
3. **Option C (EmailJS)**: Install `@emailjs/browser` and trigger `emailjs.send()`.
