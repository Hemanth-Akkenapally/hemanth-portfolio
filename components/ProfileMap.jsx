import Image from "next/image";

const NODES = [
  { code: "RF", label: "Simulation & sensing", position: "profile-node-top" },
  { code: "BIO", label: "Cardiac systems", position: "profile-node-right" },
  { code: "ML", label: "Physical-data models", position: "profile-node-bottom" },
  { code: "DATA", label: "Scientific pipelines", position: "profile-node-left" },
];

export function ProfileMap() {
  return (
    <div className="profile-map" aria-label="Interdisciplinary profile map">
      <div className="profile-map-axis profile-map-axis-horizontal" aria-hidden="true" />
      <div className="profile-map-axis profile-map-axis-vertical" aria-hidden="true" />
      <div className="profile-map-center">
        <Image
          src="/profile.jpeg"
          alt="Hemanth Akkenapally"
          width={180}
          height={180}
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>
      {NODES.map((node) => (
        <div className={`profile-node ${node.position}`} key={node.code}>
          <strong>{node.code}</strong>
          <span>{node.label}</span>
        </div>
      ))}
    </div>
  );
}
