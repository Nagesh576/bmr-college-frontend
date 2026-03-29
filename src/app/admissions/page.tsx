"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, FileText, CheckCircle } from "lucide-react";

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to backend /api/data/admission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          Admissions 2026
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Start your journey with B.M.R Degree College. Fill out the application form below to apply for your desired undergraduate program.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Information Panel */}
        <motion.div 
          className="lg:col-span-1 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-3xl border border-primary-100 dark:border-primary-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="text-primary-500" />
              Eligibility Criteria
            </h3>
            <ul className="space-y-3 text-foreground/80 my-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-500 mt-1 flex-shrink-0" size={18} />
                <span>Passed 10+2 or equivalent examination from a recognized board.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-500 mt-1 flex-shrink-0" size={18} />
                <span>Minimum 50% aggregate marks (45% for reserved categories).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-secondary-500 mt-1 flex-shrink-0" size={18} />
                <span>Subject prerequisites based on the chosen B.Sc/B.Com/B.A stream.</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-primary-200 dark:border-primary-800">
              <h4 className="font-bold mb-2">Application Fee</h4>
              <p className="text-2xl font-extrabold text-primary-600 dark:text-primary-400">₹500 <span className="text-sm font-normal text-foreground/60">/ application</span></p>
            </div>
          </div>
        </motion.div>

        {/* Admission Form */}
        <motion.div 
          className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {submitted ? (
            <div className="absolute inset-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle className="text-green-500 w-12 h-12" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-md">
                Thank you for applying to B.M.R Degree College. We have received your application and our admissions team will contact you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-bold hover:bg-primary-600 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : null}

          <h2 className="text-2xl font-bold mb-6">Online Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name (As per 10th Marks Memo)</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mobile Number</label>
                <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Course of Interest</label>
                <select required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700">
                  <option value="">Select a Program</option>
                  <option value="bsc_phy">B.Sc (Physical Sciences)</option>
                  <option value="bsc_life">B.Sc (Life Sciences)</option>
                  <option value="bcom_comp">B.Com (Computer Applications)</option>
                  <option value="bcom_gen">B.Com (General)</option>
                  <option value="ba">B.A (History, Econ, Pol Sci)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Previous Education (10+2 / Inter)</label>
                <select required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700">
                  <option value="">Select Stream</option>
                  <option value="mpc">MPC (Maths, Physics, Chemistry)</option>
                  <option value="bipc">BiPC (Biology, Physics, Chemistry)</option>
                  <option value="cec">CEC (Civics, Economics, Commerce)</option>
                  <option value="mec">MEC (Maths, Economics, Commerce)</option>
                  <option value="hec">HEC (History, Economics, Commerce)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Percentage / CGPA</label>
                <input required type="number" step="0.1" max="100" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all dark:border-slate-700" placeholder="e.g. 85.5 or 9.2" />
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 text-white rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-primary-500/50 mt-4">
              <span>Submit Application</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
