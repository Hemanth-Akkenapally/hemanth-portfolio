import { PageIntro } from "../../components/PageIntro";
import { PortfolioProjectCard } from "../../components/PortfolioProjectCard";
import { featuredProjects, moreDataProjects, systemsProjects } from "../../lib/data";

export const metadata = {
  title: "Projects | Hemanth Akkenapally",
  description: "RF, biomedical, machine-learning, computer-vision, NLP, and software projects by Hemanth Akkenapally.",
};

const GROUPS = [
  { eyebrow: "Selected work", title: "Core research projects", projects: featuredProjects },
  { eyebrow: "Machine learning & data", title: "Data-driven systems", projects: moreDataProjects },
  { eyebrow: "Engineering", title: "RF and software systems", projects: systemsProjects },
];

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Projects"
        title="Built across simulation, measurement, data, and software."
        description="A compact record of academic and professional work, grouped by the engineering question each project addresses."
      />

      {GROUPS.map((group, groupIndex) => (
        <section
          className={groupIndex % 2 === 1 ? "border-y border-white/10 bg-slate-950/35" : ""}
          key={group.title}
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="section-eyebrow">{group.eyebrow}</p>
            <h2 className="section-title">{group.title}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.projects.map((project, index) => (
                <PortfolioProjectCard project={project} index={index} key={project.title} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
