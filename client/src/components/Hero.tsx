import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Enhanced Hero section with mobile-responsive layout and touch interactions
const Hero = () => {
  // Animation controls for interactive elements
  const controls = useAnimation();
  const statsRef = useRef<HTMLDivElement>(null);
  
  // For touch-based interactions on mobile
  const [touchStartY, setTouchStartY] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  
  // Skills with consistent animations
  const skills = [
    "Python", "SQL", "Machine Learning", "Data Analysis", 
    "Azure", "AWS", "Pandas", "TensorFlow", "PySpark", 
    "PowerBI", "Tableau"
  ];
  
  // Touch event handlers for the stats card
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
    setIsTouching(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching || !statsRef.current) return;
    
    const touchDelta = e.touches[0].clientY - touchStartY;
    
    // Apply subtle tilt/rotation based on touch movement (Apple-style physics)
    if (Math.abs(touchDelta) < 50) {
      const rotateX = -touchDelta * 0.2; // Limit rotation angle
      statsRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg)`;
    }
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    // Reset the transform
    if (statsRef.current) {
      statsRef.current.style.transform = 'perspective(1000px) rotateX(0deg)';
      statsRef.current.style.transition = 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)';
    }
  };
  
  return (
    <section className="min-h-[100svh] pt-20 md:pt-32 pb-20 px-6 md:px-12 flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Apple-like adaptive layout - adjusts from stacked on mobile to two-columns on larger screens */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Text content - enhanced for better mobile readability */}
          <div>
            <motion.h1 
              className="text-sm md:text-base font-semibold text-primary mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
              Yash Pandya — Data Scientist
            </motion.h1>
            
            {/* Responsive text sizing for better mobile experience */}
            <motion.h2 
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 sm:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              Transforming data into impactful solutions
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            >
              Data Scientist with 5+ years of experience developing research datasets and 
              machine learning models that deliver business impact.
            </motion.p>
            
            {/* Touch-optimized buttons with proper spacing on mobile */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-medium text-white hover:bg-blue-600 active:bg-blue-700 transition-colors duration-300"
              >
                Get in touch
              </a>
              
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-full bg-gray-100 px-6 py-3.5 text-base font-medium text-gray-900 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-300"
              >
                View projects
              </a>
            </motion.div>
          </div>
          
          {/* Statistics card with touch interactivity (Apple-style) */}
          <motion.div 
            className="mt-8 md:mt-0 grid gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.div 
              ref={statsRef}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 transition-transform duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] }
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ 
                transformStyle: 'preserve-3d', 
                transition: 'transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
                willChange: 'transform'
              }}
            >
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-sm text-gray-500 mb-1 sm:mb-2">Experience</p>
                  <p className="text-2xl sm:text-3xl font-semibold">5+ Years</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-sm text-gray-500 mb-1 sm:mb-2">Projects</p>
                  <p className="text-2xl sm:text-3xl font-semibold">25+</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-sm text-gray-500 mb-1 sm:mb-2">Certifications</p>
                  <p className="text-2xl sm:text-3xl font-semibold">5</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-sm text-gray-500 mb-1 sm:mb-2">Technologies</p>
                  <p className="text-2xl sm:text-3xl font-semibold">15+</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Skills section with optimized touch scrolling */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* iOS-style horizontal scroll with momentum */}
          <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 -mx-6 px-6 no-scrollbar snap-x snap-mandatory scroll-smooth touch-pan-x">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill}
                className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium snap-start active:bg-gray-200 cursor-pointer select-none touch-manipulation"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(240, 240, 240, 1)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + (index * 0.05),
                  ease: [0.32, 0.72, 0, 1]
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator (Apple-style) */}
          <div className="hidden md:flex justify-center mt-4">
            <motion.div 
              className="w-12 h-1 bg-gray-200 rounded-full"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
