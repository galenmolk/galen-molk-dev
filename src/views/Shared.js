import { asset } from "../site";

export const ExternalLink = ({ href, children }) => {
  const external = /^https?:/.test(href);
  return (
    <a href={href} {...(external && { target: "_blank", rel: "noreferrer" })}>
      {children}
    </a>
  );
};

export const LinkRow = ({ links }) => (
  <nav className="links">
    {links.map((l) => (
      <ExternalLink key={l.label} href={l.url}>
        {l.label}
      </ExternalLink>
    ))}
  </nav>
);

export const Footer = ({ children }) => (
  <footer className="site-footer">
    <div
      className="treeline"
      role="presentation"
      style={{ backgroundImage: `url(${asset("treeline.svg")})` }}
    />
    {children && <p className="meta">{children}</p>}
  </footer>
);
