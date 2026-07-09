import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-jugs-dark flex flex-col text-white selection:bg-jugs-primary selection:text-white">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl lg:text-6xl font-black font-orbitron tracking-wider mb-6 uppercase">
            <span className="text-gradient-primary">{title}</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/70 mb-8 font-medium">
            This page is under construction. Check back soon for updates!
          </p>
          <div className="w-20 h-[3px] bg-jugs-accent mx-auto rounded-full shadow-[0_0_8px_rgba(255,51,102,0.6)]"></div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

