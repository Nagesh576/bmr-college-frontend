'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [settings, setSettings] = useState({
    collegeName: "B.M.R Degree College",
    address: "B.M.R Degree College, Main Road, Gajwel, Siddipet Dist, Telangana 502278",
    phone: "+91 98765 43210",
    email: "info@bmrcollege.edu.in",
    instagramUrl: "https://www.instagram.com/bmr_degree_college_gajwel1/",
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: ""
  });

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

  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-6">
              {settings.collegeName}
            </h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Empowering students with quality education, modern infrastructure, and a vibrant campus life. Excellence since our establishment.
            </p>
            <div className="flex space-x-4">
              {settings.facebookUrl && (
                <a href={settings.facebookUrl} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <Facebook size={18} />
                </a>
              )}
              {settings.twitterUrl && (
                <a href={settings.twitterUrl} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <Twitter size={18} />
                </a>
              )}
              {settings.instagramUrl && (
                <a href={settings.instagramUrl} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary-500 transition-colors">
                  <Instagram size={18} />
                </a>
              )}
              {settings.linkedinUrl && (
                <a href={settings.linkedinUrl} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-primary-400 transition-colors">Programs & Courses</Link></li>
              <li><Link href="/admissions" className="hover:text-primary-400 transition-colors">Admissions 2026</Link></li>
              <li><Link href="/events" className="hover:text-primary-400 transition-colors">Events & Notices</Link></li>
              <li><Link href="/gallery" className="hover:text-primary-400 transition-colors">Campus Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/student" className="hover:text-secondary-400 transition-colors">Student Portal</Link></li>
              <li><Link href="#" className="hover:text-secondary-400 transition-colors">Alumni Network</Link></li>
              <li><Link href="#" className="hover:text-secondary-400 transition-colors">Placements</Link></li>
              <li><Link href="#" className="hover:text-secondary-400 transition-colors">Help Desk</Link></li>
              <li><Link href="/admin" className="hover:text-secondary-400 transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                <span className="whitespace-pre-line">{settings.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary-400 flex-shrink-0" size={18} />
                <span>{settings.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary-400 flex-shrink-0" size={18} />
                <span>{settings.email}</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} {settings.collegeName}. All rights reserved.</p>
          <p>Developed by Nagesh Rudraram</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
