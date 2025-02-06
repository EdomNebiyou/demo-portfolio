import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children, speed = 1 }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div style={{ y }} className="w-full h-full">
      {children}
    </motion.div>
  );
}