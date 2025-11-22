import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import gdgLogo from "../assets/gdg-logo.png";
import { useEffect, useRef } from "react";

const Footer = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // On reload → spotlight centers on text (auto reveal)
    if (spotlightRef.current) {
      spotlightRef.current.style.maskImage =
        "radial-gradient(250px 250px at 50% 50%, white 0%, transparent 100%)";
      spotlightRef.current.style.WebkitMaskImage =
        "radial-gradient(250px 250px at 50% 50%, white 0%, transparent 100%)";
    }
  }, []);

  return (
    <footer className="bg-black text-white py-8 flex flex-col items-center space-y-8">

      {/* Spotlight Reveal */}
      <div
        ref={spotlightRef}
        className="w-full h-100 md:h-100 flex items-center justify-center overflow-hidden cursor-pointer relative"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          e.currentTarget.style.maskImage = `radial-gradient(450px 250px at ${x}px ${y}px, white 0%, transparent 100%)`;
          e.currentTarget.style.WebkitMaskImage = `radial-gradient(450px 450px at ${x}px ${y}px, white 0%, transparent 100%)`;
        }}
        onMouseLeave={(e) => {
          // Optional: shrink spotlight when leaving
          e.currentTarget.style.maskImage =
            "radial-gradient(0px 0px at 50% 50%, white 0%, transparent 100%)";
          e.currentTarget.style.WebkitMaskImage =
            "radial-gradient(0px 0px at 50% 50%, white 0%, transparent 100%)";
        }}
        style={{
          transition: "mask-image 0.4s ease-out, -webkit-mask-image 0.4s ease-out",
        }}
      >
        <h1 className="text-[110px] md:text-[180px] font-extrabold tracking-widest text-gray-500 opacity-90 select-none">
          GDG ABESEC
        </h1>
      </div>


      {/* Main footer content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">

        {/* GDG Logo + Reveal Heading */}
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
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/events"
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Events
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="/help"
              className="inline-block transition-transform duration-300 hover:scale-110 hover:text-gray-400 cursor-pointer"
            >
              Help
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/company/gdg-abesec"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaLinkedin className="text-2xl transition-all duration-300 group-hover:text-blue-500" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/Developer-Students-Club-ABESEC"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaGithub className="text-2xl transition-all duration-300 group-hover:text-gray-400" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              GitHub
            </span>
          </a>

          <a
            href="https://www.instagram.com/gdg.abesec/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaInstagram className="text-2xl transition-all duration-300 group-hover:text-pink-500" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Instagram
            </span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <FaTwitter className="text-2xl transition-all duration-300 group-hover:text-sky-400" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Twitter
            </span>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Google Developer Group ABESEC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
