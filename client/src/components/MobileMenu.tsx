import { useState, useEffect } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleToggleMobileMenu = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.isOpen !== undefined) {
        setIsOpen(customEvent.detail.isOpen);
      }
    };
    
    window.addEventListener('toggleMobileMenu', handleToggleMobileMenu);
    
    return () => {
      window.removeEventListener('toggleMobileMenu', handleToggleMobileMenu);
    };
  }, []);
  
  const closeMobileMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };
  
  return (
    <div className={`fixed inset-0 bg-primary text-white md:hidden z-50 transition-transform duration-500 ease-in-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="p-6">
        <div className="flex justify-end mb-10">
          <button 
            className="focus:outline-none" 
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            <span className="block w-6 h-0.5 bg-white transform rotate-45 translate-y-0.5"></span>
            <span className="block w-6 h-0.5 bg-white transform -rotate-45 -translate-y-0"></span>
          </button>
        </div>
        
        <nav>
          <ul className="flex flex-col space-y-10 text-2xl">
            <li><a href="#projects" onClick={closeMobileMenu} className="block py-2">Projects</a></li>
            <li><a href="#services" onClick={closeMobileMenu} className="block py-2">Services</a></li>
            <li><a href="#about" onClick={closeMobileMenu} className="block py-2">About</a></li>
            <li><a href="#contact" onClick={closeMobileMenu} className="block py-2">Contact</a></li>
          </ul>
        </nav>
        
        <div className="mt-20">
          <p className="text-sm opacity-70 mb-4">Get in touch</p>
          <a href="mailto:hello@avenues.life" className="block text-xl hover:text-accent transition">hello@avenues.life</a>
        </div>
        
        <div className="mt-16">
          <div className="flex space-x-6">
            <a href="#" aria-label="Instagram" className="text-white hover:text-accent transition">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-accent transition">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
