export const reel = {
  title: "Galen Molk – Acting Reel",
  src: "https://player.vimeo.com/video/442192311?h=64fda27ff1&byline=0&portrait=0&title=0&dnt=1",
};

export const headshot = "media/acting/galen-molk-headshot.webp";
export const resume = "media/acting/galen-molk-resume.pdf";

export const credits = {
  theatre: [
    { production: "Julius Caesar", role: "Cinna the Poet", company: "Theatre for a New Audience, OSF", director: "Shana Cooper" },
    { production: "The Odyssey", role: "Elpenor", company: "Oregon Shakespeare Festival", director: "Mary Zimmerman" },
    { production: "The Crucible", role: "Cheever", company: "Bedlam", director: "Eric Tucker", note: "cancelled due to COVID-19" },
    { production: "The Exes", role: "Garrett Wright", company: "Theatre Row", director: "Magda S. Nyiri" },
    { production: "King John", role: "Hubert", company: "John Cullum Theatre", director: "James Jennings" },
    { production: "The Comedian's Tragedy", role: "The Messenger", company: "Access Theater", director: "Matthew Amendt" },
    { production: "Meg Jo Beth Amy & Louisa", role: "Laurie", company: "Dixon Place", director: "Ariel Franceour" },
    { production: "Every Seven Minutes", role: "Newbie", company: "The Plaxall Gallery", director: "James Canfield" },
    { production: "The Dream of the Rood", role: "Monk", company: "American Theatre of Actors", director: "Jeff Dailey" },
    { production: "To Live in Peace", role: "The Drunk", company: "Theater for the New City", director: "Claudine Brantley" },
    { production: "An Act of God", role: "Michael", company: "Millbrook Playhouse", director: "Adam Knight" },
    { production: "Footlight Frenzy", role: "Benny Dibble", company: "Millbrook Playhouse", director: "Nick Brennan" },
    { production: "A Sketch of New York", role: "John", company: "Producers' Club", director: "Joe DiNozzi" },
    { production: "The Diary of Anne Frank", role: "Mr. Kraler", company: "Very Little Theatre", director: "Theresa May", note: "upcoming" },
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
  { src: "gm5.webp", caption: "The Exes · Theatre Row · dir. Magda S. Nyiri" },
  { src: "gm2.webp", caption: "Super 180s · dir. Joshua Kellerman" },
  { src: "gm7.webp", caption: "The Resistible Rise of Arturo Ui · dir. Jackie Apodaca" },
  { src: "gm8.webp", caption: "Caliban's Dreams · dir. James Donlon" },
  { src: "gm9.webp", caption: "An Act of God · Millbrook Playhouse · dir. Adam Knight" },
  { src: "gm12.webp", caption: "The Orange Cheddar Debacle" },
].map((g) => ({ ...g, src: `media/acting/gallery/${g.src}` }));

export const training = "BFA in Theatre Arts, Southern Oregon University, summa cum laude.";
