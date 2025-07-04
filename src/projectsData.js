
export const projects = [
  {
    name: "Unannounced Open-World Multiplayer Game",
    company: "Peloton",
    description: "A large-scale 3D open-world multiplayer cycling game for Android, built in Unity. Features customizable animated avatars, terrain-based auto-resistance, in-world workout guidance, social interactions, and detailed metrics.",
    skills: ["Unity", "C#", "Netcode", "Performance Optimization", "Tool Dev", "Gameplay Mechanics"],
    links: [
      { label: "Press Release", url: "https://www.onepeloton.com/press/articles/peloton-reimagines-approach-to-creating-expanded-fitness-wellness" },
      { label: "Article", url: "https://www.pelobuddy.com/peloton-zwift-beta-game/" }
    ],
    image: "pton.png"
  },
  {
    name: "Lanebreak",
    company: "Peloton",
    description: "Peloton's immersive, game-inspired workout mode available on Bike and Tread. I worked on porting the experience to Tread, developing new features, debugging on device and editor, and building a level validation rules engine in F# for functional, declarative checks.",
    skills: ["Unity", "C#", "F#", "Debugging", "Asynchronous Design", "Tutorialization", "CI/CD"],
    links: [
      { label: "Peloton Lanebreak", url: "https://www.onepeloton.com/lanebreak" },
      { label: "Tread Trailer", url: "https://www.youtube.com/watch?v=JzV-ySIJK14" }
    ],
    image: "lb.png"
  },
  {
    name: "Hellosaurus Creator Studio",
    company: "Hellosaurus",
    description: "Web-based interactive content editor built in Unity. Led system architecture, making an extensible modular UI for adding new game creation controls. Focused on performance optimizations for the web, and used advanced JavaScript to deliver a responsive authoring experience.",
    skills: ["Unity", "C#", "System Architecture", "Modular UI Design", "Web Development"],
    links: [
      { label: "Hellosaurus Creator Studio", url: "https://www.hellosaurus.com/studio" },
      { label: "Deep Dive", url: "https://www.mrdavenport.co/hellosaurus-creator-studio" }
    ],
    image: "creator.png"
  },
  {
    name: "Hellosaurus Mobile App",
    company: "Hellosaurus",
    description: "Interactive story platform for kids with 23,000+ daily families engaging through touch, camera, mic, and motion-based activities. Independently built custom shaders in CG/HLSL, implemented memory-efficient asset loading with Unity Addressables, authored native plugins in Swift, Objective-C, Java, and JavaScript, and optimized iOS build pipelines.",
    skills: ["Unity", "C#", "Shaders", "Addressables", "Native Plugins", "Build Pipelines", "Gameplay"],
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
    description: "Freelance-developed a modular crime-solving mechanic for an upcoming detective game. Created an extensible UI and robust puzzle system using delegates, ScriptableObjects, and Unity's Prefab system. Implemented a saving/loading system to preserve player progress.",
    skills: ["Unity", "C#", "Save/Load System", "ScriptableObject Architecture", "Fungus"],
    links: [
      { label: "Steam Page", url: "https://store.steampowered.com/app/1546000/Kid_Detective/" }
    ],
    image: "kid.jpg"
  },
  {
    name: "Sapply N' Roli",
    company: "Global Game Jam 2023",
    description: "Built in 48 hours for the Global Game Jam at Coexist GameHouse. Winner for Best Audio and nominated for Best Overall Game and Best Narrative. Features designer-friendly editor tools for no-code tweaking of enemy spawning, resource generation, and missions, with engaging feedback through animations, effects, and dynamic sounds. Includes a minimap using culling masks and RenderTexture to keep objectives visible.",
    skills: ["Unity", "C#", "Rapid Prototyping", "Game Design", "Visual Effects", "Project Management"],
    links: [
      { label: "Play on Itch.io", url: "https://galenmolk.itch.io/sapply-n-roli" }
    ],
    image: "sapply.png"
  },
  {
    name: "The Well",
    company: "Brackey's Game Jam 2021",
    description: "Co-designed and developed a 2D puzzle-platformer in Unity with C#. Built in 5 days, ranked in the top 2% of most popular submissions. Applied SOLID principles, object-oriented design, interfaces, and Unity systems like Cinemachine, Particle System, and Tilemap.",
    skills: ["Unity", "C#", "Puzzle Design", "SOLID Principles", "Cinemachine", "Physics", "Animations"],
    links: [
      { label: "Play on Itch.io", url: "https://drmanatee.itch.io/the-well" }
    ],
    image: "the-well.png"
  },
  {
    name: "Rescue Rosie",
    company: "GameDev.tv Community Jam",
    description: "Solo-designed and developed a top-down 2D action game in Unity featuring procedural obstacle generation for unique runs, destructible walls for strategic navigation, enemy AI that chases the player, a score counter with run stats, and a dynamic lifetime system with pickups. Showcases hand-drawn colored pencil and watercolor art and animations.",
    skills: ["Unity", "C#", "Procedural Generation", "Game AI", "2D Art", "Project Management"],
    links: [
      { label: "Play on Itch.io", url: "https://galenmolk.itch.io/rescue-rosie" }
    ],
    image: "rosie.png",
    containImage: true
  },
  {
    name: "Memory Game Clone",
    company: "Personal Project",
    description: "Programmed the core game loop for a classic memory matching game from scratch. Built a competitive AI opponent with a depreciating memory bank of known tiles and a branching decision tree for selecting moves.",
    skills: ["Unity", "C#", "Game AI Programming"],
    links: [
      { label: "Playable Prototype", url: "https://simmer.io/@galenmolk/memory-game-prototype" }
    ],
    image: null,
    hide: true
  },
  {
    name: "Olivia Wendel Music",
    company: "Freelance",
    description: "Solo-developed and co-designed a responsive website for Boston-based musician Olivia Wendel. Features background music respecting browser context, responsive CSS design for mobile, tablet, and desktop, and CSS animations.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design", "Web Development", "Web Audio"],
    links: [
      { label: "Visit the Live Site", url: "https://oliviawendelmusic.com/" }
    ],
    image: "olivia.png"
  },
  {
    name: "Worm Tomb",
    company: "Freelance",
    description: "Built a responsive React website for artist and craftsman Forrest Fenske (Worm Tomb). Showcases unique design and art requiring creative development solutions, plus optimized image galleries for performance across devices.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design", "Image Optimization"],
    links: [
      { label: "Visit the Live Site", url: "https://forrestfenske.com/" }
    ],
    image: "worm.png"
  },
  {
    name: "Web-based Canvas Editor Prototype",
    company: "Personal Project",
    description: "Built in Unity with a custom JavaScript plugin integration to leverage browser features for asset uploads. Features intuitive WYSIWYG interactions for drag-and-resize elements, context menus, modal control, and tab selection functionality. Upload audio and images from your local machine or via URLs, then manage your assets in two separate library interfaces.",
    skills: ["Unity", "JavaScript", "UI/UX Design", "Web Integration", "Tool Development"],
    links: [
      { label: "Live Demo", url: "https://galenmolk.github.io/studiosaurus/" }
    ],
    image: "wysiwyg.png",
  },
    {
    name: "Dino Creator",
    company: "Personal Project",
    description: "Built a dino customization app in Unity with designs from Hellosaurus colleague Zach Davenport, featuring an intuitive animated UI with sleek button states. Enables users to save their dino as an image to share. Designed with a robust ScriptableObject architecture for easy expansion with new categories and options.",
    skills: ["Unity", "C#", "Modular UI Design", "ScriptableObjects", "Tool Development", "JavaScript"],
    links: [
      { label: "Create Your Dino", url: "https://galenmolk.github.io/DinoMaker/" }
    ],
    image: "dino.png",
  }
];
