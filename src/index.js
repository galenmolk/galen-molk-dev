import { createRoot } from "react-dom/client";
import "./index.css";
import { projects } from "./projectsData";

const PublicUrl = process.env.PUBLIC_URL;

const Project = ({ project }) => (
  <div className="project">
    <div className="project-header">
      <h3 className="project-title">{project.name}</h3>
      <span className="project-company">{project.company}</span>
    </div>
    {project.image && (
      <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.name} className="project-image" />
    )}
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
      <img src={`${process.env.PUBLIC_URL}/profile.webp`} alt="Profile" className="profile-picture" />
      <p className="about-me">I’m an engineer and artist with a strong background in Unity and game development. I focus on building polished, performant, and accessible interactive experiences, with experience spanning edtech, fitness tech, and creative tools. I enjoy collaborating closely with design, art, and product teams to deliver thoughtful, engaging work.
</p>
      <div className="contact-links">
        <a href="mailto:galenmolk@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/galen-molk/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>

    <main>
      {projects.map((project, index) => {
        console.log(`${PublicUrl}/${project.image}`)
        
        return (
        <Project key={index} project={project} />
      )
      })}
    </main>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
