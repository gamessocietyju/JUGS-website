import { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import consoleImage from '@/assets/home/console.png';
import TiltCard from "@/components/interactions/TiltCard";

// Import all images from the gallery folder using Vite's glob import
const galleryImages = Object.values(
  import.meta.glob('@/assets/gallery/*.{png,jpg,jpeg,webp}', {
    eager: true,
    as: 'url'
  })
) as string[];

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (galleryImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

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
          <span className="text-gradient-accent">Event</span>
          <span className="text-white"> Gallery</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl mx-auto relative group"
        >
          <TiltCard className="w-full h-full relative cursor-pointer">
            {/* Console Image */}
            <img
              src={consoleImage}
              alt="Gaming Console"
              className="w-full h-auto object-contain relative z-10 filter drop-shadow-[0_15px_50px_rgba(91,95,255,0.12)] group-hover:drop-shadow-[0_15px_50px_rgba(91,95,255,0.22)] transition-all duration-500"
            />

            {/* Slideshow Container - Positioned over the console's screen */}
            {galleryImages.length > 0 && (
              <div className="absolute z-20 border border-white/10"
                style={{
                  top: '26%',
                  left: '49.5%',
                  transform: 'translateX(-50%)',
                  width: '49%',
                  height: '50%',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  boxShadow: '0 0 30px rgba(91, 95, 255, 0.25)',
                }}>
                <div className="relative w-full h-full">
                  {galleryImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </TiltCard>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

