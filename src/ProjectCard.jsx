import "./ProjectCard.css";

function ProjectPreview({ project }) {
  if (project.preview === "marif") return (
    <div className="work-preview work-preview-marif">
      <img src="/screenshots/marif/books-light.jpg" alt="Marif school textbook library" loading="lazy" width="426" height="922" />
      <img src="/screenshots/marif/chapter-map-light.jpg" alt="Marif chapter map in Pashto" loading="lazy" width="426" height="922" />
    </div>
  );
  if (project.screenshots || project.image) return (
    <div className={`work-preview work-preview-${project.preview}`}>
      <img src={project.image || project.screenshots[0]} alt={`${project.title} screenshot`} loading="lazy" />
    </div>
  );
  // These are visual summaries of the work, not fabricated product screenshots.
  const steps = project.preview === "review" ? ["Read", "Compare", "Review"] : ["Customer", "Order", "Measurements"];
  return (
    <div className={`work-preview work-preview-${project.preview}`}>
      {project.preview === "portfolio" ? <div className="work-monogram" aria-hidden="true">mb<span>design · build · share</span></div> :
        <div className="work-flow" aria-hidden="true">{steps.map((step, index) => <div key={step}><span>0{index + 1}</span>{step}</div>)}</div>}
      <span className="work-preview-label">{project.preview === "review" ? "Review process" : project.preview === "portfolio" ? "Personal website" : "Workflow overview"}</span>
    </div>
  );
}

export default function ProjectCard({ project, onViewScreenshots }) {
  return (
    <article id={project.id} className="work-card" aria-labelledby={`${project.id}-title`}>
      <ProjectPreview project={project} />
      <div className="work-card-body">
        <div className="work-card-category">{project.category}{project.featured && <span>Featured</span>}</div>
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="work-card-summary">{project.summary}</p>
        <ul className="work-card-tools" aria-label="Key tools">{project.tools.slice(0, 3).map(tool => <li key={tool}>{tool}</li>)}</ul>
        {project.caseStudy ? <a href={project.caseStudy} className="work-read-more">Read more <span aria-hidden="true">↗</span><span className="project-sr-only"> about {project.title}</span></a> :
          <details className="work-details">
            <summary><span className="work-details-closed">Read more</span><span className="work-details-open">Show less</span><span className="project-sr-only"> about {project.title}</span></summary>
            <div className="work-details-body">
              <h4>My role</h4><p>{project.contribution}</p>
              <h4>The idea</h4><p>{project.goal}</p>
              <h4>What I built or did</h4>
              <ul>{project.work.map(item => <li key={item}>{item}</li>)}</ul>
              <h4>{project.resultLabel || "The result"}</h4><p>{project.result}</p>
              {project.context && <><h4>Background</h4><p>{project.context}</p></>}
              <div className="work-evidence">
                {project.screenshots && <button type="button" onClick={() => onViewScreenshots(project)}>View screenshots ↗</button>}
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel}</a>}
                {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.demoLabel}</a>}
              </div>
            </div>
          </details>}
      </div>
    </article>
  );
}
