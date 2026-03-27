"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl text-gray-900 mb-6 tracking-wider font-light">
            Get In Touch
          </h2>
          <p className="text-base text-gray-500 font-light">
            Feel free to reach out for opportunities, collaborations, or just to connect.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-4">

          {/* Email */}
          <motion.a
            href="mailto:davidobaje123@gmail.com"
            className="flex items-center justify-between p-6 border border-gray-200 
                       bg-white rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 
                       transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center gap-4">
              <Mail className="size-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <span className="text-sm text-gray-600 font-light">Email</span>
            </div>
            <div className="text-sm text-gray-400 font-light">
              davidobaje123@gmail.com
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/DavidObaje"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 border border-gray-200 
                       bg-white rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 
                       transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center gap-4">
              <Github className="size-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <span className="text-sm text-gray-600 font-light">GitHub</span>
            </div>
            <div className="text-sm text-gray-400 font-light">
              github.com/DavidObaje
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="http://www.linkedin.com/in/david-obaje-3037002b1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 border border-gray-200 
                       bg-white rounded-lg shadow-sm hover:shadow-md hover:border-gray-300 
                       transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center gap-4">
              <Linkedin className="size-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <span className="text-sm text-gray-600 font-light">LinkedIn</span>
            </div>
            <div className="text-sm text-gray-400 font-light">
              linkedin.com/in/david
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
 