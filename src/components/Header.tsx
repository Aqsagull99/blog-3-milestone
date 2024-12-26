"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className=" text-white p-4 z-50 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg font-semibold font-serif"
        >
          My Blog
        </motion.div>

        {/* Toggle button for small screens */}
        <div className="md:hidden relative flex items-center">
          <motion.button
            onClick={toggleMenu}
            className="text-white focus:outline-none bg-gray-700 rounded-full p-2"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {/* Nav menu for desktop */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6 text-sm md:text-base font-serif"
          >
            <li>
              <Link
                href="/"
                className="hover:text-purple-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog/1"
                className="hover:text-purple-600 transition-colors duration-200"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        </nav>
      </div>

      {/* Mobile nav overlay */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full bg-slate-800 bg-opacity-95 z-50 flex flex-col items-center justify-center md:hidden"
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-6 text-white text-2xl focus:outline-none"
          >
            &times;
          </button>

          {/* Mobile Menu Items */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-6 text-lg font-serif mt-8"
          >
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="hover:text-purple-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="hover:text-purple-600 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog/1"
                onClick={closeMenu}
                className="hover:text-purple-600 transition-colors duration-200"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="hover:text-purple-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;










