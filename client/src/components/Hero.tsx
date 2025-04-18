import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Apple-like two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left column - Text content */}
          <div>
            <motion.h1 
              className="text-sm font-semibold text-primary mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Yash Pandya — Data Scientist
            </motion.h1>
            
            <motion.h2 
              className="font-semibold text-4xl md:text-6xl leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Transforming data into impactful solutions
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Data Scientist with 5+ years of experience developing research datasets and 
              machine learning models that deliver business impact.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors duration-300"
              >
                Get in touch
              </a>
              
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors duration-300"
              >
                View projects
              </a>
            </motion.div>
          </div>
          
          {/* Right column - Statistics in Apple-style cards */}
          <motion.div 
            className="mt-10 md:mt-0 grid gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Experience</p>
                  <p className="text-3xl font-semibold">5+ Years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Projects</p>
                  <p className="text-3xl font-semibold">25+</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Certifications</p>
                  <p className="text-3xl font-semibold">5</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Technologies</p>
                  <p className="text-3xl font-semibold">15+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills section in Apple-style horizontal scroll */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Python</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">SQL</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Machine Learning</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Data Analysis</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Azure</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">AWS</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Pandas</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">TensorFlow</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">PySpark</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">PowerBI</div>
            <div className="flex-none px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">Tableau</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
