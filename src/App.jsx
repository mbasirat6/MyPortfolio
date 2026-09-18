import { useEffect, useState } from "react";
import ProjectGallery from "./ProjectGallery";
import useHashNavigation from "./useHashNavigation";
import cvDownloadUrl from "./assets/Mahmood_Basirat_CV.pdf?url";

const skills = [
  { name: "Full-stack Development", cat: "dev" },
  { name: "Front-end Development", cat: "dev" },
  { name: "Back-end Development", cat: "dev" },
  { name: "API Integration", cat: "dev" },
  { name: "Software Quality Review", cat: "dev" },
  { name: "AI Evaluation", cat: "ai" },
  { name: "AI Annotation & Ranking", cat: "ai" },
  { name: "AI Tutor Integration", cat: "ai" },
  { name: "Multilingual & RTL Interfaces", cat: "design" },
  { name: "UI/UX Review", cat: "design" },
  { name: "Company & Team Management", cat: "soft" },
  { name: "Client Communication", cat: "soft" },
  { name: "Proposal Preparation", cat: "soft" },
  { name: "Teaching", cat: "soft" },
  { name: "Data Analysis", cat: "data" },
  { name: "Data Cleaning", cat: "data" },
  { name: "Dashboard Building", cat: "data" },
  { name: "Pashto", cat: "lang" },
  { name: "Dari", cat: "lang" },
  { name: "English", cat: "lang" },
  { name: "Hindi", cat: "lang" },
  { name: "Urdu", cat: "lang" },
  { name: "Persian", cat: "lang" },
];

const toolGroups = [
  {
    title: "Application development",
    items: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Vite", "Node.js", "Express"],
  },
  {
    title: "AI integration & design",
    items: ["Gemini API", "Figma"],
  },
  {
    title: "Data, databases & reporting",
    items: ["SQL", "PostgreSQL", "MySQL", "SQLite", "Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Excel", "KOBO / ODK"],
  },
];
const tools = toolGroups.flatMap((group) => group.items);

const experience = [
  {
    role: "Founder & President",
    company: "Khwazon · Kabul, Afghanistan",
    period: "2026 – Present",
    website: "https://khwazon.com/",
    points: [
      "Founded and manage a software studio focused on websites, applications, and business systems.",
      "Handle full-stack development across front-end interfaces and back-end functionality, and review software quality.",
      "Assign team tasks and coordinate company work.",
      "Communicate with clients and prepare project proposals.",
    ],
  },
  {
    role: "AI Model Evaluator / AI Data Annotator",
    company: "Freelance · Remote",
    period: "Dec 2025 – Present",
    points: [
      "Evaluated AI model outputs and provided feedback to improve response quality.",
      "Performed annotation, classification, and ranking tasks across text, image, and video datasets.",
      "Identified hallucinations, bias, and factual inconsistencies in AI responses.",
    ],
  },
  {
    role: "High School English Teacher",
    company: "SPS Sofia Private School · Kabul, Afghanistan",
    period: "2019 – August 2021",
    points: [
      "Taught English to high school students, focusing on paragraph, essay, and story writing.",
      "Designed lesson plans, assessments, and examination papers.",
      "Founded a newsletter club and trained students to prepare a weekly newspaper. Members interviewed students and teachers, and the school printed each issue.",
      "Collaborated with school leadership to improve the curriculum.",
      "Met with parents to discuss each student's progress.",
    ],
  },
];

