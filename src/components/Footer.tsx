import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#020408] border-t border-white/5">
      <div className="px-8 lg:px-[157px] py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div>
            <h3 className="text-xl lg:text-2xl font-orbitron font-semibold tracking-wider text-jugs-secondary mb-4 lg:mb-8">
              Socials
            </h3>
            <div className="space-y-2 lg:space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/officialgamessocietyju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-accent hover:text-white transition-all duration-300 p-3 rounded-full border border-jugs-accent/30 hover:border-jugs-accent hover:bg-jugs-accent/10 hover:shadow-[0_0_15px_rgba(255,51,102,0.4)] active:scale-95 flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/gamessociety_ju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-accent hover:text-white transition-all duration-300 p-3 rounded-full border border-jugs-accent/30 hover:border-jugs-accent hover:bg-jugs-accent/10 hover:shadow-[0_0_15px_rgba(255,51,102,0.4)] active:scale-95 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/jadavpur-university-games-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-accent hover:text-white transition-all duration-300 p-3 rounded-full border border-jugs-accent/30 hover:border-jugs-accent hover:bg-jugs-accent/10 hover:shadow-[0_0_15px_rgba(255,51,102,0.4)] active:scale-95 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@gamessocietyju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-accent hover:text-white transition-all duration-300 p-3 rounded-full border border-jugs-accent/30 hover:border-jugs-accent hover:bg-jugs-accent/10 hover:shadow-[0_0_15px_rgba(255,51,102,0.4)] active:scale-95 flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-orbitron font-semibold tracking-wider text-jugs-secondary mb-4 lg:mb-8">
              Contact Us On
            </h3>
            <div className="space-y-2 lg:space-y-4">
              <a
                href="mailto:gamessocietyju@gmail.com"
                className="flex items-center gap-2 text-base lg:text-lg font-medium text-white/70 hover:text-jugs-secondary hover:text-glow-secondary transition-all duration-300"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                gamessocietyju@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-orbitron font-semibold tracking-wider text-jugs-secondary mb-4 lg:mb-8">
              Visit Our Other Pages
            </h3>
            <div className="space-y-3 lg:space-y-4">
              <Link
                to="/about"
                className="block text-base lg:text-lg font-medium text-white/70 hover:text-jugs-secondary transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                to="/events"
                className="block text-base lg:text-lg font-medium text-white/70 hover:text-jugs-secondary transition-all duration-300"
              >
                Events
              </Link>
              <Link
                to="/members"
                className="block text-base lg:text-lg font-medium text-white/70 hover:text-jugs-secondary transition-all duration-300"
              >
                Members
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-white/5">
          <p className="text-center text-sm lg:text-base font-orbitron font-medium tracking-wider text-white/40">
            © All rights reserved by JUGS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
