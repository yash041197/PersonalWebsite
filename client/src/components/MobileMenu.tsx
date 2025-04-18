import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  
  // Menu animation variants for Apple-like transition
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 md:hidden z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Apple-style blurred backdrop */}
          <div className="absolute inset-0 backdrop-blur-lg bg-white/90"></div>
          
          {/* Mobile menu content */}
          <motion.div 
            className="relative h-full p-8 flex flex-col z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
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
            
            {/* Menu items with Apple-style staggered animation */}
            <motion.nav 
              className="flex-1"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="flex flex-col space-y-6 text-2xl font-light">
                <motion.li variants={itemVariants}>
                  <a 
                    href="#projects" 
                    onClick={closeMobileMenu} 
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