const projects = [
  {
    id: "marif",
    group: "Learning & AI",
    preview: "marif",
    caseStudy: "/projects/marif/",
    featured: true,
    category: "AI & Education",
    title: "Marif",
    summary: "A study app with school textbooks, practice, and AI explanations in Pashto and Dari.",
    contribution: "Designed and developed the app, connected textbook content, and integrated the AI tutor.",
    goal: "Make the Afghan secondary-school curriculum easier to study through textbook access, practice, and contextual AI support.",
    work: [
      "Developed a mobile-first React application around official school textbooks for Grades 10–12.",
      "Built textbook reading, chapter exercises, quizzes, and curriculum search into connected study flows.",
      "Integrated a Gemini-powered tutor with textbook and exercise context, chat history, and chapter maps.",
      "Created English, Dari, and Pashto interfaces with right-to-left layouts for Dari and Pashto.",
    ],
    tools: ["React", "Vite", "Gemini", "Curriculum data", "Multilingual UX"],
    resultLabel: "Current work",
    result: "An ongoing education platform bringing textbook study, practice, and AI assistance into one learning experience.",
    proof: "Independent project · In active development",
    reflection: "Building Marif has made reliability, language access, and affordability central to my work. My next research step is to evaluate the quality of its explanations and learn how students and teachers would shape its design. Learning outcomes have not yet been established.",
  },
  {
    id: "education-atlas",
    group: "Data & analysis",
    preview: "atlas",
    category: "Data & Education",
    title: "Afghanistan Education Atlas",
    summary: "An interactive map to explore schools, school attendance, and access to internet and devices across Afghanistan.",
    contribution: "Defined the research question and developed the dashboard and data preparation workflow with AI assistance.",
    goal: "Help people understand the conditions for learning in Afghanistan, including who may be able to use digital learning tools.",
    work: [
      "Brought together survey indicators for 34 provinces and 9,952 school-location records from 26 provinces.",
      "Used Python to clean text, standardise province names, check coordinates, and flag missing or conflicting values while preserving the source data.",
      "Built an interactive map, province comparisons, school search, and downloadable data with documented sources and methods.",
    ],
    tools: ["Python", "JavaScript", "Leaflet"],
    resultLabel: "What it shows",
    result: "A working research dashboard that makes scattered education data easier to explore. The figures come from different years and are not a live school register. Shared locations are flagged for review rather than automatically deleted.",
    image: "/screenshots/atlas/map.png",
    screenshots: ["/screenshots/atlas/overview.png", "/screenshots/atlas/map.png"],
    link: "https://github.com/mbasirat6/afghanistan-education-atlas",
    linkLabel: "Code & methods (private repo) ↗",
    demoLink: "https://afghanistan-education-atlas.mbasirat6.chatgpt.site/",
    demoLabel: "Open dashboard (owner access) ↗",
  },
  {
    number: "01",
    id: "poetry",
    group: "Data & analysis",
    preview: "poetry",
    category: "Data Science",
    title: "English Poetry Explorer",
    summary: "Explore English poems, analyse their tone, and find similar writing.",
    contribution: "Built the Streamlit app, prepared the data, and implemented TF-IDF similarity search.",
    goal: "Build an end-to-end NLP app to analyze English poems, classify sentiment, and recommend similar content.",
    work: [
      "Built a Streamlit app handling 12K+ poems with EDA, sentiment analysis, and similarity search.",
      "Cleaned and processed dataset using Pandas; engineered TF-IDF features for text representation.",
      "Implemented cosine similarity for real-time recommendations with ranked results.",
      "Created visualizations (distributions, summaries) to support exploratory analysis.",
    ],
    tools: ["Python", "Pandas", "TF-IDF", "NLP", "Matplotlib", "Streamlit"],
    result: "Interactive NLP app enabling upload → explore → sentiment → recommendations with similarity scores.",
    proof: "Live UI screenshots + GitHub repo",
    link: "https://github.com/mbasirat6/English-Poetry-Analysis",
    linkLabel: "View GitHub Repo ↗",
    screenshots: [
      "/screenshots/Home-page.png",
      "/screenshots/home-page-data.png",
      "/screenshots/sentiment-Analysis-page.png",
      "/screenshots/find-semiler-poem-page.png",
    ],
  },
  {
    number: "02",
    id: "ai-review",
    group: "Learning & AI",
    preview: "review",
    category: "AI Evaluation",
    title: "AI Response Review",
    summary: "Review AI answers across text, images, and video for accuracy and quality.",
    contribution: "Applied review rubrics, ranked responses, and flagged factual errors, hallucinations, and bias.",
    goal: "Improve AI response quality via systematic evaluation and ranking.",
    work: [
      "Reviewed 1,000+ AI outputs across text, image, and video tasks.",
      "Applied rubrics to rank responses and identify hallucinations and bias.",
      "Flagged factual errors and inconsistencies to improve model quality.",
    ],
    tools: ["LLM Evaluation", "AI Annotation", "Ranking", "Quality Review"],
    result: "Improved consistency and reliability of AI-generated responses.",
    proof: "Multimodal AI review experience",
  },
  {
    number: "03",
    id: "survey-dashboard",
    group: "Data & analysis",
    preview: "dashboard",
    category: "Data Analysis",
    title: "Survey Dashboard",
    summary: "Turn survey data into clear reports for health and education programmes.",
    contribution: "Cleaned KOBO data, analysed trends, and built Power BI dashboards for programme reporting.",
    context: "The NGO needed structured reporting across regions. I connected data cleaning and validation to analysis and dashboards for tracking beneficiaries, services, and programme performance.",
    goal: "Turn field survey data into actionable insights for NGO reporting.",
    work: [
      "Cleaned and validated KOBO survey data from field operations.",
      "Built dashboards tracking 28K+ beneficiaries, 12K+ services, 8K+ students.",
      "Analyzed trends by region, time, and sector to support decisions.",
    ],
    tools: ["Python", "Power BI", "Excel", "KOBO / ODK"],
    result: "Delivered real-world dashboard reporting for NGO programs in Afghanistan.",
    proof: "Dashboard preview available",
    image: "/dashboard.png",
    link: "/dashboard.png",
    linkLabel: "View Dashboard ↗",
  },
  {
    number: "04",
    id: "khayat",
    group: "Apps & design",
    preview: "workflow",
    category: "Product Design",
    title: "Khayat",
    summary: "An app design to help tailors organise customers, orders, and measurements.",
    contribution: "Designed the workflows in Figma and planned the Pashto, Dari, and English experience.",
    goal: "Design a multilingual system for managing tailoring workflows.",
    work: [
      "Designed customer → order → measurement flows in Figma.",
      "Reduced friction by simplifying order creation steps.",
      "Planned multilingual UX (Pashto, Dari, English).",
    ],
    tools: ["Figma", "UI/UX", "Product Flow", "Multilingual Design"],
    result: "Simplified order creation and measurement tracking for tailors.",
    proof: "Figma design proof available",
    link: "https://www.figma.com/design/pLkHln0OtpNKQpiG37GtMQ/Khayat-Tailor-Management-App",
    linkLabel: "View Figma Design ↗",
  },
  {
    number: "05",
    id: "portfolio",
    group: "Apps & design",
    preview: "portfolio",
    category: "Frontend",
    title: "Personal Portfolio",
    summary: "The website you’re browsing: a home for my work, experience, and CV.",
    contribution: "Built the React interface, navigation, project galleries, and expandable case studies.",
    goal: "Create a clean, recruiter-focused portfolio site.",
    work: [
      "Built responsive React UI for desktop and mobile.",
      "Structured sections for quick scanning by recruiters.",
      "Added navigation, proof sections, and project cards.",
    ],
    tools: ["React", "CSS", "Responsive Design", "Frontend"],
    result: "Clear online presence to support job applications.",
    proof: "Source code available",
    link: "https://github.com/mbasirat6/MyPortfolio",
    linkLabel: "View GitHub Repo ↗",
  },
];

