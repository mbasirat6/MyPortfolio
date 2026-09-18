import MarifCaseStudy from "./MarifCaseStudy";
import "./MarifPage.css";
import useHashNavigation from "./useHashNavigation";

export default function MarifPage() {
  useHashNavigation();
  return (
    <>
      <a href="#marif" className="case-skip-link">Skip to case study</a>
      <header className="case-page-header">
        <a className="case-page-brand" href="/">mahmood.basirat</a>
        <a href="/#projects">← Back to projects</a>
      </header>
      <main className="case-page-main">
        <nav className="case-page-contents" aria-label="Case study sections">
          <span>In this case study</span>
          <a href="#marif-map-title">Chapter maps</a>
          <a href="#marif-decisions-title">Design decisions</a>
          <a href="#marif-evidence-title">Screenshots</a>
          <a href="#marif-learning-title">What I learned</a>
          <a href="#marif-research-title">Next steps</a>
        </nav>
        <MarifCaseStudy standalone />
      </main>
      <footer className="case-page-footer">Mahmood Basirat · Marif case study</footer>
    </>
  );
}
