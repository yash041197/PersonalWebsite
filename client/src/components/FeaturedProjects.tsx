import { motion } from "framer-motion";

// Project data based on the resume
const projects = [
  {
    id: 1,
    title: "Automated Web Scraping",
    category: "Python, Selenium, Pandas, NumPy",
    description: "Developed fully functional automatic bots using Python and Selenium to perform download operations from websites, streamlining data retrieval processes and enhancing efficiency.",
    features: [
      "Implemented error handling mechanisms with robust logging",
      "Created customized bot behavior for different website structures",
      "Automated AWS data pipeline using Python"
    ],
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
  },
  {
    id: 2,
    title: "Cloud Migration to AWS",
    category: "Python, AWS Lambda, FastAPI, Gateway",
    description: "Implemented cloud-based solutions to optimize application performance, enhancing responsiveness and ensuring a robust user experience across development, testing, and production environments.",
    features: [
      "Utilized AWS API Gateway for secure API management",
      "Deployed Lambda functions with CI/CD pipelines",
      "Optimized critical processes in the application lifecycle"
    ],
    image: "https://images.unsplash.com/photo-1560732488-7b5f4d54f4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
  },
  {
    id: 3,
    title: "Data Pipeline Optimization",
    category: "Python, Azure, Databricks",
    description: "Developed and optimized data processing pipelines on Azure Databricks, ensuring adherence to quality standards for real-time reporting and data transformation processes.",
    features: [
      "Documented test results and issues with Jira",
      "Improved data processing speed by 30%",
      "Enhanced communication between business teams and developers"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
  },
  {
    id: 4,
    title: "Embryo Assessment Algorithm",
    category: "Python, TensorFlow, Neural Networks, PyTorch",
    description: "Developed an algorithm using Python and AI to assess time-lapse images of an embryo's life cycle, utilizing advanced neural network models for accurate classification.",
    features: [
      "Implemented VGG and Inception CNN architecture",
      "Provided training to team members on data quality standards",
      "Enhanced embryo classification accuracy"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
  }
];

// Apple-style project card with gradient hover effect
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
        
        <div className="p-6 md:p-8">
          <div className="mb-4">
            <span className="text-xs font-medium text-primary bg-blue-50 rounded-full py-1 px-2">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="space-y-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
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
            Projects & Dashboards
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of my data science and machine learning projects. You can also view the dashboards I've created for various use cases.
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
          <h3 className="text-2xl font-semibold mb-4">Want to see my dashboard designs?</h3>
          <p className="text-gray-600 mb-6">
            I've created various data visualization dashboards using PowerBI, Tableau, and custom solutions.
            Contact me to learn more about these projects.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors duration-300"
          >
            Request Dashboard Examples
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
