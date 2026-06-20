import Link from "next/link";
import { ProfileMap } from "../components/ProfileMap";
import { ResearchSystemDiagram } from "../components/ResearchSystemDiagram";
import { focusAreas, stats } from "../lib/data";

const ROUTES = [
  {
    href: "/research",
    number: "01",
    title: "Research",
    description: "Cardiac-catheter R&D, RF measurements, signal processing, and publications.",
  },
  {
    href: "/projects",
    number: "02",
    title: "Projects",
    description: "Antenna design, biomedical analysis, computer vision, NLP, and software systems.",
  },
  {
    href: "/experience",
    number: "03",
    title: "Experience",
    description: "Professional history, education, and the technical toolkit behind the work.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-14 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            {["RF systems", "Biomedical R&D", "Signal analysis", "ML systems"].map((item) => (
              <span className="eyebrow-pill" key={item}>{item}</span>
            ))}
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.04] text-white md:text-6xl">
            Connecting physical systems with <span className="gradient-text">intelligent models.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I design and measure RF systems, structure experimental data, and build models that help interpret biomedical behavior.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/research" className="button-primary">Explore research</Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button-secondary">View resume</a>
          </div>
        </div>
        <ProfileMap />
      </section>

      <section className="border-y border-white/10 bg-slate-950/35">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map((item) => (
            <div className="metric-cell" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <p className="section-eyebrow">Research system</p>
            <h2 className="section-title">From geometry to evidence</h2>
            <p className="section-subtitle">
              My work follows one connected engineering loop rather than separate RF and data-science tracks.
            </p>
          </div>
          <ResearchSystemDiagram compact />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="section-eyebrow">Portfolio map</p>
            <h2 className="section-title">Choose a path</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">Each page is focused, visual, and designed for quick faculty review.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ROUTES.map((route) => (
            <Link href={route.href} className="route-card" key={route.href}>
              <span>{route.number}</span>
              <h2>{route.title}</h2>
              <p>{route.description}</p>
              <strong>Open page →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/35">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="section-eyebrow">Research direction</p>
            <h2 className="section-title">Where the work is headed</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div className="focus-row" key={area.num}>
                <span>{area.num}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
