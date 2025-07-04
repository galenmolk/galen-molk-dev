
export const projects = [
  {
    name: "Unannounced Open-World Multiplayer Game",
    company: "Peloton",
    description: "A large-scale 3D open-world multiplayer cycling game for Android, built in Unity. Features customizable animated avatars, terrain-based auto-resistance, in-world workout guidance, social interactions, and detailed metrics.",
    skills: ["Unity", "C#", "Netcode", "Gameplay Mechanics", "Performance Optimization", "Tool Development"],
    links: [
      { label: "Peloton Press Release", url: "https://www.onepeloton.com/press/articles/peloton-reimagines-approach-to-creating-expanded-fitness-wellness" },
      { label: "Pelobuddy Article", url: "https://www.pelobuddy.com/peloton-zwift-beta-game/" }
    ],
    image: "pton.png"
  },
  {
    name: "Lanebreak",
    company: "Peloton",
    description: "Peloton's immersive, game-inspired workout mode available on Bike and Tread. I worked on porting the experience to Tread, developing new features, debugging on device and editor, and building a level validation rules engine in F# for functional, declarative checks.",
    skills: ["Unity", "C#", "F#", "Debugging", "Feature Development", "CI/CD"],
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
    skills: ["Unity", "JavaScript", "System Architecture", "Performance Optimization", "Modular UI Design", "Web Development"],
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
    skills: ["Unity", "Shaders (CG/HLSL)", "Addressables Memory Management", "Native Plugin Development", "Cross-platform Build Pipelines"],
    links: [
      { label: "Hellosaurus", url: "https://www.hellosaurus.com/" },
      { label: "Deep Dive", url: "https://www.mrdavenport.co/hellosaurus-app" }
    ],
    image: "hellosaurus.jpg"
  },
  {
    name: "Kid Detective",
    company: "JollyFranchers",
    description: "Freelance-developed a modular crime-solving mechanic for an upcoming detective game. Created an extensible UI and robust puzzle system using delegates, ScriptableObjects, and Unity's Prefab system. Implemented a saving/loading system to preserve player progress.",
    skills: ["Unity", "C#", "Save System", "ScriptableObjects", "Fungus"],
    links: [
      { label: "Steam Page", url: "https://store.steampowered.com/app/1546000/Kid_Detective/" }
    ],
    image: "kid.jpg"
  },
  {
    name: "Sapply N' Roli",
    company: "Global Game Jam 2023",
    description: "Built in 48 hours for the Global Game Jam at Coexist GameHouse. Winner for Best Audio and nominated for Best Overall Game and Best Narrative. Features designer-friendly editor tools for no-code tweaking of enemy spawning, resource generation, and missions, with engaging feedback through animations, effects, and dynamic sounds. Includes a minimap using culling masks and RenderTexture to keep objectives visible.",
    skills: ["Unity", "C#", "Rapid Prototyping", "Game Design", "Visual Effects"],
    links: [
      { label: "Itch.io Page", url: "https://galenmolk.itch.io/sapply-n-roli" }
    ],
    image: "sapply.png"
  },
  {
    name: "The Well",
    company: "Brackey's Game Jam 2021",
    description: "Co-designed and developed a 2D puzzle-platformer in Unity with C#. Built in 5 days, ranked in the top 2% of most popular submissions. Applied SOLID principles, object-oriented design, interfaces, and Unity systems like Cinemachine, Particle System, and Tilemap.",
    skills: ["Unity", "C#", "Puzzle Design", "SOLID Principles", "Cinemachine", "Physics"],
    links: [
      { label: "Itch.io Page", url: "https://drmanatee.itch.io/the-well" }
    ],
    image: "the-well.png"
  },
  {
    name: "Rescue Rosie",
    company: "GameDev.tv Community Jam",
    description: "Solo-designed and developed a top-down 2D action game in Unity featuring procedural obstacle generation for unique runs, destructible walls for strategic navigation, enemy AI that chases the player, a score counter with run stats, and a dynamic lifetime system with pickups. Showcases hand-drawn colored pencil and watercolor art and animations.",
    skills: ["Unity", "C#", "Procedural Generation", "Game AI Programming", "2D Art", "Project Management"],
    links: [
      { label: "Itch.io Page", url: "https://galenmolk.itch.io/rescue-rosie" }
    ],
    image: "rosie.png"
  },
  {
    name: "Memory Clone",
    company: "Personal Project",
    description: "Programmed the core game loop for a classic memory matching game from scratch. Built a competitive AI opponent with a depreciating memory bank of known tiles and a branching decision tree for selecting moves.",
    skills: ["Unity", "C#", "Game AI Programming"],
    links: [
      { label: "Playable Prototype", url: "https://simmer.io/@galenmolk/memory-game-prototype" }
    ],
    image: null
  },
  {
    name: "Olivia Wendel Music Website",
    company: "Freelance Web Design/Development",
    description: "Solo-developed and co-designed a responsive website for musician Olivia Wendel. Features background music respecting browser focus/context, responsive CSS design for mobile, tablet, and desktop with multiple orientations, plus CSS animations. Built with React, JavaScript, and CSS.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design", "Web Development", "Web Audio"],
    links: [
      { label: "Live Site", url: "https://oliviawendelmusic.com/" }
    ],
    image: null
  },
  {
    name: "Worm Tomb",
    company: "Freelance Web Design/Development",
    description: "Built a responsive React website for artist and tool craftsman Forrest Fenske (Worm Tomb). Showcases unique design and art requiring creative development solutions, plus optimized image galleries for performance across devices.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design", "Image Optimization"],
    links: [
      { label: "Live Site", url: "https://forrestfenske.com/" }
    ],
    image: null
  },
  {
    name: "Web-Based Canvas Tool Prototype",
    company: "Personal Project",
    description: "Built in Unity with custom JavaScript plugin integration to leverage browser features for uploads. Features intuitive WYSIWYG controls including image/audio uploads, drag-and-resize elements, context menus, modal and scope control, and tab selection functionality.",
    skills: ["Unity", "JavaScript", "UI/UX Design", "Web Integration", "Tool Development"],
    links: [
      { label: "Live Demo", url: "https://galenmolk.github.io/studiosaurus/" }
    ],
    image: null
  },
    {
    name: "Dino Creator",
    company: "Personal Project",
    description: "Built a dinosaur customization app in Unity with designs from Zach Davenport, featuring an intuitive animated UI with sleek button states. Enables users to save their dinosaur as an image to share. Designed with a robust ScriptableObject architecture for easy expansion with new categories and options.",
    skills: ["Unity", "C#", "Modular UI Design", "ScriptableObjects", "Tool Development", "JavaScript"],
    links: [
      { label: "Create Your Dino", url: "https://galenmolk.github.io/DinoMaker/" }
    ],
    image: null
  }
];
