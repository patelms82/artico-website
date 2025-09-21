"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function About() {
  return (
    <div className="bg-black relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-900 rounded-full blur-2xl"></div>
      </div>

      <main className="relative z-10 px-4 py-20">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >


          {/* Founder Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <Image
                  src="/images/mukesh_photo.jpg"
                  alt="Mukesh Patel - Founder of Artico Imagination"
                  width={300}
                  height={400}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Mukesh Patel</h2>
              <p className="text-2xl text-white font-semibold mb-6">Founder</p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Visionary leader and creative director behind Artico Imagination, bringing over two decades 
                of artistic excellence and strategic innovation to transform ideas into powerful visual narratives.
              </p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white mb-6 text-center">Creative Excellence Since 2000</h3>
              
              <p className="text-base text-gray-300 leading-relaxed">
                Artico Imagination is a premier creative agency founded and led by <span className="text-white font-semibold">Mukesh Patel</span>, 
                based in Ahmedabad, India, with extensive experience working across India and globally. 
                Under his visionary leadership, we are passionate about helping brands grow through 
                innovative design, strategic marketing, and artistic excellence.
              </p>
              
              <p className="text-base text-gray-300 leading-relaxed">
                Our journey began with Mukesh&apos;s vision to transform how brands communicate with their audiences. 
                With over two decades of creative expertise, he has built Artico Imagination into a trusted partner 
                for businesses seeking exceptional design solutions. Today, we continue to push boundaries in 
                creativity, combining traditional art forms with cutting-edge digital technologies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
                  <p className="text-gray-300">
                    To create extraordinary brand experiences that inspire, engage, and drive meaningful connections 
                    between businesses and their audiences.
                  </p>
                </div>
                
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
                  <p className="text-gray-300">
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
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Work Together?
            </h3>
            <p className="text-xl mb-8 opacity-90 text-white">
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
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}