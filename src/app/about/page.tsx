"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20  text-white">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        {/* Image Content */}
        <div className="lg:w-1/2">
          <Image
            src={"/home/res1.png"}
            alt="About Us"
            height={200}
            width={200}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 lg:pl-12 mt-10 lg:mt-0">
          <h2 className="text-3xl lg:text-4xl font-extralight mb-4">
            About <span className="text-purple-600">Us</span>
          </h2>
          <p className="text-smleading-relaxed mb-6 font-extralight">
            At <strong className="text-purple-600">BlogSphere</strong>, we believe in empowering creativity, innovation, and knowledge-sharing. Our platform is dedicated to helping you explore diverse topics and connect with a global community of like-minded individuals.
          </p>
          <ul className="space-y-2 font-extralight">
            <li className="flex items-center">
              <span className="text-purple-600 text-xl  mr-3">✓</span>
              Curated articles on trending topics.
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 text-xl mr-3">✓</span>
              Expert insights and actionable advice.
            </li>
            <li className="flex items-center">
              <span className="text-purple-600 text-xl mr-3">✓</span>
              A thriving community of thinkers and creators.
            </li>
          </ul>
        </div>
      </div>
       {/* Background Blur Effect */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 opacity-30"></div>
        */}
    </section>
  );
};

export default AboutSection;


