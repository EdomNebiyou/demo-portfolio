import { motion } from "framer-motion";
import Parallax from "./Parallax";

export default function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Parallax Background */}
      <Parallax speed={0.3}>
        <div className="absolute inset-0 bg-[url('/path/to/your/background-image-2.jpg')] bg-cover bg-center opacity-20"></div>
      </Parallax>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-700  text-center text-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Hi, I'm a web developer passionate about building modern and responsive websites.
        </motion.p>
      </div>
    </section>
  );
}