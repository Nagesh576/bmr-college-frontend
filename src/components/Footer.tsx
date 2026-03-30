import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-6">
              B.M.R Degree College
            </h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Empowering students with quality education, modern infrastructure, and a vibrant campus life. Excellence since our establishment.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Facebook size={18} />
              </a> */}
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Twitter size={18} />
              </a> */}
              <a href="https://www.instagram.com/bmr_degree_college_gajwel1/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary-500 transition-colors">
                <Instagram size={18} />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Linkedin size={18} />
              </a> */}
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
                <span>B.M.R Degree College, Main Road, Gajwel, Siddipet Dist, Telangana 502278</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary-400 flex-shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary-400 flex-shrink-0" size={18} />
                <span>info@bmrcollege.edu.in</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} B.M.R Degree College. All rights reserved.</p>
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
