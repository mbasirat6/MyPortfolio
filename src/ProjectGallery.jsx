import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Learning & AI", "Data & analysis", "Apps & design"];

export default function ProjectGallery({ projects, onViewScreenshots }) {
  const [category, setCategory] = useState("All");
  const visibleProjects = projects.filter(project => category === "All" || project.group === category);

  useEffect(() => {
    // Keep the existing Explore Marif shortcut working after filtering the gallery.
    const revealMarif = () => {
      setCategory("All");
      requestAnimationFrame(() => document.getElementById("marif")?.scrollIntoView({ block: "start" }));
    };
    const handleHashChange = () => { if (window.location.hash === "#marif") revealMarif(); };
    window.addEventListener("hashchange", handleHashChange);
    const handleAnchorClick = event => {
      if (event.target.closest('a[href="#marif"]')) revealMarif();
    };
    document.addEventListener("click", handleAnchorClick);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="project-gallery">
      <div className="project-filters" role="group" aria-label="Filter projects">
        {categories.map(item => (
          <button key={item} type="button" aria-pressed={category === item}
            aria-controls="project-results" onClick={() => setCategory(item)}>{item}</button>
        ))}
      </div>
      <p className="project-sr-only" role="status">{visibleProjects.length} projects shown. {category}.</p>
      <div id="project-results" className="project-gallery-grid">
        {visibleProjects.map(project => <ProjectCard key={project.id} project={project} onViewScreenshots={onViewScreenshots} />)}
      </div>
    </div>
  );
}
