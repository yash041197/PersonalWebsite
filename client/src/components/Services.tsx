import { motion } from "framer-motion";

const serviceData = [
  {
    title: "Brand Strategy",
    description: "We help define your brand's positioning, messaging, and personality to create a strong foundation for all visual and verbal expressions.",
    services: [
      "Brand Positioning & Messaging",
      "Brand Architecture",
      "Research & Insights",
      "Competitive Analysis"
    ]
  },
  {
    title: "Visual Identity",
    description: "We create distinctive visual systems that express your brand's personality and values across all touchpoints.",
    services: [
      "Logo & Identity Design",
      "Visual Language Development",
      "Typography Systems",
      "Photography & Art Direction"
    ]
  },
  {
    title: "Digital Design",
    description: "We design digital experiences that engage and delight users while achieving your business objectives.",
    services: [
      "Website Design & Development",
      "E-commerce Experiences",
      "User Interface Design",
      "Digital Marketing Materials"
    ]
  },
  {
    title: "Motion & Experience",
    description: "We add dimension to brands through motion design and interaction that enhances storytelling.",
    services: [
      "Motion Identity",
      "Animation & Micro-interactions",
      "Video Production",
      "Interactive Experiences"
    ]
  }
];

const ServiceBlock = ({ service, index }: { service: typeof serviceData[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-lg">{service.description}</p>
      <ul className="mt-6 space-y-2">
        {service.services.map((item, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <p className="text-lg md:text-xl max-w-3xl mb-16">
            We offer strategic brand development and purposeful design services to help businesses connect with their audience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {serviceData.map((service, index) => (
            <ServiceBlock key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
