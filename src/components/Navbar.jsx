import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 relative w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
          Edom
        </a>

        {/* Desktop Menu and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#about" className="text-gray-900 dark:text-white hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-900 dark:text-white hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-900 dark:text-white hover:text-gray-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-900 dark:text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-900 dark:text-white focus:outline-none mr-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#about"
                className="block text-gray-900 hover:border dark:text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-gray-900 hover:border dark:text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block text-gray-900 hover:border dark:text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-900 hover:border dark:text-white hover:text-gray-400"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}