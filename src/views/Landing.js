import { asset, email } from "../site";
import { Footer } from "./Shared";

const Landing = () => (
  <div className="page">
    <header className="masthead">
      <img className="masthead-photo" src={asset("profile.webp")} alt="Galen Molk" />
      <div>
        <h1>Galen Molk</h1>
        <p className="subtitle">Software engineer and actor.</p>
      </div>
    </header>

    <main className="doors">
      <a className="door" href="/engineering">
        <h2>Engineering</h2>
        <p>Gameplay, multiplayer and tools for real-time software. Currently on Animal Company at Wooster Games.</p>
      </a>
      <a className="door" href="/acting">
        <h2>Acting</h2>
        <p>Theatre and film. Oregon Shakespeare Festival, Theatre for a New Audience, Bedlam.</p>
      </a>
    </main>

    <Footer>
      <a href={`mailto:${email}`}>{email}</a>
    </Footer>
  </div>
);

export default Landing;
