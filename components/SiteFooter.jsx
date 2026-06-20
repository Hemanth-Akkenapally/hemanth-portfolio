import { contact } from "../lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Hemanth Akkenapally</p>
        <div className="flex flex-wrap gap-5">
          <a href={`mailto:${contact.email}`} className="hover:text-sky-300">Email</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-300">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-sky-300">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
