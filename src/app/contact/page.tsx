"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [settings, setSettings] = useState({
    address: "B.M.R Degree College, Main Road, Gajwel, Siddipet Dist, Telangana 502278",
    phone: "+91 98765 43210",
    email: "info@bmrcollege.edu.in"
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/settings`);
      const data = await res.json();
      if (res.ok) setSettings(data);
    } catch (error) {
      console.error("Failed to fetch settings", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${API_URL}/data/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus('success');
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
          Contact Us
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out for admissions, general inquiries, or just to say hello!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info & Map */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-2xl flex items-start space-x-4">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 text-primary-500 rounded-lg">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Campus Location</h3>
              <p className="text-foreground/70 whitespace-pre-line">
                {settings.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900 text-secondary-500 rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Phone</h3>
              <p className="text-foreground/70">{settings.phone}</p>
            </div>
            <div className="glass p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="p-3 bg-primary-100 dark:bg-primary-900 text-primary-500 rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <p className="text-foreground/70">{settings.email}</p>
            </div>
          </div>

          {/* Google Maps iFrame */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306407.60524775967!2d78.71326720019948!3d17.750603301967352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc8712ead0f079%3A0x71911a5674dc84d2!2sB.M.R%20Degree%20College!5e1!3m2!1sen!2sin!4v1774755761618!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
        >
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-foreground/60 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-primary-500 text-white rounded-lg font-bold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="text" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none" 
                    placeholder="Admission Query" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 outline-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-primary-500/50 disabled:opacity-50"
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  <Send size={18} />
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            </>
          )}
        </motion.div>
      </div>
    </main>
  );
}
