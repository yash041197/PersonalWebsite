import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import myimage from "../assets/yash.jpg";

// Skills with icons
const skills = [
  {
    name: "AI Platforms",
    icon: "🧠",
    description: "Building the \"internal brain\" of products: RAG, LLM integration and AI that works on real-world data."
  },
  {
    name: "Modernisation",
    icon: "🔁",
    description: "Making legacy systems understandable, mapping their logic and lineage, and carrying them onto modern stacks."
  },
  {
    name: "Cloud & Reliability",
    icon: "☁️",
    description: "Secure, highly available systems on Azure and AWS with clean separation between build and live."
  },
  {
    name: "Technical Leadership",
    icon: "🧭",
    description: "Leading squads that turn customer needs into simple, dependable features."
  }
];


  

// Apple-style interactive skill card with parallax effect
const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax animation values
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative"
    >
      <motion.div 
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden relative h-full"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
        style={{ y, opacity }}
      >
        <div className="text-4xl mb-4">{skill.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
        <p className="text-gray-600">{skill.description}</p>
      </motion.div>
    </motion.div>
  );
};

// Apple-style horizontally scrolling timeline for achievements
const achievements = [
  { year: "2019", title: "Started Career", description: "Developer at Tata Consultancy Services: automation bots and AWS migration" },
  { year: "2021", title: "Healthcare Data", description: "Joined The Hospital Fertility Group; began Master's at Bournemouth University" },
  { year: "2023", title: "MSc in AI", description: "Graduated in Data Science & AI; joined Acorn Fertility building clinical AI tools" },
  { year: "2025", title: "CTO, omniPA.ai", description: "Leading technology for an AI personal assistant and Life OS platform" },
  { year: "2026", title: "Lead AI Engineer", description: "Leading AI-driven legacy modernisation at DigiColab" }
];

// Apple-style About section with scroll animations
const About = () => {
  // Ref for the entire section to create scroll-based animations
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef,
    offset: ["start end", "end start"] 
  });
  
  // Smooth spring animation
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.9, 1]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax effect for images
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Apple-style heading */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            MY BACKGROUND
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ scale }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An AI Systems & Platform Engineer who turns messy, manual processes into smart, automated systems.
          </motion.p>
        </div>
        
        {/* Two-column layout with Apple-style design */}
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left column with profile image and parallax effect */}
          
          <motion.div
            className="relative overflow-hidden rounded-2xl aspect-square"
            style={{ y: imageY }}
          >
            <img 
             // src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              src = {myimage} 
              alt="Yash Pandya - AI Systems & Platform Engineer" 
              className="w-full h-full object-cover rounded-2xl"
              width="600"
              height="600"
              loading="lazy"
            />
            {/* Apple-style gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
          </motion.div>
          
          {/* Right column with bio information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-700 mb-4">
                I build the workflows and automation layers that let AI work safely with real-world data. My journey began at Tata Consultancy Services, writing bots for legacy systems and moving data to the cloud. That work taught me how much value is locked inside old software.
              </p>
              <p className="text-gray-700 mb-4">
                After a Master's in Data Science and AI at Bournemouth University, I spent several years in healthcare, building clinical AI tools and the bridge software that connects them to sensitive, API-less databases.
              </p>
              <p className="text-gray-700">
                Today I lead AI engineering on enterprise legacy modernisation and serve as part-time CTO of omniPA.ai. Both are Python and RAG platforms built for organisations where accuracy, privacy and compliance are not optional.
              </p>
            </motion.div>
            
            {/* Apple-style statistics with counter animation */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <motion.div 
                  className="text-3xl font-semibold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <motion.div 
                  className="text-3xl font-semibold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  2
                </motion.div>
                <div className="text-sm text-gray-500">Leadership Roles</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <motion.div 
                  className="text-3xl font-semibold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  7
                </motion.div>
                <div className="text-sm text-gray-500">Certifications</div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Skills Section with Apple-style scroll animations */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-semibold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Core Competencies
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
        
        {/* Apple-style horizontal timeline */}
        <motion.div 
          className="mb-12 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-gray-200"></div>
            
            {/* Timeline items with horizontal scroll */}
            <div className="flex overflow-x-auto pb-10 no-scrollbar space-x-16 relative">
              {achievements.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex-none w-64"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Year bubble */}
                    <div className="z-10 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mb-4 font-bold">
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Apple-style call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 px-6 py-3 text-sm font-medium text-gray-900 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
