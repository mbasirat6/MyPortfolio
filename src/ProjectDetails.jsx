import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./ProjectDetails.css";

export default function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  const backdropPress = useRef(false);
  const screenshots = project.screenshots || (project.image ? [project.image] : []);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    titleRef.current.focus({ preventScroll: true });
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, []);

  const isOutsidePanel = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };

  const keepFocusInPanel = (event) => {
    if (event.key !== "Tab") return;
    const controls = [...event.currentTarget.querySelectorAll('button, a[href], [tabindex="0"]')];
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === titleRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return createPortal(
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-detail-title"
      onClose={onClose}
      onKeyDown={keepFocusInPanel}
      onPointerDown={(event) => { backdropPress.current = isOutsidePanel(event); }}
      onClick={(event) => { if (backdropPress.current && isOutsidePanel(event)) dialogRef.current.close(); }}>
      <header className="project-dialog-header">
        <div>
          <p className="project-dialog-category">{project.category}{project.featured && " · Featured project"}</p>
          <h2 id="project-detail-title" ref={titleRef} tabIndex={-1}>{project.title}</h2>
        </div>
        <button type="button" className="project-dialog-close" aria-label="Close project details" onClick={() => dialogRef.current.close()}>
          <span aria-hidden="true">×</span>
        </button>
      </header>
      <div className="project-dialog-scroll" tabIndex={0} role="region" aria-label="Project explanation">
        <p className="project-dialog-intro">{project.summary}</p>
        <ul className="project-dialog-tools" aria-label="Project tools">{project.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
        <section className="project-dialog-section"><h3>The idea</h3><p>{project.goal}</p></section>
        <section className="project-dialog-section"><h3>My role</h3><p>{project.contribution}</p></section>
        <section className="project-dialog-section"><h3>What I built or did</h3><ul>{project.work.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section className="project-dialog-section"><h3>{project.resultLabel || "The result"}</h3><p>{project.result}</p></section>
        {project.context && <section className="project-dialog-section"><h3>Background</h3><p>{project.context}</p></section>}
        {project.reflection && <section className="project-dialog-section"><h3>What I learned & next steps</h3><p>{project.reflection}</p></section>}
        {(project.caseStudy || project.link || project.demoLink) && <section className="project-dialog-section">
          <h3>Explore the project</h3>
          <div className="project-dialog-links">
            {project.caseStudy && <a href={project.caseStudy}>Read the full case study <span aria-hidden="true">↗</span></a>}
            {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.demoLabel}</a>}
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel}</a>}
          </div>
        </section>}
        {screenshots.length > 0 && <section className="project-dialog-section">
          <h3>Screenshots</h3>
          <div className="project-dialog-screens">
            {screenshots.map((src, index) => <a key={src} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} screenshot ${index + 1} in a new tab`}>
              <img src={src} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
              <span>Screenshot {index + 1} <span aria-hidden="true">↗</span></span>
            </a>)}
          </div>
        </section>}
      </div>
    </dialog>, document.body,
  );
}
