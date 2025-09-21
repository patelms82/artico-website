"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import AnimatedTextLogo from "@/components/AnimatedTextLogo";

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    <div className="bg-black relative overflow-hidden min-h-screen">
      {/* Background decorative elements (dark theme) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-800 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-900 rounded-full blur-2xl"></div>
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="group relative px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-200 bg-gradient-to-r from-gray-900 to-black"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Start Your Project</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/portfolio"
                className="group relative px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-200 bg-gradient-to-r from-gray-900 to-black"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">View Portfolio</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              </motion.a>
            </motion.div>
          </div>

          {/* Skills Animated Showcase */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Creative <span className="text-gray-300">Expertise</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive creative solutions spanning design, technology, and artistic innovation
              </p>
            </div>

            {/* Scroll-triggered Skills Animation */}
            <SkillsRevealSection />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <AnimatedStatCard 
              targetNumber={25} 
              suffix="+" 
              label="Years Experience" 
              desc="Crafting exceptional designs"
              delay={0}
            />
            <AnimatedStatCard 
              targetNumber={500} 
              suffix="+" 
              label="Projects Completed" 
              desc="Across India & globally"
              delay={0.2}
            />
            <AnimatedStatCard 
              targetNumber={20} 
              suffix="+" 
              label="Creative Services" 
              desc="From concept to completion"
              delay={0.4}
            />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-xl mb-8 opacity-90 text-white">
              Let&apos;s collaborate to bring your vision to life with cutting-edge design and innovation.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group relative inline-block px-10 py-4 bg-gradient-to-r from-white to-gray-100 text-black font-bold rounded-full transition-all duration-300 hover:from-gray-900 hover:to-black hover:text-white shadow-lg hover:shadow-xl border border-transparent hover:border-gray-600"
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

// Skills Reveal Section Component
function SkillsRevealSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        ease: "easeOut" as const
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "tween" as const,
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={skillVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "tween" as const, duration: 0.2 }
            }}
            className="group relative"
          >
            {/* Skill Tag */}
            <div className="relative px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-gray-600/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center space-x-2 sm:space-x-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-white to-gray-300 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-white font-medium text-xs sm:text-sm md:text-base whitespace-nowrap group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Reduced floating particles for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isInView && [...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              x: [0, (i % 2 ? 50 : -50)],
              y: [0, (i % 2 ? -30 : 30)]
            }}
            transition={{
              duration: 6,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: 8,
              ease: "easeInOut"
            }}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 60}%`,
              top: `${30 + i * 40}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Animated Counter Component
function AnimatedStatCard({ 
  targetNumber, 
  suffix = "", 
  label, 
  desc, 
  delay = 0 
}: {
  targetNumber: number;
  suffix?: string;
  label: string;
  desc: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.5
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animate(count, targetNumber, {
          duration: 1.5,
          ease: "easeOut"
        });
        return controls.stop;
      }, delay * 500);

      return () => clearTimeout(timer);
    }
  }, [isInView, count, targetNumber, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        type: "tween",
        ease: "easeOut"
      }}
      className="text-center p-8"
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Animated Number */}
        <div className="text-4xl md:text-5xl font-black text-white mb-2">
          <motion.span>{rounded}</motion.span>
          <span>{suffix}</span>
        </div>

        {/* Label */}
        <div className="text-xl font-semibold text-gray-200 mb-2">
          {label}
        </div>

        {/* Description */}
        <div className="text-gray-400">
          {desc}
        </div>
      </div>
    </motion.div>
  );
}
