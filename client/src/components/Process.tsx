import { motion } from "framer-motion";

// Experience data from Yash's resume
const experiences = [
  {
    period: "Jan 2026 - Present",
    title: "Lead AI Engineer",
    company: "DigiColab",
    location: "London, England",
    description: "Leading AI engineering on an enterprise software-modernisation product.",
    achievements: [
      "Leading development of an AI-assisted platform that turns complex legacy codebases into clear dependency graphs, lineage maps and documentation",
      "Delivered the reverse-engineering and end-to-end lineage stages; now leading the forward-engineering phase onto modern architecture",
      "Built a GPT-4o chat and RAG search layer so teams can question their code and project documents and get answers backed by sources",
      "Set up separate Azure development and live environments, with plug-and-play onboarding on standard services such as PostgreSQL and Blob Storage"
    ]
  },
  {
    period: "Jul 2025 - Present",
    title: "Chief Technology Officer (Part-Time)",
    company: "omniPA.ai",
    location: "London, England",
    description: "Leading technology for OmniPA, an AI personal assistant and \"Life OS\".",
    achievements: [
      "Built the core bridge connecting AI models to private data stores (RAG), so answers are grounded in the user's own information",
      "Designed the internal engine in Python (FastAPI) to handle thousands of concurrent tasks without slowing down",
      "Set up the AWS cloud infrastructure so every layer, from database to AI, communicates securely",
      "Lead the development squad turning customer needs into simple, working features"
    ]
  },
  {
    period: "Mar 2023 - Jun 2025",
    title: "IT Technical Consultant",
    company: "Acorn Fertility",
    location: "London, England",
    description: "Healthcare AI, integration and data reliability.",
    achievements: [
      "Built an AI-powered tool that helps clinicians predict treatment success with 85% accuracy, owning it from code to live clinic use",
      "Created bridge software that lets modern AI tools safely pull data from sensitive medical databases without modern APIs",
      "Automated record cleaning and organisation so data is always ready for high-stakes clinical reporting"
    ]
  },
  {
    period: "Sep 2021 - Oct 2022",
    title: "IT Data Analyst",
    company: "The Hospital Fertility Group",
    location: "London, England",
    description: "Data quality and automation in a clinical setting.",
    achievements: [
      "Built a Python alerting system that automatically spots errors in lab results, reducing human mistakes by 30%",
      "Turned large volumes of messy records into clean, visual dashboards that managers use to run the hospital"
    ]
  },
  {
    period: "Jan 2019 - Aug 2021",
    title: "Developer",
    company: "Tata Consultancy Services",
    location: "Gujarat, India",
    description: "Automation, legacy integration and cloud migration.",
    achievements: [
      "Built Selenium bots that handle manual data entry into legacy systems with no modern connection points",
      "Migrated the company's key data from on-premise storage to AWS",
      "Created a recommendation tool that helped the sales team grow results by 18% through data-led targeting"
    ]
  }
];

// Apple-style Timeline component
const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  return (
    <motion.div 
      className="mb-12 lg:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          {/* Company and period in Apple style */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <div className="text-primary font-medium">{experience.company}</div>
            </div>
            <div className="text-sm text-gray-500 mt-1 lg:mt-0">{experience.period}</div>
          </div>
          
          <div className="mb-2 text-sm text-gray-600">{experience.location}</div>
          <p className="mb-4 text-gray-700">{experience.description}</p>
          
          {/* Key achievements */}
          <div className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-sm text-gray-600">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Apple-style Experience timeline section
const Process = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Apple-style heading */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            CAREER PATH
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Over 5 years across healthcare, enterprise and start-ups, moving from data engineering to leading AI platforms.
          </motion.p>
        </div>
        
        {/* Timeline visualization - Apple style */}
        <div className="hidden lg:flex justify-center mb-12">
          <div className="relative w-3/4">
            <div className="absolute left-0 top-4 right-0 h-1 bg-gray-200 rounded-full"></div>
            {experiences.map((_, idx) => (
              <motion.div 
                key={idx}
                className="absolute h-3 w-3 rounded-full bg-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + (idx * 0.1) }}
                style={{ left: `${idx * (100 / (experiences.length - 1))}%`, top: '0.5rem', marginLeft: '-6px' }}
              ></motion.div>
            ))}
          </div>
        </div>
        
        {/* Experience cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
        
        {/* Education in Apple style */}
        <motion.div 
          className="mt-20 bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-medium text-lg">Masters of Data Science in Artificial Intelligence</h4>
              <p className="text-primary">Bournemouth University</p>
              <p className="text-sm text-gray-500 mt-1">Sep 2021 - Jan 2023</p>
              <p className="text-sm text-gray-500">Bournemouth, England</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-medium text-lg">Bachelor of Technology in Computer Engineering</h4>
              <p className="text-primary">Ganpat University</p>
              <p className="text-sm text-gray-500 mt-1">Sep 2015 - Sep 2018</p>
              <p className="text-sm text-gray-500">Gujarat, India</p>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mt-8">
            <h4 className="font-medium mb-4 text-center">Certifications</h4>
            <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
              <div className="flex-none px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm shadow-sm">
                <p className="font-medium">Palantir Foundry &amp; AIP Builder Foundations</p>
                <p className="text-xs text-gray-500">Badge</p>
              </div>
              <div className="flex-none px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm shadow-sm">
                <p className="font-medium">Databricks Fundamentals</p>
                <p className="text-xs text-gray-500">Certified</p>
              </div>
              <div className="flex-none px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm shadow-sm">
                <p className="font-medium">Dataiku Advanced Designer</p>
                <p className="text-xs text-gray-500">Mar 2024</p>
              </div>
              <div className="flex-none px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm shadow-sm">
                <p className="font-medium">Dataiku Developer</p>
                <p className="text-xs text-gray-500">Mar 2024</p>
              </div>
              <div className="flex-none px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm shadow-sm">
                <p className="font-medium">Dataiku ML Practitioner</p>
                <p className="text-xs text-gray-500">Mar 2024</p>
              </div>
              <div className="flex-none px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm shadow-sm">
                <p className="font-medium">Microsoft Data Science Associate</p>
                <p className="text-xs text-gray-500">Dec 2023</p>
              </div>
              <div className="flex-none px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm shadow-sm">
                <p className="font-medium">Automation Anywhere RPA Professional</p>
                <p className="text-xs text-gray-500">Dec 2021</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
