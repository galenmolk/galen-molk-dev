export const bio = [];

export const tagline = "";

export const projects = [
  {
    name: "Animal Company",
    company: "Wooster Games",
    year: "2025-Present",
    short: "Leading updates as an engineer & designer for Animal Company (#1 grossing Meta Quest title of 2025, 1.5 MAU, 500k peak DAU). Driving monster design and implementation, in-game camera, quest system features, live-ops workflows, tool development and performance initiatives.",
    skills: ["Project Leadership", "Game Design", "Multiplayer", "C# / Unity", "Live Ops", "Game Feel"],
    links: [
      { label: "Animal Company", url: "https://www.animalcompanyvr.com/" },
      { label: "Wooster Games", url: "https://woostergames.com/" }
    ],
    image: "ac.png"
  },
  {
    name: "Unannounced Open-World Game",
    company: "Peloton",
    year: "2024—2025",
    short: "Open-world multiplayer cycling game for Android, in Unity. Architected the diegetic workout-guidance system, owned the tools and gameplay systems behind world-art and level-design, led performance work and mentored juniors.",
    skills: ["C# / Unity", "Networking", "Performance", "Tools", "Gameplay"],
    links: [
      { label: "Press Release", url: "https://www.onepeloton.com/press/articles/peloton-reimagines-approach-to-creating-expanded-fitness-wellness" },
      { label: "Article", url: "https://www.pelobuddy.com/peloton-zwift-beta-game/" }
    ],
    image: "pton.png"
  },
  {
    name: "Lanebreak",
    company: "Peloton",
    year: "2023—2024",
    short: "Peloton's immersive workout game on Bike and Tread. Ported the experience to Tread, shipped new features, built a level-validation rules engine in F#, and led incident response.",
    skills: ["C# / Unity", "F#", "Multithreading", "CI/CD"],
    links: [
      { label: "Lanebreak", url: "https://www.onepeloton.com/lanebreak" },
      { label: "Tread Trailer", url: "https://www.youtube.com/watch?v=JzV-ySIJK14" }
    ],
    image: "lb.png"
  },
  {
    name: "Hellosaurus Creator Studio",
    company: "Hellosaurus",
    year: "2021—2022",
    short: "Web-based interactive content editor in Unity. Led the architecture for an extensible modular UI, optimized aggressively for the web, and kept iteration tight against live user feedback.",
    skills: ["C# / Unity", "Architecture", "Modular UI", "Web"],
    links: [
      { label: "Creator Studio", url: "https://www.hellosaurus.com/studio" },
      { label: "Deep Dive", url: "https://www.mrdavenport.co/hellosaurus-creator-studio" }
    ],
    image: "creator.png"
  },
  {
    name: "Hellosaurus App",
    company: "Hellosaurus",
    year: "2020—2022",
    short: "Interactive story platform for kids 2–8, with 23,000+ daily families. Wrote shaders in CG/HLSL, built native plugins across Swift, Obj-C, Java and JS, and tuned the iOS build pipeline.",
    skills: ["C# / Unity", "Shaders", "Addressables", "Native Plugins", "iOS"],
    links: [
      { label: "Hellosaurus", url: "https://www.hellosaurus.com/" },
      { label: "Deep Dive", url: "https://www.mrdavenport.co/hellosaurus-app" }
    ],
    image: "hellosaurus.jpg",
    containImage: true
  },
  {
    name: "Kid Detective",
    company: "JollyFranchers",
    year: "2021",
    short: "Modular crime-solving mechanic for an indie detective game. Extensible UI, ScriptableObject-driven puzzles, and a save/load system written from scratch.",
    skills: ["C# / Unity", "Save/Load", "ScriptableObjects"],
    links: [
      { label: "Steam Page", url: "https://store.steampowered.com/app/1546000/Kid_Detective/" },
      { label: "JollyFranchers", url: "https://www.youtube.com/@jollyfranchers9071" }
    ],
    image: "kid.jpg"
  },
  {
    name: "Sapply N' Roli",
    company: "Global Game Jam 2023",
    year: "2023",
    short: "Built in 48 hours at Coexist GameHouse. Won Best Audio. Designer-friendly editor tools for spawning and missions; minimap via culling masks and RenderTexture.",
    skills: ["Unity", "Rapid Prototyping", "Game Design", "VFX"],
    links: [{ label: "Play on Itch.io", url: "https://galenmolk.itch.io/sapply-n-roli" }],
    image: "sapply.png"
  },
  {
    name: "The Well",
    company: "Brackey's Game Jam 2021",
    year: "2021",
    short: "Co-designed 2D puzzle-platformer. Built in five days, ranked top 2% of 1,815 submissions. SOLID architecture, Cinemachine, Tilemap.",
    skills: ["Unity", "Puzzle Design", "Cinemachine", "Physics"],
    links: [{ label: "Play on Itch.io", url: "https://drmanatee.itch.io/the-well" }],
    image: "the-well.png"
  },
  {
    name: "Rescue Rosie",
    company: "GameDev.tv Jam 2020",
    year: "2020",
    short: "Solo top-down 2D action game with procedural obstacles, destructible walls, chase AI, and hand-drawn watercolor art.",
    skills: ["Unity", "Procedural", "Game AI", "2D Art"],
    links: [{ label: "Play on Itch.io", url: "https://galenmolk.itch.io/rescue-rosie" }],
    image: "rosie.png",
    containImage: true
  },
  {
    name: "Tabletop Encounter Manager",
    company: "Hexed Heroes",
    year: "2020",
    short: "Encounter manager for the tabletop tactical game Hexed Heroes. Cooldown tracker, encounter library, save/load presets — used in remote playtesting.",
    skills: ["Unity", "Tools", "UI/UX", "Persistence"],
    links: [{ label: "Download", url: "https://galenmolk.github.io/tactical-character-tracker/" }],
    image: "encounters.png"
  },
  {
    name: "Character Tracker",
    company: "Hexed Heroes",
    year: "2020",
    short: "Android character tracker for Hexed Heroes playtests. Web-fetched character library, cooldowns, status effects.",
    skills: ["Unity", "Android", "UI/UX", "Web Requests"],
    links: [{ label: "Download", url: "https://galenmolk.github.io/tactical-character-tracker/" }],
    image: "hexed.png"
  },
  {
    name: "Web Canvas Editor",
    company: "Solo Project",
    year: "2020",
    short: "WYSIWYG canvas editor in Unity with a custom JS plugin for browser uploads. Drag-and-resize, context menus, asset libraries.",
    skills: ["Unity", "JavaScript", "UI/UX", "Web"],
    links: [{ label: "Live Demo", url: "https://galenmolk.github.io/studiosaurus/" }],
    image: "wysiwyg.png"
  },
  {
    name: "Dino Creator",
    company: "Solo Project",
    year: "2021",
    short: "Dino customization app with art by Zack Davenport. Animated UI, save-as-image, ScriptableObject architecture for easy expansion.",
    skills: ["Unity", "Modular UI", "ScriptableObjects"],
    links: [{ label: "Create Your Dino", url: "https://galenmolk.github.io/DinoMaker/" }],
    image: "dino.png"
  },
  {
    name: "Olivia Wendel Music",
    company: "Freelance",
    year: "2022",
    short: "Solo-developed and co-designed a responsive site for Boston musician Olivia Wendel. Context-aware background music, mobile-first CSS, custom animations.",
    skills: ["React", "JavaScript", "CSS", "Web Audio"],
    links: [{ label: "Visit Site", url: "https://oliviawendelmusic.com/" }],
    image: "olivia.png"
  },
  {
    name: "Worm Tomb",
    company: "Freelance",
    year: "2023",
    short: "Responsive React site for artist and craftsman Forrest Fenske, with optimized galleries built around his unique work.",
    skills: ["React", "JavaScript", "CSS", "Performance"],
    links: [{ label: "Visit Site", url: "https://forrestfenske.com/" }],
    image: "worm.png"
  }
];
