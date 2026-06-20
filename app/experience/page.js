import { PageIntro } from "../../components/PageIntro";
import { education, experience, skills } from "../../lib/data";

export const metadata = {
  title: "Experience | Hemanth Akkenapally",
  description: "Professional experience, education, and technical skills of Hemanth Akkenapally.",
};

export default function ExperiencePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Experience"
        title="An engineering path shaped by electronics, data, and experimentation."
        description="The timeline behind my current work in RF catheter systems and research-focused machine learning."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="experience-timeline">
          {experience.map((job, index) => (
            <article className="experience-row" key={job.company}>
              <div className="experience-marker"><span>0{index + 1}</span></div>
              <div className="experience-period">{job.period}</div>
              <div className="experience-content">
                <h2>{job.company}</h2>
                <p className="experience-role">{job.role}</p>
                <ul>
                  {job.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-950/35">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Education</p>
          <h2 className="section-title">Academic foundation</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article className="education-panel" key={item.institution}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <strong>{item.points[0]}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Technical toolkit</h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => <span className="skill-pill" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
