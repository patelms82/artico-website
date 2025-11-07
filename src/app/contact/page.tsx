"use client";
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Contact() {
  return (
    <div className="bg-black relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800 rounded-full blur-2xl"></div>
      </div>

      <main className="relative z-10 px-4 py-20">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
                Get In
                <br />
                Touch
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your brand? Let&apos;s collaborate and bring your creative vision to life 
                with our expertise and passion for excellence.
              </p>
            </motion.div>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Email Card */}
            <motion.a
              href="mailto:info@nvmdstudio.com"
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-800 block"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-900 text-2xl">
                  <FaEnvelope />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">Email Us</h3>
                  <p className="text-gray-400">Send us a message anytime</p>
                </div>
              </div>
              <div className="text-lg text-white hover:text-gray-300 font-semibold block mb-4">
                info@nvmdstudio.com
              </div>
              <p className="text-gray-300">
                Whether you have a project in mind or just want to say hello, 
                we&apos;d love to hear from you!
              </p>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/mukesh-patel-9a270420/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-800 block"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-900 text-2xl">
                  <FaLinkedin />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">LinkedIn</h3>
                  <p className="text-gray-400">Connect professionally</p>
                </div>
              </div>
              <div className="text-lg text-white hover:text-gray-300 font-semibold block mb-4">
                mukesh-patel-9a270420
              </div>
              <p className="text-gray-300">
                Connect with us on LinkedIn for professional networking 
                and business opportunities.
              </p>
            </motion.a>
          </motion.div>

          {/* Location & Info */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Our Location</h3>
                </div>
                <p className="text-lg text-gray-300 mb-4">
                  <strong>Ahmedabad, India</strong>
                </p>
                <p className="text-gray-400">
                  Based in the vibrant city of Ahmedabad, we serve clients 
                  across India and globally, bringing creativity and 
                  innovation to every project.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Creative excellence since 2000
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                    Global experience, local expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    Comprehensive creative solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    Personalized service approach
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className="p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s schedule a consultation and discuss how we can bring your vision to life.
              </p>
              <a
                href="mailto:info@nvmdstudio.com"
                className="bg-gradient-to-r from-white to-gray-100 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:from-gray-900 hover:to-black hover:text-white border border-transparent hover:border-gray-600 inline-block"
              >
                Send Message Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}