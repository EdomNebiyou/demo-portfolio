import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
      }}
    >
      <div className="container mx-auto text-center px-4 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl font-semibold"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I build amazing web applications.
        </motion.p>
      </div>

      {/* Add the CSS animation */}
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </section>
  );
}