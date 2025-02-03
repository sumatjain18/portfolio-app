"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <motion.h1 className="text-7xl md:text-9xl font-bold text-white mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        404
      </motion.h1>
      <motion.p className="text-2xl md:text-3xl text-gray-400 mb-4 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        Oops! Page not found.
      </motion.p>
      <motion.p className="text-xl md:text-2xl text-gray-400 mb-8 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        The page you're looking for doesn't exist or has been moved.
      </motion.p>
      <motion.div className="relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-amber-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <Link to="/" className="relative px-6 py-3 bg-slate-900 rounded-lg font-semibold text-white flex items-center space-x-2 hover:bg-slate-800 transition duration-200">
          <Home className="w-5 h-5" />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
