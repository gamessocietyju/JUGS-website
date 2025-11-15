import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close sidebar when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.sidebar') && !target.closest('.hamburger')) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Members', path: '/members' },
  ];

  return (
    <nav className="w-full bg-jugs-dark px-8 lg:px-16 py-6 lg:py-10 relative z-50">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 z-50">
            <svg
              className="w-24 h-8 lg:w-[119px] lg:h-[34px]"
              viewBox="0 0 119 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_100_61)">
                <mask
                  id="mask0_100_61"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="19"
                  y="0"
                  width="29"
                  height="34"
                >
                  <path
                    d="M47.543 18.1861V26.6966L42.6363 29.4351L39.3651 31.2607L34.4584 34V13.5535L39.3651 18.2977V25.7829L42.6363 23.9573V18.7914L34.4584 10.8844V5.53491L47.543 18.1861Z"
                    fill="black"
                  />
                  <path
                    d="M47.543 4.74419H39.3651V7.51163L34.4584 2.76744V0H42.6363L47.543 4.74419Z"
                    fill="black"
                  />
                  <path
                    d="M32.6275 5.53491V34L27.7208 31.2607L24.4497 29.4351L19.543 26.6966V18.1861L24.4497 13.4419V23.9564L27.7208 25.7829V10.2791L32.6275 5.53491Z"
                    fill="black"
                  />
                  <path
                    d="M32.6275 0V2.76656L27.7208 7.51075V4.74419H19.543L24.4497 0H32.6275Z"
                    fill="black"
                  />
                </mask>
                <g mask="url(#mask0_100_61)">
                  <rect x="19.543" width="28" height="34" fill="#FF0000" />
                </g>
              </g>
              <path
                d="M92.6284 3.34283H97.1808L99.457 5.61903V12.9029H95.8151V6.52951H93.9942V15.6343H98.0913L99.457 17V28.381L97.1808 30.6572H92.6284L90.3522 28.381V21.0972H93.9942V27.4705H95.8151V18.3657H91.718L90.3522 17V5.61903L92.6284 3.34283Z"
                fill="#FF0000"
              />
              <path
                d="M81.692 3.34283H86.2444L88.5206 5.61903V15.6343H84.8787V6.52951H83.0578V27.4705H84.8787V21.0972H83.9682V18.3657H88.5206V28.381L86.2444 30.6572H81.692L79.4158 28.381V5.61903L81.692 3.34283Z"
                fill="#FF0000"
              />
              <path
                d="M73.9422 3.34283H77.5842V28.381L75.308 30.6572H70.7556L68.4794 28.381V3.34283H72.1213V27.4705H73.9422V3.34283Z"
                fill="#FF0000"
              />
              <path
                d="M63.0058 3.34283H66.6478V28.381L64.3716 30.6572H59.8192L57.543 28.381V21.0972H61.1849V27.4705H63.0058V3.34283Z"
                fill="#FF0000"
              />
              <defs>
                <clipPath id="clip0_100_61">
                  <rect
                    width="28"
                    height="34"
                    fill="white"
                    transform="translate(19.543)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-[100px]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm lg:text-base font-semibold transition-colors ${location.pathname === item.path
                  ? 'text-jugs-red'
                  : 'text-white hover:text-jugs-red'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hamburger z-50 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`sidebar fixed top-0 right-0 h-full w-full max-w-sm bg-jugs-dark shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out md:hidden z-40 pt-24 px-8`}
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold transition-colors ${location.pathname === item.path
                  ? 'text-jugs-red'
                  : 'text-white hover:text-jugs-red'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
