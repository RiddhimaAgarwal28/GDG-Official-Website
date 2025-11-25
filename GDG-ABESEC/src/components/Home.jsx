import Navbar from "./ui/Navbar";
import Squares from "./ui/Squares";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.6}
          borderColor="#0e071f"
          squareSize={55}
          hoverFillColor="#0e071f"
        />
      </div>

      {/* Logo and Branding - Fixed Position */}
      <div className="relative z-100 pointer-events-none">
        <img
          src="https://www.svgrepo.com/show/353810/google-developers.svg"
          className="fixed h-12 w-14 md:h-16 md:w-20 top-6 left-4 lg:top-12 lg:left-8 pointer-events-auto"
          alt="gdgLogo"
        />

        <div className="fixed flex flex-wrap items-center top-20 left-4 lg:top-16 lg:left-32 font-mono font-bold text-3xl md:text-4xl">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-300">o</span>
          <span className="text-green-500">g</span>
          <span className="text-blue-500">l</span>
          <span className="text-red-500">e</span>
        </div>

        <div className="fixed text-white text-xl lg:text-3xl top-28 left-1 ml-9.5">
          Developers Group
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-20 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl h-25 md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-400 via-green-500 to-red-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
        >
          Welcome to Google Developers
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 text-lg sm:text-2xl md:text-3xl text-gray-300 tracking-wide"
        >
          on Campus <span className="text-sky-400 font-semibold">ABESEC</span>
        </motion.h2>
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Spacer */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;