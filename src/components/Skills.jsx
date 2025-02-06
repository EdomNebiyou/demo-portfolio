import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "Vite", icon: "⚡" },
  { name: "HTML", icon: "🖥️" },
  { name: "CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
];

export default function Skills() {
  return (
    <div className="bg-black">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/portfolio-bg.png')`,
        }}
      >
        {/* Content */}
        <div className="relative z-10"></div>
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl text-amber-700 font-bold text-center"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Skills
          </motion.h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 dark:bg-gray-600 px-6 py-3 rounded-full text-sm md:text-base text-gray-900 dark:text-white flex items-center space-x-2 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform cursor-pointer"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}