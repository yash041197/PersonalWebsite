import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // This would be replaced with an actual API call in a real application
      // In this demo, we're just simulating a successful submission
      console.log("Form submitted:", data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Create Something Meaningful</h2>
            <p className="text-lg mb-10">
              We're always interested in hearing about new projects and potential collaborations. Reach out to start a conversation about how we can help bring your brand vision to life.
            </p>
            
            <div className="mb-12">
              <p className="text-sm text-neutral-900 uppercase tracking-wide mb-3">Email</p>
              <a href="mailto:hello@avenues.life" className="text-xl hover:text-accent transition">hello@avenues.life</a>
            </div>
            
            <div>
              <p className="text-sm text-neutral-900 uppercase tracking-wide mb-3">Follow us</p>
              <div className="flex space-x-6">
                <a href="#" aria-label="Instagram" className="text-primary hover:text-accent transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-primary hover:text-accent transition">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-900 uppercase tracking-wide mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className={`w-full px-4 py-3 border-b border-neutral-900 bg-transparent focus:outline-none focus:border-accent transition ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Your name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">Please enter your name</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-neutral-900 uppercase tracking-wide mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className={`w-full px-4 py-3 border-b border-neutral-900 bg-transparent focus:outline-none focus:border-accent transition ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="Your email"
                  {...register("email", { 
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">Please enter a valid email address</p>
                )}
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm text-neutral-900 uppercase tracking-wide mb-2">Project Details</label>
                <textarea 
                  id="project"
                  rows={5}
                  className={`w-full px-4 py-3 border-b border-neutral-900 bg-transparent focus:outline-none focus:border-accent transition ${
                    errors.project ? 'border-red-500' : ''
                  }`}
                  placeholder="Tell us about your project"
                  {...register("project", { required: true })}
                ></textarea>
                {errors.project && (
                  <p className="mt-1 text-red-500 text-sm">Please tell us about your project</p>
                )}
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-primary text-white hover:bg-accent transition duration-300 ease-in-out disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
