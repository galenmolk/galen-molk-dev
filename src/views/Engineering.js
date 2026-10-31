import { projects, bio } from "../projectsData";
import { asset, engineeringLinks } from "../site";
import { ExternalLink, Footer, LinkRow } from "./Shared";

const visible = projects.filter((p) => !p.hide);
const featured = visible.filter((p) => p.featured);
const other = visible.filter((p) => !p.featured);

const Meta = ({ p }) => (
  <span className="meta">
    {p.company} · {p.year}
  </span>
);

const WorkItem = ({ p }) => (
  <article className="work-item">
    <div className={`frame${p.containImage ? " contain" : ""}`}>
      {p.image && <img src={asset(p.image)} alt={p.name} loading="lazy" />}
    </div>
    <div>
      <h3>{p.name}</h3>
      <p className="meta">
        {p.company} · {p.year}
      </p>
      <p>{p.short}</p>
      <p className="meta">{p.skills.join(", ")}</p>
      <LinkRow links={p.links} />
    </div>
  </article>
);

const Engineering = () => (
  <div className="page">
    <header className="masthead">
      <img className="masthead-photo" src={asset("profile.webp")} alt="Galen Molk" />
      <div>
        <h1>
          <a href="/">Galen Molk</a>
        </h1>
        <p className="title">Software Engineer</p>
        <p className="subtitle">Gameplay, multiplayer and tools for real-time products.</p>
      </div>
    </header>
    <LinkRow links={engineeringLinks} />

    <main>
      <section className="about">
        {bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <h2>Selected work</h2>
      <div className="work">
        {featured.map((p) => (
          <WorkItem key={p.name} p={p} />
        ))}
      </div>

      <h2>Other work</h2>
      <ul className="other">
        {other.map((p) => (
          <li key={p.name}>
            <div className="other-head">
              <ExternalLink href={p.links[0].url}>{p.name}</ExternalLink>
              <Meta p={p} />
            </div>
            <p>{p.short}</p>
          </li>
        ))}
      </ul>
    </main>

    <Footer>
      I also work professionally as an actor in theatre and film. <a href="/acting">Acting</a>
    </Footer>
  </div>
);

export default Engineering;
