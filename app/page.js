"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  contact,
  education,
  experience,
  featuredProjects,
  focusAreas,
  moreDataProjects,
  publications,
  skills,
  stats,
  systemsProjects,
} from "../lib/data";

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
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-sky-400 transition hover:text-sky-300"
        >
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      )}
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
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className="flex flex-col gap-1.5" aria-hidden="true">
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

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-slate-900/80 text-sky-300 shadow-lg backdrop-blur-md transition hover:border-sky-400/60 hover:bg-slate-800/90 hover:text-sky-200"
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
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

      {/* ── Header ── */}
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

        {/* ── Hero ── */}
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
                  { label: "GitHub", href: contact.github },
                  { label: "LinkedIn", href: contact.linkedin },
                  { label: "Email", href: `mailto:${contact.email}` },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-1.5 transition hover:text-sky-300"
                  >
                    <span aria-hidden="true" className="h-px w-3 bg-current" />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div aria-hidden="true" className="absolute inset-0 scale-110 rounded-full bg-sky-400/15 blur-2xl" />
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
                    <div className="text-2xl font-extrabold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[14px] text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="About"
            title="A bit about me"
            subtitle="A background spanning analytics, data engineering, systems work, and research-focused problem solving."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card reveal p-7">
              <p className="text-[15px] leading-8 text-slate-300">
                I completed my Master&apos;s in Data Science from UMBC and built experience across analytics,
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

        {/* ── Focus ── */}
        <section id="focus" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Focus"
            title="Areas of focus"
            subtitle="A portfolio built across data, cloud, systems, and research-oriented engineering."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="card reveal p-6">
                <div className="focus-num mb-3">{area.num}</div>
                <h3 className="text-xl font-bold">{area.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-slate-300">{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Featured Projects ── */}
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

        {/* ── More Data Science Projects ── */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Data Science"
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

        {/* ── Systems Engineering Projects ── */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Systems Engineering"
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

        {/* ── Work Experience ── */}
        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader
            eyebrow="Experience"
            title="Work experience"
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
                    <p className="shrink-0 text-[15px] text-slate-300">{job.period}</p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[15px] text-slate-300">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Education ── */}
          <div className="mt-20">
            <SectionHeader
              eyebrow="Education"
              title="Academic background"
              subtitle="Formal education in data science and electronics & communication engineering."
            />

            <div className="mt-8 space-y-6">
              {education.map((edu) => (
                <div key={edu.institution} className="card reveal p-7">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                      <p className="mt-1 text-[15px] font-medium text-sky-300">{edu.degree}</p>
                    </div>
                    <p className="shrink-0 text-[15px] text-slate-300">{edu.period}</p>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {edu.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[15px] text-slate-300">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
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

        {/* ── Publications ── */}
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
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read publication: ${pub.title}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-sky-400 transition hover:text-sky-300"
                  >
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View publication
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
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
                href={`mailto:${contact.email}`}
                className="rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.45)]"
              >
                Email Me
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                GitHub
              </a>
            </div>

            <p className="mt-8 text-[15px] text-slate-400">
              📍 {contact.location}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 py-6 text-center text-[15px] text-slate-500">
        © {new Date().getFullYear()} Hemanth Akkenapally
      </footer>

      <BackToTop />
    </>
  );
}
