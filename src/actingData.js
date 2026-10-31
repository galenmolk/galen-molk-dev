export const reel = {
  title: "Galen Molk – Acting Reel",
  src: "https://player.vimeo.com/video/442192311?h=64fda27ff1&byline=0&portrait=0&title=0&dnt=1",
};

export const headshot = "media/acting/galen-molk-headshot.webp";
export const resume = "media/acting/galen-molk-resume.pdf";

export const credits = {
  theatre: [
    { production: "Julius Caesar", role: "Cinna the Poet", company: "Theatre for a New Audience", director: "Shana Cooper" },
    { production: "The Odyssey", role: "Elpenor", company: "Oregon Shakespeare Festival", director: "Mary Zimmerman" },
  ],
  screen: [
    { production: "Bedlam: The Series", role: "Fenton", company: "Bedlam", director: "Eric Tucker" },
    { production: "Eighty-12", role: "Lead", company: "Amazon Prime Video", director: "Louis Rocky Bacigalupo" },
    { production: "WTF Am I Doing", role: "Lead", company: "4 The Fans Productions", director: "Anthony Jones" },
    { production: "What Brings Us Together", role: "Supporting", company: "NYC Indie Film Festival", director: "Jeff Musillo" },
    { production: "Super 180s", role: "Chris", company: "Columbia University", director: "Joshua Kellerman" },
    { production: "The Orange Cheddar Debacle", role: "Lead", company: "Ben Gunn Entertainment", director: "Forrest Fenske" },
  ],
};

export const gallery = [
  { src: "gm1.webp", caption: "Julius Caesar · Theatre for a New Audience · dir. Shana Cooper" },
  { src: "gm3.webp", caption: "The Odyssey · Oregon Shakespeare Festival · dir. Mary Zimmerman" },
  { src: "gm10.webp", caption: "Eighty-12 · dir. Louis Bacigalupo" },
  { src: "gm11.webp", caption: "Julius Caesar · Oregon Shakespeare Festival · dir. Shana Cooper" },
  { src: "gm4.webp", caption: "King John · John Cullum Theatre · dir. James Jennings" },
  { src: "gm6.webp", caption: "The Odyssey · Oregon Shakespeare Festival · dir. Mary Zimmerman" },
  { src: "gm5.webp", caption: "The Exes · Theatre Row" },
  { src: "gm2.webp", caption: "Super 180s · dir. Joshua Kellerman" },
  { src: "gm7.webp", caption: "The Resistible Rise of Arturo Ui · dir. Jackie Apodaca" },
  { src: "gm8.webp", caption: "Caliban's Dreams · dir. James Donlon" },
  { src: "gm9.webp", caption: "An Act of God · Millbrook Playhouse · dir. Adam Knight" },
  { src: "gm12.webp", caption: "The Orange Cheddar Debacle" },
].map((g) => ({ ...g, src: `media/acting/gallery/${g.src}` }));
