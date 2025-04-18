import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // Fix the hydration warning by setting layoutEffect to false and not using a target
    layoutEffect: false,
    offset: ["start start", "end end"],
    container: typeof window !== 'undefined' ? window.document : undefined
  });

  // Transform values for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0.3]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ position: 'fixed' }}>
      {/* Apple-style gradient circles */}
      <motion.div 
        className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-50 to-blue-200 blur-3xl"
        style={{ y: y1, opacity, position: 'absolute' }}
      />
      <motion.div 
        className="absolute top-[30%] -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-50 to-blue-200 blur-3xl"
        style={{ y: y2, opacity, position: 'absolute' }}
      />
      <motion.div 
        className="absolute -bottom-[300px] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-gray-50 to-blue-100 blur-3xl"
        style={{ y: y3, opacity, position: 'absolute' }}
      />
      
      {/* Grid pattern overlay with Apple-like aesthetic */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGZhZmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZjBmNGY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-[0.03]" style={{ position: 'absolute' }} />
      
      {/* Apple-style subtle floating particles */}
      <div className="absolute inset-0" style={{ position: 'absolute' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-100"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              position: 'absolute',
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [0, Math.random() * -30 - 10],
              opacity: [0, 0.5, 0],
              scale: [0, Math.random() * 0.5 + 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;