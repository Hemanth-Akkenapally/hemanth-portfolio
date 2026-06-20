const STAGES = [
  { code: "01", title: "HFSS design", detail: "Catheter electrodes and assemblies" },
  { code: "02", title: "Manufacturing", detail: "Validated geometry released" },
  { code: "03", title: "RF measurement", detail: "VNA, S-parameters, oscilloscope" },
  { code: "04", title: "Signal analysis", detail: "Filtering and data integration" },
  { code: "05", title: "ML interpretation", detail: "Lesion depth and microbubbles" },
];

export function ResearchSystemDiagram({ compact = false }) {
  return (
    <div className={`research-flow ${compact ? "research-flow-compact" : ""}`} aria-label="Research workflow">
      {STAGES.map((stage, index) => (
        <div className="research-stage" key={stage.code}>
          <div className="research-stage-node">
            <span>{stage.code}</span>
          </div>
          <div>
            <h3>{stage.title}</h3>
            <p>{stage.detail}</p>
          </div>
          {index < STAGES.length - 1 && <span className="research-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
