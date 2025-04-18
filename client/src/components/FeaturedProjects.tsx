import { motion } from "framer-motion";

// Project data
const projects = [
  {
    id: 1,
    title: "Lucid Dreams",
    category: "Brand Identity",
    description: "A complete brand overhaul for a luxury wellness brand focused on sleep enhancement products. We created a sophisticated identity system that conveys tranquility and premium quality.",
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
  },
  {
    id: 2,
    title: "Monolith",
    category: "Website & Digital Experience",
    description: "A digital experience for an architectural firm that showcases their portfolio through immersive interactions and minimalist design, emphasizing the beauty of their structures.",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
  },
  {
    id: 3,
    title: "Lume Beauty",
    category: "Brand Identity & Packaging",
    description: "A comprehensive brand identity and packaging system for a clean beauty brand, focusing on sustainability and natural ingredients with a modern, minimalist aesthetic.",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div 
      className="project-card group mb-24 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <a href="#project-detail" className="block">
        <div className="overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[500px] object-cover transition duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-neutral-900">{project.category}</p>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-lg">{project.description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Selected Projects</h2>
        
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href="#all-projects" 
            className="inline-block px-8 py-4 border border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
