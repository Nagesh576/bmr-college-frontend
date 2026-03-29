"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 -z-20"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl -z-10 mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary-500/20 rounded-full blur-3xl -z-10 mix-blend-screen"
          animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl glass p-8 md:p-12 rounded-3xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-primary-300">Leaders</span> of Tomorrow
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            B.M.R Degree College offers world-class education with outstanding infrastructure, experienced faculty, and strong placement support in Gajwel.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/admissions" className="px-8 py-4 rounded-full bg-white text-primary-900 font-bold hover:bg-white/90 transition-colors flex items-center justify-center space-x-2">
              <span>Apply Now 2026</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/courses" className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose B.M.R College?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen className="text-primary-500" size={32} />, title: 'Quality Education', desc: 'Expert faculty and comprehensive curriculum aligning with industry standards.' },
              { icon: <Users className="text-secondary-500" size={32} />, title: 'Vibrant Campus', desc: 'A lively environment fostering personal growth, extracurriculars, and leadership.' },
              { icon: <Trophy className="text-primary-500" size={32} />, title: 'Top Placements', desc: 'Dedicated placement cell ensuring amazing career kicks-starts for students.' },
              { icon: <GraduationCap className="text-secondary-500" size={32} />, title: 'Modern Facilities', desc: 'Well-equipped labs, vast libraries, and high-tech digital classrooms.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-primary-50/50 dark:bg-primary-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800/50 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats or CTA */}
      <section className="w-full py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '20+', label: 'Years of Excellence' },
              { num: '5000+', label: 'Successful Alumni' },
              { num: '50+', label: 'Expert Faculty' },
              { num: '100%', label: 'Placement Assistance' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-secondary-300 mb-2">{stat.num}</div>
                <div className="text-lg text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
