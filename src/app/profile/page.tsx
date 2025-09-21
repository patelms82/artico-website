"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Performance optimization: Check for reduced motion preference
const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Profile() {
  const values = [
    { title: 'Clarity', desc: 'We distill complexity into strategic creative direction that moves brands forward.' },
    { title: 'Craft', desc: 'Every pixel, word, and motion curve is intentional and brand-aligned.' },
    { title: 'Collaboration', desc: 'We co-create with our clients as long-term partners, not vendors.' },
    { title: 'Consistency', desc: 'Systems over one-offs—scalable design languages that endure growth.' },
  ];

  const capabilities = [
    'Brand Identity & Systems',
    'UI/UX & Product Design',
    'Web Experiences (Next.js)',
    'Motion & Micro-interactions',
    'Content & Creative Direction',
    'Design Ops & Documentation',
  ];

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
          {/* Hero */}
          <div className="text-center mb-16">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-white">
                Studio
                <br />
                Profile
              </h1>
              <div className="w-24 h-1 bg-white mx-auto rounded-full" />
            </motion.div>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Artico Imagination is a creative technology studio shaping cohesive brand and product experiences with strategic design, motion, and modern web engineering.
            </motion.p>
          </div>

          {/* About Block */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800 mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We operate at the intersection of identity, interface, and interaction—building unified ecosystems instead of disconnected deliverables. Our approach blends strategic discovery with iterative design sprints and refined implementation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                    <p className="text-gray-300 font-medium">{cap}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          {/* Values */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-10">Core Principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                  className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-800"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metric Highlights */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
          >
            {[
              { label: 'Successful Launches', value: 40, suffix: '+' },
              { label: 'Documentation Systems', value: 25, suffix: '+' },
              { label: 'Avg. Engagement Lift', value: 35, suffix: '%' },
            ].map((m, i) => (
              <AnimatedStatCard
                key={m.label}
                targetNumber={m.value}
                suffix={m.suffix}
                label={m.label}
                delay={0.75 + i * 0.1}
              />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <div className="p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Consistency</h3>
              <p className="text-xl mb-8 opacity-90">Extend your brand into a scalable digital system.</p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-white to-gray-100 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:from-gray-900 hover:to-black hover:text-white border border-transparent hover:border-gray-600 inline-block"
              >
                Start a Conversation
              </a>
            </div>
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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        type: "tween",
        ease: "easeOut"
      }}
      className="text-center p-6"
    >
      <div className="text-3xl font-extrabold text-white mb-2">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-gray-300 font-medium tracking-wide text-sm">{label}</div>
    </motion.div>
  );
}