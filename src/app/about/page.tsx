"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-200 rounded-full blur-2xl"></div>
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
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black">
                About
                <br />
                Artico Idea
              </h1>
              <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Creative Excellence Since 2000</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Artico Idea is a premier creative agency based in Ahmedabad, India, with extensive experience 
                working across India and globally. We are passionate about helping brands grow through 
                innovative design, strategic marketing, and artistic excellence.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a vision to transform how brands communicate with their audiences. 
                Today, we continue to push boundaries in creativity, combining traditional art forms with 
                cutting-edge digital technologies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To create extraordinary brand experiences that inspire, engage, and drive meaningful connections 
                    between businesses and their audiences.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the leading creative force that transforms ideas into powerful visual narratives 
                    that resonate globally while staying rooted in artistic authenticity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-black rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s bring your creative vision to life with our expertise and passion.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-block"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}