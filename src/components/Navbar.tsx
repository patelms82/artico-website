"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Clients', href: '/clients' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
  { name: 'Profile', href: '/profile' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="bg-white shadow-lg fixed w-full z-50 top-0 left-0 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/artico_logo_black.png"
              alt="Artico Imagination Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors duration-200 ${active ? 'text-indigo-700' : 'text-gray-700 hover:text-purple-600'}`}
                  >
                    {link.name}
                  </Link>
                  {/* Static underline for active */}
                  {active && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-full" />
                  )}
                  {/* Hover underline (only shows when not active) */}
                  {!active && (
                    <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Toggle navigation menu</span>
              
              {/* Hamburger lines */}
              <motion.span
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.3 }}
                className="block absolute h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) => {
                  const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="relative"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 ${active ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'}`}
                      >
                        {link.name}
                      </Link>
                      {active && (
                        <span className="absolute left-3 right-3 bottom-1 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-full" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
