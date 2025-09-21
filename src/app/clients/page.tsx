"use client";
import { motion } from 'framer-motion';

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
              { label: 'Projects', value: '50+' },
              { label: 'Industries', value: '15+' },
              { label: 'Retention', value: '90%' },
              { label: 'Satisfaction', value: '100%' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                className="p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-gray-300 font-medium tracking-wide">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
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