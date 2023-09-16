import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderNavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-gray-700 hover:text-gray-900 focus:outline-none lg:hidden transition-transform transform-gpu duration-300"
        onClick={toggleMenu}
      >
        <span
          className={`block w-6 h-1 mb-1 bg-gray-700 transition-transform transform-gpu duration-300 ${isOpen ? "rotate-45 translate-y-1" : "rotate-0"
            }`}
        ></span>
        <span
          className={`block w-6 h-1 mb-1 bg-gray-700 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-gray-700 transition-transform transform-gpu duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : "rotate-0"
            }`}
        ></span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-3/4 bg-white z-50 p-8"
            >
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100">Home</li>
                <li className="py-2 px-4 hover:bg-gray-100">About</li>
                <li className="py-2 px-4 hover-bg-gray-100">Services</li>
                <li className="py-2 px-4 hover:bg-gray-100">Portfolio</li>
                <li className="py-2 px-4 hover:bg-gray-100">Contact</li>
              </ul>
            </motion.div>
            <div
              onClick={closeMenu}
              className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
            ></div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderNavMenu;
