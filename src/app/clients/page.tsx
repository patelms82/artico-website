"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Clients() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800 rounded-full blur-2xl" />
      </div>
      <main className="relative z-10 px-4 py-20">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-white">
                Our
                <br />
                Clients
              </h1>
              <div className="w-24 h-1 bg-white mx-auto rounded-full" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We&apos;ve collaborated with forward-thinking brands to elevate identity, experience, and strategic presence across digital ecosystems.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: 'Projects', value: 50, suffix: '+' },
              { label: 'Industries', value: 15, suffix: '+' },
              { label: 'Retention', value: 90, suffix: '%' },
              { label: 'Satisfaction', value: 100, suffix: '%' },
            ].map((item, i) => (
              <AnimatedStatCard
                key={item.label}
                targetNumber={item.value}
                suffix={item.suffix}
                label={item.label}
                delay={0.55 + i * 0.1}
              />
            ))}
          </motion.div>
          {/* Client Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Trusted by Leading Brands</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We&apos;ve had the privilege of working with amazing clients across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {[
                'AKESILOM.png',
                'ANFIX.png',
                'ATMOS.png',
                'AVDIAN.png',
                'BLACKBIRD.png',
                'BONANZA  TILES WORLD  LOGO.png',
                'CATHAT.png',
                'DAX PHOTO WORLD.png',
                'KALPATARU.png',
                'LOK SANGEET.png',
                'MARUTI.png',
                'MEXUS.png',
                'NEREX.png',
                'NJ.png',
                'REDFIX.png',
                'RICASA.png',
                'SARANG.png',
                'VEDAS logo 1.png'
              ].map((logo, index) => (
                <div
                  key={logo}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center hover:bg-white/90 transition-colors duration-200 shadow-lg"
                >
                  <img
                    src={`/logos/${logo}`}
                    alt={`${logo.replace(/\.(png|jpg)$/i, '')} logo`}
                    className="max-w-full max-h-16 object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="p-8 md:p-12 mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Showcase Coming Soon</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We&apos;re assembling a curated set of case stories highlighting transformation, measurable outcomes, and brand innovation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

// Animated Stat Card Component
function AnimatedStatCard({ 
  targetNumber, 
  suffix = "", 
  label, 
  delay = 0 
}: {
  targetNumber: number;
  suffix?: string;
  label: string;
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="p-6 text-center"
    >
      <div className="text-3xl font-extrabold text-white">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="mt-2 text-gray-300 font-medium tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}