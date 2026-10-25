import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundAnimation = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-50 to-blue-200 blur-3xl"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="absolute top-[30%] -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-50 to-blue-200 blur-3xl"
        style={{ y: y2, opacity }}
      />
      <motion.div
        className="absolute -bottom-[300px] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-gray-50 to-blue-100 blur-3xl"
        style={{ y: y3, opacity }}
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGZhZmMiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZjBmNGY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-[0.03]" />
    </div>
  );
};

export default BackgroundAnimation;
