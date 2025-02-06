import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="mt-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 rounded text-gray-900 bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 rounded text-gray-900 bg-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 rounded text-gray-900 bg-white"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}