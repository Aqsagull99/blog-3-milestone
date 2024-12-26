"use client"; 
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';



interface Post {
  title: string;
  introductionheading: string;
  introduction: string;
  content: string;
  image: string;
  category: string;
  excerpt: string;
  author: { name: string; profileImage: string };
  date: string;
  relatedPosts: number[];
 comments: { username: string; message: string; date: string }[];
 metaDescription: string;
  isFeatured: boolean;
}



const posts: { [key: number]: Post } = {
  1: {
    title: 'Introduction to JavaScript',
    introductionheading: 'Learn the Basics of JavaScript',
    introduction: `JavaScript is a versatile language used for building dynamic web applications. It is essential for developers to create interactive websites.`,
    content: `JavaScript is a versatile programming language primarily used for web development. 
              It allows developers to create dynamic and interactive web applications. 
              With features like event handling and APIs, it enables responsive design. 
              JavaScript is an essential tool for both front-end and back-end development.`,
    image: '/post/js1.png',
    category: 'Programming',
    excerpt: 'Discover the power of JavaScript for web development.',
    author: { name: 'John Doe', profileImage: '/avatar/men1.png' },
    date: '2024-12-25',
    relatedPosts: [2, 3],
    comments: [
      { username: 'Alice', message: 'Great introduction to JavaScript!', date: '2024-12-26' },
      { username: 'Bob', message: 'Very helpful for beginners.', date: '2024-12-26' },
    ],
    metaDescription: 'Learn the basics and importance of JavaScript for web development.',
    isFeatured: true,
  },
  2: {
    title: 'Understanding React Components',
    introductionheading: 'Breaking Down React Components',
    introduction: `React components are the foundation of modern UI development, offering reusability and modularity for creating dynamic applications.`,
    content: `React components are reusable building blocks of UI in React applications. 
              They allow developers to break the UI into independent, manageable pieces. 
              Components can be functional or class-based, offering flexibility in design. 
              Understanding their lifecycle methods is key to mastering React development.`,
    image: '/post/react1.png',
    category: 'Web Development',
    excerpt: 'Learn about the core building blocks of React applications.',
    author: { name: 'Jane Smith', profileImage: '/avatar/men2.png' },
    date: '2024-12-24',
    relatedPosts: [1, 3],
    comments: [
      { username: 'Charlie', message: 'This really clarified React components for me.', date: '2024-12-25' },
    ],
    metaDescription: 'Explore the concept of React components and their importance in modern UI.',
    isFeatured: true,
  },
  3: {
    title: 'Exploring Next.js Features',
    introductionheading: 'Dive into Next.js Features',
    introduction: `Next.js is a cutting-edge framework that simplifies the development of server-rendered React applications, enhancing performance and SEO.`,
    content: `Next.js is a powerful framework for building server-rendered React applications. 
              It simplifies tasks like routing, code splitting, and API handling. 
              With built-in support for static and dynamic content, it enhances SEO performance. 
              Next.js is an ideal choice for modern web development projects.`,
    image: '/post/nextjs1.png',
    category: 'Frameworks',
    excerpt: 'Learn how Next.js empowers developers with advanced features.',
    author: { name: 'Emily Davis', profileImage: '/avatar/women1.png' },
    date: '2024-12-23',
    relatedPosts: [1, 2, 4],
    comments: [],
    metaDescription: 'Understand the features and benefits of using Next.js in your projects.',
    isFeatured: false,
  },
  4: {
    title: 'CSS Tricks for Developers',
    introductionheading: 'Master CSS with These Tricks',
    introduction: `CSS is the backbone of web design, and mastering advanced tricks can significantly improve your design workflow and creativity.`,
    content: `CSS offers developers the ability to design visually stunning web pages. 
              By mastering Flexbox and Grid, you can create responsive layouts effortlessly. 
              Advanced selectors and pseudo-classes allow precise styling control. 
              Animations and transitions enhance user experience on the web.`,
    image: '/post/css1.png',
    category: 'Design',
    excerpt: 'Enhance your CSS skills with practical tricks for modern web design.',
    author: { name: 'Michael Brown', profileImage: '/avatar/women2.png' },
    date: '2024-12-22',
    relatedPosts: [3, 5],
    comments: [
      { username: 'Daisy', message: 'These tricks are super helpful!', date: '2024-12-23' },
    ],
    metaDescription: 'Discover advanced CSS tricks to create stunning web designs.',
    isFeatured: false,
  },
  5: {
    title: 'Framer Motion Basics',
    introductionheading: 'Animating React with Ease',
    introduction: 'Discover the power of Framer Motion for creating animations in React.',
    content: `Framer Motion is a library for creating smooth animations in React. 
              It provides simple APIs for handling animations with high performance. 
              Developers can build dynamic user interfaces with less code. 
              Its flexibility makes it suitable for both beginners and professionals.`,
    image: '/post/framer1.png',
    category: 'React Libraries',
    excerpt: 'Learn the basics of animating React components using Framer Motion.',
    author: { name: 'Aqsa Gull', profileImage: '/avatar/women3.png' },
    date: '2024-12-26',
    relatedPosts: [2, 8],
    comments: [
      { username: 'Dev1', message: 'Animations explained so well!', date: '2024-12-27' },
      { username: 'Coder2', message: 'I love Framer Motion; this helped me a lot.', date: '2024-12-28' },
    ],
    metaDescription: 'An introductory guide to using Framer Motion for animations.',
    isFeatured: false,
  },
 
  6: {
    title: 'Dynamic Routing in Next.js',
    introductionheading: 'Navigating the Dynamic Web',
    introduction: 'Understand the fundamentals of dynamic routing in Next.js.',
    content: `Dynamic routing is a core feature in Next.js that allows flexible navigation. 
              It helps developers handle complex URL patterns and query parameters. 
              With file-based routing, building scalable applications becomes simpler. 
              It improves user experience by optimizing the application's performance.`,
    image: '/home/nextjs3.png',
    category: 'Next.js',
    excerpt: 'A deep dive into dynamic routing with Next.js.',
    author: { name: 'Aqsa Gull', profileImage: '/avatar/women4.png' },
    date: '2024-12-26',
    relatedPosts: [3, 9],
    comments: [
      { username: 'Techie1', message: 'Dynamic routing is now clearer, thanks!', date: '2024-12-27' },
      { username: 'DevPro', message: 'Great explanation with examples.', date: '2024-12-28' },
    ],
    metaDescription: 'Explore the benefits of dynamic routing in Next.js applications.',
    isFeatured: false,
  },
  
  7: {
    title: 'TypeScript for Beginners',
    introductionheading: 'Get Started with TypeScript',
    introduction: `TypeScript enhances JavaScript with static typing, making it a great choice for building scalable and maintainable applications.`,
    content: `TypeScript is a superset of JavaScript that adds static typing. 
              It helps catch errors at compile-time rather than runtime. 
              TypeScript's features like interfaces and enums enhance code maintainability. 
              It's an excellent tool for building large-scale applications.`,
    image: '/post/ts1.png',
    category: 'Programming',
    excerpt: 'A beginner-friendly guide to TypeScript.',
    author: { name: 'Sophia White', profileImage: '/avatar/women5.png' },
    date: '2024-12-21',
    relatedPosts: [1, 4, 6],
    comments: [
      { username: 'Ethan', message: 'TypeScript makes my projects so much better.', date: '2024-12-22' },
    ],
    metaDescription: 'Learn the basics and benefits of TypeScript in programming.',
    isFeatured: true,
  },
  8: {
    title: 'Building Responsive Designs',
    introductionheading: 'Responsive Design Essentials',
    introduction: 'Master the art of building adaptable and user-friendly web designs.',
    content: `Responsive design ensures web pages adapt to various screen sizes. 
              Using frameworks like Bootstrap and utilities like media queries is crucial. 
              Flexbox and Grid systems simplify layout adjustments for different devices. 
              Responsive design is a must-have skill for modern web developers.`,
    image: '/home/res1.png',
    category: 'Web Design',
    excerpt: 'Techniques and tools for building responsive web designs.',
    author: { name: 'Aqsa Gull', profileImage: '/avatar/women4.png' },
    date: '2024-12-26',
    relatedPosts: [6, 1],
    comments: [
      { username: 'Designer1', message: 'A clear explanation of responsive design.', date: '2024-12-27' },
      { username: 'WebDev', message: 'This improved my understanding a lot.', date: '2024-12-28' },
    ],
    metaDescription: 'Learn how to create web pages that look great on all devices.',
    isFeatured: true,
  },
  
 
 
  9: {
    title: 'Tailwind CSS Essentials',
    introductionheading: 'Mastering Tailwind CSS',
    introduction: 'Learn how Tailwind CSS simplifies styling for modern web applications.',
    content: `Tailwind CSS is a utility-first framework for styling web applications. 
              It eliminates the need for writing custom CSS by using pre-defined classes. 
              Developers can quickly build modern, responsive designs with its flexibility. 
              Tailwind's configuration options allow extensive customization.`,
    image: '/post/tail1.png',
    category: 'CSS Frameworks',
    excerpt: 'A guide to creating responsive and customizable designs using Tailwind CSS.',
    author: { name: 'Aqsa Gull', profileImage: '/avatar/men2.png' },
    date: '2024-12-26',
    relatedPosts: [1, 10],
    comments: [
      { username: 'User1', message: 'Great article on Tailwind CSS!', date: '2024-12-27' },
      { username: 'User2', message: 'Very helpful and detailed.', date: '2024-12-28' },
    ],
    metaDescription: 'A complete overview of Tailwind CSS features and its benefits.',
    isFeatured: true,
  },
  10: {
    title: 'Deploying Next.js Applications with Node.js',
    introductionheading: 'Effortless Deployment with Node.js',
    introduction: 'Learn how to deploy Next.js applications efficiently using Node.js environments.',
    content: `Deploying Next.js apps on Node.js servers provides flexibility and control. 
              Utilize platforms like Vercel or configure your own Node.js server for deployment. 
              Leverage server-side rendering (SSR) capabilities for dynamic content delivery. 
              With Node.js, you can optimize middleware, manage dependencies efficiently, 
              and set up custom deployment pipelines for production-ready projects.`,
    image: '/home/node1.png',
    category: 'Node.js & Next.js',
    excerpt: 'A Node.js-centric guide to deploying Next.js applications with flexibility.',
    author: { name: 'Aqsa Gull', profileImage: '/avatar/men1.png' },
    date: '2024-12-26',
    relatedPosts: [3, 8],
    comments: [
      { username: 'Deployer1', message: 'Now I can deploy Next.js apps with Node.js easily!', date: '2024-12-27' },
      { username: 'User3', message: 'Informative and concise!', date: '2024-12-28' },
    ],
    metaDescription: 'Steps to deploy Next.js applications using Node.js servers for production environments.',
    isFeatured: true,
  }
  
  
  
};

