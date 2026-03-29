"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5 dark:bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              BMR College
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${pathname === link.path ? 'text-primary-500 font-semibold' : 'text-foreground/80'}`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/student" className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 text-center flex flex-col mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${pathname === link.path ? 'bg-primary-500/10 text-primary-500' : 'text-foreground hover:bg-white/5'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/student" onClick={() => setIsOpen(false)} className="mx-auto mt-4 px-6 py-2 rounded-full bg-primary-500 text-white font-medium inline-block">
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
