"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ── Data ────────────────────────────────────────────── */
const focusAreas = [
  {
    num: "01",
    title: "Data Science & Analytics",
    desc: "Applied machine learning, experimentation, KPI design, forecasting, business analysis, and decision-ready reporting."
  },
  {
    num: "02",
    title: "Data Engineering & Cloud",
    desc: "ETL/ELT pipelines, data validation, warehousing, cloud platforms, APIs, and scalable analytics workflows."
  },
  {
    num: "03",
    title: "Systems Engineering & Biomedical",
    desc: "RF systems, biomedical modeling, simulation-driven engineering, telemetry, and technical system design."
  },
  {
    num: "04",
    title: "Research & Publications",
    desc: "Interest in research-oriented problem solving across NLP, computer vision, biomedical systems, and RF engineering."
  }
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "2", label: "Publications" },
  { value: "MS", label: "Data Science, UMBC" }
];

const skills = {
  "Analytics & Data Science": [
    "Python", "SQL", "R", "Pandas", "NumPy",
    "scikit-learn", "TensorFlow", "Keras", "PyTorch",
    "NLP", "Computer Vision", "Statistical Modeling"
  ],
  "Data Engineering": [
    "ETL/ELT", "Apache Spark", "Kafka", "dbt", "SSIS",
    "Azure Data Factory", "Airflow", "Data Validation",
    "Data Profiling", "Data Lineage"
  ],
  "BI & Visualization": [
    "Power BI", "Tableau", "Streamlit", "QuickSight",
    "Looker", "Plotly", "Matplotlib", "Dashboarding", "KPI Design"
  ],
  "Cloud & Platforms": [
    "AWS", "Azure", "Snowflake", "Redshift",
    "BigQuery", "PostgreSQL", "MySQL", "MongoDB"
  ],
  "Systems & Tools": [
    "Docker", "Kubernetes", "Jenkins", "Git/GitHub",
    "REST APIs", "FastAPI", "Flask", "GraphQL", "Linux"
  ],
  "Research Interests": [
    "Applied Machine Learning", "NLP", "Computer Vision",
    "Biomedical Systems", "RF Systems", "Time Series",
    "Research-Driven Engineering"
  ]
};

const experience = [
  {
    company: "SIGT LLC",
    role: "Health Data Engineer & Systems Analyst",
    period: "Jan 2025 – Present",
    current: true,
    points: [
      "Built Python and SQL workflows to ingest, validate, and transform laboratory, telemetry, and engineering datasets into structured, decision-ready outputs.",
      "Worked on data profiling, mapping, lineage, validation, and anomaly detection to improve data quality and support cross-functional technical analysis.",
      "Created dashboards and reporting workflows to communicate operational metrics, thresholds, and insights to engineering and business stakeholders."
    ]
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Business & Financial Data Analyst / Data Engineer",
    period: "Sep 2021 – Jan 2023",
    points: [
      "Worked with SQL, Python, Snowflake, and enterprise business data to transform, validate, and analyze large datasets for reporting and decision support.",
      "Built reporting outputs and dashboards for portfolio performance, customer segmentation, and analytics use cases across business teams.",
      "Documented requirements, data logic, reporting definitions, and process flows while collaborating with technical and non-technical stakeholders."
    ]
  },
  {
    company: "Cisco",
    role: "Data Analyst Intern",
    period: "May 2019 – May 2021",
    points: [
      "Developed ETL-style workflows using SSIS and Azure Data Factory to automate extraction and transformation of operational and network-related datasets.",
      "Wrote SQL and Python scripts for KPI generation, reporting, and data validation.",
      "Built dashboards and structured reports that improved visibility into business and technical performance metrics."
    ]
  }
];

