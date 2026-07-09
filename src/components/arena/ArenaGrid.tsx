import React, { useState } from "react";
import { motion } from "framer-motion";
import { arenaGames, ArenaGame } from "./GameData";
import ArenaCard from "./ArenaCard";

// Lazy load Dialog modal content for optimized code splitting
const ArenaDialog = React.lazy(() => import("./ArenaDialog"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

export default function ArenaGrid() {
  const [selectedGame, setSelectedGame] = useState<ArenaGame | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (game: ArenaGame) => {
    setSelectedGame(game);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-16 lg:py-28 border-t border-white/5 bg-[#111827]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-black font-orbitron uppercase tracking-wider leading-tight">
            <span className="text-white">Choose Your </span>
            <span className="text-gradient-primary">Arena</span>
          </h2>
          <p className="mt-4 text-white/50 text-sm md:text-base max-w-xl mx-auto font-medium">
            Explore the diverse realms of competitive university gaming. Select a portal to view schedules, rules, and registers.
          </p>
        </div>

        {/* Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {arenaGames.map((game) => (
            <motion.div 
              key={game.id} 
              variants={itemVariants}
              className="h-full"
            >
              <ArenaCard 
                game={game} 
                onClick={() => handleOpenDialog(game)} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lazy Loaded Dialog Body */}
      {isDialogOpen && (
        <React.Suspense fallback={null}>
          <ArenaDialog 
            game={selectedGame} 
            isOpen={isDialogOpen} 
            onClose={handleCloseDialog} 
          />
        </React.Suspense>
      )}
    </section>
  );
}
