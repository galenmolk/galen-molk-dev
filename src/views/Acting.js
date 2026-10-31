import {
  credits,
  gallery,
  headshot,
  links,
  recent,
  resume,
  upcoming,
  upcomingIsOpen,
} from "../actingData";
import { asset, email } from "../site";
import { ExternalLink, Footer, LinkRow } from "./Shared";

// Splits "A & B" / "A, B" so each known name links on its own.
const Linked = ({ text }) =>
  text
    ? text.split(/( & |, )/).map((part, i) =>
        links[part] ? (
          <a key={i} className="quiet" href={links[part]} target="_blank" rel="noreferrer">
            {part}
          </a>
        ) : (
          part
        )
      )
    : null;

const CreditTable = ({ caption, rows }) => (
  <details className="credit-group">
    <summary>
      {caption} <span className="count">({rows.length})</span>
    </summary>
    <table className="credits">
      <tbody>
        {rows.map((c) => (
          <tr key={c.production}>
            <td>
              {c.production}
              {c.note && <span className="note"> ({c.note})</span>}
            </td>
            <td>{c.role}</td>
            <td>
              <Linked text={c.company} />
            </td>
            <td>
              dir. <Linked text={c.director} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </details>
);

const Acting = () => (
  <div className="page">
    <header className="masthead">
      <img className="masthead-photo portrait" src={asset(headshot)} alt="Galen Molk headshot" />
      <div>
        <h1>
          <a href="/">Galen Molk</a>
        </h1>
        <p className="title">Actor</p>
        <p className="subtitle">Theatre and film.</p>
      </div>
    </header>
    <LinkRow
      links={[
        { label: "Résumé (PDF)", url: asset(resume) },
        { label: "Headshot", url: asset(headshot) },
        { label: "Email", url: `mailto:${email}` },
      ]}
    />

    <main>
      {upcomingIsOpen() && (
        <>
          <h2>Upcoming</h2>
          <section className="feature">
            <h3>{upcoming.production}</h3>
            <p className="meta">
              {upcoming.role} · <Linked text={upcoming.company} /> · dir. <Linked text={upcoming.director} />
              <br />
              {upcoming.dates}
            </p>
            <p>{upcoming.adaptation}</p>
            <p className="meta">
              <ExternalLink href={upcoming.url}>Production page</ExternalLink>
            </p>
          </section>
        </>
      )}

      <h2>Recent work</h2>
      <section className="feature">
        <div className="frame video">
          <iframe src={recent.src} title={`${recent.title} (short film)`} allow="fullscreen; picture-in-picture" allowFullScreen />
        </div>
        <h3>{recent.title}</h3>
        <p className="meta">
          {recent.meta} · dir. <Linked text={recent.director} />
        </p>
        <p>{recent.logline}</p>
        <p className="meta">
          <ExternalLink href={recent.url}>Watch on Vimeo</ExternalLink>
        </p>
      </section>


      <h2>Credits</h2>
      <CreditTable caption="Film" rows={credits.film} />
      <CreditTable caption="Theatre" rows={credits.theatre} />
      <CreditTable caption="Staged readings" rows={credits.readings} />
      <CreditTable caption="Television" rows={credits.tv} />

      <h2>Production photos</h2>
      <div className="gallery">
        {gallery.map((g) => (
          <figure key={g.src}>
            <a href={asset(g.src)} target="_blank" rel="noreferrer">
              <img src={asset(g.src)} alt={g.caption} loading="lazy" />
            </a>
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </div>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </main>

    <Footer>
      I also work as a software engineer. <a href="/engineering">Engineering</a>
    </Footer>
  </div>
);

export default Acting;
