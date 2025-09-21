"use client";
import { motion } from 'framer-motion';
import AnimatedTextLogo from "@/components/AnimatedTextLogo";

const skills = [
  'Logos',
  'Brand Development',
  'Print Identity',
  'Resin Flooring',
  'Product Photography',
  'Fashion Photography',
  'Corporate Video/Shoot',
  'Advertising Film Production',
  'Short Film',
  'Brochures',
  'Catalogues',
  'Digital Identity',
  'Digital Marketing',
  '3D Visualization',
  'Photoshop Visual Creations',
  'Poster Design',
  'Brand Campaign Design',
  'Exhibition Stand Design',
  'Interior Designing',
  'Art (Painting)',
  'The Art Consultant',
  'And Many More',
];

export default function Home() {
  return (
    <div className="bg-gray-900 relative overflow-hidden min-h-screen">
      {/* Background decorative elements (dark theme) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-700 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800 rounded-full blur-2xl"></div>
      </div>

      <main className="relative z-10">
        {/* Full-width AnimatedTextLogo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <AnimatedTextLogo />
        </motion.div>

        {/* Constrained content section */}
        <div className="px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            {/* Hero Section */}
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Ahmedabad, India
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Global Impact
                </p>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light">
                Transforming brands through innovative design, cutting-edge technology, and artistic excellence. 
                <span className="font-semibold text-white">
                  Let&apos;s create something extraordinary together.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full shadow-2xl overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/portfolio"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                View Portfolio
              </motion.a>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Creative <span className="text-gray-300">Expertise</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive creative solutions spanning design, technology, and artistic innovation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-white/20"
                >
                  <div className="absolute inset-0 bg-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-white rounded-lg mb-3 flex items-center justify-center">
                      <div className="w-4 h-4 bg-black rounded-sm"></div>
                    </div>
                    <h3 className="font-semibold text-white text-sm leading-snug">
                      {skill}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { number: "25+", label: "Years Experience", desc: "Crafting exceptional designs" },
              { number: "500+", label: "Projects Completed", desc: "Across India & globally" },
              { number: "20+", label: "Creative Services", desc: "From concept to completion" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-gray-800/60 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-700/50"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-400">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center bg-black rounded-3xl p-12 text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s collaborate to bring your vision to life with cutting-edge design and innovation.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </motion.div>
        </div>
      </main>
    </div>
  );
}
