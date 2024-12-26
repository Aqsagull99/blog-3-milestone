"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/Hero";


const blogs = [
  { id: 1, title: "Introduction to JavaScript", image: "/home/js2.png" },
  { id: 2, title: "Understanding React Components", image: "/home/react1.png" },
  { id: 3, title: "Exploring Next.js Features", image: "/home/nextjs1.png" },
  { id: 4, title: "CSS Tricks for Developers", image: "/home/css1.png" },
  { id: 5, title: "Framer Motion Basics", image: "/home/framer1.png" },
  { id: 6, title: "Dynamic Routing in Next.js", image: "/home/nextjs2.png" },
  { id: 7, title: "TypeScript for Beginners", image: "/home/ts1.png" },
  { id: 8, title: "Building Responsive Designs", image: "/home/res1.png" },
  { id: 9, title: "Tailwind CSS Essentials", image: "/home/tail1.png" },
  { id: 10, title: "Deploying Next.js Applications", image: "/home/node1.png" },
];

export default  function HomePage() {
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      
       <HeroSection/>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className=" backdrop-blur-glass shadow-comment-card text-white p-6 rounded-lg  hover:scale-105 transform transition duration-300"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-lg mb-4"
              priority
            />
            <h2 className="text-sm sm:text-xl font-bold mb-4">{blog.title}</h2>
            <p className="text-gray-300 mb-6 font-extralight">
              Discover more about {blog.title}. Click below to read the full blog post and explore more exciting details!
            </p>
            <Link href={`/blog/${blog.id}`}>
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    
    </div>
  );
}


















