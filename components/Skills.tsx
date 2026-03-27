"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive design principles"],
  },
  {
    title: "Mobile Development",
    skills: ["Swift", "CoreData", "iOS application architecture"],
  },
  {
    title: "Backend & Data Concepts",
    skills: ["Authentication systems", "Persistent storage", "REST API fundamentals"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Vercel deployment", "Version control workflows"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl text-gray-900 mb-6 tracking-wider font-light">
            Technical Skills
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto font-light">
            Technologies and tools I work with to build modern applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm 
                         hover:shadow-md hover:border-gray-300 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <h3 className="text-xs tracking-widest uppercase text-gray-600 font-light mb-6">
                {category.title}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-gray-600 flex items-start font-light text-sm"
                  >
                    <span className="mr-3 text-gray-300">—</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
