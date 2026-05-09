// src/index.js — drop-in replacement.
// Copy this whole file over your existing src/index.js.

import { createRoot } from "react-dom/client";
import "./index.css";
import { projects, bio } from "./projectsData";

// Stable per-card tilt — a polaroid stack feel without randomness on every render.
const TILTS = [-1.6, 1.1, -0.7, 1.4, -1.2, 0.6, -1.8, 0.9, -0.5, 1.7, -1.0, 0.4, -1.4, 1.2];
const tiltFor = (i) => TILTS[i % TILTS.length];

const linkSlug = (s) =>
  `./${s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const Project = ({ project, index }) => (
  <article className="project">
    <div
      className="polaroid"
      style={{ transform: `rotate(${tiltFor(index)}deg)` }}
    >
      <div className="project-image-frame">
        {project.image && (
          <img
            src={`${process.env.PUBLIC_URL}/${project.image}`}
            alt={project.name}
            className={`project-image ${project.containImage ? "contain" : ""}`}
          />
        )}
      </div>
      <div className="polaroid-caption">
        <span>{project.company}</span>
        <span>{project.year}</span>
      </div>
    </div>

    <div>
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.short || project.description}</p>
      <div className="project-skills">{project.skills.join(", ")}</div>
      <div className="project-links">
        {project.links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noreferrer">
            {linkSlug(link.label)}
          </a>
        ))}
      </div>
    </div>
  </article>
);

const App = () => {
  const visible = projects.filter((p) => p?.hide !== true);
  return (
    <div className="container">
      <header className="header">
        <img
          src={`${process.env.PUBLIC_URL}/profile.webp`}
          alt="Galen Molk"
          className="profile-picture"
        />
        <div className="header-text">
          <h1 className="site-title">Galen Molk</h1>
          <p className="site-subtitle">Software Engineer</p>
          <div className="contact-links">
            <a href="mailto:galenmolk@gmail.com">./email</a>
            <a
              href="https://www.linkedin.com/in/galen-molk/"
              target="_blank"
              rel="noreferrer"
            >
              ./linkedin
            </a>
            <a
              href="https://github.com/galenmolk"
              target="_blank"
              rel="noreferrer"
            >
              ./github
            </a>
          </div>
        </div>
      </header>

      {bio && bio.length > 0 && (
        <section className="bio">
          {bio.map((p, i) => (
            <p key={i} className="bio-paragraph">
              {p}
            </p>
          ))}
        </section>
      )}

      <main>
        <div className="projects-heading">
          <h2>Projects</h2>
          <span className="count">
            {String(visible.length).padStart(2, "0")} /{" "}
            {String(visible.length).padStart(2, "0")}
          </span>
        </div>
        <div className="projects-grid">
          {visible.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <span>Thanks for stopping by.</span>
        <span>Galen Molk · 2026</span>
      </footer>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
