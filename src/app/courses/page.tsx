"use client";

import { motion } from "framer-motion";
import { Code, BookText, Calculator, Microscope, Briefcase, BookOpen } from "lucide-react";
import Link from 'next/link';

export default function Courses() {
  const programs = [
    {
      title: "B.Sc (Physical Sciences)",
      description: "Mathematics, Physics, Computer Science",
      duration: "3 Years",
      icon: <Calculator size={32} />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "B.Sc (Life Sciences)",
      description: "Botany, Zoology, Chemistry",
      duration: "3 Years",
      icon: <Microscope size={32} />,
      color: "from-green-400 to-green-600"
    },
    {
      title: "B.Com (Computer Applications)",
      description: "Commerce with Computer Applications focus",
      duration: "3 Years",
      icon: <Briefcase size={32} />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "B.Com (General)",
      description: "Core Commerce and Accountancy",
      duration: "3 Years",
      icon: <BookText size={32} />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "B.A (History, Economics, Pol. Science)",
      description: "Arts and Humanities focused on societal studies",
      duration: "3 Years",
      icon: <BookOpen size={32} />,
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          Academic Programs
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Explore our wide range of undergraduate degree programs designed to equip you with the knowledge and skills for a successful career.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((prog, idx) => (
          <motion.div
            key={idx}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className={`h-2 w-full bg-gradient-to-r ${prog.color}`}></div>
            <div className="p-8">
              <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${prog.color} group-hover:scale-110 transition-transform duration-300`}>
                {prog.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{prog.title}</h3>
              <p className="text-foreground/60 mb-6 min-h-[48px]">{prog.description}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                  {prog.duration}
                </span>
                <Link href="/admissions" className="text-primary-500 hover:text-primary-600 font-semibold text-sm flex items-center">
                  Apply Now →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