const catColors = {
  dev: { bg: "#092c2b", border: "#1c6662", text: "#7de2d7" },
  data: { bg: "#0c2340", border: "#1a4a7a", text: "#7ec8f0" },
  ai: { bg: "#16103a", border: "#2d2580", text: "#a89cf7" },
  design: { bg: "#2a1c00", border: "#5a3c00", text: "#f0b429" },
  soft: { bg: "#0a2818", border: "#165c30", text: "#4ade80" },
  lang: { bg: "#2a0f1a", border: "#5c1a35", text: "#f472b6" },
};

function SectionHeader({ number, title }) {
  return (
    <div className="sec-header animate">
      <span className="sec-num">{number}</span>
      <h2 className="sec-title">{title}</h2>
      <div className="sec-line" />
    </div>
  );
}

function runPortfolioDataChecks() {
  const errors = [];

  if (projects.length < 4) errors.push("Expected at least 4 projects.");

  projects.forEach((project) => {
    if (!project.title) errors.push(`Project ${project.number} is missing a title.`);
    if (!Array.isArray(project.work) || project.work.length < 3) {
      errors.push(`Project ${project.number} should have at least 3 work points.`);
    }
    if (!Array.isArray(project.tools) || project.tools.length < 3) {
      errors.push(`Project ${project.number} should have at least 3 tools.`);
    }
  });

  if (skills.length < 10) errors.push("Expected at least 10 skills.");
  if (tools.length < 8) errors.push("Expected at least 8 tools.");
  if (experience.length === 0) errors.push("Experience entries are missing.");

  if (errors.length > 0) {
    console.warn("Portfolio data checks failed:", errors);
  }
}

