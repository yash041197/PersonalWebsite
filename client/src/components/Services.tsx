import { motion } from "framer-motion";

// Skill data based on Yash's resume
const skillData = [
  {
    title: "Data Analysis & ML",
    icon: "🧠",
    description: "Expertise in transforming raw data into actionable insights using advanced statistical methods and machine learning techniques.",
    skills: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "Statistical Analysis & Modeling",
      "Machine Learning & Predictive Analytics",
      "Data Cleaning & Transformation"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    icon: "☁️",
    description: "Experience with cloud platforms and infrastructure setup to optimize data processing pipelines and applications.",
    skills: [
      "Azure Databricks",
      "AWS (Lambda, S3, API Gateway)",
      "CI/CD Pipeline Implementation",
      "Cloud Migration & Optimization"
    ]
  },
  {
    title: "Data Visualization",
    icon: "📊",
    description: "Creating compelling data visualizations that communicate complex information in intuitive and accessible ways.",
    skills: [
      "PowerBI Dashboard Development",
      "Tableau Visualization",
      "QlikSense",
      "Custom Visual Reporting Solutions"
    ]
  },
  {
    title: "Programming & Automation",
    icon: "💻",
    description: "Building automated solutions and implementing advanced programming techniques to streamline processes.",
    skills: [
      "Python, SQL, Java, JavaScript",
      "Process Automation with Selenium",
      "ETL Pipeline Development",
      "Web Scraping & Data Retrieval"
    ]
  }
];

// Apple-style skill card with icon
const SkillCard = ({ skill, index }: { skill: typeof skillData[0], index: number }) => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* Large emoji icon - Apple style */}
      <div className="absolute -right-5 -top-5 text-6xl opacity-10">
        {skill.icon}
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
        <p className="text-gray-600 mb-6">{skill.description}</p>
        
        <ul className="space-y-3">
          {skill.skills.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className="text-primary mr-2 text-lg">•</span>
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Apple-style Skills section
const Services = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Apple-style heading */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            EXPERTISE
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With over 5 years of experience, I've developed expertise across various domains of data science and technology.
          </motion.p>
        </div>
        
        {/* Apple-style grid layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Apple-style call-to-action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#experience" 
            className="inline-flex items-center text-primary hover:underline"
          >
            <span>View my work experience</span>
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