const featuredProjects = [
  {
    title: "E-Commerce Data Challenge",
    type: "Business Analytics · Data Quality · KPI Strategy",
    desc: "Performed end-to-end analysis on 244,179 unique orders across 25,001 customers, covering revenue, profit, referral economics, Black Friday impact, and customer segmentation.",
    stack: ["Python", "Pandas", "Plotly", "Matplotlib", "Data Cleaning", "KPI Design"]
  },
  {
    title: "BERT vs LSTM Sentiment on X",
    type: "NLP · Streaming Analytics",
    desc: "Built a large-scale sentiment analysis pipeline on social media data using BERT and bi-LSTM models, with cloud-based ingestion, model serving, and monitoring workflows.",
    stack: ["Python", "BERT", "LSTM", "AWS", "NLP", "Streaming"]
  },
  {
    title: "Pneumonia Detection using VGG16",
    type: "Deep Learning Research",
    desc: "Built a transfer learning pipeline on chest X-ray data using VGG16, applying augmentation, staged fine-tuning, and structured evaluation to improve classification performance.",
    stack: ["Python", "TensorFlow", "Keras", "VGG16", "Computer Vision"]
  }
];

const moreDataProjects = [
  {
    title: "Named Entity Recognition with BiLSTM",
    type: "NLP Research",
    desc: "Implemented a named entity recognition model using embeddings and BiLSTM sequence modeling, improving recognition performance through careful training and optimization.",
    stack: ["Python", "TensorFlow", "Keras", "BiLSTM", "NLP"]
  },
  {
    title: "Automatic License Plate Detection",
    type: "Computer Vision Project",
    desc: "Built a YOLOv4-based license plate detection workflow and integrated it into an application for real-time visual inference and practical evaluation.",
    stack: ["Python", "YOLOv4", "OpenCV", "Streamlit"]
  },
  {
    title: "TweetSense",
    type: "Sentiment Analytics · Data Pipeline",
    desc: "Created an end-to-end sentiment analytics workflow for large-scale tweet data, transforming raw text into structured insights, validation outputs, and dashboard-ready results.",
    stack: ["Python", "NLP", "AWS", "APIs", "Analytics Pipeline"]
  }
];

const systemsProjects = [
  {
    title: "Catheter Electrode Phase Shift Analysis",
    type: "RF · Biomedical Research",
    desc: "Designed catheter electrode models in HFSS to study phase reversal frequency shifts, tissue proximity effects, and electric field intensity, then bench-validated results.",
    stack: ["HFSS", "Python", "VNA", "Oscilloscope", "RF Simulation"]
  },
  {
    title: "SAR & Thermal Safety Envelope",
    type: "Biomedical Safety Research",
    desc: "Built EM and thermal simulation workflows to estimate SAR distributions, hotspots, and safe operating envelopes for biomedical ablation systems.",
    stack: ["HFSS", "COMSOL", "SAR Analysis", "Biomedical Modeling"]
  },
  {
    title: "Impedance Matching & Coil Sensing",
    type: "RF Systems Engineering",
    desc: "Designed sensing coil and impedance matching workflows, tuning resonance and Q-factor using circuit analysis and RF design concepts for sensing-oriented engineering systems.",
    stack: ["HFSS", "ANSYS Circuit", "Smith Chart", "RF Design"]
  },
  {
    title: "Cloud-Native Analytics & Streaming Microservices",
    type: "Cloud · Systems Engineering",
    desc: "Built event-driven services and analytics workflows using APIs, containers, and orchestration patterns, with CI/CD and monitoring for scalable deployment.",
    stack: ["Python", "Java", "Kafka", "Spark", "Docker", "Kubernetes"]
  },
  {
    title: "Web Server on AWS",
    type: "Cloud Deployment Project",
    desc: "Built and deployed a web application on AWS using compute, storage, database, and routing services, with deployment, security, and operational best practices.",
    stack: ["Flask", "AWS EC2", "RDS", "S3", "Route 53"]
  }
];

const publications = [
  {
    title: "A Compact Frequency-Reconfigurable Antenna with Enhanced Bandwidth for WLAN Applications",
    venue: "IJCRT, 2021",
    desc: "Research on a compact frequency-reconfigurable antenna design focused on bandwidth improvement and WLAN applications."
  },
  {
    title: "A Compact Metamaterial-Based Dual-Band Antenna with Improved Gain for WLAN",
    venue: "IJRASET, 2021",
    desc: "Research on a dual-band antenna using metamaterial concepts to improve gain and return loss for WLAN use cases."
  }
];

