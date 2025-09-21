"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Letters for ARTICO
  const articoLetters = ['A', 'R', 'T', 'I', 'C', 'O'];
  
  return (
    <div className="relative">
      {/* Floating sparkles/crystals background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-black rounded-full"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Ice shards decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isVisible ? { scaleY: 1, opacity: 0.6 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute left-0 top-0 w-0.5 h-32 bg-black/20 transform -rotate-12 origin-bottom"
        />
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isVisible ? { scaleY: 1, opacity: 0.6 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute right-12 top-8 w-0.5 h-24 bg-black/20 transform rotate-45 origin-bottom"
        />
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isVisible ? { scaleY: 1, opacity: 0.6 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute right-0 bottom-0 w-0.5 h-28 bg-black/20 transform rotate-12 origin-bottom"
        />
      </div>

      {/* Main logo container */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="text-center"
        >
          {/* ARTICO with crystalline effect */}
          <div className="relative mb-4">
            <div className="flex justify-center items-center gap-2 mb-2">
              {articoLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    rotateX: -90,
                  }}
                  animate={isVisible ? { 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0,
                  } : {
                    opacity: 0, 
                    y: 50,
                    rotateX: -90,
                  }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    duration: 0.8,
                    delay: index * 0.1
                  }}
                  className="inline-block text-6xl md:text-8xl font-black text-black relative"
                  whileHover={{ 
                    scale: 1.1, 
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                  {/* Crystalline overlay effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)"
                    }}
                  />
                </motion.span>
              ))}
            </div>
            
            {/* Geometric underline with animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="h-1 bg-black mx-auto origin-left"
              style={{ width: '60%' }}
            />
          </div>

          {/* IMAGINATION with staggered reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="relative"
          >
            <div className="text-2xl md:text-4xl font-light tracking-widest text-black/80 mb-2">
              {'IMAGINATION'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.2 + (index * 0.05) 
                  }}
                  className="inline-block hover:text-black transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            {/* Minimal dots pattern */}
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1.5 + (i * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-1.5 h-1.5 bg-black rounded-full"
                  whileHover={{ 
                    scale: 1.5,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Breathing border animation */}
          <motion.div
            className="absolute inset-0 border-2 border-black/10 rounded-3xl pointer-events-none"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, black 1px, transparent 1px),
              linear-gradient(180deg, black 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </div>
  );
}