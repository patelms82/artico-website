"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function NotFound() {
  return (
    <div className="bg-black relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-900 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800 rounded-full blur-2xl opacity-30"></div>
      </div>

      <main className="relative z-10 px-4 py-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-black text-white mb-4 leading-none">
              404
            </h1>
            <div className="w-32 h-1 bg-white mx-auto rounded-full opacity-80"></div>
          </motion.div>

          {/* Creative Headlines */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Oops! This Page Got Lost
              <br />
              <span className="text-2xl md:text-3xl text-gray-300 font-normal">
                in Our Creative Universe
              </span>
            </h2>
          </motion.div>

          {/* Creative Taglines */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              Even our best designers couldn&apos;t find this page! But don&apos;t worry, 
              we&apos;ve got plenty of amazing content waiting for you.
            </p>
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-gray-800/50">
              <p className="text-gray-400 italic">
                &ldquo;Every great design starts with an even better story. Let&apos;s write yours.&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2">- Artico Imagination Creative Team</p>
            </div>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/30">
              <div className="flex items-center justify-center mb-4">
                <FaSearch className="text-2xl text-gray-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Looking for something specific?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Our Services
                </Link>
                <Link href="/portfolio" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Portfolio Gallery
                </Link>
                <Link href="/about" className="text-green-400 hover:text-green-300 transition-colors">
                  About Artico Imagination
                </Link>
                <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link
                href="/"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 inline-flex items-center"
              >
                <FaHome className="mr-3" />
                Take Me Home
              </Link>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <button
                onClick={() => window.history.back()}
                className="bg-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-600 transition-all duration-200 inline-flex items-center"
              >
                <FaArrowLeft className="mr-3" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Fun Creative Element */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                While You&apos;re Here...
              </h3>
              <p className="text-gray-300 mb-6">
                Did you know we&apos;ve been creating amazing designs since 2000? 
                That&apos;s over 25 years of turning creative visions into reality!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">25+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">20+</div>
                  <div className="text-sm text-gray-400">Creative Services</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}