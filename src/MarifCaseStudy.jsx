import { useRef, useState } from "react";
import "./MarifCaseStudy.css";

const screens = [
  {
    src: "/screenshots/marif/chapter-map-light.jpg",
    title: "A chapter becomes a path",
    alt: "Current Marif chemistry chapter map in light mode, with connected Pashto topics, page references, and a Study this topic button.",
    caption: "Students can explore a topic, open its textbook pages, or ask the tutor to explain that section.",
  },
  {
    src: "/screenshots/marif/tutor-check-light.jpg",
    title: "An explanation leads to a check",
    alt: "Marif AI view with a Pashto chemistry explanation, textbook attribution, and a True/False understanding check in light mode.",
    caption: "The selected map topic opens a focused explanation with textbook attribution and a short True/False check. This connects exploration to active practice.",
  },
  {
    src: "/screenshots/marif/exercises-light.jpg",
    title: "Practice follows the curriculum",
    alt: "Marif chemistry Exercise tab in light mode showing Pashto chapter titles and the number of questions in each exercise set.",
    caption: "Exercise sets follow the textbook’s chapter structure, with question counts visible before students begin. Reading, exercises, and quizzes sit within the same book.",
  },
  {
    src: "/screenshots/marif/explore-light.jpg",
    title: "Search connects a topic to its source",
    alt: "Marif Explore search in light mode with a chemistry chapter result, textbook cover, page range, and Ask AI action.",
    caption: "Explore connects a search term to a specific textbook chapter and page range, with an Ask AI action for further help.",
  },
  {
    src: "/screenshots/marif/books-light.jpg",
    title: "Start with familiar textbooks",
    alt: "Current Marif light-mode Books catalogue showing Grade 10 Pashto textbooks, subject covers, and chapter and page counts.",
    caption: "A catalogue organised by grade and curriculum language makes the school textbook the starting point for study.",
  },
  {
    src: "/screenshots/marif/dari-interface-light.jpg",
    title: "Language shapes the interface",
    alt: "Current Marif light-mode catalogue with Dari interface labels, right-to-left layout, and Grade 12 Pashto textbooks.",
    caption: "The Dari interface adapts labels, numerals, and reading direction. Interface language is separate from the selected textbook language—Pashto in this view.",
  },
];

const decisions = [
  {
    title: "Use AI where an explanation adds value",
    theme: "Affordability",
    decision: "I kept routine steps such as offering an exercise and summarising a quiz score deterministic. A focused teaching turn combines an explanation and a short True/False check in one Gemini request.",
    reason: "A known score does not need a model to restate it. This avoids unnecessary requests and keeps routine feedback predictable.",
    limit: "Fewer calls do not establish a cost-per-student figure. That still needs measurement across realistic study sessions.",
  },
  {
    title: "Keep the textbook within reach",
    theme: "Traceability",
    decision: "I connected curriculum topics and map nodes to the original textbook pages. Students can move from the map to the source, while section teaching uses matching page text as its primary reference.",
    reason: "The curriculum provides a shared foundation for explanations and gives students a way to check what the tutor says.",
    limit: "Grounding does not guarantee correctness. Extraction quality, missing context, and model errors still need review.",
  },
  {
    title: "Design for the languages students use",
    theme: "Access",
    decision: "I built Dari and Pashto curriculum support alongside English, Dari, and Pashto interface options, including right-to-left layouts and a mobile-first reading experience.",
    reason: "Language affects navigation, comprehension, and whether a tool feels usable in everyday study. It belongs in the core design.",
    limit: "Translation is only a starting point. Language quality and usability need feedback from speakers, teachers, and learners.",
  },
  {
    title: "Connect exploration, explanation, and practice",
    theme: "Learning design",
    decision: "I connected map topics to tutor explanations, short understanding checks, textbook exercises, and chapter quizzes. Map progress helps students find their place when they return.",
    reason: "The intention is to help students act on an explanation and revisit a topic, rather than only read a chat response.",
    limit: "A completed map node records participation, not mastery. Recall, understanding, and learning gains require their own evaluation.",
  },
];

