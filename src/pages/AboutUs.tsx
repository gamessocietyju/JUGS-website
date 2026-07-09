import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import image1 from '@/assets/about/valo.jpg';
import image2 from '@/assets/about/racing.jpg';
import image3 from '@/assets/about/bgmi.jpg';
import image4 from '@/assets/about/ps5.jpg';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-jugs-dark text-white selection:bg-jugs-primary selection:text-white">
      <Navigation />

      <main className="px-6 md:px-12 lg:px-20 py-16 lg:py-28 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-black uppercase tracking-wider leading-tight mb-12"
        >
          <span className="text-gradient-accent">About</span>
          <span className="text-white"> Us</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch">
          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[500px] xl:w-[550px] h-[400px] sm:h-[500px] md:h-[550px] relative flex-shrink-0"
          >
            {/* Top Left Image */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 p-2">
              <img
                src={image1}
                alt="Gaming event"
                className="w-full h-full object-cover rounded-2xl border border-white/5 shadow-xl hover:border-jugs-secondary/40 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-500 cursor-pointer"
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 p-2">
              <img
                src={image2}
                alt="Esports tournament"
                className="w-full h-full object-cover rounded-2xl border border-white/5 shadow-xl hover:border-jugs-primary/40 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(91,95,255,0.2)] transition-all duration-500 cursor-pointer"
              />
            </div>

            {/* Bottom Left Image */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-2">
              <img
                src={image3}
                alt="Game development"
                className="w-full h-full object-cover rounded-2xl border border-white/5 shadow-xl hover:border-jugs-primary/40 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(91,95,255,0.2)] transition-all duration-500 cursor-pointer"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-2">
              <img
                src={image4}
                alt="Team building"
                className="w-full h-full object-cover rounded-2xl border border-white/5 shadow-xl hover:border-jugs-secondary/40 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-500 cursor-pointer"
              />
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center"
          >
            <div className="space-y-6 lg:space-y-8">
              <p className="text-base lg:text-[17px] font-medium leading-relaxed text-white/70">
                Jadavpur University Games Society (JUGS) is the official gaming and esports society
                of Jadavpur University. The society was created to unite students who share an interest
                in casual gaming, competitive esports, game development, and interactive digital
                entertainment.
              </p>

              <p className="text-base lg:text-[17px] font-medium leading-relaxed text-white/70">
                JUGS aims to provide a platform that encourages enthusiasm for gaming while promoting
                creativity, teamwork, and strategic thinking. We believe that gaming is more than a
                pastime. It builds problem solving skills, sharpens reflexes, and strengthens
                collaboration.
              </p>

              <p className="text-base lg:text-[17px] font-medium leading-relaxed text-white/70">
                Throughout the year, we organize a wide range of activities including esports tournaments,
                friendly competitions, LAN events, and game development workshops. These events are designed to help students explore the technical, competitive,
                and entertainment aspects of the gaming world.
              </p>

              <p className="text-base lg:text-[17px] font-medium leading-relaxed text-white/70">
                Our goal is to create a vibrant and inclusive gaming community within Jadavpur University.
                Whether you are a competitive player, a casual gamer, or someone interested in the creative side
                of game development, JUGS offers opportunities for everyone to learn, engage, and grow.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

