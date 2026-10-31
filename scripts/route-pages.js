// GitHub Pages serves static files only, so each route needs its own
// index.html — both so direct loads don't 404 and so link previews
// (LinkedIn, Slack, iMessage) show the right title and description.
const fs = require("fs");
const path = require("path");

const SITE = "https://galenmolk.com";
const build = path.join(__dirname, "..", "build");
const shell = fs.readFileSync(path.join(build, "index.html"), "utf8");

const routes = {
  "/": {
    title: "Galen Molk",
    description: "Galen Molk is a software engineer and actor.",
    image: "profile.webp",
  },
  "/engineering": {
    title: "Galen Molk — Software Engineer",
    description:
      "Software engineer building gameplay, multiplayer and tools for real-time products. Currently on Animal Company at Wooster Games.",
    image: "profile.webp",
  },
  "/acting": {
    title: "Galen Molk — Actor",
    description:
      "Actor in theatre and film. Credits include Oregon Shakespeare Festival, Theatre for a New Audience and Bedlam.",
    image: "media/acting/galen-molk-headshot.webp",
  },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function render(route, { title, description, image }) {
  const url = SITE + (route === "/" ? "/" : route);
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}"/>`,
    `<link rel="canonical" href="${url}"/>`,
    `<meta property="og:type" content="website"/>`,
    `<meta property="og:url" content="${url}"/>`,
    `<meta property="og:title" content="${esc(title)}"/>`,
    `<meta property="og:description" content="${esc(description)}"/>`,
    `<meta property="og:image" content="${SITE}/${image}"/>`,
    `<meta name="twitter:card" content="summary"/>`,
  ].join("");
  return shell
    .replace(/<title>.*?<\/title>/, "")
    .replace(/<meta name="description"[^>]*>/, "")
    .replace("</head>", `${head}</head>`);
}

for (const [route, meta] of Object.entries(routes)) {
  const dir = path.join(build, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(route, meta));
}
fs.writeFileSync(path.join(build, "404.html"), render("/", routes["/"]));
console.log("Wrote route pages:", Object.keys(routes).join(", "));