export default function MarifCaseStudy() {
  const dialogRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = screens[activeScreen];

  const openScreen = (index) => {
    setActiveScreen(index);
    dialogRef.current.showModal();
  };

  const changeScreen = (step) => {
    setActiveScreen((current) => (current + step + screens.length) % screens.length);
  };

  return (
    <article id="marif" className="project-card-clean project-card-featured marif-case" aria-labelledby="marif-title">
      <div className="marif-eyebrow"><span>Featured project / AI & education</span><span className="marif-status">In active development</span></div>
      <h3 id="marif-title" className="marif-title">Marif</h3>
      <p className="marif-subtitle">A curriculum becomes a learning journey.</p>
      <p className="marif-intro">I am building an AI-supported learning platform around Afghanistan’s school textbooks. Marif brings together reading, guided exploration, and practice in Pashto and Dari—with design decisions shaped by language access, reliability, and the cost of AI.</p>

      <dl className="marif-facts">
        <div><dt>My contribution</dt><dd>Product design, development, curriculum structuring, and tutor integration</dd></div>
        <div><dt>Designed for</dt><dd>Afghan secondary-school students · Current grade selection: 10–12</dd></div>
        <div><dt>Built with</dt><dd>React · Vite · Supabase · Gemini</dd></div>
      </dl>

      <section className="marif-map-story" aria-labelledby="marif-map-title">
        <div>
          <span className="marif-kicker">The central design decision</span>
          <h4 id="marif-map-title">Chapter maps connect the learning path to the AI context.</h4>
          <p>I added chapter maps to turn a long chapter into connected, selectable topics. The map gives students a visual overview, a place to resume, and a route back to the textbook.</p>
          <p>The same structure helps focus the tutor. When a student selects <strong>“Study this topic”</strong>, the app uses the selected topic’s page references to assemble the relevant textbook text for Gemini.</p>
          <div className="marif-design-note">
            <strong>One decision, two intended benefits</strong>
            <p>For students: a more interactive way to explore, recap, and remember a chapter. For the system: less unnecessary textbook context in a focused request, helping control token use.</p>
          </div>
          <p className="marif-caveat">The focused-context path is implemented. Its token savings and effects on engagement or recall have not yet been quantified.</p>
        </div>
        <figure className="marif-map-figure">
          <button type="button" onClick={() => openScreen(0)} className="marif-image-button" aria-label="Enlarge chapter map screenshot">
            <img src={screens[0].src} alt={screens[0].alt} width="426" height="922" loading="lazy" />
            <span className="marif-enlarge">View screenshot ↗</span>
          </button>
          <figcaption>Chemistry topics linked to source pages and a focused tutor action.</figcaption>
        </figure>
      </section>

      <section className="marif-context" aria-labelledby="marif-context-title">
        <h4 id="marif-context-title">From a selected topic to a focused explanation</h4>
        <ol className="marif-flow">
          <li><span>01</span><strong>Select a map topic</strong><p>The student chooses what to study.</p></li>
          <li><span>02</span><strong>Match source pages</strong><p>The app gathers text for that section.</p></li>
          <li><span>03</span><strong>Request focused help</strong><p>Gemini receives that text with the teaching instructions and bounded chat context.</p></li>
          <li><span>04</span><strong>Explain and practise</strong><p>A teaching turn includes an explanation and a short understanding check.</p></li>
        </ol>
        <p className="marif-caveat">Section teaching waits for matching textbook content. Exercise nodes can open existing practice without a Gemini call.</p>
      </section>

      <section className="marif-decisions" aria-labelledby="marif-decisions-title">
        <span className="marif-kicker">Beyond the feature list</span>
        <h4 id="marif-decisions-title">Other decisions behind Marif</h4>
        <div className="marif-decision-list">
          {decisions.map((item, index) => (
            <details key={item.title} className="marif-decision" open={index === 0}>
              <summary><span className="marif-decision-number">{String(index + 2).padStart(2, "0")}</span><span>{item.title}<small>{item.theme}</small></span></summary>
              <div className="marif-decision-body"><p>{item.decision}</p><p><strong>Why I chose it.</strong> {item.reason}</p><p className="marif-caveat"><strong>What remains to be tested.</strong> {item.limit}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section className="marif-evidence" aria-labelledby="marif-evidence-title">
        <span className="marif-kicker">Inside the application</span>
        <h4 id="marif-evidence-title">The decisions in practice</h4>
        <p className="marif-capture-note">Six views from the current application, captured in light mode on September 17, 2026. Start with the chapter map above, then follow the explanation, practice, discovery, and language decisions below. Select any image to enlarge it.</p>
        <div className="marif-screens">
          {screens.slice(1).map((item, index) => (
            <figure key={item.src}>
              <button type="button" className="marif-image-button" onClick={() => openScreen(index + 1)} aria-label={`Enlarge screenshot: ${item.title}`}>
                <img src={item.src} alt={item.alt} width="426" height="922" loading="lazy" />
                <span className="marif-enlarge">View screenshot ↗</span>
              </button>
              <figcaption><strong>{item.title}</strong><p>{item.caption}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="marif-research" aria-labelledby="marif-research-title">
        <span className="marif-kicker">From building to investigating</span>
        <h4 id="marif-research-title">What I want to understand next</h4>
        <p>Marif has given me a working basis for questions I want to study more rigorously: whether explanations stay accurate across languages, whether chapter maps help learners navigate and recall material, and whether the experience is affordable under realistic connectivity constraints.</p>
        <p>I want to involve teachers and learners in evaluating those choices. This is the connection to my interest in AISS: bringing technical development together with participatory design, research methods, and the study of sustainable digital societies.</p>
        <div className="marif-evaluation-grid"><div><strong>Reliability</strong><span>Expert review of textbook support and language quality.</span></div><div><strong>Learning experience</strong><span>Observe navigation and test recall with an appropriate study design.</span></div><div><strong>Affordability</strong><span>Measure tokens, latency, and cost per study session.</span></div></div>
      </section>

      <dialog ref={dialogRef} className="marif-lightbox" aria-labelledby="marif-screen-title" onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); changeScreen(1); } if (event.key === "ArrowLeft") { event.preventDefault(); changeScreen(-1); } }}>
        <div className="marif-lightbox-inner">
          <header><h4 id="marif-screen-title">{screen.title}</h4><button type="button" autoFocus onClick={() => dialogRef.current.close()} aria-label="Close screenshot">✕</button></header>
          <img src={screen.src} alt={screen.alt} width="426" height="922" />
          <p>{screen.caption}</p>
          <p className="marif-capture-note">Current application · Light mode · September 17, 2026</p>
          <nav aria-label="Screenshot navigation"><button type="button" onClick={() => changeScreen(-1)}>← Previous</button><span>{activeScreen + 1} / {screens.length}</span><button type="button" onClick={() => changeScreen(1)}>Next →</button></nav>
        </div>
      </dialog>
    </article>
  );
}
