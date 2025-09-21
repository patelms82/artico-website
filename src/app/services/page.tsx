"use client";
import { motion } from 'framer-motion';
import { 
  FaPalette, 
  FaCamera, 
  FaPrint, 
  FaMagic, 
  FaCogs,
  FaCircle 
} from 'react-icons/fa';

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Services() {
  const serviceCategories = [
    {
      category: "Brand & Identity",
      icon: FaPalette,
      iconColor: "text-blue-400",
      services: [
        'Logo Design',
        'Brand Development',
        'Print Identity',
        'Digital Identity',
        'Brand Campaign Design'
      ]
    },
    {
      category: "Photography & Video",
      icon: FaCamera,
      iconColor: "text-purple-400",
      services: [
        'Product Photography',
        'Fashion Photography',
        'Corporate Video/Shoot',
        'Advertising Film Production',
        'Short Film'
      ]
    },
    {
      category: "Print & Marketing",
      icon: FaPrint,
      iconColor: "text-green-400",
      services: [
        'Brochures',
        'Catalogues',
        'Poster Design',
        'Digital Marketing',
        'Exhibition Stand Design'
      ]
    },
    {
      category: "Creative & Visual",
      icon: FaMagic,
      iconColor: "text-yellow-400",
      services: [
        '3D Visualization',
        'Photoshop Visual Creations',
        'Interior Designing',
        'Art & Painting',
        'The Art Consultant'
      ]
    },
    {
      category: "Specialized Services",
      icon: FaCogs,
      iconColor: "text-orange-400",
      services: [
        'Resin Flooring',
        'Custom Solutions',
        'Creative Consulting',
        'Project Management',
        'And Many More'
      ]
    }
  ];

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
                Our
                <br />
                Services
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
                Comprehensive creative solutions organized by expertise to elevate your brand and transform your vision into reality.
              </p>
            </motion.div>
          </div>
        
          {/* Services Categories */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.4 + categoryIndex * 0.1 }}
                className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-800/50"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`text-3xl mr-4 ${category.iconColor}`}>
                    <category.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center py-2 px-4 rounded-xl bg-gray-800/30 text-gray-300"
                    >
                      <FaCircle className="w-2 h-2 text-white mr-4 opacity-70" />
                      <span className="text-lg font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gray-900 rounded-3xl p-12 text-white shadow-2xl border border-gray-800">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s discuss your project and bring your creative vision to life.
              </p>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 inline-block"
              >
                Contact Us Today
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}