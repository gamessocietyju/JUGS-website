import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-jugs-black">
      <div className="px-8 lg:px-[157px] py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
              Socials
            </h3>
            <div className="space-y-2 lg:space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/officialgamessocietyju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-red hover:text-white transition-colors p-2 rounded-full border border-jugs-red hover:bg-jugs-red"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/gamessociety_ju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-red hover:text-white transition-colors p-2 rounded-full border border-jugs-red hover:bg-jugs-red"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/jadavpur-university-games-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-red hover:text-white transition-colors p-2 rounded-full border border-jugs-red hover:bg-jugs-red"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@gamessocietyju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jugs-red hover:text-white transition-colors p-2 rounded-full border border-jugs-red hover:bg-jugs-red"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
              Contact Us On
            </h3>
            <div className="space-y-2 lg:space-y-4">
              <a
                href="mailto:gamessocietyju@gmail.com"
                className="flex items-center gap-2 text-lg lg:text-2xl font-medium hover:text-jugs-red transition-colors"
              >
                <Mail className="w-6 h-6 flex-shrink-0" />
                gamessocietyju@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
              Visit Our Other Pages
            </h3>
            <div className="space-y-2 lg:space-y-4">
              <Link
                to="/about"
                className="block text-lg lg:text-2xl font-medium hover:text-jugs-red transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/events"
                className="block text-lg lg:text-2xl font-medium hover:text-jugs-red transition-colors"
              >
                Events
              </Link>
              <Link
                to="/members"
                className="block text-lg lg:text-2xl font-medium hover:text-jugs-red transition-colors"
              >
                Members
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-jugs-gray">
          <p className="text-center text-lg lg:text-2xl font-medium">
            © All rights reserved by JUGS
          </p>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
