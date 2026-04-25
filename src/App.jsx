export default function MahmoodPortfolio() {
  const projects = [
    {
      title: "AI Model Training & Evaluation",
      description:
        "Improved AI model response quality by identifying hallucinations, bias, and ranking outputs across multimodal datasets.",
      tags: ["AI", "Annotation", "Evaluation", "LLM"],
    },
    {
      title: "Data Analysis at Harakat",
      description:
        "Built Power BI dashboards and analyzed datasets to support decision-making and improve reporting efficiency.",
      tags: ["Python", "Power BI", "Analytics"],
    },
    {
      title: "Khayat Tailor Management App",
      description:
        "Designed a multilingual tailor management system to streamline customer flow, measurement tracking, and order creation.",
      tags: ["UI/UX", "Figma", "Product"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Built a responsive personal portfolio using React and Tailwind CSS, focusing on clean UI, smooth interactions, and professional presentation of projects and experience.",
      tags: ["React", "Tailwind CSS", "UI/UX", "Frontend"],
    },
  ];

  const skills = [
    "Data Analysis",
    "Data Cleaning",
    "Dashboard Building",
    "AI Evaluation",
    "Annotation",
    "Machine Learning Basics",
    "UI/UX Review",
    "Communication",
    "Teaching",
    "Pashto",
    "Dari",
    "English",
  ];

  const tools = [
    "Python",
    "SQL",
    "Power BI",
    "Excel",
    "KOBO / ODK",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Figma",
    "JavaScript",
    "MySQL",
    "SQLite",
  ];

  const experience = [
    {
      role: "AI Model Trainer / AI Data Annotator",
      company: "Freelance | Remote",
      period: "Dec 2025 – Present",
      points: [
        "Evaluated AI model outputs and provided feedback to improve response quality.",
        "Performed annotation, classification, and ranking tasks across text, image, and video datasets.",
        "Identified hallucinations, bias, and factual inconsistencies in AI responses.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Harakat | Kabul, Afghanistan",
      period: "May 2024 – 2025",
      points: [
        "Designed and managed surveys using KOBO.",
        "Cleaned, validated, and maintained datasets to improve data quality and accuracy.",
        "Analyzed data using Python and developed Power BI dashboards to track KPIs.",
      ],
    },
    {
      role: "Senior Computer Instructor",
      company: "SPS Sofia Private School | Kabul, Afghanistan",
      period: "Feb 2021 – 2023",
      points: [
        "Taught students from grade 4 to 12 with a focus on communication and computer skills.",
        "Designed lesson plans, assessments, exam papers, clubs, and student activities.",
        "Collaborated with school staff to improve curriculum and student engagement.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center animate-fade-in">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold md:text-6xl">
              Mahmood Basirat
            </h1>
            <h2 className="mt-3 text-xl text-slate-300">Data Analyst | AI Trainer</h2>
            <p className="mt-6 text-lg text-slate-300">
              Data Analyst and AI Trainer with experience in AI evaluation, data analysis, and building real-world solutions.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#projects" className="rounded-2xl bg-white px-5 py-3 text-slate-900 transition hover:-translate-y-1 hover:shadow-xl">
                Projects
              </a>
              <a href="#contact" className="rounded-2xl border border-slate-700 px-5 py-3 transition hover:-translate-y-1 hover:bg-slate-900">
                Contact
              </a>
              <button
                type="button"
                className="rounded-2xl border border-slate-700 px-5 py-3 cursor-pointer transition hover:-translate-y-1 hover:bg-slate-900"
                onClick={() => window.open("https://www.linkedin.com/in/mahmood-basirat-788ab1209/", "_blank", "noopener,noreferrer")}
              >
                LinkedIn
              </button>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Mahmood Basirat"
              className="w-56 h-56 rounded-full object-cover border-4 border-slate-700 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-4 text-slate-300">
            I work in AI training, data analysis, and product-focused problem solving. I have experience in improving AI systems, analyzing datasets, and building useful applications.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-700 px-4 py-2 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Tools</h2>
          <p className="mt-3 text-slate-300">
            Tools and technologies I use for data analysis, reporting, design, and development.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div key={item.role} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-slate-400">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>

              <ul className="mt-5 space-y-2 text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="mt-4 inline-block text-sm text-blue-400 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-4 text-slate-300">
            Bachelor of Information Technology (Data Science) – American University of Afghanistan
          </p>
        </div>
      </section>

      {/* POETRY */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Poetry & Writing</h2>
          <p className="mt-4 text-slate-300">
            I write poetry exploring culture, identity, and human emotions. My work connects creativity with deeper meaning.
          </p>
        </div>
      </section>

      {/* HOBBIES */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Hobbies</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-semibold">Writing & Poetry</h3>
              <p className="mt-2 text-sm text-slate-400">
                Passionate about writing poetry that explores culture, identity, and human emotions.
              </p>

              <a
                href="https://basirat0.gumroad.com/l/hyaaca"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-lg"
              >
                Buy Book
              </a>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-semibold">Robotics & Arduino</h3>
              <p className="mt-2 text-sm text-slate-400">
                Interested in building robotics projects using Arduino, sensors, and automation systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* HIRE ME */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Hire Me</h2>
          <p className="mt-4 text-slate-300">
            I am available for remote projects, freelance work, and entry-level data roles.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:-translate-y-1 hover:border-slate-600">
              <h3 className="font-semibold">Data Analysis</h3>
              <p className="mt-2 text-sm text-slate-400">
                Cleaning data, analyzing trends, and building reports using Python, SQL, Excel, and Power BI.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:-translate-y-1 hover:border-slate-600">
              <h3 className="font-semibold">AI Training</h3>
              <p className="mt-2 text-sm text-slate-400">
                AI response evaluation, annotation, ranking, hallucination detection, and quality review.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:-translate-y-1 hover:border-slate-600">
              <h3 className="font-semibold">Product Support</h3>
              <p className="mt-2 text-sm text-slate-400">
                UI/UX review, app testing, workflow improvement, and multilingual product feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4 text-slate-300">
            Interested in working together? You can contact me through email, phone, or LinkedIn.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/Mahmood_Basirat_CV.pdf"
              download
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Download CV
            </a>

            <a
              href="mailto:mbasirat6@gmail.com"
              className="rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-slate-950"
            >
              Email Me
            </a>
          </div>

          <div className="mt-6 space-y-2 text-slate-300">
            <p><a href="https://www.linkedin.com/in/mahmood-basirat-788ab1209/" target="_blank" rel="noreferrer" className="underline underline-offset-4">🔗 LinkedIn Profile</a></p>
            <p>📧 mbasirat6@gmail.com</p>
            <p>📞 +93 766 576 559</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 Mahmood Basirat. All rights reserved.
      </footer>
    </div>
  );
}
