import "./ProjectCard.css";
import ProjectDevices from "./ProjectDevices";

function ProjectPreview({ project }) {
  if (project.devicePreview) return <ProjectDevices preview={project.devicePreview} tone={project.preview} />;
  if (project.screenshots || project.image) return (
    <div className={`work-preview work-preview-${project.preview}`}>
      <img src={project.image || project.screenshots[0]} alt={`${project.title} screenshot`} loading="lazy" />
    </div>
  );
  // These are visual summaries of the work, not fabricated product screenshots.
  const steps = project.preview === "review" ? ["Read", "Compare", "Review"] : ["Customer", "Order", "Measurements"];
  return (
    <div className={`work-preview work-preview-${project.preview} work-preview-concept`}>
      {project.preview === "portfolio" ? <div className="work-monogram" aria-hidden="true">mb<span>design · build · share</span></div> :
        <div className="work-flow" aria-hidden="true">{steps.map((step, index) => <div key={step}><span>0{index + 1}</span>{step}</div>)}</div>}
      <span className="work-preview-label">{project.preview === "review" ? "Review process" : project.preview === "portfolio" ? "Personal website" : "Workflow overview"}</span>
    </div>
  );
}

export default function ProjectCard({ project, onReadMore }) {
  return (
    <article id={project.id} className="work-card glass-card" aria-labelledby={`${project.id}-title`}>
      <ProjectPreview project={project} />
      <div className="work-card-body">
        <div className="work-card-category">{project.category}{project.featured && <span>Featured</span>}</div>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="work-card-summary">{project.summary}</p>
        <ul className="work-card-tools" aria-label="Key tools">{project.tools.slice(0, 3).map(tool => <li key={tool}>{tool}</li>)}</ul>
        <button type="button" className="work-read-more" aria-haspopup="dialog" onClick={() => onReadMore(project)}>
          Read more <span aria-hidden="true">↗</span><span className="project-sr-only"> about {project.title}</span>
        </button>
      </div>
    </article>
  );
}
