export interface GameProject {
  slug: string;
  title: string;
  subtitle: string;
  codename: string;
  status: string;
  genre: string;
  platforms: string;
  engine: string;
  releaseYear: string;
  image: string;
  aspectRatio?: string;
  tagline: string;
  overview: string;
  narrativeHook: string;
  designPillars: {
    num: string;
    title: string;
    description: string;
  }[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  developmentNotes: string[];
  gallery: {
    caption: string;
    type: string;
  }[];
}

export interface JournalPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: {
    lead: string;
    paragraphs: string[];
    pullQuote?: string;
    conclusion: string;
  };
}

export const STUDIO_METADATA = {
  name: "AGHATIS STUDIO",
  legalEntity: "PT Aghatis Karya Indonesia",
  tagline: "Independent Game Development",
  statement: "We make worlds. Exploring new ideas, strange places, and meaningful play.",
  email: "contact@aghatis.studio",
  location: "Jakarta — Distributed",
  statusBadge: "ACTIVE PRODUCTION — 2026",
  socials: [
    { name: "Steam", url: "https://store.steampowered.com", label: "Steam Publisher Page" },
    { name: "X (Twitter)", url: "https://x.com", label: "@aghatisstudio" },
    { name: "Bluesky", url: "https://bsky.app", label: "@aghatis.studio" },
    { name: "YouTube", url: "https://youtube.com", label: "Devlogs & Teasers" },
    { name: "GitHub", url: "https://github.com", label: "Open Source Tooling" },
  ],
};

