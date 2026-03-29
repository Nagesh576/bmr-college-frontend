"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Book, Bell, LogOut } from "lucide-react";

export default function StudentDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Student Login</h1>
            <p className="text-foreground/60 mt-2">Welcome back to B.M.R College Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Student ID/Email</label>
              <input 
                type="text" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700" 
                placeholder="student@bmr.edu.in" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700" 
                placeholder="••••••••" 
              />
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-primary-500">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-primary-500/50">
              Login
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <motion.aside 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-64 glass rounded-3xl p-6 flex flex-col shadow-lg border border-gray-100 dark:border-gray-800"
      >
        <div className="flex flex-col items-center mb-8 pt-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-400 to-secondary-400 p-1 mb-4">
            <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-primary-500">
              <User size={40} />
            </div>
          </div>
          <h2 className="font-bold text-lg">Student Doe</h2>
          <p className="text-sm text-foreground/60">B.Sc (Physical Sciences)</p>
          <p className="text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full mt-2">ID: BMR24001</p>
        </div>

        <nav className="flex-1 space-y-2">
          <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-xl font-medium">
            <User size={18} /> <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-foreground/70 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <Book size={18} /> <span>My Courses</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 text-foreground/70 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-xl font-medium transition-colors">
            <Bell size={18} /> <span>Notifications</span>
          </a>
        </nav>

        <button onClick={handleLogout} className="mt-8 flex items-center justify-center space-x-2 w-full py-3 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-medium">
          <LogOut size={18} /> <span>Logout</span>
        </button>
      </motion.aside>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 space-y-8"
      >
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Current Semester Overivew</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50">
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Attendance</p>
              <p className="text-3xl font-bold">85%</p>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800/50">
              <p className="text-green-600 dark:text-green-400 font-medium mb-1">CGPA</p>
              <p className="text-3xl font-bold">8.4</p>
            </div>
            <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-100 dark:border-orange-800/50">
              <p className="text-orange-600 dark:text-orange-400 font-medium mb-1">Fee Dues</p>
              <p className="text-3xl font-bold">₹0</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Recent Notifications</h2>
          <div className="space-y-4">
             <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary-500"></div>
                <div>
                  <h4 className="font-bold">Semester Registration Open</h4>
                  <p className="text-sm text-foreground/70">Please complete your course registration for the upcoming semester by 15th Aug.</p>
                </div>
             </div>
             <div className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start space-x-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="font-bold text-foreground/80">Library Due Notice</h4>
                  <p className="text-sm text-foreground/70">Return "Advanced Physics" by weekend to avoid fines.</p>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
