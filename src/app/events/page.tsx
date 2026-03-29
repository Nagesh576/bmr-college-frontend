"use client";

import { motion } from "framer-motion";
import { CalendarDays, Bell, ArrowRight } from "lucide-react";

export default function Events() {
  const notices = [
    { title: "Admissions Open for 2026-27", date: "June 10, 2026", urgent: true, desc: "Applications are now invited for all B.A, B.Com, and B.Sc programs." },
    { title: "Mid-Term Examination Schedule", date: "July 01, 2026", urgent: false, desc: "The schedule for intermediate examinations has been posted in the student portal." },
    { title: "Campus Placement Drive", date: "July 15, 2026", urgent: false, desc: "Top IT and Pharmaceutical companies are visiting for final year students." },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          Events & Notices
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Stay updated with the latest college announcements, upcoming events, and academic schedules.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Notices Board */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-lg">
              <Bell size={24} />
            </div>
            <h2 className="text-2xl font-bold">Important Notices</h2>
          </div>
          
          <div className="space-y-4">
            {notices.map((notice, i) => (
              <div key={i} className="glass p-6 rounded-2xl border-l-4 border flex flex-col hover:shadow-lg transition-shadow" style={{ borderLeftColor: notice.urgent ? '#ef4444' : '#3b82f6' }}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg leading-tight">{notice.title}</h3>
                  {notice.urgent && <span className="bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-1 rounded">URGENT</span>}
                </div>
                <p className="text-foreground/70 mb-4 text-sm">{notice.desc}</p>
                <span className="text-xs font-medium text-foreground/50 bg-foreground/5 px-2 py-1 rounded self-start">
                  Posted: {notice.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-lg">
              <CalendarDays size={24} />
            </div>
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
          </div>

          <div className="space-y-6 relative border-l-2 border-primary-200 dark:border-primary-800 ml-6 pl-8">
            {/* Event Item */}
            <div className="relative">
              <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-background"></div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <span className="text-sm font-bold text-primary-500 mb-1 block">Aug 15, 2026</span>
                <h3 className="font-bold text-lg mb-2">Independence Day Celebrations</h3>
                <p className="text-foreground/70 text-sm mb-4">Join us for flag hoisting followed by cultural performances by the students.</p>
                <button className="text-primary-600 dark:text-primary-400 text-sm font-medium flex items-center space-x-1 hover:underline">
                  <span>View Details</span> <ArrowRight size={14} />
                </button>
              </div>
            </div>

             {/* Event Item */}
             <div className="relative">
              <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-secondary-500 ring-4 ring-background"></div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-secondary-300 dark:hover:border-secondary-700 transition-colors">
                <span className="text-sm font-bold text-secondary-500 mb-1 block">Sep 05, 2026</span>
                <h3 className="text-xl font-bold mb-2">Orientation Day / Teachers Day</h3>
                <p className="text-foreground/70 text-sm mb-4">Welcoming the new batch of 2026 and honoring our esteemed faculty members.</p>
                <button className="text-secondary-600 dark:text-secondary-400 text-sm font-medium flex items-center space-x-1 hover:underline">
                  <span>View Details</span> <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
