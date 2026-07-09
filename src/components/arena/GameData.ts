import valoImg from "@/assets/about/valo.jpg";
import bgmiImg from "@/assets/about/bgmi.jpg";
import racingImg from "@/assets/about/racing.jpg";
import ps5Img from "@/assets/about/ps5.jpg";
import clashImg from "@/assets/home/clash.png";
import vrImg from "@/assets/home/vr.png";

export interface ArenaGame {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  genre: string;
  image: string;
  status: string;
  statusColor: "primary" | "secondary" | "accent" | "purple" | "green";
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Competitive" | "All Levels";
  platform: string;
  teamSize: string;
  prizePool: string;
  tournamentFormat: string;
  rules: string[];
}

export const arenaGames: ArenaGame[] = [
  {
    id: "valorant",
    title: "Valorant",
    description: "5v5 tactical hero shooter where precise gunplay meets unique agent abilities.",
    longDescription: "Valorant challenges teams to execute tactical plans, coordinate hero utility, and showcase sharpshooting reflexes. As JUGS' flagship PC title, our Valorant tournaments draw the university's top competitive squads.",
    genre: "Tactical FPS",
    image: valoImg,
    status: "Tournament Active",
    statusColor: "accent", // #FF3366
    difficulty: "Competitive",
    platform: "PC (Windows)",
    teamSize: "5v5 Squads",
    prizePool: "₹25,000 + Trophy",
    tournamentFormat: "Double Elimination Bracket",
    rules: [
      "Games will be played on Mumbai server coordinates.",
      "Tactical timeouts allowed once per half (60s).",
      "Standard competitive map pool in active rotation.",
      "Use of illegal exploits or third-party hacks results in instant ban."
    ]
  },
  {
    id: "bgmi",
    title: "BGMI",
    description: "Drop, loot, and survive in the premier mobile battle royale showdown.",
    longDescription: "Battlegrounds Mobile India (BGMI) brings together squads to fight across classic landscapes. Loot tactical supplies, navigate shrinking zones, and coordinate squad fire to secure the chicken dinner.",
    genre: "Battle Royale",
    image: bgmiImg,
    status: "Registrations Open",
    statusColor: "secondary", // #00D4FF
    difficulty: "Advanced",
    platform: "Mobile (Android / iOS)",
    teamSize: "Squads (4 Players)",
    prizePool: "₹20,000 + Custom Medals",
    tournamentFormat: "Points-based Grid (3 Matches)",
    rules: [
      "Emulators are strictly prohibited; mobile devices only.",
      "Standard competitive points system (placement + finishes).",
      "Maps: Erangel, Miramar, Sanhok.",
      "Players must stream or record point-of-view gameplay for validation."
    ]
  },
  {
    id: "clash-royale",
    title: "Clash Royale",
    description: "Fast-paced real-time tower rush cards strategy duels.",
    longDescription: "Enter the arena in this card-based real-time strategy hit. Collect cards, construct custom decks, and out-maneuver opponents in tactical 1v1 duels to destroy enemy towers.",
    genre: "Card Strategy",
    image: clashImg,
    status: "Registrations Open",
    statusColor: "purple", // #8B5CF6
    difficulty: "Intermediate",
    platform: "Mobile (Android / iOS)",
    teamSize: "1v1 Solo",
    prizePool: "₹8,000 + Premium Merchandise",
    tournamentFormat: "Single Elimination (Best of 3)",
    rules: [
      "All card levels capped at tournament standard (Level 11).",
      "No card restrictions; players can change decks between games.",
      "Disconnects without immediate reconnect count as a round loss.",
      "Friendly battle invites must be recorded."
    ]
  },
  {
    id: "racing-rig",
    title: "Red Bull Racing Rig",
    description: "Precision Sim Racing rig trials on immersive professional equipment.",
    longDescription: "Step into our high-performance simulation rig. Equipped with professional force-feedback wheelbases, load-cell pedals, and virtual high-refresh screens, this setup tests your apex execution in real-time.",
    genre: "Sim Racing",
    image: racingImg,
    status: "Leaderboard Open",
    statusColor: "secondary", // #00D4FF
    difficulty: "Advanced",
    platform: "Sim Rig Console/PC",
    teamSize: "Solo Time-Attack",
    prizePool: "Red Bull Racing Gear",
    tournamentFormat: "Hot Lap Leaderboard Trial",
    rules: [
      "Traction control and ABS set to realistic factory specs.",
      "Track limits strictly enforced (2 wheels must remain on track boundaries).",
      "Best single hot-lap time out of 3 consecutive attempts counts.",
      "All gear assists are standardized for fairness."
    ]
  },
  {
    id: "vr-experience",
    title: "VR Experience",
    description: "Immerse yourself in mind-bending spatial virtual reality arenas.",
    longDescription: "Explore virtual environments, music rhythm challenges, and high-intensity spatial arenas. Experience immersive physics-based movement and responsive tracking that makes you the center of the action.",
    genre: "Virtual Reality",
    image: vrImg,
    status: "Free Play Access",
    statusColor: "primary", // #5B5FFF
    difficulty: "Beginner",
    platform: "Meta Quest 3 Headset",
    teamSize: "Solo Experience",
    prizePool: "Participation Badges",
    tournamentFormat: "Arcade High-Score Challenge",
    rules: [
      "Sanitization guidelines must be followed between headset uses.",
      "Maximum of 10 minutes play session per turn during peak hours.",
      "Supervised setup by JUGS technology coordinators.",
      "Players must remain inside safety boundary markings."
    ]
  },
  {
    id: "free-play",
    title: "Free Play Zone",
    description: "Casual split-screen console battles, fighting matches, and party games.",
    longDescription: "Take a break in our console lounge. Rent controllers, play local multiplayer fighting titles, sports titles, and split-screen party games with friends in a relaxed environment.",
    genre: "Casual Console",
    image: ps5Img,
    status: "Continuous Play",
    statusColor: "primary", // #5B5FFF
    difficulty: "All Levels",
    platform: "PlayStation 5 / Nintendo Switch",
    teamSize: "1v1, 2v2 or Free-for-All",
    prizePool: "Casual Gaming Bragging Rights",
    tournamentFormat: "Casual Lobby / Pop-up Matches",
    rules: [
      "Controllers must be returned to the JUGS helpdesk after use.",
      "Respect other lobby queue lists; rotate setups after 2 consecutive games.",
      "All gaming equipment is JUGS property; handle with caution.",
      "No food or drink allowed near console stations."
    ]
  }
];
