import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 pb-8 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Apple-style grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - Logo and description */}
          <div className="md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <h1 className="text-2xl font-semibold tracking-tight">Yash Pandya</h1>
            </a>
            <p className="text-sm text-gray-600 mb-4">
              Data Scientist with expertise in machine learning, data analysis, and creating impactful data solutions.
            </p>
          </div>
          
          {/* Column 2 - Quick links */}
          <div>
            <h3 className="text-sm font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#projects" className="text-sm text-gray-600 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-sm text-gray-600 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-sm text-gray-600 hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Social */}
          <div>
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://linkedin.com/in/yash-pandya-data" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/yash041197" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="mailto:yashpandya0411@gmail.com" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter - Apple style */}
          {/*<div>
            <h3 className="text-sm font-medium mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-3">
              Subscribe to receive updates on my latest projects and data science insights.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 text-sm rounded-l-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>*/}
      </div>
        
        {/* Apple-style footer bottom */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Yash Pandya. All rights reserved.
            </p>
            
            <div className="flex space-x-6 items-center">
              <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
          
          {/* Apple footer note */}
          <motion.p 
            className="text-xs text-center text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Designed and developed with ❤️ | Last updated: April 2025
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
