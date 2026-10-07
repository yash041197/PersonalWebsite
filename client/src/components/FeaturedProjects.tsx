import { motion } from "framer-motion";
import useTouchInteractions from "@/hooks/use-touch-interactions";
import { useState } from "react";

import omnipaImage from "../assets/omnipa.webp";
import modernisationImage from "../assets/modernisation.svg";

// Selected work. Client engagements are described at a high level only.
const projects = [
  {
    id: 1,
    title: "AI-Driven Legacy Modernisation Platform",
    category: "Python, FastAPI, GPT-4o, RAG, Azure, PostgreSQL",
    description: "An enterprise platform that reads complex legacy codebases, recovers the business logic buried inside them and helps teams carry it forward onto modern architecture without losing what the old system actually did.",
    features: [
      "Reverse engineering complete: parsed source becomes clear dependency graphs, end-to-end data lineage and documentation",
      "Now in forward engineering, generating modern equivalents directly from the parsed logic",
      "AI chat with RAG search, so teams can question their code and get answers backed by real sources",
      "Isolated dev and live environments on Azure, with plug-and-play onboarding on standard services"
    ],
    image: modernisationImage,
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "OmniPA: AI Life OS",
    category: "Python, FastAPI, RAG, AWS, React Native",
    description: "A personal AI assistant that brings email, schedule, shopping, travel and reminders into one conversational app. It understands your context and turns it into actions.",
    features: [
      "Inbox intelligence that surfaces action items from email for one-tap Add or Skip",
      "OmniChat: natural-language reminders and plans with push notifications",
      "Shopping lists created from a photo; travel goals with budget, dates and deal search",
      "Privacy-first permissions: emotion capture stores labels only, never images"
    ],
    image: omnipaImage,
    link: "https://omnipa.ai",
    color: "from-teal-400 to-cyan-600"
  },
  {
    id: 3,
    title: "Clinical Outcome Prediction",
    category: "Python, Machine Learning, Healthcare Integration",
    description: "An AI-powered tool that helps clinicians predict treatment success, taken from first line of code to live use in the clinic.",
    features: [
      "85% prediction accuracy on treatment outcomes",
      "Bridge software to pull data safely from sensitive databases without modern APIs",
      "Automated data cleaning so records are always ready for clinical reporting"
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 4,
    title: "Lab Result Error Detection",
    category: "Python, Automation, Dashboards",
    description: "An automated alerting system that spots errors in lab results before they reach patients, plus dashboards that turned messy records into decisions.",
    features: [
      "Reduced human mistakes in lab testing by 30%",
      "Clean, visual dashboards used by managers to run the hospital",
      "Built for highly regulated healthcare data"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    color: "from-purple-400 to-blue-500"
  },
  {
    id: 5,
    title: "Embryo Assessment Algorithm",
    category: "Python, TensorFlow, PyTorch, CNNs",
    description: "A deep-learning model that assesses time-lapse images of an embryo's life cycle, using neural network architectures for accurate classification.",
    features: [
      "Implemented VGG and Inception CNN architectures",
      "Trained team members on data quality standards",
      "Improved embryo classification accuracy"
    ],
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    color: "from-red-400 to-orange-500"
  },
  {
    id: 6,
    title: "Legacy Bots & Cloud Migration",
    category: "Python, Selenium, AWS",
    description: "Robot programs that did manual data entry into legacy systems with no modern connection points, plus a migration of key company data from on-premise storage to AWS.",
    features: [
      "Selenium bots with robust error handling and logging",
      "On-premise to AWS migration for a faster, modern business",
      "Recommendation tool that lifted sales results by 18%"
    ],
    image: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
    color: "from-sky-400 to-blue-600"
  }
];

// Enhanced Apple-style project card with mobile-responsive touch interactions
const ProjectCard = ({ project, index }: { project: (typeof projects)[number] & { link?: string }, index: number }) => {
  // State for modal preview (for mobile touch)
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Use our custom touch hook for the card
  const {
    ref: cardRef,
    style: cardStyle,
    handlers: cardHandlers
  } = useTouchInteractions<HTMLDivElement>({
    hoverScale: 1.02,
    tapScale: 0.98,
    enableTilt: true,
    maxTilt: 5
  });
  
  // Use custom touch hook for the "view" button
  const {
    ref: buttonRef,
    style: buttonStyle,
    handlers: buttonHandlers
  } = useTouchInteractions<HTMLDivElement>({
    hoverScale: 1.1,
    tapScale: 0.9,
    enableTilt: false
  });
  
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.32, 0.72, 0, 1] // Apple-style easing
      }}
    >
      {/* Apple-style card with 3D tilt effect on mobile */}
      <div
        ref={cardRef}
        style={cardStyle}
        className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md touch-manipulation"
        {...cardHandlers}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Image with overlay animation on hover and touch */}
        <div className="aspect-video overflow-hidden relative">
          {/* Optimized image loading with width/height for Core Web Vitals */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105"
            width="800"
            height="450"
            loading="lazy"
          />
          
          {/* Gradient overlay - active on hover/touch */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
          
          {/* Interactive view button - animated on hover/touch */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div 
              ref={buttonRef}
              style={buttonStyle}
              className="bg-white/80 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-colors duration-200"
              {...buttonHandlers}
              onClick={(e) => {
                e.stopPropagation(); 
                setIsExpanded(true);
              }}
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          
          {/* iOS-style indicator for mobile users */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center md:hidden">
            <motion.div 
              className="w-10 h-1 bg-white/50 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5 }}
            />
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          {/* Animated category tag with better touch target */}
          <motion.div 
            className="mb-4 inline-block" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs font-medium text-primary bg-blue-50 rounded-full py-1 px-3 inline-block">
              {project.category}
            </span>
          </motion.div>
          
          {/* Title with responsive sizing */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          
          {/* Description with improved mobile readability */}
          <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>
          
          {/* Features with animated bullets */}
          <div className="space-y-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <motion.span 
                  className="text-primary mr-2 select-none"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  •
                </motion.span>
                <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Apple-style "Learn More" button with improved touch target */}
          {project.link && (
          <motion.div 
            className="mt-6 flex justify-end"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (index * 0.1) }}
          >
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-primary inline-flex items-center transition-colors hover:text-blue-700 p-1 -m-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1">Visit site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
          )}
        </div>
        
        {/* Apple-style touch feedback indicator */}
        <motion.div 
          className="absolute inset-0 bg-gray-900/5 pointer-events-none"
          initial={{ opacity: 0 }}
          whileTap={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      
      {/* Apple-style modal preview (appears on mobile when expanded) - would be fully implemented for production */}
      {isExpanded && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsExpanded(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          <motion.div 
            className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-xl"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Preview image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full aspect-video object-cover"
            />
            
            {/* Project details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              {/* Features */}
              <div className="space-y-2 mb-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button 
                className="w-full py-3 bg-primary text-white rounded-full font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Apple-style section with heading design
const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Apple-style heading with subtitle */}
        <div className="mb-16 text-center">
          <motion.p 
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            FEATURED WORK
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Selected Work
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI platforms, modernisation and healthcare systems I've designed and led, from start-up products to enterprise engagements.
          </motion.p>
        </div>
        
        {/* Apple-style grid layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Apple-style message about dashboards */}
        <motion.div 
          className="mt-20 p-8 bg-gray-50 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Want the deeper story?</h3>
          <p className="text-gray-600 mb-6">
            Some of this work is under client confidentiality, so it is described at a high level here.
            I'm happy to walk through the architecture, decisions and outcomes in a conversation.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors duration-300"
          >
            Request a Walkthrough
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
