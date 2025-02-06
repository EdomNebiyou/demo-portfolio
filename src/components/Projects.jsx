import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "photo home",
    description: "A cool photo appointment web..",
    link: "https://cozy-salamander-286006.netlify.app/",
  },
  {
    id: 2,
    name: "redux crud",
    description: "Basic redux crud.",
    link: "https://todowithedom.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a href={project.link} key={project.id}>
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
