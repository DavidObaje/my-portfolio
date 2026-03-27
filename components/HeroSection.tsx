"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-40 pb-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12 text-center">

          {/* Placeholder Headshot */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
            src="/dinoProfile2.jpg" 
            alt="Professional Headshot"
            className="w-40 h-40 rounded-full object-cover border-2 border-green-900/60 shadow-md"
          />

          </motion.div>

          <motion.h1
            className="text-2xl md:text-3xl text-gray-900 max-w-2xl mx-auto tracking-wider font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Web & Mobile Developer Building Real-World Applications
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-500 max-w-xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Hi, I'm David. I design and develop modern websites and mobile apps, focusing on performance,
            usability, and clean architecture, amongst other things.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-8 pt-8 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                text-sm tracking-widest uppercase text-gray-900 
                hover:text-black 
                transition-all duration-200 
                transform hover:scale-105
              "
            >
              View Projects
            </button>


            <span className="text-green-900">|</span>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                text-sm tracking-widest uppercase text-gray-900
                hover:text-black
                transition-all duration-200
                transform hover:scale-105
              "
            >
              Contact
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
