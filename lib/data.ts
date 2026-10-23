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
    slug: "kinetic-tides",
    title: "KINETIC TIDES",
    subtitle: "Brutalist marine observation at the edge of tidal collapse.",
    codename: "PROJECT AEON",
    status: "Systems & Mechanics Prototyping",
    genre: "Speculative Physics Adventure",
    platforms: "PC (Steam)",
    engine: "Unreal Engine 5 / Custom Fluid Solvers",
    releaseYear: "TBA — In Prototyping",
    image: "/images/kinetic-tides.jpg",
    aspectRatio: "16/9",
    tagline: "Observe the ocean. Maintain the station. Listen to what rises with the tide.",
    overview:
      "Perched atop the wave-swept cliffs of a sub-polar archipelago, Kinetic Tides casts the player as the sole caretaker of a brutalist seismic observatory. As tidal gravity surges beyond predicted models, players must balance station calibration, kinetic water pumps, and field excursions across tide-locked rocky shelves to decipher an anomalous planetary rhythm.",
    narrativeHook:
      "The observatory was built to last three centuries. Its concrete walls are three meters thick. Yet every night at lunar apogee, the water rises four inches higher than the physical laws of the basin permit.",
    designPillars: [
      {
        num: "01",
        title: "Physical Tide Dynamics",
        description:
          "Tides are not cosmetic animations; they are real-time hydrostatic simulations that flood lower walkways, power hydrostatic generators, and dictate windows of exterior transit.",
      },
      {
        num: "02",
        title: "Industrial Tactility",
        description:
          "Every valve, pneumatic latch, and CRT oscilloscope has mechanical weight, audible relays, and predictable physical thresholds.",
      },
      {
        num: "03",
        title: "Planetary Indifference",
        description:
          "The narrative explores human fragility in the face of planetary-scale geological shifts. Atmospheric, contemplative, and deeply cinematic.",
      },
    ],
    technicalSpecs: [
      { label: "Target Platforms", value: "PC (Steam)" },
      { label: "Physics Middleware", value: "Custom hydrostatic mesh interaction solver" },
      { label: "Visual Style", value: "Monochrome architectural brutalism with natural slate & cold ocean hues" },
      { label: "Production Phase", value: "Sub-station mechanical gameplay loop validation" },
    ],
    developmentNotes: [
      "Water is treated as both an obstacle and a power grid component.",
      "The concrete architecture draws direct inspiration from St. Peter's Seminary and cold-war coastal radar towers.",
    ],
    gallery: [
      { caption: "Station Gantry at low tide, cantilevered over basalt rock shelf", type: "Architectural Exterior" },
      { caption: "Main Control Room: Dual oscilloscope readouts and mechanical pressure levers", type: "Interior System" },
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
    slug: "building-tactile-physics",
    title: "Designing Physical Weight in Low-Gravity Environments",
    date: "September 02, 2026",
    category: "Systems & Engineering",
    readTime: "8 min read",
    excerpt:
      "A breakdown of our inertia model in Kinetic Tides: giving mechanical equipment tangible resistance without frustrating player agency.",
    content: {
      lead:
        "When an interactive object feels 'floaty,' players rarely blame the visual model. They blame the feedback loop between their fingers and the screen.",
      paragraphs: [
        "In Kinetic Tides, the player is managing cold-weather industrial machinery: cast-iron valve wheels, hydraulic gate levers, and magnetic cable winches. These machines were built fifty years before the game begins, designed to withstand saline spray and sub-zero gales.",
        "To convey this in gameplay without resorting to tedious quick-time events, we implemented an analog resistance curve on all rotary and linear interactions. When you begin turning a frozen valve, the initial rotational velocity is low, accompanied by the mechanical rattle of gears engaging. As momentum builds, the resistance drops slightly, before encountering the hard stop of the valve seat.",
        "Coupling this with directional haptics and acoustic resonance turns an ordinary interaction into a physical sensation. You do not merely press a button to open a floodgate; you physically haul open a steel gate against the hydrostatic pressure of the incoming tide.",
      ],
      pullQuote:
        "Tactility in digital spaces is the art of making pixels feel like they have mass, friction, and resistance to human will.",
      conclusion:
        "Our goal is to create interfaces that feel diegetic, honest, and satisfying to touch. We want every lever in the observatory to feel like it will still be working long after the story ends.",
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
