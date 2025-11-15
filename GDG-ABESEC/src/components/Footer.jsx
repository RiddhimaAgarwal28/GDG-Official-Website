import React from "react";
import CurvedLoop from "./CurvedLoop";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import gdgLogo from "../assets/gdg-logo.png"; // transparent background recommended

const Footer = () => {
  return (
    <>
  

    <footer className="bg-black text-white py-8 flex flex-col items-center space-y-8">
      {/* Curved marquee text */}
      <CurvedLoop marqueeText="Google Developers Group " speed={2} direction="left" />

      {/* Main footer content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* GDG Logo and name */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <img src={gdgLogo} alt="GDG Logo" className="h-12 w-auto" />
            <h1 className="text-lg font-semibold">Google Developers Group</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-300 text-sm font-medium">
          <li>
            <a
              href="/"
              className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/events"
              className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/help"
              className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Help
            </a>
          </li>
        </ul>

        {/* Social Icons with tooltip + color hover */}
        <div className="flex space-x-6">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/gdg-abesec"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaLinkedin className="text-2xl transition-all duration-300 group-hover:text-blue-500" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Developer-Students-Club-ABESEC"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaGithub className="text-2xl transition-all duration-300 group-hover:text-gray-400" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              GitHub
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gdg.abesec/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaInstagram className="text-2xl transition-all duration-300 group-hover:text-pink-500" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Instagram
            </span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaTwitter className="text-2xl transition-all duration-300 group-hover:text-sky-400" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Twitter
            </span>
          </a>
        </div>
      </div>

      {/* Footer line and copyright */}
      <div className="w-full border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Google Developer Group ABESEC. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
