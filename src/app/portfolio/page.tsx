"use client";
import { motion } from 'framer-motion';
import { 
  FaBrush, 
  FaCamera, 
  FaVideo, 
  FaBullhorn, 
  FaStore, 
  FaHome,
  FaPaintBrush,
  FaLaptop,
  FaFileAlt
} from 'react-icons/fa';

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Portfolio() {
  const portfolioCategories = [
    {
      category: "Brand Identity",
      icon: FaBrush,
      iconColor: "text-blue-400",
      description: "Logo design, brand guidelines, and visual identity systems",
      projects: ["25+ Brand Identities", "Logo Designs", "Brand Guidelines", "Visual Systems"]
    },
    {
      category: "Photography",
      icon: FaCamera,
      iconColor: "text-purple-400",
      description: "Product, fashion, and corporate photography sessions",
      projects: ["Product Shoots", "Fashion Photography", "Corporate Portraits", "Event Coverage"]
    },
    {
      category: "Video Production",
      icon: FaVideo,
      iconColor: "text-red-400",
      description: "Corporate videos, advertisements, and short films",
      projects: ["Corporate Videos", "Ad Campaigns", "Short Films", "Motion Graphics"]
    },
    {
      category: "Marketing Campaigns",
      icon: FaBullhorn,
      iconColor: "text-green-400",
      description: "Digital marketing and advertising campaign designs",
      projects: ["Ad Campaigns", "Social Media", "Email Marketing", "Content Strategy"]
    },
    {
      category: "Exhibition Design",
      icon: FaStore,
      iconColor: "text-yellow-400",
      description: "Trade show booths and exhibition stand designs",
      projects: ["Trade Show Booths", "Exhibition Stands", "Display Design", "Event Setups"]
    },
    {
      category: "Interior Design",
      icon: FaHome,
      iconColor: "text-indigo-400",
      description: "Residential and commercial interior design projects",
      projects: ["Residential Design", "Commercial Spaces", "Office Interiors", "Retail Design"]
    },
    {
      category: "Art & Paintings",
      icon: FaPaintBrush,
      iconColor: "text-pink-400",
      description: "Original artwork and custom painting commissions",
      projects: ["Original Artwork", "Custom Paintings", "Art Consulting", "Gallery Exhibitions"]
    },
    {
      category: "Digital Design",
      icon: FaLaptop,
      iconColor: "text-cyan-400",
      description: "Web design, UI/UX, and digital experiences",
      projects: ["Website Design", "UI/UX Design", "Digital Assets", "App Interfaces"]
    },
    {
      category: "Print Design",
      icon: FaFileAlt,
      iconColor: "text-orange-400",
      description: "Brochures, catalogues, and print marketing materials",
      projects: ["Brochures", "Catalogues", "Business Cards", "Marketing Materials"]
    }
  ];

  return (
    <div className="bg-gray-900 relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-700 rounded-full blur-2xl"></div>
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
                Portfolio
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
                Explore our diverse creative work across industries, showcasing 25+ years of design excellence and innovative solutions.
              </p>
            </motion.div>
          </div>

          {/* Portfolio Categories */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {portfolioCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.4 + categoryIndex * 0.05 }}
                className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-gray-700/50 group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className={`text-2xl mr-3 ${category.iconColor}`}>
                    <category.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Project Types */}
                <div className="space-y-2">
                  {category.projects.map((project) => (
                    <div
                      key={project}
                      className="flex items-center py-1 px-3 rounded-lg bg-gray-700/20 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 opacity-60"></div>
                      <span className="text-sm font-medium">{project}</span>
                    </div>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                <div className="mt-4 text-center">
                  <span className="inline-block px-3 py-1 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full">
                    Gallery Coming Soon
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700 mb-16"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Portfolio Gallery Coming Soon</h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We&apos;re curating a comprehensive showcase of our 25+ years of creative excellence. 
                Our portfolio will feature detailed case studies, project timelines, client testimonials, 
                and the creative process behind each successful project across all categories.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gray-800 rounded-3xl p-12 text-white shadow-2xl border border-gray-700">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let&apos;s Create Your Next Project
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Ready to join our portfolio of successful brands and creative achievements?
              </p>
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 inline-block"
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