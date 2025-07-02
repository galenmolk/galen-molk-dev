import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const projects = [
  {
    name: "Space Tactics",
    company: "Global Game Jam 2021",
    description: "A turn-based tactics game built in Unity in under 48 hours.",
    skills: ["Unity", "C#", "Game Design"],
    links: [
      { label: "Play", url: "https://example.com/spacetactics" }
    ],
    image: "https://via.placeholder.com/300x200"
  }
];

const Project = ({ project }) => (
  <div className="project">
    <img src={project.image} alt={project.name} className="project-image" />
    <h3 className="project-title">{project.name}</h3>
    <p className="project-company">{project.company}</p>
    <p className="project-description">{project.description}</p>
    <ul className="project-skills">
      {project.skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
    <div className="project-links">
      {project.links.map((link, i) => (
        <a key={i} href={link.url} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="container">
    <header className="header">
      <h1 className="site-title">Galen Molk</h1>
      <p className="site-subtitle">Software Engineer</p>
      <div className="profile-picture"></div>
      <p className="about-me">[About me blurb goes here]</p>
      <div className="contact-links">
        <a href="mailto:galen@example.com">Email</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>

    <main>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </main>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
