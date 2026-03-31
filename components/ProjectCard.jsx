export function ProjectCard({ project, accent = "sky" }) {
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
          <svg
            aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      )}
    </div>
  );
}
