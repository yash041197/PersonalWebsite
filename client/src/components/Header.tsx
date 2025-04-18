import { useState } from "react";
import useScrollEffect from "@/hooks/useScrollEffect";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrollEffect({ threshold: 50 });
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Dispatch custom event for mobile menu component
    window.dispatchEvent(new CustomEvent('toggleMobileMenu', { 
      detail: { isOpen: !mobileMenuOpen } 
    }));
  };
  
  return (
    <header className={`sticky top-0 z-50 py-6 px-6 md:px-12 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="z-10">
          <h1 className="text-2xl font-bold">avenues.life</h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li><a href="#projects" className="nav-item hover-underline">Projects</a></li>
            <li><a href="#services" className="nav-item hover-underline">Services</a></li>
            <li><a href="#about" className="nav-item hover-underline">About</a></li>
            <li><a href="#contact" className="nav-item hover-underline">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="z-10 md:hidden focus:outline-none" 
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          <span className="block w-6 h-0.5 bg-primary mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-primary mb-1.5"></span>
          <span className="block w-6 h-0.5 bg-primary"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
