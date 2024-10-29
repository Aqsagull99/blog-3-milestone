"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-800 p-4">
      <motion.h1
        className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent shadow-lg shadow-gray-700 relative inline-block z-10 font-serif"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Blog of Post
        {/*  underline */}
        <span className="absolute left-0 right-0 bottom-[-10px] mx-auto h-1 bg-gradient-to-r from-white to-gray-400"></span>
      </motion.h1>
    </div>
  );
}



