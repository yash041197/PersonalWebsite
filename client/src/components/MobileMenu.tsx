// In your MobileMenu.tsx file:

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useDragControls, PanInfo } from "framer-motion";

// Enhanced mobile menu with touch features for an Apple-like experience
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  
  useEffect(() => {
    const handleToggleMobileMenu = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.isOpen !== undefined) {
        setIsOpen(customEvent.detail.isOpen);
      }
    };
    
    window.addEventListener('toggleMobileMenu', handleToggleMobileMenu);
    
    // Handle touch events outside the menu
    const handleTouchOutside = (e: TouchEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMobileMenu();
      }
    };
    
    document.addEventListener('touchend', handleTouchOutside);
    
    return () => {
      window.removeEventListener('toggleMobileMenu', handleToggleMobileMenu);
      document.removeEventListener('touchend', handleTouchOutside);
    };
  }, [isOpen]);
  
  // Handle touch gestures - swipe down to close
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100) {
      closeMobileMenu();
    }
  };
  
  const closeMobileMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    // IMPORTANT: Dispatch event to tell Header to close too
    window.dispatchEvent(new CustomEvent('toggleMobileMenu', { detail: { isOpen: false } }));
  };
  
  // Menu animation variants for Apple-like transition
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        ease: [0.32, 0.72, 0, 1] // Apple-style easing
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
        ease: [0.32, 0.72, 0, 1] // Apple-style easing
      }
    }
  };

  const itemVariants = {
    closed: { 
      opacity: 0, 
      y: -15, // Adjusted from 10 to -15 for smoother slide-in from top
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1] // Apple-style easing
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1] // Apple-style easing
      }
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 md:hidden z-40" // Adjust z-index if Header is z-50 to ensure MobileMenu is below it
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Apple-style blurred backdrop with touch feedback */}
          <motion.div 
            className="absolute inset-0 backdrop-blur-lg bg-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu} // This is good for tapping outside
           />
          
          {/* Swipe indicator at the top - Apple style */}
          {/* Ensure this is styled to be visible *above* the menu content, but not clickable */}
          <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
            <div className="w-12 h-1 bg-gray-300 rounded-full opacity-70"></div>
          </div>
          
          {/* Mobile menu content with drag-to-close functionality */}
          <motion.div 
            ref={menuRef}
            className="relative h-full pt-20 px-8 pb-8 flex flex-col z-50" // z-50 for content within z-40 parent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.32, 0.72, 0, 1] // Apple-style easing
            }}
            drag="y"
            dragDirectionLock
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
          >
            {/* REMOVE THIS SECTION: No internal 'X' button here */}
            {/*
            <div className="flex justify-end mb-12">
              <button 
                className="text-gray-800 focus:outline-none" 
                aria-label="Close menu"
                onClick={closeMobileMenu}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            */}
      
            {/* Menu items with Apple-style staggered animation */}
            <motion.nav 
              className="flex-1"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="flex flex-col space-y-6 text-2xl font-light">
                {/* Keep these links as they are */}
                <motion.li variants={itemVariants}>
                  <a 
                    href="#projects" 
                    onClick={closeMobileMenu} // Still close menu when clicking a link
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a 
                    href="#skills" 
                    onClick={closeMobileMenu} 
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                  >
                    Skills
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a 
                    href="#experience" 
                    onClick={closeMobileMenu} 
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a 
                    href="#about" 
                    onClick={closeMobileMenu} 
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a 
                    href="#contact" 
                    onClick={closeMobileMenu} 
                    className="block py-2 text-gray-800 hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
            
            {/* Contact and social info - Apple style */}
            <motion.div 
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm font-medium text-gray-500 mb-3">Get in touch</p>
              
              <a 
                href="mailto:yashpandya0411@gmail.com" 
                className="block text-lg text-primary hover:underline mb-6"
              >
                yashpandya0411@gmail.com
              </a>
              
              <div className="flex space-x-5">
                <a 
                  href="https://linkedin.com/in/yash-pandya-data" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/yash041197" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;