import "./ProjectCard.css";

export default function ProjectCard({ project, number, onViewScreenshots }) {
  return (
    <article className="project-card-clean project-card-compact" aria-labelledby={`project-${number}-title`}>
      <div className="project-top-row">
        <span className="project-category">{project.category}</span>
        <span className="project-number">PROJECT {String(number).padStart(2, "0")}</span>
      </div>
      <h3 id={`project-${number}-title`} className="project-title-clean">{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <p className="project-contribution"><strong>My contribution</strong> {project.contribution}</p>
      <p className="project-stack">{project.tools.slice(0, 3).join(" · ")}</p>

      <div className="project-evidence-links">
        {project.screenshots && <button type="button" onClick={() => onViewScreenshots(project)}>View screenshots ↗</button>}
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel}</a>}
      </div>

      <details className="project-details">
        <summary><span className="project-details-closed">Read project details</span><span className="project-details-open">Close project details</span><span className="project-sr-only">: {project.title}</span></summary>
        <div className="project-details-body">
          <h4>Purpose</h4>
          <p>{project.goal}</p>
          <h4>What I did</h4>
          <ul>{project.work.map((item) => <li key={item}>{item}</li>)}</ul>
          <h4>{project.resultLabel || "Outcome"}</h4>
          <p>{project.result}</p>
          {project.context && <><h4>Project context</h4><p>{project.context}</p></>}
          <h4>Tools & methods</h4>
          <p>{project.tools.join(" · ")}</p>
        </div>
      </details>
    </article>
  );
}
