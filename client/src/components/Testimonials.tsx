import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Avenues transformed our brand with a thoughtful strategy and beautiful design system that truly captures our essence. The team's collaborative approach made the process enjoyable and insightful.",
    author: "Alexandra Martin",
    position: "Founder, Lume Beauty"
  },
  {
    quote: "Working with Avenues has been transformative for our business. They didn't just create a website; they crafted a digital experience that tells our story and connects with our customers on a deeper level.",
    author: "Jonathan Chen",
    position: "CEO, Monolith Architecture"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Love
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <p className="text-xl md:text-2xl italic mb-10">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="opacity-70">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
