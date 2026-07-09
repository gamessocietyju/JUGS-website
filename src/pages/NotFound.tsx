import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-jugs-dark flex flex-col text-white selection:bg-jugs-primary selection:text-white">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-8xl lg:text-[140px] font-black font-orbitron tracking-widest text-gradient-accent text-glow-accent mb-4 leading-none">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold font-orbitron tracking-wider text-white mb-6 uppercase">
            Page Not Found
          </h2>
          <p className="text-base lg:text-lg text-white/60 mb-8 max-w-md mx-auto font-medium leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="btn-premium-accent inline-block text-base lg:text-lg font-semibold"
          >
            Go Back Home
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

