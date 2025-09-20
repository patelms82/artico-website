"use client";
import { motion } from 'framer-motion';

export default function Portfolio() {
  const portfolioCategories = [
    'Brand Identity Design',
    'Product Photography',
    'Fashion Photography',
    'Corporate Videos',
    'Advertising Campaigns',
    'Exhibition Stands',
    'Interior Design Projects',
    'Art & Paintings',
    'Digital Marketing Campaigns',
    'Print Design Projects'
  ];

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
                Our
                <br />
                Portfolio
              </h1>
              <div className="w-24 h-1 bg-black mx-auto mb-6 rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Discover our creative journey through exceptional projects that showcase innovation, 
                artistic excellence, and strategic thinking across diverse industries.
              </p>
            </motion.div>
          </div>

          {/* Portfolio Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">Coming Soon</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 mb-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Portfolio Coming Soon</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We&apos;re curating an amazing showcase of our best work across branding, photography, 
                design, and digital marketing. Our portfolio will feature detailed case studies, 
                before-and-after transformations, and the creative process behind each project.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-black rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Create Your Next Project
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Ready to join our portfolio of successful brands and creative achievements?
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-block"
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}