const PostDetail = ({ params }: { params: { post: string } }) => {
  const postId = parseInt(params.post, 10);

  // Check if the post exists
  const post = posts[postId];

  // State for comments
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  if (!post) {
    return (
      <div className="flex justify-center items-center text-center text-red-600 font-bold h-screen">
        The post is not found. It will appear after the 10th blog post.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen w-full text-white py-8 px-5">
      <div className="max-w-4xl w-full backdrop-blur-glass shadow-comment-card rounded-xl p-8">
        <Image src={post.image}
        alt='contectimage'
        height={200}
        width={200} className='rounded-r-3xl'/>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: '-100%' }}
            animate={{ x: '0' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.37, 0, 0.63, 1] }}
            className="text-[15px] sm:text-4xl md:text-4xl lg:text-4xl font-extrabold sm:font-extralight mt-4  mb-4 -translate-x-0 duration-1000"
          >
            {post.title}
           
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className=" mb-6 text-white  text-[15px] sm:text-2xl md:text-2xl lg:text-2xl font-normal sm:font-extralight md:font-extralight lg:font-extralight"
        >
          {post.introductionheading}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" mb-6  text-white  text-[15px] sm:text-1xl font-extralight"
        >
          {post.introduction}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className=" mb-6 text-white  text-[15px] sm:text-1xl font-extralight"
        >
          {post.excerpt}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" mb-6 text-white  text-[15px] sm:text-1xl font-extralight"
        >
          {post.content}
        </motion.p>

        <div className="flex items-center mb-6">
          <Image
            src={post.author.profileImage}
            alt={post.author.name}
            width={200}
            height={200}
            className="w-12 h-12 rounded-full mr-4 bg-white "
          />
          <div className="text-sm  text-white">
            <p className="font-semibold">{post.author.name}</p>
            <p className='text-sm font-extralight'>{post.date}</p>
            <p className='text-sm font-extralight' >{post.metaDescription}</p>
            <p className='text-sm font-extralight'>{post.relatedPosts}</p>

          </div>
        </div>

        <motion.h2
          initial={{ y: '120%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-1xl sm:2xl font-semibold mb-2 opacity-80"
        >
          Category: {post.category}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-6"
        >
          {post.isFeatured && (
            <span className="px-3 py-1 bg-yellow-500 text-black rounded-full font-semibold">
              Featured
            </span>
            
          )}
        </motion.div>

        
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '120%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl font-semibold mb-2 opacity-80"
          >
            Comments
            
          </motion.h2>
        </div>

        <form onSubmit={handleCommentSubmit} className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            required
            className="w-full h-24 p-2 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-white/80 text-black rounded-md hover:bg-white/60 transition"
          >
            Submit
          </button>
          

        </form>

         <h3 className="text-xl font-semibold mb-2 opacity-80">All Comments</h3>
        <ul className="list-disc pl-5">
          {comments.map((c, index) => (
            <li key={index} className="mb-1 opacity-80">
              {c}
            </li>
          ))}
        </ul> 
       


      </div>
    </div>
  );
};

export default PostDetail;














