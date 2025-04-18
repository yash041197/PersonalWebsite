import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  // Use client-side only code with useEffect to avoid hydration issues
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Use refs for stable values across renders
  const particleData = useRef<Array<{
    left: number;
    top: number;
    scale: number;
    yTravel: number;
    duration: number;
    delay: number;
  }>>([]);

  // Initialize particle data only once after component mounts
  useEffect(() => {
    if (particleData.current.length === 0) {
      particleData.current = Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.5,
        yTravel: Math.random() * -30 - 10,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5
      }));
    }
    
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);
  
  // Calculate scroll values only when mounted
  const scrollValues = useRef({
    y1: 0,
    y2: 0, 
    y3: 0,
    bgOpacity: 1
  });
  
  if (mounted) {
    const maxScroll = document.body.scrollHeight - window.innerHeight || 1000;
    const scrollProgress = Math.min(scrollY / maxScroll, 1);
    
    scrollValues.current = {
      y1: -scrollProgress * 100,
      y2: -scrollProgress * 200,
      y3: -scrollProgress * 150,
      bgOpacity: 1 - (scrollProgress * 0.7)
    };
  }
  
  // Destructure for cleaner JSX
  const { y1, y2, y3, bgOpacity } = scrollValues.current;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Apple-style gradient circles */}
      <div 
        className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-50 to-blue-200 blur-3xl"
        style={{ 
          transform: `translateY(${y1}px)`, 
          opacity: bgOpacity,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute top-[30%] -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-50 to-blue-200 blur-3xl"
        style={{ 
          transform: `translateY(${y2}px)`, 
          opacity: bgOpacity,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute -bottom-[300px] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-gray-50 to-blue-100 blur-3xl"
        style={{ 
          transform: `translateY(${y3}px)`, 
          opacity: bgOpacity,
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Grid pattern overlay with Apple-like aesthetic */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGZhZmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZjBmNGY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-[0.03]" />
      
      {/* Apple-style subtle floating particles - only render when mounted */}
      {mounted && (
        <div className="absolute inset-0">
          {particleData.current.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-100"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`
              }}
              animate={{
                y: [0, particle.yTravel],
                opacity: [0, 0.5, 0],
                scale: [0, particle.scale, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundAnimation;