export const headshot = "media/acting/galen-molk-headshot.webp";
export const resume = "media/acting/galen-molk-resume.pdf";

// Names listed here render as links wherever they appear as a director.
export const people = {
  "Jeff Musillo": "https://www.imdb.com/name/nm2298002/",
};

const baseCredits = {
  theatre: [
    { production: "Julius Caesar", role: "Cinna the Poet", company: "Theatre for a New Audience & OSF", director: "Shana Cooper" },
    { production: "The Odyssey", role: "Elpenor", company: "Oregon Shakespeare Festival", director: "Mary Zimmerman" },
    { production: "The Exes", role: "Garrett Wright", company: "Theatre Row", director: "Magda S. Nyiri" },
    { production: "King John", role: "Hubert", company: "John Cullum Theatre", director: "James Jennings" },
    { production: "The Comedian's Tragedy", role: "The Messenger", company: "Access Theater", director: "Matthew Amendt" },
    { production: "Meg Jo Beth Amy & Louisa", role: "Laurie", company: "Dixon Place", director: "Ariel Franceour" },
    { production: "Every Seven Minutes", role: "Newbie", company: "The Plaxall Gallery", director: "James Canfield" },
    { production: "The Dream of the Rood", role: "Monk", company: "American Theatre of Actors", director: "Jeff Dailey" },
    { production: "To Live in Peace", role: "The Drunk", company: "Theater for the New City", director: "Claudine Brantley" },
    { production: "An Act of God", role: "Michael", company: "Millbrook Playhouse", director: "Adam Knight" },
    { production: "Footlight Frenzy", role: "Benny Dibble", company: "Millbrook Playhouse", director: "Nick Brennan" },
  ],
  readings: [
    { production: "Richard II", role: "Mowbray, Green", company: "Bedlam", director: "Zachary Elkind" },
    { production: "Julius Caesar: Play On!", role: "Titinius, Soothsayer", company: "Oregon Shakespeare Festival", director: "Lue Douthit" },
    { production: "What Happened While Hero Was Dead", role: "Claudio", company: "Ashland New Plays Festival", director: "Holly L. Derr" },
    { production: "The Bottle Tree", role: "Joseph", company: "Ashland New Plays Festival, Z Below", director: "Jackie Apodaca" },
    { production: "Zero", role: "Nick", company: "Ashland New Plays Festival", director: "Lyam Gabel" },
    { production: "Against the Wall", role: "Leo", company: "Playwrights Horizons", director: "Justy Kosek" },
    { production: "Baby Blue", role: "Verne", company: "Westchester Collaborative Theater", director: "Steven Carinci" },
  ],
  film: [
    { production: "Get the Picture", role: "Lead", director: "Jeff Musillo" },
    { production: "WTF Am I Doing", role: "Lead", company: "4 the Fans Productions", director: "Anthony Jones" },
    { production: "What Brings Us Together", role: "Supporting", director: "Jeff Musillo" },
    { production: "Super 180s", role: "Lead", director: "Joshua Kellerman" },
    { production: "Shadows of the Soul", role: "Lead", company: "TMD Media", director: "Joseph Latimore" },
    { production: "Ode to Psyche", role: "Supporting", director: "Alex Morf" },
    { production: "When the Boys Walk In", role: "Lead", company: "ROW 211 Films", director: "Daniel Rester" },
    { production: "The Orange Cheddar Debacle", role: "Lead", company: "Fast Boat", director: "Forrest Fenske" },
  ],
  tv: [
    { production: "Eighty-12", role: "Series Regular", company: "Amazon Prime", director: "Louis Rocky Bacigalupo" },
    { production: "Bedlam: The Series", role: "Co-Star", company: "Bedlam TV", director: "Eric Tucker" },
  ],
};

export const gallery = [
  { src: "gm1.webp", caption: "Julius Caesar · Theatre for a New Audience · dir. Shana Cooper" },
  { src: "gm3.webp", caption: "The Odyssey · Oregon Shakespeare Festival · dir. Mary Zimmerman" },
  { src: "gm10.webp", caption: "Eighty-12 · dir. Louis Bacigalupo" },
  { src: "gm11.webp", caption: "Julius Caesar · Oregon Shakespeare Festival · dir. Shana Cooper" },
  { src: "gm4.webp", caption: "King John · John Cullum Theatre · dir. James Jennings" },
  { src: "gm6.webp", caption: "The Odyssey · Oregon Shakespeare Festival · dir. Mary Zimmerman" },
  { src: "gm5.webp", caption: "The Exes · Theatre Row · dir. Magda S. Nyiri" },
  { src: "gm2.webp", caption: "Super 180s · dir. Joshua Kellerman" },
  { src: "gm7.webp", caption: "The Resistible Rise of Arturo Ui · dir. Jackie Apodaca" },
  { src: "gm8.webp", caption: "Caliban's Dreams · dir. James Donlon" },
  { src: "gm9.webp", caption: "An Act of God · Millbrook Playhouse · dir. Adam Knight" },
  { src: "gm12.webp", caption: "The Orange Cheddar Debacle" },
].map((g) => ({ ...g, src: `media/acting/gallery/${g.src}` }));

export const training = [
  ["BFA, Theatre Arts", "Southern Oregon University, summa cum laude"],
  ["Acting", "Jackie Apodaca, Jim Edmondson, Scott Kaiser, Jonathan Drahos"],
  ["On-camera", "Heidi Marshall, Terri McMahon, Greg Eliason"],
  ["Movement, clown, mask, devised", "James Donlon"],
  ["Stage combat (broadsword, hand-to-hand)", "U. Jonathan Toppo"],
  ["Voice, dialects, IPA", "Kaitlin Henderson, Rebecca Clark Carey"],
  ["Singing", "Madeline Abel-Kerns"],
];

export const skills =
  "Xaphoon, guitar, piano, singer-songwriter (folk), street skateboarding, dialects (Dublin, Alabama, London and more), horseback riding, stage combat, video editing.";

export const recent = {
  title: "Get the Picture",
  meta: "Short film · 2025 · 10 min · Lead",
  director: "Jeff Musillo",
  logline:
    "When a celebrated actor becomes consumed by body dysmorphia, a chance encounter with a fan pushes him into a psychological spiral, blurring the lines between his real life and the violent role he's playing.",
  src: "https://player.vimeo.com/video/1114953356?byline=0&portrait=0&title=0&dnt=1",
  url: "https://vimeo.com/1114953356",
};

export const upcoming = {
  production: "The Diary of Anne Frank",
  role: "Mr. Kraler",
  company: "The Very Little Theatre",
  director: "Theresa May",
  dates: "Jan 22 – Feb 7, 2027",
  adaptation: "Adapted by Wendy Kesselman from the play by Frances Goodrich and Albert Hackett.",
  url: "https://thevlt.com/the-diary-of-anne-frank/",
  closes: "2027-02-07",
};

// After closing night the production drops out of "Upcoming" and joins the
// theatre credits, so nothing needs editing when it closes.
export const upcomingIsOpen = (now = new Date()) =>
  now <= new Date(`${upcoming.closes}T23:59:59`);

const { production, role, company, director } = upcoming;
export const credits = {
  ...baseCredits,
  theatre: upcomingIsOpen()
    ? baseCredits.theatre
    : [{ production, role, company, director }, ...baseCredits.theatre],
};
