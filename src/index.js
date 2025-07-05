import { createRoot } from "react-dom/client";
import "./index.css";
import { projects, bio } from "./projectsData";

const Project = ({ project }) => (
  <div className="project">
    <div className="project-header">
      <h3 className="project-title">{project.name}</h3>
      <span className="project-company">{project.company}</span>
    </div>
    {project.image && (
      <img
        src={`${process.env.PUBLIC_URL}/${project.image}`}
        alt={project.name}
        className={`project-image ${project.containImage ? 'contain' : ''}`}/>    )}
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
  <div className="header-row">
    <img src={`${process.env.PUBLIC_URL}/profile.webp`} alt="Profile" className="profile-picture" />
    <div className="header-text">
      <h1 className="site-title">Galen Molk</h1>
      <p className="site-subtitle">Software Engineer</p>
    </div>
  </div>
  <div className="about-me">
  {bio.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}
  </div>    
  <div className="contact-links">
    <a href="mailto:galenmolk@gmail.com" target="_blank" rel="noreferrer">Email</a>
    <a href="https://www.linkedin.com/in/galen-molk/" target="_blank" rel="noreferrer">LinkedIn</a>
    <a href="https://github.com/galenmolk" target="_blank" rel="noreferrer">GitHub</a>
  </div>
</header>

    <main>
      {projects && Array.isArray(projects) && projects.filter(project => project?.hide !== true).map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </main>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
