"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-lg font-semibold font-serif">My Blog</div>

        {/* Toggle button for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
          </button>
        </div>

        {/* Nav menu for desktop */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex gap-6 text-sm md:text-base font-serif">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/1"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                First Blog
              </Link>
            </li>

            <li>
              <Link
                href="/2"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                {" "}
                Second Blog
              </Link>
            </li>
            <li>
              <Link
                href="/3"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Third Blog
              </Link>
            </li>
            <li>
              <Link
                href="/4"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Fourth Blog
              </Link>
            </li>
            <li>
              <Link
                href="/5"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Five Blog
              </Link>
            </li>
            <li>
              <Link
                href="/6"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Six Blog
              </Link>
            </li>
            <li>
              <Link
                href="/7"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Seven Blog
              </Link>
            </li>
            <li>
              <Link
                href="/8"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Eight Blog
              </Link>
            </li>
            <li>
              <Link
                href="/9"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Nine Blog{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/10"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Ten Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile nav overlay */}
      {isMenuOpen && (
        <nav className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex justify-center items-center md:hidden">
          <ul className="flex flex-col items-center gap-4 text-lg font-serif">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Blog Posts
              </Link>
            </li>
            <li>
              <Link
                href="/1"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                First Blog
              </Link>
            </li>
            <li>
              <Link
                href="/2"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Second Blog
              </Link>
            </li>
            <li>
              <Link
                href="/3"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Third Blog
              </Link>
            </li>
            <li>
              <Link
                href="/4"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Fourth Blog
              </Link>
            </li>
            <li>
              <Link
                href="/5"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Five Blog
              </Link>
            </li>
            <li>
              <Link
                href="/6"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Six Blog
              </Link>
            </li>
            <li>
              <Link
                href="/7"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Seven Blog
              </Link>
            </li>
            <li>
              <Link
                href="/8"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Eight Blog
              </Link>
            </li>
            <li>
              <Link
                href="/9"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Nine Blog
              </Link>
            </li>

            <li>
              <Link
                href="/10"
                onClick={closeMenu}
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Ten Blog
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
