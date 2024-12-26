"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative  text-white py-20">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6 "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Empower Your <span className="text-purple-600 font-serif">Curiosity</span> & Unlock New Horizons
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl mb-8 leading-relaxed font-extralight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Discover expert insights, innovative ideas, and trending topics that fuel your passion. Join a thriving community of curious minds and stay ahead in every domain.
          </motion.p>
          <div className="flex space-x-4">
            <motion.a
              href="/subscribe"
              className="bg-yellow-400 hover:bg-yellow-500  text-purple-900  font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe 
            </motion.a>
            <motion.a
              href="/latest-posts"
              className="bg-white hover:bg-gray-100 text-purple-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Read  Posts
            </motion.a>
          </div>
        </div>

        {/* Image Content */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            // src={"/hero2.png"}
            src={"/hero2.png"}
            alt="Exploring Ideas"
            height={200}
            width={200}
            className="w-full h-auto shadow-2xl rounded-lg bg-transparent"
          />
        </motion.div>
        
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-b from-purple-800 to-transparent opacity-50 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-gradient-to-t from-pink-800 to-transparent opacity-50 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      ></motion.div>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 opacity-30"></div>
        */}
    </section>
  );
};

export default HeroSection;
