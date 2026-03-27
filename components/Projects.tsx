"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  category: string;
  overview: string;
  images: string[]; // <-- UPDATED
  aspect: "wide" | "tall";
  keyContributions?: string[];
  coreFeatures?: string[];
  technicalHighlights: string[];
  architectureNote?: string;
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Professional Website for Local Care Provider",
    category: "Client Work",
    overview:
      "Designed and developed a modern, responsive website to establish a professional online presence and improve customer enquiries.",
    images: ["/careWebsite.png" ],
    aspect: "wide" ,
    keyContributions: [
      "Designed clean, user-focused interface",
      "Built using Next.js and React",
      "Implemented responsive layout for all devices",
      "Integrated contact form for enquiries",
      "Deployed to production using Vercel",
    ],
    technicalHighlights: [
      "Component-based architecture",
      "Optimised performance and page loading",
      "Structured routing and reusable UI components",
      "Version-controlled using Git",

      
    ],
    architectureNote:
    "Structured using reusable components and clear routing to ensure maintainability and efficient updates.",
    liveLink: "https://www.dorcashealthandcare.co.uk",
  },
  {
    title: "Habit Tracker Mobile Application",
    category: "Mobile Development",
    overview:
      "A mobile productivity app that allows users to create accounts, track daily habits, and store progress securely using local persistent storage.",
    images: [
      "/habitApp1.PNG",
      "/habitApp2.PNG",
      "/habitApp3.PNG",
    ],
    aspect: "tall" ,
    coreFeatures: [
      "User authentication",
      "Persistent data storage using CoreData",
      "Habit creation and editing",
      "Daily progress tracking",
      "Clean, intuitive mobile interface",
    ],
    technicalHighlights: [
      "Designed structured data models for habits and logs",
      "Implemented local database persistence",
      "Managed application state and user sessions",
      "Applied MVC/MVVM design principles",
      "Focused on clean UI and user experience",
    ],
    architectureNote:
      "Structured with separation between data models, views, and logic to ensure maintainability and scalability.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8">
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
            Featured Projects
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto font-light">
            A selection of projects demonstrating practical application development and technical proficiency.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-white/80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >

              {/* Three Images */}
              <div
                className={`grid gap-4 p-6 border-b border-gray-200 bg-gray-50 ${
                  project.images.length === 1 ? "grid-cols-1" : "grid-cols-3"
                }`}
              >
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className={`w-full overflow-hidden rounded-md flex items-center justify-center bg-white
                      ${
                        project.aspect === "wide"
                          ? "aspect-video"      // 16:9 for desktop screenshots
                          : "aspect-[9/16]"     // tall for phone screenshots
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>


              {/* Project Content */}
              <div className="p-12 md:p-16">
                <div className="mb-8">
                  <span className="text-xs tracking-widest uppercase text-gray-400 mb-3 block font-light">
                    {project.category}
                  </span>
                  <h3 className="text-xl text-gray-900 mb-6 font-light tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-8 font-light leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Key Contributions */}
                {project.keyContributions && (
                  <div className="mb-8">
                    <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-light">
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {project.keyContributions.map((item, i) => (
                        <li key={i} className="text-gray-500 flex items-start font-light text-sm">
                          <span className="mr-3 text-gray-300">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Core Features */}
                {project.coreFeatures && (
                  <div className="mb-8">
                    <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-light">
                      Core Features
                    </h4>
                    <ul className="space-y-3">
                      {project.coreFeatures.map((item, i) => (
                        <li key={i} className="text-gray-500 flex items-start font-light text-sm">
                          <span className="mr-3 text-gray-300">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Highlights */}
                <div className="mb-8">
                  <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-light">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-3">
                    {project.technicalHighlights.map((item, i) => (
                      <li key={i} className="text-gray-500 flex items-start font-light text-sm">
                        <span className="mr-3 text-gray-300">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Note */}
                {project.architectureNote && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-2 border-gray-300">
                    <p className="text-sm text-gray-500 font-light italic leading-relaxed">
                      {project.architectureNote}
                    </p>
                  </div>
                )}

                {/* Links */}
                {(project.liveLink || project.githubLink) && (
                  <div className="flex flex-wrap gap-8 pt-6">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-900 hover:text-black transition-all font-light"
                      >
                        <ExternalLink className="size-3" />
                        <span>View Live</span>
                      </a>

                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-900 hover:text-black transition-all font-light"
                      >
                        <Github className="size-3" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