/* ── Hooks ───────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-link");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) =>
              l.classList.toggle("active", l.getAttribute("href") === `#${e.target.id}`)
            );
          }
        }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
}

/* ── Components ──────────────────────────────────────── */
function Pill({ children, className = "" }) {
  return (
    <span
      className={`inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1.5 text-[15px] font-medium text-sky-200 ${className}`}
    >
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="reveal">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

function ProjectCard({ project, accent = "sky" }) {
  const typeColor =
    accent === "emerald" ? "project-accent-emerald" : "project-accent-sky";
  const pillBorder =
    accent === "emerald"
      ? "border-emerald-400/20 bg-emerald-400/8 text-emerald-300"
      : "border-white/10 bg-white/5 text-slate-200";

  return (
    <div className="card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1">
      <div className={`text-[13px] font-semibold uppercase tracking-wider ${typeColor}`}>
        {project.type}
      </div>
      <h3 className="mt-2.5 text-xl font-bold leading-snug">{project.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-300">{project.desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className={`rounded-full border px-3 py-1 text-[13px] ${pillBorder}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#focus", label: "Focus" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#publications", label: "Publications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
        aria-label="Toggle menu"
      >
        <span className="flex flex-col gap-1.5">
          <span
            className="block h-0.5 w-5 rounded bg-current transition-all duration-300"
            style={open ? { transform: "translateY(8px) rotate(45deg)" } : {}}
          />
          <span
            className="block h-0.5 w-5 rounded bg-current transition-all duration-300"
            style={open ? { opacity: 0 } : {}}
          />
          <span
            className="block h-0.5 w-5 rounded bg-current transition-all duration-300"
            style={open ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
          />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

function TimelineLine() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          io.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className="timeline-track" />;
}

/* ── Page ────────────────────────────────────────────── */
export default function Home() {
  useScrollReveal();
  useActiveSection();

  return (
    <>
      <div className="bg-scene" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-bold tracking-tight text-white">
            <span className="gradient-text">HA</span>
            <span className="ml-2 text-slate-300">Hemanth Akkenapally</span>
          </a>

          <nav className="hidden items-center gap-7 text-[15px] text-slate-300 md:flex">
            {["about", "focus", "projects", "experience", "skills", "publications", "contact"].map((id) => (
              <a key={id} href={`#${id}`} className="nav-link capitalize">
                {id}
              </a>
            ))}
          </nav>

          <MobileMenu />
        </div>
      </header>

      <main className="min-h-screen">
        <section id="home" className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="grid items-center gap-16 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                {["Data Science", "Analytics", "Data Engineering", "Research"].map((tag) => (
                  <Pill key={tag} className="hero-pill">{tag}</Pill>
                ))}
              </div>

              <h1 className="hero-headline max-w-2xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
                Building intelligent <span className="gradient-text">data systems</span> from pipeline to insight.
              </h1>

              <p className="hero-sub mt-6 max-w-xl text-lg leading-9 text-slate-300 md:text-xl">
                I&apos;m Hemanth — a data and systems professional with experience across
                data science, analytics, cloud platforms, data engineering, and
                research-focused problem solving.
              </p>

              <div className="hero-cta mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_24px_rgba(56,189,248,0.4)]"
                >
                  View Projects →
                </a>
                <a
                  href="/resume.pdf"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Download Resume
                </a>
              </div>

              <div className="hero-links mt-7 flex flex-wrap gap-5 text-[15px] text-slate-300">
                {[
                  { label: "GitHub", href: "https://github.com/Hemanth-Akkenapally" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/hemanthakkenapally" },
                  { label: "Email", href: "mailto:akkenapallyhemanth@gmail.com" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-1.5 transition hover:text-sky-300"
                  >
                    <span className="h-px w-3 bg-current" />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 scale-110 rounded-full bg-sky-400/15 blur-2xl" />
                  <div className="relative overflow-hidden rounded-full border border-sky-300/20 bg-white/5 p-2 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
                    <Image
                      src="/profile.jpeg"
                      alt="Hemanth Akkenapally"
                      width={220}
                      height={220}
                      className="h-[220px] w-[220px] rounded-full object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="hero-stats grid grid-cols-2 gap-3">
                {stats.map((item) => (
                  <div key={item.label} className="stat-card text-center">
                    <div
                      className="text-2xl font-extrabold text-white"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.value}
                    </div>
                    <div className="mt-1 text-[14px] text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="About"
            title="A bit about me"
            subtitle="A background spanning analytics, data engineering, systems work, and research-focused problem solving."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card reveal p-7">
              <p className="text-[15px] leading-8 text-slate-300">
                I completed my Master&apos;s in Data Science at UMBC and built experience across analytics,
                reporting, ETL workflows, cloud data platforms, dashboarding, validation, and technical systems.
                My background lets me work across both business-facing and engineering-focused environments.
              </p>
            </div>

            <div className="card reveal p-7">
              <p className="text-[15px] leading-8 text-slate-300">
                I am also strongly interested in research. I enjoy exploring applied machine learning,
                NLP, computer vision, biomedical systems, and RF engineering problems, especially when
                research ideas can be translated into practical systems and measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        <section id="focus" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Focus"
            title="Areas of focus"
            subtitle="A portfolio built across data, cloud, systems, and research-oriented engineering."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="card reveal p-6">
                <h3 className="text-xl font-bold">{area.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-slate-300">{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Projects"
            title="Featured work"
            subtitle="Selected projects across business analytics, machine learning, NLP, and applied engineering."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.title} className="reveal">
                <ProjectCard project={project} accent="sky" />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="More data science projects"
            subtitle="Applied machine learning, analytics, NLP, and computer vision projects that reflect both technical depth and practical impact."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {moreDataProjects.map((project) => (
              <div key={project.title} className="reveal">
                <ProjectCard project={project} accent="sky" />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            title="Systems engineering projects"
            subtitle="Engineering-focused work across RF systems, biomedical modeling, cloud-native services, and applied system design."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {systemsProjects.map((project) => (
              <div key={project.title} className="reveal">
                <ProjectCard project={project} accent="emerald" />
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Experience"
            title="Education & work"
            subtitle="Professional work across health data, analytics, enterprise reporting, and data systems."
          />

          <div className="relative mt-10 grid gap-8 md:grid-cols-[160px_1fr]">
            <div className="relative hidden md:block">
              <TimelineLine />
            </div>

            <div className="space-y-8">
              {experience.map((job) => (
                <div key={job.company} className="card reveal p-7">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.company}</h3>
                      <p className="mt-1 text-[15px] font-medium text-sky-300">{job.role}</p>
                    </div>
                    <p className="text-[15px] text-slate-300">{job.period}</p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[15px] text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Skills"
            title="Tools I work with"
            subtitle="A combined stack covering analytics, data science, engineering, cloud, visualization, and research-oriented technologies."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="card reveal p-6">
                <h3 className="text-lg font-bold">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Publications"
            title="Published research"
            subtitle="Research work reflecting my interest in RF systems, electromagnetics, and applied engineering."
          />

          <div className="mt-8 space-y-6">
            {publications.map((pub) => (
              <div key={pub.title} className="card reveal p-7">
                <h3 className="text-xl font-bold">{pub.title}</h3>
                <p className="mt-2 text-[15px] font-medium text-sky-300">{pub.venue}</p>
                <p className="mt-3 text-[15px] leading-8 text-slate-300">{pub.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="card reveal p-10 text-center">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s work together</h2>
            <p className="section-subtitle mx-auto">
              I am open to opportunities across data science, analytics, data engineering,
              systems engineering, and research-oriented technical roles.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:akkenapallyhemanth@gmail.com"
                className="rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.45)]"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/hemanthakkenapally"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Hemanth-Akkenapally"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>

            <p className="mt-8 text-[15px] text-slate-400">
              📍 Halethorpe, MD &nbsp;·&nbsp; +1 (667) 406-4046
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-6 text-center text-[15px] text-slate-500">
        © {new Date().getFullYear()} Hemanth Akkenapally
      </footer>
    </>
  );
}
