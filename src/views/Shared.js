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
    {children && <p className="meta">{children}</p>}
  </footer>
);
