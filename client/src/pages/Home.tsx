import { useEffect } from "react";
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

const Home = () => {
  useEffect(() => {
    // Update document title
    document.title = "Avenues Life - Brand Agency";
    
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
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <>
      <CustomCursor />
      <Header />
      <MobileMenu />
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <Services />
      <Process />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
