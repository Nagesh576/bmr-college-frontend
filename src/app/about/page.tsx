"use client";

import { motion } from "framer-motion";
import { Award, Target, Eye, BookOpen } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          About B.M.R Degree College
        </h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          A legacy of excellence since our founding. We are dedicated to nurturing young minds and empowering them with the tools they need to succeed in the modern world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div 
          className="glass p-8 rounded-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-500">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            To be a premier institution of higher education recognized globally for excellence in teaching, learning, and research, and to empower students from diverse backgrounds to achieve their full potential.
          </p>
        </motion.div>

        <motion.div 
          className="glass p-8 rounded-2xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-secondary-100 dark:bg-secondary-900 rounded-lg text-secondary-500">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-foreground/80 leading-relaxed">
            To provide comprehensive education and infrastructure, cultivate ethical values, and foster innovation, ensuring every student develops into a responsible and capable professional.
          </p>
        </motion.div>
      </div>

      {/* Chairman / Principal Message */}
      <motion.section 
        className="mb-20 bg-primary-50 dark:bg-primary-950/30 rounded-3xl p-8 md:p-12 border border-primary-100 dark:border-primary-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Placeholder for Principal Image */}
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-primary-400 to-secondary-400 p-2 shadow-2xl overflow-hidden">
               <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-300">
                 <Award size={64} />
               </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-2">Message from the Chairman</h2>
            <h3 className="text-xl text-primary-500 mb-6 font-medium">Dr. B.M.R, Founder</h3>
            <blockquote className="text-lg text-foreground/80 italic border-l-4 border-primary-500 pl-4 mb-6">
              "Education is not just about academic excellence, but also about building character, cultivating skills, and preparing our youth to tackle global challenges. At B.M.R Degree College, we leave no stone unturned in providing top-notch facilities and mentorship."
            </blockquote>
          </div>
        </div>
      </motion.section>

    </main>
  );
}
