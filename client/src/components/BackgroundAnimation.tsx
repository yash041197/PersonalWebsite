import { useEffect, useRef } from "react";

// Simple version without any dependencies on framer-motion
const BackgroundAnimation = () => {
  const circleRefs = {
    circle1: useRef<HTMLDivElement>(null),
    circle2: useRef<HTMLDivElement>(null),
    circle3: useRef<HTMLDivElement>(null)
  };
  
  useEffect(() => {
    // Handle scroll for parallax effect
    const handleScroll = () => {
      if (!circleRefs.circle1.current || 
          !circleRefs.circle2.current || 
          !circleRefs.circle3.current) return;
          
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = height > 0 ? scrollY / height : 0;
      
      // Apply transforms with different speeds for each element
      const y1 = -scrollProgress * 100;
      const y2 = -scrollProgress * 200;
      const y3 = -scrollProgress * 150;
      const opacity = Math.max(0.3, 1 - scrollProgress * 0.7);
      
      // Apply the transforms
      circleRefs.circle1.current.style.transform = `translateY(${y1}px)`;
      circleRefs.circle2.current.style.transform = `translateY(${y2}px)`;
      circleRefs.circle3.current.style.transform = `translateY(${y3}px)`;
      
      // Apply opacity
      circleRefs.circle1.current.style.opacity = String(opacity);
      circleRefs.circle2.current.style.opacity = String(opacity);
      circleRefs.circle3.current.style.opacity = String(opacity);
    };
    
    // Throttled scroll handler for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Set initial positions
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Apple-style gradient circles */}
      <div 
        ref={circleRefs.circle1}
        className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-50 to-blue-200 blur-3xl transition-transform duration-200"
      />
      <div 
        ref={circleRefs.circle2}
        className="absolute top-[30%] -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-50 to-blue-200 blur-3xl transition-transform duration-200"
      />
      <div 
        ref={circleRefs.circle3}
        className="absolute -bottom-[300px] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-gray-50 to-blue-100 blur-3xl transition-transform duration-200"
      />
      
      {/* Grid pattern overlay with Apple-like aesthetic */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGZhZmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZjBmNGY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-[0.03]" />
    </div>
  );
};

export default BackgroundAnimation;