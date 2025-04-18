import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Founder & Creative Director",
    bio: "With over 15 years of experience in brand strategy and design, Sarah leads our creative vision and client relationships.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "David Chen",
    position: "Design Director",
    bio: "David brings a unique perspective to visual identity and digital design, with a background in both traditional graphic design and user experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Maya Rodriguez",
    position: "Strategy Director",
    bio: "Maya helps clients uncover insights and develop strategic foundations that inform meaningful brand experiences.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const TeamMember = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-[350px] object-cover mb-6"
      />
      <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
      <p className="text-neutral-900 mb-4">{member.position}</p>
      <p>{member.bio}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg mb-6">
              Avenues.life is a brand agency founded on the belief that thoughtful design can create meaningful connections between brands and people.
            </p>
            <p className="text-lg mb-6">
              Our small team of strategists, designers, and developers bring diverse perspectives and a collaborative spirit to every project. We're passionate about crafting brands and digital experiences that are not only beautiful but purposeful.
            </p>
            <p className="text-lg">
              We believe in quality over quantity, which is why we take on a limited number of projects each year, ensuring that each client receives our full attention and expertise.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Avenues team collaborating" 
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
        
        {/* Team Section */}
        <div className="mt-24">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
