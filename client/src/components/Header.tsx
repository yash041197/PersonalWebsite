import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    const maxScroll = 100;
    setOpacity(Math.min(latest / maxScroll, 0.8));
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.dispatchEvent(new CustomEvent('toggleMobileMenu', {
      detail: { isOpen: !mobileMenuOpen }
    }));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: scrolled ? '60px' : '70px'
      }}
    >
      <div
        className="absolute inset-0 backdrop-blur-lg transition-opacity duration-300"
        style={{
          opacity: opacity,
          backgroundColor: `rgba(255, 255, 255, ${opacity})`
        }}
      ></div>

      <div className="relative h-full max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        <a href="/" className="z-10">
          <h1 className="text-2xl font-semibold tracking-tight">Yash Pandya</h1>
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-sm font-medium">
            <li><a href="#projects" className="hover:text-primary transition-colors duration-200">Projects</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors duration-200">Skills</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors duration-200">Experience</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors duration-200">About</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a></li>
          </ul>
        </nav>

        <button
          className="z-10 md:hidden focus:outline-none relative"
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

      </div>
    </header>
  );
};

export default Header;
