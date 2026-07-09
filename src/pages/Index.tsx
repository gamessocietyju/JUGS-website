import React, { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroScene = React.lazy(() => import("@/components/hero/HeroScene"));
import image1 from '@/assets/home/home1.png';
import image2 from '@/assets/home/home2.png';
import image3 from '@/assets/home/home3.png';
import MagneticButton from "@/components/interactions/MagneticButton";
import ArenaGrid from "@/components/arena/ArenaGrid";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
  },
};

export default function Index() {

  return (
    <div className="min-h-screen bg-jugs-dark text-white selection:bg-jugs-primary selection:text-white">
      <Navigation />

      <main>
        {/* Esports Redesigned Hero Section */}
        <section className="relative w-full min-h-[calc(100vh-76px)] flex items-center justify-center bg-[#070B12] overflow-hidden border-b border-white/5 py-12 lg:py-20">
          {/* Layered Animated Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            {/* Faint Scanline Texture */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)`
              }}
            />

            {/* Blurred Neon Blobs */}
            <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] bg-jugs-primary/5 rounded-full blur-[140px] mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] bg-jugs-accent/5 rounded-full blur-[140px] mix-blend-screen" />
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-jugs-purple/5 rounded-full blur-[120px] opacity-70" />
            
            {/* Animated radial glow center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-radial-gradient from-white/[0.01] to-transparent rounded-full blur-[160px]" />

            {/* Animated light sweep lines */}
            <motion.div 
              animate={{ 
                x: ['-100vw', '100vw'],
                y: ['-50vh', '50vh']
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-[280px] h-[150vh] bg-gradient-to-r from-transparent via-white/[0.025] to-transparent -rotate-[45deg]"
            />
          </div>

          {/* Main Hero Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            {/* Left Column (Details) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 max-w-2xl text-left flex flex-col items-start"
            >
              {/* Powered By Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-jugs-primary/10 border border-jugs-primary/25 text-[10px] sm:text-xs font-orbitron font-semibold tracking-widest text-jugs-secondary uppercase shadow-[0_0_15px_rgba(91,95,255,0.12)] mb-6 select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-jugs-secondary animate-pulse shadow-[0_0_5px_#00D4FF]" />
                Powered by Jadavpur University
              </motion.div>

              {/* Large Esports Headline */}
              <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-orbitron tracking-tight leading-[0.92] uppercase"
              >
                <span className="text-white block">Game.</span>
                <span className="text-gradient-primary block mt-1">Compete.</span>
                <span className="text-gradient-accent block mt-1 text-glow-accent">Conquer.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div 
                variants={itemVariants}
                className="mt-6 text-sm md:text-base font-orbitron font-black tracking-[0.2em] text-jugs-secondary uppercase"
              >
                Official Gaming Society of Jadavpur University
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="mt-4 text-white/60 text-base md:text-lg font-medium max-w-lg leading-relaxed"
              >
                Jadavpur University Games Society (JUGS) is the premier hub for competitive esports, casual gaming, and tabletop battles. We host university tournaments, support local teams, and run game dev workshops.
              </motion.p>

              {/* CTAs */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-wrap gap-4"
              >
                <MagneticButton>
                  <Link 
                    to="/events" 
                    className="btn-premium-accent px-8 py-3.5 text-sm md:text-base font-bold shadow-[0_0_20px_rgba(255,51,102,0.25)] flex items-center justify-center"
                  >
                    Explore Events
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link 
                    to="/members" 
                    className="btn-premium-secondary px-8 py-3.5 text-sm md:text-base font-bold flex items-center justify-center"
                  >
                    Meet the Team
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right Column (Visual Gaming Showcase HUD) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 flex justify-center w-full lg:max-w-md xl:max-w-lg"
            >
              <div className="relative w-full aspect-square max-w-[420px] md:max-w-[460px] xl:max-w-[500px] flex items-center justify-center">
                {/* Rotating Outer Blur Gradient Circles */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 0.95, 1],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-jugs-primary/10 via-jugs-purple/10 to-jugs-accent/15 blur-3xl opacity-60 z-0"
                />
                
                <motion.div 
                  animate={{ 
                    scale: [1.08, 0.95, 1.05, 1.08],
                    rotate: [360, 270, 180, 90, 0]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-bl from-jugs-secondary/15 via-[#8B5CF6]/10 to-transparent blur-2xl opacity-50 z-0"
                />

                {/* Hexagon Pattern Grid inside showcase */}
                <div 
                  className="absolute inset-0 opacity-[0.08] z-10 pointer-events-none rounded-[36px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='41' viewBox='0 0 24 41'%3E%3Cpath fill='%235B5FFF' fill-opacity='0.6' d='M12 9L0 2v14l12 7 12-7V2zM0 29l12 7 12-7V16L12 23 0 16z'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 41px'
                  }}
                />

                {/* Outer HUD Corner Accents */}
                <div className="absolute inset-4 border border-white/5 pointer-events-none z-10 rounded-[28px]">
                  <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-jugs-accent shadow-[0_0_8px_rgba(255,51,102,0.5)]" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-white/20" />
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-white/20" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-jugs-primary shadow-[0_0_8px_rgba(91,95,255,0.5)]" />
                </div>

                {/* Diagonal Esports Stripe Accents */}
                <div className="absolute top-10 left-10 w-20 h-[2px] bg-gradient-to-r from-jugs-accent to-transparent rotate-[35deg] opacity-40 z-15" />
                <div className="absolute bottom-10 right-10 w-20 h-[2px] bg-gradient-to-l from-jugs-primary to-transparent rotate-[35deg] opacity-40 z-15" />

                {/* Vertical telemetry crosshair ticks */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white/20 z-15" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-white/20 z-15" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white/20 z-15" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[1px] h-4 bg-white/20 z-15" />

                {/* Animated light sweep overlays */}
                <motion.div 
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-jugs-secondary/40 to-transparent opacity-40 z-20 pointer-events-none shadow-[0_0_10px_rgba(0,212,255,0.4)]"
                />

                {/* Central Glass HUD Panel Block */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-[78%] aspect-square rounded-[32px] bg-[#171B24]/40 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-2xl hover:border-jugs-primary/20 transition-all duration-500 overflow-hidden group"
                >
                  {/* Subtle inner panel coordinate lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  {/* Interactive Live 3D Scene */}
                  <div className="absolute inset-0 w-full h-full z-0">
                    <Suspense fallback={
                      <div className="flex flex-col items-center justify-center w-full h-full opacity-60">
                        {/* Static emblem loading fallback */}
                        <div className="relative w-20 h-20 flex items-center justify-center select-none">
                          <div className="absolute inset-0 rounded-full border border-jugs-secondary/20 shadow-[0_0_15px_rgba(0,212,255,0.1)]" />
                          <svg className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,51,102,0.4)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 5L92 47L50 89L8 47L50 5Z" stroke="#FF3366" strokeWidth="4.5" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    }>
                      <HeroScene />
                    </Suspense>
                  </div>

                  {/* Tactical panel status text */}
                  <div className="text-center z-10 pointer-events-none absolute bottom-5">
                    <div className="font-orbitron font-black text-white text-base tracking-[0.15em]">JUGS // ARENA</div>
                    <div className="font-orbitron text-[9px] font-bold text-jugs-secondary tracking-widest mt-1 opacity-90 uppercase">
                      TACTICAL SYSTEM: ONLINE
                    </div>
                  </div>

                  {/* HUD Metadata metrics overlays */}
                  <div className="absolute top-3 left-5 font-mono text-[8px] text-white/30 tracking-widest pointer-events-none">[ PING: 5ms ]</div>
                  <div className="absolute bottom-3 right-5 font-mono text-[8px] text-white/30 tracking-widest pointer-events-none">GRIDREF: JU-7009</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Minimal Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none select-none"
          >
            <span className="font-orbitron text-[9px] tracking-[0.25em] text-white/30 uppercase">Scroll to explore</span>
            <div className="w-[18px] h-[30px] rounded-full border border-white/20 p-1 flex justify-center">
              <motion.div 
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-[3px] h-[6px] rounded-full bg-jugs-secondary shadow-[0_0_5px_#00D4FF]"
              />
            </div>
          </motion.div>
        </section>

        {/* Who Are We Section */}

        {/* Who Are We Section */}
        <section className="relative px-6 md:px-12 lg:px-20 py-16 lg:py-28 border-t border-white/5 bg-[#111827]/30">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-wider leading-tight">
                    <span className="text-gradient-accent">Who</span>
                    <span className="text-white"> Are We</span>
                  </h2>
                </div>
              </div>

              <div className="flex mb-8">
                <div className="w-[3px] h-auto bg-jugs-accent rounded-full flex-shrink-0 shadow-[0_0_8px_#FF3366]"></div>
                <div className="pl-6">
                  <p className="text-sm lg:text-base leading-relaxed lg:leading-[30px] font-medium text-white/80 max-w-2xl">
                    Jadavpur University Games Society (JUGS) is your home for
                    pixels, passion, and competitive spirit. We are a thriving
                    community of students united by a love for all platforms—from
                    PC and console titans to intricate tabletop games. Join us to
                    find teammates, compete in thrilling tournaments, and share
                    knowledge. This is where friendships are forged and champions
                    are made.
                  </p>
                </div>
              </div>

              <MagneticButton>
                <Link
                  to="/about"
                  className="btn-premium-accent inline-block text-sm lg:text-base font-semibold"
                >
                  Know More About Us
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center w-full"
            >
              <img
                src={image2}
                alt="Community illustration"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,51,102,0.1)]"
              />
            </motion.div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="relative px-6 md:px-12 lg:px-20 py-16 lg:py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex justify-center w-full order-2 lg:order-1"
            >
              <img
                src={image3}
                alt="Team illustration"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain filter drop-shadow-[0_0_20px_rgba(91,95,255,0.1)]"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 order-1 lg:order-2"
            >
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-wider leading-tight">
                    <span className="text-white">Meet Our </span>
                    <span className="text-gradient-primary">Team</span>
                  </h2>
                </div>
              </div>

              <div className="flex mb-8">
                <div className="w-[3px] h-auto bg-jugs-primary rounded-full flex-shrink-0 shadow-[0_0_8px_#5B5FFF]"></div>
                <div className="pl-6">
                  <p className="text-sm lg:text-base leading-relaxed lg:leading-[30px] font-medium text-white/80 max-w-2xl">
                    The Jadavpur University Games Society grows through cooperation and shared passion.
                    Every tournament, workshop, and initiative succeeds because our members come together with
                    creativity and commitment. What we achieve is never the effort of one person. It is the
                    result of many minds working with a common purpose.
                  </p>
                </div>
              </div>

              <MagneticButton>
                <Link
                  to="/members"
                  className="btn-premium-primary inline-block text-sm lg:text-base font-semibold"
                >
                  Meet Our Team
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Choose Your Arena Showcase Section */}
        <ArenaGrid />
      </main>

      <Footer />
    </div>
  );
}

