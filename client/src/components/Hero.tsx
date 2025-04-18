import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-12 md:pt-28 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="font-bold text-4xl md:text-7xl leading-tight md:leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Brand agency focused on creating meaningful experiences through thoughtful design.
        </motion.h2>
        
        <motion.div 
          className="mt-10 md:mt-16 grid md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <p className="text-sm text-neutral-900 uppercase tracking-wide mb-3">Based in</p>
            <p className="text-lg">San Francisco, CA</p>
          </div>
          
          <div>
            <p className="text-sm text-neutral-900 uppercase tracking-wide mb-3">Working with</p>
            <p className="text-lg">Ambitious brands looking to make an impact</p>
          </div>
          
          <div>
            <p className="text-sm text-neutral-900 uppercase tracking-wide mb-3">Expertise</p>
            <p className="text-lg">Brand Strategy, Visual Identity, Digital Design</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
