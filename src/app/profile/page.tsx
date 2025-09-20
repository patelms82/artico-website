"use client";
import { motion } from 'framer-motion';

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
    <div className="relative overflow-hidden min-h-screen bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-200 rounded-full blur-2xl" />
      </div>
      <main className="relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-black">
                Studio
                <br />
                Profile
              </h1>
              <div className="w-24 h-1 bg-black mx-auto rounded-full" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              Artico Idea is a creative technology studio shaping cohesive brand and product experiences with strategic design, motion, and modern web engineering.
            </motion.p>
          </div>

          {/* About Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We operate at the intersection of identity, interface, and interaction—building unified ecosystems instead of disconnected deliverables. Our approach blends strategic discovery with iterative design sprints and refined implementation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                    <p className="text-gray-800 font-medium">{cap}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Core Principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metric Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
          >
            {[
              { label: 'Successful Launches', value: '40+' },
              { label: 'Documentation Systems', value: '25+' },
              { label: 'Avg. Engagement Lift', value: '35%' },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.75 + i * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
              >
                <div className="text-3xl font-extrabold text-black mb-2">
                  {m.value}
                </div>
                <div className="text-gray-700 font-medium tracking-wide text-sm">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="text-center"
          >
            <div className="bg-black rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Consistency</h3>
              <p className="text-xl mb-8 opacity-90">Extend your brand into a scalable digital system.</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-block"
              >
                Start a Conversation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}