export const bio = "Hi! My name's Galen. I'm an engineer with professional experience in games, connected fitness and edtech. " +
"I've been a proud member of all sizes of teams, ranging from large companies to small indie projects, collaborating both shoulder-to-shoulder and remotely. " + 
"I'm intentional about getting games and experiences built with love and skill into the lives of people everywhere. I'm passionate about writing powerful, " +
"readable code that translates into a lasting positive experience for the player. When I'm not building, I can usually be found in the park with my pug, " + 
"farming turnips in a Valheim server, or re-reading anything by Le Guin. Thanks for stopping by!";

export const projects = [
  {
    name: "Unannounced Open-World Multiplayer Game",
    company: "Peloton",
    description: "Large-scale open-world multiplayer cycling game for Android built in Unity. Responsible for building, extending and maintaining the tools and gameplay systems that powered our world art and level design teams. Designed and implemented the architecture for our diegetic structured workout guidance system. Maintained and refactored our complex codebase to ensure stability and reliability. Conducted in-depth performance profiling and optimization to improve stability and frame rates. Prototyped new gameplay and UI concepts with cross-functional teams. Mentored junior teammates on Git, Unity best practices, and internal tooling to support team growth.",
    skills: ["C# / Unity", "Networking", "Performance Optimization", "Tool Dev", "Gameplay Mechanics"],
    links: [
      { label: "Press Release", url: "https://www.onepeloton.com/press/articles/peloton-reimagines-approach-to-creating-expanded-fitness-wellness" },
      { label: "Article", url: "https://www.pelobuddy.com/peloton-zwift-beta-game/" }
    ],
    image: "pton.png"
  },
  {
    name: "Lanebreak",
    company: "Peloton",
    description: "Peloton's immersive workout game on Bike and Tread. Worked on porting the experience to Tread, developing new features, fixing critical bugs on Android, and building a level validation rules engine in F#. Led on-call incident response efforts to quickly resolve critical production issues affecting players.",
    skills: ["C# / Unity", "F#", "Debugging", "Multithreading", "CI/CD"],
    links: [
      { label: "Lanebreak", url: "https://www.onepeloton.com/lanebreak" },
      { label: "Tread Trailer", url: "https://www.youtube.com/watch?v=JzV-ySIJK14" }
    ],
    image: "lb.png"
  },
  {
    name: "Hellosaurus Creator Studio",
    company: "Hellosaurus",
    description: "Web-based interactive content editor built in Unity. Led system architecture, making an extensible modular UI for adding new game creation controls. Focused on performance optimizations for the web, staying nimble in a tight iteration loop based on user feedback, and maintaining clean, decoupled systems across the codebase.",
    skills: ["C# / Unity", "System Architecture", "Modular UI Design", "Web Development"],
    links: [
      { label: "Creator Studio", url: "https://www.hellosaurus.com/studio" },
      { label: "Deep Dive", url: "https://www.mrdavenport.co/hellosaurus-creator-studio" }
    ],
    image: "creator.png"
  },
  {
    name: "Hellosaurus App",
    company: "Hellosaurus",
    description: "Interactive story platform for kids ages 2-8 with 23,000+ daily families engaging through touch, camera, mic, and motion-based activities. Built custom shaders in CG/HLSL, implemented memory-efficient asset loading with Unity Addressables, authored native plugins in Swift, Objective-C, Java, and JavaScript, and optimized iOS build pipelines.",
    skills: ["C# / Unity", "Shaders", "Addressables", "Native Plugins", "Build Pipelines", "Gameplay Mechanics"],
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
    description: "Developed a modular crime-solving mechanic for an upcoming detective game. Created an extensible UI and robust puzzle system using delegates, ScriptableObjects, and Unity's Prefab system. Implemented a saving/loading system from scratch.",
    skills: ["C# / Unity", "Save/Load System", "ScriptableObject Architecture", "Fungus"],
    links: [
      { label: "Steam Page", url: "https://store.steampowered.com/app/1546000/Kid_Detective/" },
      { label: "JollyFranchers YouTube", url: "https://www.youtube.com/@jollyfranchers9071" }
    ],
    image: "kid.jpg"
  },
  {
    name: "Sapply N' Roli",
    company: "Global Game Jam 2023",
    description: "Built in 48 hours for the Global Game Jam at Coexist GameHouse. Winner for Best Audio and nominated for Best Overall Game and Best Narrative. Features designer-friendly editor tools for no-code tweaking of enemy spawning, resource generation, and missions, with engaging feedback through animations, effects, and dynamic sounds. Built a minimap using culling masks and RenderTexture for a bird's eye view of the play area.",
    skills: ["C# / Unity", "Rapid Prototyping", "Game Design", "Visual Effects", "Project Management"],
    links: [
      { label: "Play on Itch.io", url: "https://galenmolk.itch.io/sapply-n-roli" }
    ],
    image: "sapply.png"
  },
  {
    name: "The Well",
    company: "Brackey's Game Jam 2021",
    description: "Co-designed and developed a 2D puzzle-platformer in Unity with C#. Built in 5 days, ranked in the top 2% of most popular submissions. Applied SOLID principles, object-oriented design, interfaces, and Unity systems like Cinemachine, Particle System, and Tilemap.",
    skills: ["C# / Unity", "Puzzle Design", "SOLID Principles", "Cinemachine", "Physics", "Animations"],
    links: [
      { label: "Play on Itch.io", url: "https://drmanatee.itch.io/the-well" }
    ],
    image: "the-well.png"
  },
  {
    name: "Rescue Rosie",
    company: "GameDev.tv community Jam 2020",
    description: "Solo-designed and developed a top-down 2D action game in Unity featuring procedural obstacle generation for unique runs, destructible walls for strategic navigation, enemy AI that chases the player, a score counter with run stats, and a dynamic lifetime system with pickups. Showcases hand-drawn colored pencil and watercolor art, plus animations.",
    skills: ["C# / Unity", "Procedural Levels", "Game AI", "2D Art", "Project Management"],
    links: [
      { label: "Play on Itch.io", url: "https://galenmolk.itch.io/rescue-rosie" }
    ],
    image: "rosie.png",
    containImage: true
  },
  {
    name: "Memory Game Clone",
    company: "Solo Project",
    description: "Programmed the core game loop for a classic memory matching game from scratch. Built a competitive AI opponent with a depreciating memory bank of known tiles and a branching decision tree for selecting moves.",
    skills: ["C# / Unity", "Game AI Programming"],
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
    image: "olivia.png",
  },
  {
    name: "Worm Tomb",
    company: "Freelance",
    description: "Built a responsive React website for artist and craftsman Forrest Fenske (Worm Tomb). Showcases his unique design and art requiring creative development solutions, plus optimized image galleries for performance across devices.",
    skills: ["React", "JavaScript", "CSS", "Responsive Design", "Image Optimization"],
    links: [
      { label: "Visit the Live Site", url: "https://forrestfenske.com/" }
    ],
    image: "worm.png"
  },
  {
    name: "Web-based Canvas Editor Prototype",
    company: "Solo Project",
    description: "Built in Unity with a custom JavaScript plugin integration to leverage browser functionality for asset uploads. Features intuitive WYSIWYG interactions for drag-and-resize elements, context menus, modal control, and tab selection functionality. Upload audio and images from your local machine or via URLs, then manage your assets in two separate easy-to-use libraries.",
    skills: ["C# / Unity", "JavaScript", "UI/UX Design", "Web Integration", "Tool Development"],
    links: [
      { label: "Live Demo", url: "https://galenmolk.github.io/studiosaurus/" }
    ],
    image: "wysiwyg.png",
  },
    {
    name: "Dino Creator",
    company: "Solo Project",
    description: "Built a dino customization app in Unity with designs from Hellosaurus colleague Zack Davenport, featuring an intuitive animated UI with sleek button states. Enables users to save their dino as an image to share. Designed with a robust ScriptableObject architecture for easy expansion with new categories and options.",
    skills: ["C# / Unity", "Modular UI Design", "ScriptableObjects", "Tool Development", "JavaScript"],
    links: [
      { label: "Create Your Dino", url: "https://galenmolk.github.io/DinoMaker/" }, 
      { label: "Zack Davenport", ur: "https://www.mrdavenport.co/" }
    ],
    image: "dino.png",
  }
];