export const GAMES: GameProject[] = [
  {
    slug: "lost-in-space",
    title: "LOST IN SPACE",
    subtitle: "A kinetic 2D space shooter exploring Newtonian inertia, isolation, and deep-space combat.",
    codename: "PROJECT VOID",
    status: "In Active Pre-Production / Gameplay Prototype",
    genre: "2D Space Shooter / Kinetic Space Combat",
    platforms: "Android & PC (Google Play Games on PC)",
    engine: "Custom 2D Vector & Rigid-Body Physics Pipeline",
    releaseYear: "TBA — In Prototyping",
    image: "/images/lost-in-space.jpg",
    aspectRatio: "16/9",
    tagline: "In the silence of the void, every thrust changes your trajectory forever.",
    overview:
      "Lost In Space is an atmospheric, kinetic 2D space shooter set in the deep silence of an uncharted star sector. Players pilot an agile reconnaissance craft through treacherous asteroid fields, fractured orbital derelicts, and hostile automated defense squadrons. Departing from bullet-hell conventions, the game emphasizes Newtonian inertia, weapon recoil propulsion, precision vector thrusters, and intense tactical dogfights in the cold expanse.",
    narrativeHook:
      "Following the severance of the deep-space navigation grid, your reconnaissance vessel drifts twelve light-years beyond the perimeter. With damaged warp drives and dwindling reaction mass, every engagement is an unforgiving calculation of velocity, kinetic recoil, and remaining propellant.",
    designPillars: [
      {
        num: "01",
        title: "Newtonian Flight Physics",
        description:
          "True inertial momentum. Firing heavy kinetic cannons produces tangible backward recoil that alters your ship's vector, turning offensive firepower into an essential tactical maneuvering mechanic.",
      },
      {
        num: "02",
        title: "Atmospheric Void Aesthetics",
        description:
          "High-contrast monochromatic space with razor-sharp asteroid silhouettes, distant eclipsed stars, and minimalist vector trajectory paths rather than garish visual noise.",
      },
      {
        num: "03",
        title: "Tactile Energy & Heat Economy",
        description:
          "Managing reactor heat, shield absorption, and directional thruster bursts in the vacuum of deep space where thermal dissipation is slow and mistakes are lethal.",
      },
    ],
    technicalSpecs: [
      { label: "Target Platforms", value: "Android & PC (Google Play Games on PC)" },
      { label: "Physics & Engine", value: "Custom 2D rigid-body vector solver & particle simulation" },
      { label: "Audio Architecture", value: "Diegetic internal hull vibration & low-frequency acoustic occlusion" },
      { label: "Production Phase", value: "Flight inertia model, recoil ballistics, and procedural asteroid fields" },
      { label: "Input Design", value: "Virtual analog touch controls, gamepad support, and mouse/keyboard (PC)" },
    ],
    developmentNotes: [
      "We iterated on the thruster inertia curve dozens of times to capture the satisfying weight of real space flight without sacrificing snappy responsiveness.",
      "Primary weapons double as emergency brakes: firing forward rapidly decelerates your forward drift in tight asteroid belts.",
      "External explosions are silent in the vacuum; combat sound is felt through bone-conduction vibrations through the ship's titanium cockpit frame.",
    ],
    gallery: [
      { caption: "Ship Configurations: Heavy Assault, Tactical Rail-Fighter, and Agile Interceptor", type: "Official Key Artwork" },
      { caption: "Flight Telemetry: Minimalist vector trajectory and reactor temperature gauges", type: "Diegetic HUD Prototype" },
      { caption: "Kinetic Recoil Study: Dual railgun bursts altering spacecraft drift angle", type: "Combat Simulation" },
    ],
  },
  {
    slug: "tebak-icon",
    title: "TEBAK ICON",
    subtitle: "A minimalist Android word trivia game deciphering phrases from icon combinations.",
    codename: "PROJECT GLYPH",
    status: "In Active Development / Android Beta",
    genre: "Word Trivia / Visual Puzzle",
    platforms: "Android (Google Play)",
    engine: "Custom Lightweight Puzzle Architecture",
    releaseYear: "2026 — In Active Beta",
    image: "/images/tebak-icon.jpg",
    aspectRatio: "16/9",
    tagline: "Read between the symbols. Decode the hidden word.",
    overview:
      "Tebak Icon is a sleek, distraction-free Android trivia puzzle application developed by Aghatis Studio. Players deduce colloquial words, cultural idioms, compound phrases, and popular trivia from clever combinations of minimalist icons and pictograms. Built with restrained typography, tactile haptic feedback, and a clean monochromatic dark interface, Tebak Icon offers hundreds of offline-ready brainteasers free from intrusive ad interruptions.",
    narrativeHook:
      "A key + an eye + an hourglass. Is it 'Rahasia'? Or 'Kunci Waktu'? In Tebak Icon, associative lateral thinking and vocabulary take precedence over brute-force guessing.",
    designPillars: [
      {
        num: "01",
        title: "Associative Iconography",
        description:
          "Hand-crafted symbol combinations engineered around linguistic semantics, cultural idioms, and clever lateral associations rather than simplistic literal translations.",
      },
      {
        num: "02",
        title: "Distraction-Free Zen Interface",
        description:
          "A refined, dark editorial UI free from aggressive banner pop-ups or casino-style flashing rewards. Focus is placed entirely on the elegance of the riddle.",
      },
      {
        num: "03",
        title: "Tactile Haptics & Offline First",
        description:
          "Built on a lightweight architecture with sub-400ms startup times, smooth vibration feedback on letter tile placements, and complete offline availability.",
      },
    ],
    technicalSpecs: [
      { label: "Target Platforms", value: "Android (Google Play Store)" },
      { label: "Architecture", value: "Custom lightweight puzzle state engine & dynamic hint solver" },
      { label: "UI / Art Direction", value: "Monochrome dark mode, tactile stone glyph tiles & crisp vector iconography" },
      { label: "Production Phase", value: "Level progression authoring, localized riddle sets & Android Closed Beta" },
      { label: "Input Design", value: "One-thumb vertical touch layout with custom haptic vibration feedback" },
    ],
    developmentNotes: [
      "Every icon combination is tested across multiple player demographics to eliminate frustrating ambiguity while preserving genuine eureka moments.",
      "The application package size is kept strictly under 25MB for lightning-fast installation on any Android device.",
      "Sound design relies on subtle wooden tile clacks and low-frequency resonance rather than loud, fatigue-inducing chimes.",
    ],
    gallery: [
      { caption: "Riddle Grid: Engraved pictograms forming compound associative word puzzles", type: "Core Puzzle Screen" },
      { caption: "Tactile Keyboard: Dark stone letter anagram tiles and hint revelation mechanics", type: "Mobile Interface" },
    ],
  },
  {
    slug: "obsidian-drift",
    title: "OBSIDIAN DRIFT",
    subtitle: "A solitary journey across ash deserts and forgotten glyphs.",
    codename: "PROJECT DRIFT",
    status: "Worldbuilding & Visual Bible",
    genre: "Stylized Narrative Odyssey",
    platforms: "PC, Consoles",
    engine: "Unreal Engine 5",
    releaseYear: "TBA — Concept & Pre-Development",
    image: "/images/obsidian-drift.jpg",
    aspectRatio: "16/9",
    tagline: "The wind carves away everything except the truth.",
    overview:
      "A stark visual odyssey across an infinite desert of black volcanic sand under perpetual ash skies. Players guide a solitary nomad deciphering the monumental sundials and magnetic monoliths scattered across the waste to reactivate an ancient atmospheric beacon.",
    narrativeHook:
      "In the obsidian dunes, navigation is impossible by compass because the ground itself is magnetic. The only true landmark is the shadow cast by the spire when the sun breaks through the haze.",
    designPillars: [
      {
        num: "01",
        title: "Minimalist Geometry",
        description:
          "High contrast compositions between dark charcoal earth, pale limestone ash skies, and polished basalt slabs reflecting golden ambient light.",
      },
      {
        num: "02",
        title: "Pacing & Negative Space",
        description:
          "Unapologetic expansiveness. Vast horizons that allow players to breathe and absorb the weight of scale without artificial distraction.",
      },
    ],
    technicalSpecs: [
      { label: "Target Platforms", value: "PC & Consoles" },
      { label: "Art Direction", value: "Editorial minimalism, high-contrast monochrome with ochre accents" },
      { label: "Production Phase", value: "World bible, environmental tone explorations" },
    ],
    developmentNotes: [
      "Inspired by the black sand deserts of Vik, Iceland and the sparse cinematic compositions of Tarkovsky.",
    ],
    gallery: [
      { caption: "The Monolith of the North Wind half-submerged in volcanic silt", type: "Environment Concept" },
    ],
  },
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "silence-as-mechanic",
    title: "On the Weight of Silence in Spatial Audio Design",
    date: "October 14, 2026",
    category: "Sound Architecture",
    readTime: "6 min read",
    excerpt:
      "Modern game audio often treats silence as an error to be covered by ambient drone. Here is why we deliberately carve out acoustic voids in Lost In Space.",
    content: {
      lead:
        "When you pilot a solitary craft into the vacuum of deep space, your brain does not register quietness as absence. It registers it as hyper-presence.",
      paragraphs: [
        "In the void of space, sound waves have no air to travel through. What a pilot hears is not external explosions, but internal kinetic reverberations: the deep clunk of magnetic thrusters firing, the mechanical hum of coolant circulating through titanium pipes, and the sharp percussion of micro-meteorites against the outer shielding.",
        "In commercial game design, the default reflex is to fill silence. A synthesizer drone begins to hum. Constant laser blasts screech in the stereo field. We do this out of fear that the player will feel disconnected. But in doing so, we rob space of its greatest power: silence and contrast.",
        "In Lost In Space, the audio engine is built around the concept of acoustic negative space and cockpit hull resonance. When you cut your main thrusters and drift silently through an asteroid belt, the world drops into near-total quiet. The silence becomes tangible—a heavy acoustic void where the only sound is the rhythmic pulse of your ship's life-support monitor.",
      ],
      pullQuote:
        "True atmospheric tension is not created by adding sound; it is created by making the player keenly aware of what they are not hearing.",
      conclusion:
        "By treating silence as a structural material rather than empty air, we allow player imagination to do the heavy lifting. The most terrifying moment in deep space is the sudden cessation of your engine hum.",
    },
  },
  {
    slug: "tactile-word-puzzle-design",
    title: "Designing Tactile Micro-Interactions in Mobile Word Puzzles",
    date: "September 02, 2026",
    category: "Mobile UX & Interaction",
    readTime: "6 min read",
    excerpt:
      "Why standard mobile trivia feels hollow with generic tap sounds, and how we engineered physical weight into letter tile interactions in Tebak Icon.",
    content: {
      lead:
        "When a player taps a flat glass smartphone screen, their subconscious expectation is frequently disappointed by floaty, disconnected feedback.",
      paragraphs: [
        "In the mobile puzzle genre, interaction design is often treated as an afterthought. Buttons flash with oversaturated gradients, reward screens trigger obnoxious fanfare, and tile taps produce generic synthesizer bleeps that wear out the player's patience within ten minutes.",
        "With Tebak Icon, we took the opposite approach: crafting an experience closer to playing with real stone tiles and wooden Scrabble pieces. When you tap a letter tile to submit an answer, the phone emits a precise, low-frequency 15ms haptic pulse paired with an acoustic recording of a slate stone settling onto a surface.",
        "This micro-latency physical feedback grounds the riddle. The player is not merely navigating an ad-monetized mobile form; they are manipulating tactile glyphs in a quiet, focused headspace.",
      ],
      pullQuote:
        "Tactility in mobile interfaces is the discipline of making a flat piece of glass feel like an instrument of thought.",
      conclusion:
        "By treating mobile trivia with the same design rigor and acoustic restraint as our larger titles, we create games that players keep on their devices for years.",
    },
  },
  {
    slug: "finding-the-silhouette",
    title: "Studio Note: Finding the Silhouette of Our First World",
    date: "July 28, 2026",
    category: "Art Direction",
    readTime: "5 min read",
    excerpt:
      "Why we discarded seventy early concept sketches to arrive at a solitary ship silhouette against an eclipsed planet in Lost In Space.",
    content: {
      lead:
        "It is deceptively easy to design something complicated. It is terrifyingly difficult to design something quiet.",
      paragraphs: [
        "When we started conceptualizing Lost In Space, our early visual exploration suffered from visual clutter. We had intricate alien fighters with glowing neon inlays, neon particle trails, and busy holographic HUDs. It looked undeniably like a generic arcade game—and that was precisely the problem.",
        "One afternoon, our art director printed thirty reference photographs of raw aerospace engineering: radar stealth geometries, Apollo command modules, and the solitary silhouettes of deep-space research probes. We pinned them next to high-contrast monochrome photographs of planetary eclipses and asteroid fields.",
        "The epiphany was immediate: strip away every glowing light, every flashy effect, every decorative flourish. What remained was a pure, unyielding angular silhouette of a reconnaissance spacecraft against the pitch-black void and the soft, glowing corona of an eclipsed world. That contrast was ten times more mysterious and evocative.",
      ],
      pullQuote:
        "Restraint is not the absence of ideas. It is the discipline to protect the one idea that actually matters.",
      conclusion:
        "A strong silhouette communicates in a split second. When you see our craft drifting against the dark horizon, you know exactly what studio made it.",
    },
  },
];

