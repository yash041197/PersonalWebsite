import { motion } from "framer-motion";
import { Brain, ArrowsClockwise, Plugs, Cloud } from "@phosphor-icons/react";

const skillData = [
  {
    title: "Platform Backbone",
    icon: <Plugs size={28} weight="duotone" />,
    description: "Designing the core engines that keep AI platforms fast, reliable and easy to extend as they scale.",
    skills: [
      "Python (FastAPI, Async, Pydantic)",
      "API & Service Architecture",
      "Event-Driven Workflows & Task Queues",
      "PostgreSQL & Data Modelling"
    ]
  },
  {
    title: "Applied AI & RAG",
    icon: <Brain size={28} weight="duotone" />,
    description: "Connecting language models to an organisation's private knowledge so answers are accurate, grounded and traceable.",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "LLM Integration & Orchestration",
      "Agentic Workflow Automation",
      "Grounded Answers with Source Citations"
    ]
  },
  {
    title: "Legacy & Systems Integration",
    icon: <ArrowsClockwise size={28} weight="duotone" />,
    description: "Bridging old systems and modern AI, from understanding what legacy software really does to moving it forward safely.",
    skills: [
      "Legacy Code Analysis & Reverse Engineering",
      "Dependency & Data Lineage Mapping",
      "Integration Middleware & Automation Bots",
      "Modernisation onto Modern Architectures"
    ]
  },
  {
    title: "Cloud, Security & Regulated Data",
    icon: <Cloud size={28} weight="duotone" />,
    description: "Running platforms on Azure and AWS with the controls that healthcare and public-sector data demands.",
    skills: [
      "Azure & AWS Architecture",
      "Isolated Dev / Live Environments & CI/CD",
      "Healthcare & Public-Sector Data Governance",
      "High Availability & Monitoring"
    ]
  }
];

const SkillCard = ({ skill, index }: { skill: typeof skillData[0], index: number }) => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-8">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-5">
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
        <p className="text-gray-600 mb-6">{skill.description}</p>

        <ul className="space-y-3">
          {skill.skills.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className="text-primary mr-2 text-lg">&#8226;</span>
              <span className="text-sm text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Four areas I work across every day, from the backend engine to the AI layer and the cloud it runs on.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
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