export default function MahmoodPortfolio() {
  useHashNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [galleryProject, setGalleryProject] = useState(null);

  useEffect(() => {
    runPortfolioDataChecks();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate");
    animatedElements.forEach((el) => animationObserver.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      animatedElements.forEach((el) => animationObserver.unobserve(el));
      sections.forEach((section) => sectionObserver.unobserve(section));
      animationObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen || galleryProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, galleryProject]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <>
      <style>{`
        .animate {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .animate.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-delay-1 { transition-delay: 0.1s; }
        .animate-delay-2 { transition-delay: 0.2s; }
        .animate-delay-3 { transition-delay: 0.3s; }
        .animate-delay-4 { transition-delay: 0.4s; }

        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.3s, padding 0.3s, border-color 0.3s;
        }

        .nav.scrolled {
          background: rgba(7, 9, 15, 0.9);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid var(--border);
          padding: 13px 48px;
        }

        .nav-brand {
          font-family: var(--mono);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent);
          letter-spacing: 0.02em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s, transform 0.2s, background 0.2s;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--accent);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          padding: 0;
        }

        .hamburger span {
          display: block;
          width: 16px;
          height: 1.5px;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: rgba(7, 9, 15, 0.62);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.25s ease, visibility 0.25s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .mobile-menu-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(280px, 82vw);
          height: 100%;
          background: #0d1117;
          border-left: 1px solid var(--border);
          padding: 80px 28px 40px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transform: translateX(100%);
          transition: transform 0.28s ease;
          box-shadow: -20px 0 50px rgba(0,0,0,0.35);
        }

        .mobile-menu.open .mobile-menu-panel {
          transform: translateX(0);
        }

        .mobile-menu-panel a {
          display: block;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }

        .mobile-menu-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 36px;
          height: 36px;
          color: var(--text);
          font-size: 1.1rem;
          cursor: pointer;
        }

        .hero {
          min-height: 85vh;
          max-width: 1120px;
          margin: 0 auto;
          padding: 120px 48px 40px;
          display: flex;
          align-items: center;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 72px;
          align-items: center;
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 0.72rem;
          color: var(--accent);
          background: var(--accent-glow);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          padding: 5px 14px;
          margin-bottom: 24px;
          letter-spacing: 0.04em;
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .hero-name {
          font-size: clamp(3rem, 5.5vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .hero-title {
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--text-secondary);
          margin-bottom: 22px;
        }

        .hero-title strong {
          color: var(--accent);
          font-weight: 600;
        }

        .hero-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 540px;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-block;
          padding: 11px 24px;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
        }

        .btn-primary {
          background: var(--accent);
          color: #ffffff;
          border: none;
        }

        .btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border-hover);
        }

        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-1px);
        }

        .profile-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          position: relative;
          overflow: hidden;
        }

        .profile-card-top-line {
          position: absolute;
          top: 0;
          left: 20%;
          right: 20%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .profile-photo {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          transform: scale(1.15);
          border: 2px solid var(--border-hover);
        }

        .profile-name {
          font-size: 0.95rem;
          font-weight: 700;
          text-align: center;
        }

        .profile-sub {
          font-family: var(--mono);
          font-size: 0.68rem;
          color: var(--text-soft);
          text-align: center;
          margin-top: -8px;
        }

        .profile-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          width: 100%;
        }

        .stat {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 8px;
          text-align: center;
          cursor: pointer;
          font-family: inherit;
          transition: 0.2s;
        }

        .stat:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(77, 158, 255, 0.12);
        }

        .stat:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        .stat-num {
          font-family: var(--mono);
          font-size: 1.25rem;
          color: var(--accent);
          display: block;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-soft);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-top: 5px;
        }

        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 72px 48px;
          scroll-margin-top: 85px;
        }

        .divider {
          max-width: 1120px;
          margin: 16px auto;
          height: 1px;
          background: var(--border);
        }

        .sec-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .sec-num {
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--accent);
          letter-spacing: 0.12em;
          flex-shrink: 0;
        }

        .sec-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }

        .sec-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .about-card,
        .proof-card,
        .exp-card,
        .edu-card,
        .hire-card,
        .hobby-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          transition: 0.2s;
        }

        .about-card {
          padding: 28px 30px;
        }

        .about-card:hover,
        .proof-card:hover,
        .exp-card:hover,
        .edu-card:hover,
        .hire-card:hover,
        .hobby-card:hover {
          border-color: var(--border-hover);
        }

        .about-card-label {
          font-family: var(--mono);
          font-size: 0.68rem;
          color: var(--accent);
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .about-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .legend {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 2px;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip {
          padding: 7px 16px;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
          gap: 10px;
        }

        .tool-group + .tool-group { margin-top: 24px; }
        .tool-group h3 {
          margin-bottom: 12px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .tool-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 10px;
          text-align: center;
          font-family: var(--mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .exp-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .exp-card {
          padding: 26px 30px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: start;
        }

        .exp-role {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .exp-company {
          font-family: var(--mono);
          font-size: 0.78rem;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .exp-period {
          font-family: var(--mono);
          font-size: 0.72rem;
          color: var(--text-soft);
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 5px 12px;
          white-space: nowrap;
        }

        .company-website {
          display: inline-block;
          margin-top: 14px;
          color: var(--accent);
          font-size: 0.875rem;
          text-underline-offset: 4px;
        }

        .exp-points {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .exp-point {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          padding-left: 20px;
          position: relative;
        }

        .exp-point::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent);
        }

        .projects-intro {
          max-width: 680px;
          margin: -18px 0 24px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        #projects { scroll-margin-top: 80px; }

        .project-card-clean {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 26px;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }

        .project-card-clean:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
        }

        .project-card-featured {
          grid-column: 1 / -1;
          border-color: rgba(77, 158, 255, 0.6);
          background: linear-gradient(120deg, #19283d, var(--surface));
          scroll-margin-top: 100px;
        }

        .project-card-featured .project-title-clean {
          font-size: clamp(1.4rem, 3vw, 2rem);
        }

        .project-card-featured .project-work-list {
          columns: 2;
          column-gap: 40px;
        }

        .project-card-featured .project-work-list li {
          break-inside: avoid;
          margin-bottom: 10px;
        }

        .project-reflection {
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.8;
        }

        .project-reflection summary {
          cursor: pointer;
          color: var(--accent);
          font-weight: 600;
        }

        .project-reflection p { margin-top: 12px; max-width: 800px; }
        .hero-marif-link { margin-left: 18px; color: var(--accent); font-weight: 600; }
        .hero-marif-link:focus-visible, .project-reflection summary:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 5px;
        }

        .project-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .project-category {
          font-family: var(--mono);
          font-size: 0.68rem;
          color: var(--accent);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .project-number {
          font-family: var(--mono);
          font-size: 0.7rem;
          color: var(--text-soft);
        }

        .project-title-clean {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 14px;
        }

        .project-block {
          margin-top: 14px;
        }

        .project-block-label {
          font-family: var(--mono);
          font-size: 0.68rem;
          color: var(--text-soft);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .project-goal,
        .project-result-clean {
          padding: 12px 13px;
          background: rgba(77, 158, 255, 0.1);
          border: 1px solid rgba(77, 158, 255, 0.25);
          border-radius: 10px;
          color: var(--accent);
          font-weight: 700;
        }

        .project-work-list {
          padding-left: 20px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .project-proof-note {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          font-family: var(--mono);
          font-size: 0.68rem;
          color: #fbbf24;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .project-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 16px;
        }

        .project-tool {
          font-family: var(--mono);
          font-size: 0.67rem;
          color: var(--text-soft);
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 5px;
          padding: 4px 9px;
          letter-spacing: 0.04em;
        }

        .project-proof-link {
          display: inline-block;
          margin-top: 16px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #f59e0b;
          text-decoration: none;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
        }

        .project-proof-link:hover {
          color: #ffffff;
          background: #f59e0b;
          border-color: #f59e0b;
          transform: translateY(-1px);
        }

        .gallery-btn {
          display: inline-block;
          margin-top: 16px;
          margin-right: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #93c5fd;
          background: rgba(77, 158, 255, 0.12);
          border: 1px solid rgba(77, 158, 255, 0.35);
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
        }

        .gallery-btn:hover {
          color: #ffffff;
          background: var(--accent);
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        .gallery-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(3, 6, 12, 0.88);
          backdrop-filter: blur(8px);
          padding: 32px;
          overflow-y: auto;
        }

        .gallery-modal {
          max-width: 1100px;
          margin: 0 auto;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.45);
        }

        .gallery-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 18px;
        }

        .gallery-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
        }

        .gallery-close {
          background: var(--bg2);
          border: 1px solid var(--border);
          color: #ffffff;
          border-radius: 8px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          font-size: 1rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .gallery-img {
          width: 100%;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg2);
        }

        .edu-card {
          padding: 30px;
          display: flex;
          align-items: flex-start;
          gap: 22px;
        }

        .edu-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: var(--accent-glow);
          border: 1px solid rgba(59, 130, 246, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .edu-degree {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .edu-school {
          font-size: 0.875rem;
          color: var(--accent);
          margin-bottom: 4px;
        }

        .edu-year {
          font-family: var(--mono);
          font-size: 0.72rem;
          color: var(--text-soft);
        }

        .hire-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .hire-card { padding: 26px; }
        .hire-icon { font-size: 1.6rem; margin-bottom: 14px; }
        .hire-title { font-size: 1rem; font-weight: 700; margin-bottom: 10px; }
        .hire-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.75; }

        .hobbies-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .hobby-card { padding: 26px; }
        .hobby-title { font-size: 1rem; font-weight: 700; margin-bottom: 10px; }
        .hobby-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.75; }

        .contact-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 52px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 52px;
          align-items: center;
        }

        .contact-h {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .contact-p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .contact-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .clink {
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 18px;
          text-decoration: none;
          color: var(--text);
        }

        .clink-label {
          font-family: var(--mono);
          font-size: 0.65rem;
          color: var(--text-soft);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .clink-val {
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
          margin-top: 1px;
        }

        .footer {
          max-width: 1120px;
          margin: 0 auto;
          border-top: 1px solid var(--border);
          padding: 24px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-brand {
          font-family: var(--mono);
          font-size: 0.8rem;
          color: var(--accent);
        }

        .footer-copy {
          font-size: 0.78rem;
          color: var(--text-soft);
        }

        @media (max-width: 768px) {
          .project-card-featured .project-work-list { columns: 1; }
          .project-card-featured .project-top-row { flex-wrap: wrap; }
          .nav { padding: 14px 20px; }
          .nav.scrolled { padding: 11px 20px; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .hero { padding: 90px 20px 48px; }
          .hero-inner { grid-template-columns: 1fr; gap: 36px; }
          .hero-name { font-size: 2.6rem; }
          .wrap { padding: 52px 20px; }
          .about-grid,
          .projects-grid,
          .hire-grid,
          .hobbies-grid {
            grid-template-columns: 1fr;
          }
          .exp-card { grid-template-columns: 1fr; }
          .exp-period { width: fit-content; }
          .contact-box { grid-template-columns: 1fr; padding: 30px 22px; gap: 32px; }
          .footer { flex-direction: column; gap: 8px; padding: 20px; text-align: center; }
          .gallery-overlay { padding: 16px; }
          .gallery-modal { padding: 16px; }
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ background: "#0d1117", minHeight: "100vh", color: "#ffffff" }}>
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
          <div className="mobile-menu-panel" onClick={(event) => event.stopPropagation()}>
            <button className="mobile-menu-close" type="button" onClick={closeMenu}>
              ✕
            </button>
            <a href="#about" onClick={(event) => { event.preventDefault(); scrollTo("about"); }}>About</a>
            <a href="#skills" onClick={(event) => { event.preventDefault(); scrollTo("skills"); }}>Skills</a>
            <a href="#tools" onClick={(event) => { event.preventDefault(); scrollTo("tools"); }}>Tools</a>
            <a href="#experience" onClick={(event) => { event.preventDefault(); scrollTo("experience"); }}>Experience</a>
            <a href="#projects" onClick={(event) => { event.preventDefault(); scrollTo("projects"); }}>Projects</a>
            <a href="#education" onClick={(event) => { event.preventDefault(); scrollTo("education"); }}>Education</a>
            <a href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>Contact</a>
          </div>
        </div>

        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
          <div className="nav-brand">mahmood.basirat</div>
          <div className="nav-links">
            <a href="#about" onClick={(event) => { event.preventDefault(); scrollTo("about"); }} className={activeSection === "about" ? "active" : ""}>About</a>
            <a href="#experience" onClick={(event) => { event.preventDefault(); scrollTo("experience"); }} className={activeSection === "experience" ? "active" : ""}>Experience</a>
            <a href="#projects" onClick={(event) => { event.preventDefault(); scrollTo("projects"); }} className={activeSection === "projects" ? "active" : ""}>Projects</a>
            <a href="#education" onClick={(event) => { event.preventDefault(); scrollTo("education"); }} className={activeSection === "education" ? "active" : ""}>Education</a>
          </div>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setMenuOpen((open) => !open);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Founder &amp; President at Khwazon
              </div>
              <h1 className="hero-name">Mahmood Basirat</h1>
              <p className="hero-title">
                <strong>Full-stack Developer</strong> &nbsp;·&nbsp; <strong>AI Model Evaluator</strong>
              </p>
              <p className="hero-desc">
                I build software for education and everyday business needs. I lead Khwazon and am developing Marif, an AI-supported learning platform for Afghan students studying in Pashto and Dari.
              </p>

              <div style={{ marginTop: "24px" }}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="btn-primary">
                  Get in touch
                </a>
                <a href="#marif" onClick={(e) => { e.preventDefault(); scrollTo("marif"); }} className="hero-marif-link">
                  Explore Marif →
                </a>
              </div>
            </div>

            <div className="profile-card animate">
              <div className="profile-card-top-line" />
              <img src="/profile.jpg" alt="Mahmood Basirat" className="profile-photo" />
              <div>
                <div className="profile-name">Mahmood Basirat</div>
                <div className="profile-sub">Kabul, Afghanistan · Remote</div>
              </div>
              <div className="profile-stats">
                <button type="button" className="stat" onClick={() => scrollTo("experience")} aria-label="Go to experience section">
                  <span className="stat-num">{experience.length}</span>
                  <span className="stat-label">Roles</span>
                </button>
                <button type="button" className="stat" onClick={() => scrollTo("projects")} aria-label="Go to projects section">
                  <span className="stat-num">{projects.length}</span>
                  <span className="stat-label">Projects</span>
                </button>
                <button type="button" className="stat" onClick={() => scrollTo("tools")} aria-label="Go to tools section">
                  <span className="stat-num">{tools.length}</span>
                  <span className="stat-label">Tools</span>
                </button>
                <button type="button" className="stat" onClick={() => scrollTo("skills")} aria-label="Go to languages and skills section">
                  <span className="stat-num">{skills.filter((skill) => skill.cat === "lang").length}</span>
                  <span className="stat-label">Languages</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="about" className="wrap">
          <SectionHeader number="01" title="About" />
          <div className="about-grid">
            <div className="about-card animate animate-delay-1">
              <div className="about-card-label">// who i am</div>
              <p>I'm a full-stack developer and the founder of Khwazon, based in Kabul. My background brings together classroom teaching, AI model evaluation, and building applications for education and business.</p>
            </div>
            <div className="about-card animate animate-delay-2">
              <div className="about-card-label">// what i do</div>
              <p>I develop front-end interfaces and back-end systems, review software quality, and coordinate team tasks. At Khwazon, I also communicate with clients, prepare project proposals, and manage company operations.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="skills" className="wrap">
          <SectionHeader number="04" title="Skills" />
          <div className="legend animate animate-delay-1">
            {[
              ["dev", "#7de2d7", "Development"],
              ["ai", "#a89cf7", "AI"],
              ["design", "#f0b429", "Design"],
              ["soft", "#4ade80", "Leadership & Teaching"],
              ["data", "#7ec8f0", "Data"],
              ["lang", "#f472b6", "Languages"],
            ].map(([cat, color, label]) => (
              <div key={cat} className="legend-item">
                <div className="legend-dot" style={{ background: color }} />
                {label}
              </div>
            ))}
          </div>
          <div className="chips animate animate-delay-2">
            {skills.map((skill) => {
              const colors = catColors[skill.cat];
              return (
                <span key={skill.name} className="chip" style={{ background: colors.bg, borderColor: colors.border, color: colors.text }}>
                  {skill.name}
                </span>
              );
            })}
          </div>
        </section>

        <div className="divider" />

        <section id="tools" className="wrap">
          <SectionHeader number="05" title="Tools & Technologies" />
          <div className="animate animate-delay-1">
            {toolGroups.map((group) => (
              <div key={group.title} className="tool-group">
                <h3>{group.title}</h3>
                <div className="tools-grid">
                  {group.items.map((tool) => <div key={tool} className="tool-card">{tool}</div>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section id="experience" className="wrap">
          <SectionHeader number="06" title="Experience" />
          <div className="exp-stack">
            {experience.map((item, index) => (
              <div key={item.role} className={`exp-card animate animate-delay-${index + 1}`}>
                <div>
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-company">{item.company}</div>
                  <div className="exp-points">
                    {item.points.map((point) => <div key={point} className="exp-point">{point}</div>)}
                  </div>
                  {item.website && <a href={item.website} target="_blank" rel="noopener noreferrer" className="company-website">Visit Khwazon ↗</a>}
                </div>
                <div className="exp-period">{item.period}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section id="projects" className="wrap">
          <SectionHeader number="07" title="Selected Projects" />
          <div className="projects-intro animate animate-delay-1">
            Learning tools, data projects, and useful apps. Choose a category to explore.
          </div>

          <ProjectGallery projects={projects} onViewScreenshots={setGalleryProject} />
        </section>

        <div className="divider" />

        <section id="education" className="wrap">
          <SectionHeader number="08" title="Education" />

          <div className="exp-stack">
            <div className="edu-card animate animate-delay-1">
              <div className="edu-icon">🎓</div>
              <div>
                <div className="edu-degree">Bachelor of Information Technology (Data Science)</div>
                <div className="edu-school">American University of Afghanistan</div>
                <div className="edu-year">2018 – 2024</div>
              </div>
            </div>

            <div className="edu-card animate animate-delay-2">
              <div className="edu-icon">🤖</div>
              <div>
                <div className="edu-degree">AI & Data Science Training</div>
                <div className="edu-school">HBC Digital Camp · Kabul</div>
                <div className="edu-year">Oct 2024 – Nov 2024 · Sponsored by UNDP</div>
              </div>
            </div>

            <div className="edu-card animate animate-delay-3">
              <div className="edu-icon">🌍</div>
              <div>
                <div className="edu-degree">Youth Solidarity & English Language (YSEL)</div>
                <div className="edu-school">U.S. Embassy Kabul · Antalya, Turkey</div>
                <div className="edu-year">Feb 9 – Mar 9, 2016 · 1-month intensive program</div>
                <div style={{ marginTop: "6px", fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Strengthened English communication, cross-cultural collaboration, and leadership through workshops, group projects, and international teamwork.
                </div>
              </div>
            </div>

            <div className="edu-card animate animate-delay-4">
              <div className="edu-icon">🏫</div>
              <div>
                <div className="edu-degree">Higher Secondary School (Class 12 / FSC)</div>
                <div className="edu-school">Rahman Baba High School · Kabul</div>
                <div className="edu-year">December 2017</div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="wrap">
          <SectionHeader number="09" title="How I Contribute" />
          <div className="hire-grid">
            <div className="hire-card animate animate-delay-1">
              <div className="hire-icon">💻</div>
              <div className="hire-title">Full-stack Development</div>
              <p className="hire-desc">Build interfaces, back-end functionality, and connected application workflows for learning platforms and business software, with attention to multilingual use.</p>
            </div>
            <div className="hire-card animate animate-delay-2">
              <div className="hire-icon">🤖</div>
              <div className="hire-title">AI Evaluation & Quality Review</div>
              <p className="hire-desc">Evaluate AI responses across text, image, and video tasks. Apply review criteria, compare outputs, and flag factual errors, hallucinations, and bias.</p>
            </div>
            <div className="hire-card animate animate-delay-3">
              <div className="hire-icon">🧩</div>
              <div className="hire-title">Company & Team Management</div>
              <p className="hire-desc">Manage Khwazon's operations, assign team tasks, communicate with clients, prepare proposals, and review the quality of the software we build.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="wrap">
          <SectionHeader number="10" title="Hobbies" />
          <div className="hobbies-grid">
            <div className="hobby-card animate animate-delay-1">
              <div className="hobby-title">✍️ Writing & Poetry</div>
              <p className="hobby-desc">Passionate about writing poetry that explores culture, identity, and human emotions.</p>
              <a href="https://basirat0.gumroad.com/l/hyaaca" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-block", marginTop: 18, fontSize: "0.82rem", padding: "9px 20px" }}>Read Book ↗</a>
            </div>
            <div className="hobby-card animate animate-delay-2">
              <div className="hobby-title">🤖 Robotics & Arduino</div>
              <p className="hobby-desc">Interested in building robotics projects using Arduino, sensors, and automation systems.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="contact" className="wrap">
          <SectionHeader number="11" title="Contact" />
          <div className="contact-box animate animate-delay-1">
            <div>
              <h3 className="contact-h">Let's work<br />together.</h3>
              <p className="contact-p">Interested in working together on software, AI evaluation, or learning tools? Get in touch to discuss a project or collaboration.</p>
              <div className="contact-btns">
                <a href={cvDownloadUrl} download="Mahmood_Basirat_CV.pdf" className="btn-primary">Download CV</a>
                <a href="mailto:mbasirat6@gmail.com" className="btn-secondary">Email Me</a>
              </div>
            </div>
            <div className="contact-links">
              <a href="https://github.com/mbasirat6" target="_blank" rel="noreferrer" className="clink"><span>🐙</span><div><div className="clink-label">GitHub</div><div className="clink-val">mbasirat6</div></div></a>
              <a href="https://www.linkedin.com/in/mahmood-basirat-788ab1209/" target="_blank" rel="noreferrer" className="clink"><span>💼</span><div><div className="clink-label">LinkedIn</div><div className="clink-val">Mahmood Basirat</div></div></a>
              <a href="mailto:mbasirat6@gmail.com" className="clink"><span>📧</span><div><div className="clink-label">Email</div><div className="clink-val">mbasirat6@gmail.com</div></div></a>
            </div>
          </div>
        </section>

        {galleryProject ? (
          <div className="gallery-overlay" onClick={() => setGalleryProject(null)}>
            <div className="gallery-modal" onClick={(event) => event.stopPropagation()}>
              <div className="gallery-header">
                <div className="gallery-title">{galleryProject.title} Screenshots</div>
                <button className="gallery-close" type="button" onClick={() => setGalleryProject(null)}>✕</button>
              </div>
              <div className="gallery-grid">
                {galleryProject.screenshots.map((src, index) => (
                  <img key={src} src={src} alt={`${galleryProject.title} screenshot ${index + 1}`} className="gallery-img" />
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <footer className="footer">
          <span className="footer-brand">mahmood.basirat</span>
          <span className="footer-copy">© 2026 Mahmood Basirat. All rights reserved.</span>
          <span className="footer-copy">Khwazon Founder · Full-stack Developer</span>
        </footer>
      </div>
    </>
  );
}
