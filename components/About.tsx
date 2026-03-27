"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "4" },
  { label: "Technologies", value: "12+" },
  { label: "Hours of Practice", value: "1000+" },
  { label: "Projects", value: "3" },
];

const currentFocus = [
  "Studying data structures and algorithms",
  "Exploring scalable backend architecture",
  "Improving system design fundamentals",
  "Strengthening problem-solving skills",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* Header + About Text */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl text-gray-900 mb-12 tracking-wider font-light">
            About
          </h2>

          <div className="space-y-8 text-base text-gray-500 font-light leading-relaxed">
            <p>
              I’m a self-driven developer focused on building practical digital products that
              solve real problems. Through independent projects and client work, I’ve developed
              experience in modern web development and mobile application design.
            </p>

            <p>
              Alongside my development work, I currently work at Apple, where I’m part of a
              fast-paced technology environment that constantly exposes me to how high-quality
              products and customer-focused solutions are built.
            </p>

            <p>
              I am currently preparing for undergraduate study in Computer Science, with a strong
              interest in software engineering, system design, and scalable application
              development.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 
                           bg-gray-50 border border-gray-200 rounded-lg 
                           hover:shadow-md hover:border-gray-300 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + index * 0.1 }}
              >
                <div className="text-2xl text-gray-900 font-light tracking-wide">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-gray-400 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-xs tracking-widest uppercase text-gray-400 mb-8 font-light">
            Current Focus
          </h3>

          <ul className="space-y-4 inline-block text-left">
            {currentFocus.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 flex items-start font-light text-sm"
              >
                <span className="mr-3 text-gray-300">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
