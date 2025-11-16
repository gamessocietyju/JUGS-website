import { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import console from '@/assets/home/console.png';

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
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-jugs-dark">
      <Navigation />

      <main className="px-4 lg:px-6 py-12 lg:py-24">
        <h1 className="text-4xl lg:text-5xl xl:text-[67px] font-semibold leading-tight lg:leading-[84px] mb-8 lg:mb-12 px-4 lg:px-[158px]">
          <span className="text-jugs-red">Event</span>
          <span className="text-white"> Gallery</span>
        </h1>

        <div className="w-full max-w-[1716px] mx-auto relative">
          {/* Console Image */}
          <img
            src={console}
            alt="Gaming Console"
            className="w-full h-auto object-contain relative z-10"
          />

          {/* Slideshow Container - Positioned over the console's screen */}
          <div className="absolute z-20"
            style={{
              top: '26%',
              left: '49.5%',
              transform: 'translateX(-50%)',
              width: '49%',
              height: '50%',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(0,0,0,0.5)',
            }}>
            <div className="relative w-full h-full">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
