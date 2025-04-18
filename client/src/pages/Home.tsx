import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Home = () => {
  // Scroll progress for Apple-style scroll animations
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Update document title
    document.title = "Yash Pandya - Data Scientist Portfolio";
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          e.preventDefault();
          const element = document.querySelector(targetId);
          
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Preload images for better performance (Core Web Vitals optimization)
    const preloadImages = () => {
      const projectImages = [
        'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
        'https://images.unsplash.com/photo-1560732488-7b5f4d54f4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80'
      ];
      
      projectImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">
      {/* Apple-style scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Background animations */}
      <BackgroundAnimation />
      
      <CustomCursor />
      <Header />
      <MobileMenu />
      
      <main>
        <Hero />
        <Marquee />
        <FeaturedProjects />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
