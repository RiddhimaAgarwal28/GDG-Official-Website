import Navbar from "./ui/Navbar";
import Squares from "./ui/Squares";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.6}
          borderColor="#222"
          squareSize={60}
          hoverFillColor="#FACC15"
        />
      </div>

      <div className="relative z-10 pointer-events-none">
        <img
          src="https://www.svgrepo.com/show/353810/google-developers.svg"
          className="fixed h-12 w-14 md:h-16 md:w-20 top-6 left-4 md:top-12 md:left-8 pointer-events-auto"
          alt="gdgLogo"
        />

        <div className="fixed flex flex-wrap items-center top-20 left-4 md:top-15 md:left-30 space-mono-regular space-mono-bold text-3xl md:text-4xl">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-300">o</span>
          <span className="text-green-500">g</span>
          <span className="text-blue-500">l</span>
          <span className="text-red-500">e</span>
        </div>

        <div className="fixed text-white text-xl md:text-3xl top-28 left-4 md:top-16 md:left-63 space-mono-regular space-mono-bold">
          Developers
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold space-mono-regular text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-400 via-green-500 to-red-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
        >
          Welcome to <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-300">o</span>
          <span className="text-green-500">g</span>
          <span className="text-blue-500">l</span>
          <span className="text-red-500">e</span> Developer
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 text-lg sm:text-2xl md:text-3xl space-mono-regular text-gray-300 font-medium tracking-wide"
        >
          on Campus <span className="text-sky-400 font-semibold">ABESEC</span>
        </motion.h2>
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
