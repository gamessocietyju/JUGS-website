import { ArenaGame } from "./GameData";
import TiltCard from "../interactions/TiltCard";

interface ArenaCardProps {
  game: ArenaGame;
  onClick: () => void;
}

export default function ArenaCard({ game, onClick }: ArenaCardProps) {
  // Status color styles mapping
  const colorMap = {
    primary: "bg-jugs-primary/20 text-white border-jugs-primary/40",
    secondary: "bg-jugs-secondary/20 text-jugs-secondary border-jugs-secondary/40",
    accent: "bg-jugs-accent/20 text-jugs-accent border-jugs-accent/40",
    purple: "bg-jugs-purple/20 text-jugs-purple border-jugs-purple/40",
    green: "bg-green-500/20 text-green-400 border-green-500/40"
  };

  const glowShadowMap = {
    primary: "shadow-[0_0_15px_rgba(91,95,255,0.15)]",
    secondary: "shadow-[0_0_15px_rgba(0,212,255,0.15)]",
    accent: "shadow-[0_0_15px_rgba(255,51,102,0.15)]",
    purple: "shadow-[0_0_15px_rgba(139,92,246,0.15)]",
    green: "shadow-[0_0_15px_rgba(34,197,94,0.15)]"
  };

  const pingBgMap = {
    primary: "bg-[#5B5FFF]",
    secondary: "bg-[#00D4FF]",
    accent: "bg-[#FF3366]",
    purple: "bg-[#8B5CF6]",
    green: "bg-[#22C55E]"
  };

  return (
    <TiltCard className="h-full">
      <div 
        onClick={onClick}
        className="relative flex flex-col h-full bg-[#171B24]/40 backdrop-blur-md border border-white/10 hover:border-jugs-secondary/30 rounded-2xl overflow-hidden group cursor-pointer shadow-xl transition-all duration-500 select-none"
      >
        <style>{`
          @keyframes particleFloat1 {
            0% { transform: translate(0, 0); opacity: 0.15; }
            50% { transform: translate(-10px, -20px); opacity: 0.45; }
            100% { transform: translate(0, 0); opacity: 0.15; }
          }
          @keyframes particleFloat2 {
            0% { transform: translate(0, 0); opacity: 0.15; }
            50% { transform: translate(12px, -25px); opacity: 0.45; }
            100% { transform: translate(0, 0); opacity: 0.15; }
          }
          @keyframes lightSweep {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
          }
          .animate-particle-1 { animation: particleFloat1 5s ease-in-out infinite; }
          .animate-particle-2 { animation: particleFloat2 6s ease-in-out infinite; }
          .light-sweep {
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
            animation: lightSweep 4s infinite linear;
          }
          .card-glow-bg {
            background: radial-gradient(circle at 50% 10%, var(--glow-color, rgba(0, 212, 255, 0.05)), transparent 60%);
          }
        `}</style>

        {/* Ambient Hover Glow behind card */}
        <div 
          className="absolute inset-0 card-glow-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
          style={{ '--glow-color': game.statusColor === 'secondary' ? 'rgba(0, 212, 255, 0.08)' : game.statusColor === 'accent' ? 'rgba(255, 51, 102, 0.08)' : 'rgba(91, 95, 255, 0.08)' } as any}
        />

        {/* CSS Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="absolute w-1.5 h-1.5 rounded-full bg-jugs-secondary animate-particle-1 bottom-[20%] left-[15%]" />
          <div className="absolute w-1 h-1 rounded-full bg-jugs-accent animate-particle-2 bottom-[35%] right-[20%]" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-jugs-primary animate-particle-1 bottom-[10%] right-[30%]" />
          <div className="absolute w-1 h-1 rounded-full bg-white/40 animate-particle-2 bottom-[45%] left-[25%]" />
        </div>

        {/* Moving light sweep reflection */}
        <div className="absolute top-0 bottom-0 left-0 w-1/2 light-sweep pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Large Game Artwork Area */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070B12] border-b border-white/5">
          <img 
            src={game.image} 
            alt={game.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
          {/* Card Overlay shadow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60 z-5" />

          {/* Animated Status Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-orbitron font-semibold tracking-wider uppercase border backdrop-blur-md ${colorMap[game.statusColor]} ${glowShadowMap[game.statusColor]}`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${pingBgMap[game.statusColor]}`} />
              {game.status}
            </span>
          </div>

          {/* Genre Badge */}
          <div className="absolute bottom-3.5 right-3.5 z-10">
            <span className="px-2.5 py-0.5 rounded bg-black/75 border border-white/10 text-[10px] font-orbitron font-bold tracking-wider text-white/90">
              {game.genre}
            </span>
          </div>
        </div>

        {/* Content Block */}
        <div className="relative z-10 p-5 flex flex-col justify-between flex-1 gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold font-orbitron tracking-wide text-white group-hover:text-jugs-secondary transition-colors duration-300">
              {game.title}
            </h3>
            <p className="text-white/60 text-xs sm:text-sm font-medium leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* CTA Link trigger */}
          <div className="flex items-center justify-between w-full mt-1 border-t border-white/5 pt-3">
            <span className="font-orbitron font-bold text-[10px] sm:text-xs tracking-widest text-jugs-secondary uppercase group-hover:text-glow-secondary group-hover:translate-x-1 transition-all duration-300">
              Explore Arena //
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-jugs-secondary/15 group-hover:border-jugs-secondary/30 transition-all duration-300">
              <svg className="w-3.5 h-3.5 text-white/70 group-hover:text-jugs-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