export const STUDIO_PRINCIPLES = [
  {
    num: "01",
    name: "Curiosity",
    tagline: "Asking questions before seeking answers",
    description:
      "We begin not with market spreadsheets or genre formulas, but with unresolved questions. What does quiet feel like in an interactive medium? How do architectural proportions alter emotional tension? What makes a digital space feel inhabited rather than decorated?",
  },
  {
    num: "02",
    name: "Craft",
    tagline: "The dignity of tangible detail",
    description:
      "We believe in the discipline of the small things. The tactile clack of a mechanical switch, the subtle inertia of a camera rig, the precise decay of audio in a wet quarry—these are not cosmetic polish. They are the substance of the world.",
  },
  {
    num: "03",
    name: "Experimentation",
    tagline: "Freedom to discard the merely functional",
    description:
      "True independence is the liberty to discard ideas that work adequately in pursuit of those that feel singular. We prototype quickly, embrace early failure without defensiveness, and iterate with patient rigor.",
  },
  {
    num: "04",
    name: "Meaningful Play",
    tagline: "Experiences that respect player time",
    description:
      "We create works for players who value their attention. Games that do not rely on manufactured addiction or synthetic dopamine loops, but instead offer spaces of contemplation, mystery, and lasting emotional resonance.",
  },
];
