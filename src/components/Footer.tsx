"use client";
import { LuHeartHandshake } from "react-icons/lu";
import { AiOutlinePhone, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">About Blogosphere</h2>
          <p className="text-sm leading-relaxed">
            Blogosphere is your go-to platform for discovering insightful articles practical tips and inspiring stories. Whether youre here to learn share or explore we have  got something for everyone. Dive into the world of knowledge and creativity!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-purple-600 transition duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-600 transition duration-200">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-purple-600 transition duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-purple-600 transition duration-200">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Popular Categories</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/category/tech" className="hover:text-purple-600 transition duration-200">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/category/lifestyle" className="hover:text-purple-600 transition duration-200">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/category/health" className="hover:text-purple-600 transition duration-200">
                Health & Wellness
              </Link>
            </li>
            <li>
              <Link href="/category/travel" className="hover:text-purple-600 transition duration-200">
                Travel
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Subscribe to Updates</h2>
          <p className="text-sm mb-4">
            Stay updated with the latest posts, trends, and exclusive content. Join our newsletter today!
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-md bg-gray-700 text-gray-300 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white hover:text-purple-600 text-purple-600 px-4 py-2 rounded-md transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <AiOutlinePhone className="text-lg text-purple-600" />
            <span className="text-gray-300">+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-lg text-purple-600" />
            <span className="text-gray-300">aqsa.gull.dev.ai99@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillLinkedin className="text-lg text-purple-600" />
            <Link
              href="https://www.linkedin.com/in/aqsa-gullofficial99"
              className="hover:text-purple-600 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
          © {new Date().getFullYear()} <span className="font-bold">Blogosphere</span> Crafted with
          <LuHeartHandshake className="text-purple-600 text-lg sm:text-xl" />
          for bloggers and readers <span>All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
