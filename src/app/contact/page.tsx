"use client";
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl"></div>
      </div>

      <main className="relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get In
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your brand? Let&apos;s collaborate and bring your creative vision to life 
                with our expertise and passion for excellence.
              </p>
            </motion.div>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl">
                  <FaEnvelope />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">Send us a message anytime</p>
                </div>
              </div>
              <a 
                href="mailto:patelms82@gmail.com"
                className="text-lg text-indigo-600 hover:text-indigo-800 font-semibold block mb-4"
              >
                patelms82@gmail.com
              </a>
              <p className="text-gray-700">
                Whether you have a project in mind or just want to say hello, 
                we&apos;d love to hear from you!
              </p>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl">
                  <FaLinkedin />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-800">LinkedIn</h3>
                  <p className="text-gray-600">Connect professionally</p>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/in/mukesh-patel-9a270420/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:text-blue-800 font-semibold block mb-4"
              >
                mukesh-patel-9a270420
              </a>
              <p className="text-gray-700">
                Connect with us on LinkedIn for professional networking 
                and business opportunities.
              </p>
            </motion.div>
          </motion.div>

          {/* Location & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">Our Location</h3>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Ahmedabad, India</strong>
                </p>
                <p className="text-gray-600">
                  Based in the vibrant city of Ahmedabad, we serve clients 
                  across India and globally, bringing creativity and 
                  innovation to every project.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    Creative excellence since 2000
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Global experience, local expertise
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    Comprehensive creative solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Personalized service approach
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s schedule a consultation and discuss how we can bring your vision to life.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:patelms82@gmail.com"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-block"
              >
                Send Message Now
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}