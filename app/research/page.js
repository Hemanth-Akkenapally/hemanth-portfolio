import { PageIntro } from "../../components/PageIntro";
import { ResearchSystemDiagram } from "../../components/ResearchSystemDiagram";
import { publications } from "../../lib/data";

export const metadata = {
  title: "Research | Hemanth Akkenapally",
  description: "RF catheter research, experimental signal analysis, machine learning, and antenna publications by Hemanth Akkenapally.",
};

const RESEARCH_LAYERS = [
  {
    code: "SIM",
    title: "Electromagnetic design",
    points: ["Catheter electrodes and assemblies in Ansys HFSS", "Design evaluation before manufacturing release"],
  },
  {
    code: "MEAS",
    title: "Experimental measurement",
    points: ["VNA S-parameters across power and frequency", "Oscilloscope, telemetry, and experimental metadata"],
  },
  {
    code: "MODEL",
    title: "Signal and model interpretation",
    points: ["Ninth-order low-pass filtering", "Predictive analysis of lesion depth and microbubble formation"],
  },
];

export default function ResearchPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Research"
        title="RF measurement, biomedical systems, and intelligent interpretation."
        description="A connected workflow built around physical design, controlled experiments, and models grounded in measured behavior."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <ResearchSystemDiagram />
      </section>

      <section className="border-y border-white/10 bg-slate-950/35">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="section-eyebrow">Current work</p>
          <h2 className="section-title">Three layers of evidence</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {RESEARCH_LAYERS.map((layer) => (
              <article className="evidence-panel" key={layer.code}>
                <span>{layer.code}</span>
                <h3>{layer.title}</h3>
                <ul>
                  {layer.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="section-eyebrow">Publications</p>
        <h2 className="section-title">Undergraduate antenna research</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {publications.map((publication, index) => (
            <article className="publication-panel" key={publication.title}>
              <span>0{index + 1}</span>
              <h3>{publication.title}</h3>
              <p className="publication-venue">{publication.venue}</p>
              <p>{publication.desc}</p>
              {publication.url && (
                <a href={publication.url} target="_blank" rel="noreferrer">View DOI →</a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950/35">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="section-eyebrow">PhD direction</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Intelligent RF sensing", "Hardware-integrated ML systems", "Signal processing", "AI-enabled biomedical devices"].map((item) => (
              <span className="direction-chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
