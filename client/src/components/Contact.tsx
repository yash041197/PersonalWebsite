import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import useTouchInteractions from "@/hooks/use-touch-interactions";
import { Envelope, Phone, ChatCircleDots, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

interface ContactFormData {
  name: string;
  email: string;
  project: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const controls = useAnimation();

  const {
    ref: contactCardRef,
    style: contactCardStyle,
    handlers: contactCardHandlers
  } = useTouchInteractions<HTMLDivElement>({
    hoverScale: 1.02,
    tapScale: 0.98,
    enableTilt: true,
    maxTilt: 5
  });

  const {
    ref: formCardRef,
    style: formCardStyle,
    handlers: formCardHandlers
  } = useTouchInteractions<HTMLDivElement>({
    hoverScale: 1.02,
    tapScale: 0.98,
    enableTilt: true,
    maxTilt: 4
  });

  const {
    ref: availabilityCardRef,
    style: availabilityCardStyle,
    handlers: availabilityCardHandlers
  } = useTouchInteractions<HTMLDivElement>({
    hoverScale: 1.03,
    tapScale: 0.97,
    enableTilt: true,
    maxTilt: 8
  });

  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [activeField, setActiveField] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    if (submitButtonRef.current) {
      submitButtonRef.current.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (submitButtonRef.current) {
          submitButtonRef.current.style.transform = 'scale(1)';
        }
      }, 150);
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const successData = await response.json();
      console.log("Form submitted successfully:", successData);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you as soon as possible.",
      });

      reset();
      setActiveField(null);
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const ContactItem = ({
    icon,
    label,
    value,
    href,
    children
  }: {
    icon: React.ReactNode,
    label: string,
    value?: string,
    href?: string,
    children?: React.ReactNode
  }) => {
    const {
      ref: itemRef,
      style: itemStyle,
      handlers: itemHandlers
    } = useTouchInteractions<HTMLDivElement>({
      hoverScale: 1.03,
      tapScale: 0.97,
      enableTilt: false
    });

    const content = value ? (
      <a href={href} className="text-base text-gray-700 hover:text-primary transition-colors">
        {value}
      </a>
    ) : children;

    return (
      <motion.div
        className="flex items-start"
        variants={itemVariants}
      >
        <motion.div
          className="bg-blue-50 p-3 rounded-lg mr-4 transition-colors duration-300 text-primary"
          whileHover={{ backgroundColor: "#EBF5FF", scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {icon}
        </motion.div>
        <div
          ref={itemRef}
          style={itemStyle}
          {...itemHandlers}
          className="flex-1"
        >
          <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
          {content}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-primary font-medium mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              GET IN TOUCH
            </motion.p>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's Collaborate
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm open to discussing new opportunities, projects, or how AI can help your business grow.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div
              ref={contactCardRef}
              style={contactCardStyle}
              {...contactCardHandlers}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300"
            >
              <motion.h3
                className="text-xl font-semibold mb-6"
                variants={itemVariants}
              >
                Contact Details
              </motion.h3>

              <motion.div className="space-y-6">
                <ContactItem
                  icon={<Envelope size={20} weight="duotone" />}
                  label="Email"
                  value="yashpandya0411@gmail.com"
                  href="mailto:yashpandya0411@gmail.com"
                />

                <ContactItem
                  icon={<Phone size={20} weight="duotone" />}
                  label="Phone"
                  value="07563041197"
                  href="tel:07563041197"
                />

                <ContactItem
                  icon={<ChatCircleDots size={20} weight="duotone" />}
                  label="Social Profiles"
                >
                  <div className="flex space-x-4 mt-2">
                    <motion.a
                      href="https://linkedin.com/in/yash-pandya-data"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-700 hover:text-primary transition-colors py-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LinkedinLogo size={18} weight="duotone" />
                      LinkedIn
                    </motion.a>
                    <motion.a
                      href="https://github.com/yash041197"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-700 hover:text-primary transition-colors py-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <GithubLogo size={18} weight="duotone" />
                      GitHub
                    </motion.a>
                  </div>
                </ContactItem>
              </motion.div>
            </div>

            <motion.div
              ref={availabilityCardRef}
              style={availabilityCardStyle}
              {...availabilityCardHandlers}
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl transition-all duration-300"
            >
              <h4 className="font-medium mb-2">Current Availability</h4>
              <p className="text-sm text-gray-600">
                I'm currently available for freelance projects, contract work, or full-time opportunities in AI engineering and technical leadership.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            ref={formCardRef}
            style={formCardStyle}
            {...formCardHandlers}
            animate={controls}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0.32, 0.72, 0, 1]
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <motion.label
                  htmlFor="name"
                  className={`block text-sm font-medium ${activeField === 'name' ? 'text-primary' : 'text-gray-700'} mb-1 transition-colors duration-200`}
                  animate={{ scale: activeField === 'name' ? 1.03 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  Name
                </motion.label>
                <motion.div
                  animate={{
                    y: activeField === 'name' ? -2 : 0,
                    scale: activeField === 'name' ? 1.01 : 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : activeField === 'name' ? 'border-primary shadow-sm' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200`}
                    placeholder="Your name"
                    onFocus={() => handleFocus('name')}
                    {...register("name", {
                      required: true,
                      onBlur: handleBlur
                    })}
                  />
                  {errors.name && (
                    <motion.p
                      className="mt-1 text-red-500 text-sm"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Please enter your name
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <div>
                <motion.label
                  htmlFor="email"
                  className={`block text-sm font-medium ${activeField === 'email' ? 'text-primary' : 'text-gray-700'} mb-1 transition-colors duration-200`}
                  animate={{ scale: activeField === 'email' ? 1.03 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  Email
                </motion.label>
                <motion.div
                  animate={{
                    y: activeField === 'email' ? -2 : 0,
                    scale: activeField === 'email' ? 1.01 : 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : activeField === 'email' ? 'border-primary shadow-sm' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200`}
                    placeholder="Your email"
                    onFocus={() => handleFocus('email')}
                    {...register("email", {
                      required: true,
                      onBlur: handleBlur,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && (
                    <motion.p
                      className="mt-1 text-red-500 text-sm"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Please enter a valid email address
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <div>
                <motion.label
                  htmlFor="project"
                  className={`block text-sm font-medium ${activeField === 'project' ? 'text-primary' : 'text-gray-700'} mb-1 transition-colors duration-200`}
                  animate={{ scale: activeField === 'project' ? 1.03 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  How can I help?
                </motion.label>
                <motion.div
                  animate={{
                    y: activeField === 'project' ? -2 : 0,
                    scale: activeField === 'project' ? 1.01 : 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <textarea
                    id="project"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.project ? 'border-red-500' : activeField === 'project' ? 'border-primary shadow-sm' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200`}
                    placeholder="Tell me about your project or inquiry"
                    onFocus={() => handleFocus('project')}
                    {...register("project", {
                      required: true,
                      onBlur: handleBlur
                    })}
                  ></textarea>
                  {errors.project && (
                    <motion.p
                      className="mt-1 text-red-500 text-sm"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Please tell me about your project or inquiry
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <button
                  ref={submitButtonRef}
                  type="submit"
                  className="w-full inline-flex justify-center items-center rounded-full bg-primary px-6 py-3.5 text-base font-medium text-white hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 disabled:opacity-70"
                  disabled={isSubmitting}
                  style={{
                    transition: 'transform 0.2s cubic-bezier(0.32, 0.72, 0, 1)'
                  }}
                >
                  <motion.span
                    animate={isSubmitting ? {
                      opacity: [1, 0.7, 1],
                      transition: { repeat: Infinity, duration: 1.5 }
                    } : {}}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.span>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
