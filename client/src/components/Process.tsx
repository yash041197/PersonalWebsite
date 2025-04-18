import { motion } from "framer-motion";

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "We start by immersing ourselves in your world—learning about your business, industry, audience, and aspirations. This research forms the foundation for our strategic approach."
  },
  {
    number: "2",
    title: "Strategy",
    description: "Based on our research findings, we develop a clear strategic direction that aligns with your business goals and resonates with your target audience."
  },
  {
    number: "3",
    title: "Design",
    description: "We transform strategy into compelling visual narratives and experiences that bring your brand to life across various touchpoints."
  },
  {
    number: "4",
    title: "Implementation",
    description: "We guide the launch of your new brand or digital experience, ensuring consistent application and providing the tools needed for ongoing management."
  }
];

const Process = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Process
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Creative design process" 
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
          
          <div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <h3 className="text-2xl font-semibold mb-3">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-lg">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
