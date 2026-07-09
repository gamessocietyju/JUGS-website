import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArenaGame } from "./GameData";
import { Trophy, Users, ShieldAlert, Cpu, Gamepad2 } from "lucide-react";
import MagneticButton from "../interactions/MagneticButton";

interface ArenaDialogProps {
  game: ArenaGame | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArenaDialog({ game, isOpen, onClose }: ArenaDialogProps) {
  if (!game) return null;

  // Color mapping matching JUGS theme specs
  const difficultyColors = {
    Beginner: "bg-green-500/10 text-green-400 border-green-500/20",
    Intermediate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Advanced: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Competitive: "bg-red-500/10 text-red-400 border-red-500/20",
    "All Levels": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-w-2xl bg-[#111827]/98 backdrop-blur-lg border border-white/10 text-white rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden focus:outline-none"
        aria-describedby="arena-dialog-desc"
      >
        {/* Glow corner elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-jugs-primary/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-jugs-accent/5 rounded-full blur-2xl pointer-events-none" />

        <DialogHeader className="relative z-10">
          <div className="inline-flex self-start px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-orbitron font-bold tracking-widest text-jugs-secondary uppercase mb-3 select-none">
            {game.genre}
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-black font-orbitron tracking-wide text-white uppercase flex items-center justify-between">
            {game.title}
          </DialogTitle>
          <DialogDescription id="arena-dialog-desc" className="text-white/60 text-xs sm:text-sm font-medium leading-relaxed mt-2 text-left">
            {game.longDescription}
          </DialogDescription>
        </DialogHeader>

        {/* Tactical Info grid */}
        <div className="grid grid-cols-2 gap-4 mt-5 relative z-10 text-left">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-jugs-secondary flex-shrink-0" />
            <div>
              <div className="text-[9px] font-orbitron font-semibold tracking-wider text-white/40 uppercase">Prize Pool</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{game.prizePool}</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
            <Users className="w-5 h-5 text-jugs-accent flex-shrink-0" />
            <div>
              <div className="text-[9px] font-orbitron font-semibold tracking-wider text-white/40 uppercase">Team Size</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{game.teamSize}</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-jugs-primary flex-shrink-0" />
            <div>
              <div className="text-[9px] font-orbitron font-semibold tracking-wider text-white/40 uppercase">Platform</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{game.platform}</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
            <Gamepad2 className="w-5 h-5 text-jugs-purple flex-shrink-0" />
            <div>
              <div className="text-[9px] font-orbitron font-semibold tracking-wider text-white/40 uppercase">Format</div>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{game.tournamentFormat}</div>
            </div>
          </div>
        </div>

        {/* Detailed Guidelines */}
        <div className="mt-5 space-y-4 relative z-10 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-jugs-secondary" />
              <h4 className="font-orbitron font-bold text-xs tracking-wider text-white uppercase">Arena Rules & Guidelines</h4>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-xs text-white/60 font-medium">
              {game.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Difficulty Badge */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] font-orbitron font-bold text-white/40 uppercase tracking-widest">Difficulty Rating:</span>
            <span className={`px-2.5 py-0.5 rounded border text-[9px] font-orbitron font-bold tracking-widest uppercase ${difficultyColors[game.difficulty]}`}>
              {game.difficulty}
            </span>
          </div>
        </div>

        {/* Dialog Actions & Placeholders */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-white/10 pt-5 relative z-10 w-full">
          {/* Gallery placeholder text */}
          <span className="text-[10px] font-orbitron font-semibold tracking-widest text-white/30 uppercase select-none">
            [ Portal Gallery Preview: N/A ]
          </span>
          <div className="flex gap-3 w-full sm:w-auto justify-end">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 text-xs font-orbitron font-bold tracking-widest uppercase transition-colors"
            >
              Close
            </button>
            <MagneticButton>
              <button className="btn-premium-secondary px-6 py-2.5 text-xs font-orbitron font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                Register Now
              </button>
            </MagneticButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
