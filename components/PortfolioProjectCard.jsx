export function PortfolioProjectCard({ project, index }) {
  return (
    <article className="card flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-right text-xs font-semibold uppercase text-emerald-300">{project.type}</span>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{project.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.desc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span className="skill-pill" key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}
