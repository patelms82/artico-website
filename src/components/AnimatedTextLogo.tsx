"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedTextLogo() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const text = "Artico Imagination";
  const letters = text.split('');

  // Predefined positions to avoid hydration mismatch
  const shapePositions = [
    { x: 10, y: 20 }, { x: 80, y: 15 }, { x: 30, y: 70 }, { x: 90, y: 60 },
    { x: 20, y: 40 }, { x: 70, y: 80 }, { x: 50, y: 10 }, { x: 85, y: 35 },
    { x: 15, y: 85 }, { x: 60, y: 25 }, { x: 40, y: 90 }, { x: 75, y: 50 },
    { x: 25, y: 55 }, { x: 95, y: 75 }, { x: 5, y: 45 }
  ];

  const particlePositions = [
    { x: 5, y: 25 }, { x: 15, y: 45 }, { x: 25, y: 65 }, { x: 35, y: 15 },
    { x: 45, y: 85 }, { x: 55, y: 35 }, { x: 65, y: 75 }, { x: 75, y: 25 },
    { x: 85, y: 55 }, { x: 95, y: 45 }, { x: 10, y: 75 }, { x: 20, y: 35 },
    { x: 30, y: 85 }, { x: 40, y: 25 }, { x: 50, y: 65 }, { x: 60, y: 15 },
    { x: 70, y: 55 }, { x: 80, y: 85 }, { x: 90, y: 35 }, { x: 12, y: 95 },
    { x: 22, y: 15 }, { x: 32, y: 55 }, { x: 42, y: 75 }, { x: 52, y: 25 },
    { x: 62, y: 85 }, { x: 72, y: 45 }, { x: 82, y: 65 }, { x: 92, y: 25 },
    { x: 18, y: 75 }, { x: 28, y: 45 }
  ];

  useEffect(() => {
    setIsMounted(true);
    // Set animation as complete after all letters have appeared
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, letters.length * 100 + 1000);

    return () => clearTimeout(timer);
  }, [letters.length]);

  // Don't render complex animations until mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="relative flex flex-col items-center justify-center h-[50vh] min-h-[400px] max-h-[600px] w-full">
        <div className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-center">
          <span className="text-white font-medium">Artico</span>{' '}
          <span className="text-gray-300">Imagination</span>
        </div>
        <div className="mt-8 text-sm tracking-[0.3em] text-white/40 font-light uppercase text-center">
          Creative Studio
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-[50vh] min-h-[400px] max-h-[600px] w-full overflow-hidden">
      {/* Animated Background Container */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {shapePositions.map((pos, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              animate={{
                x: [0, (i % 3 - 1) * 50, 0],
                y: [0, (i % 2 - 0.5) * 40, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              {i % 3 === 0 && (
                <div className="w-4 h-4 border border-white/20 rounded-full" />
              )}
              {i % 3 === 1 && (
                <div className="w-3 h-3 bg-white/15 rounded-sm transform rotate-45" />
              )}
              {i % 3 === 2 && (
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <polygon points="8,2 14,14 2,14" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* Flowing Particle Stream */}
        <div className="absolute inset-0">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              animate={{
                x: [0, 200, -100, 0],
                y: [0, -50, 100, 0],
                opacity: [0, 0.5, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 12 + (i % 6),
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Radial Pulse Waves */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0.8, 2.5, 0.8],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-96 h-96 border border-white/10 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1.2, 3, 1.2],
            opacity: [0.08, 0.02, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-96 h-96 border border-white/8 rounded-full" />
        </motion.div>

        {/* Dynamic Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, white 25%, white 26%, transparent 27%, transparent 74%, white 75%, white 76%, transparent 77%),
              linear-gradient(90deg, transparent 24%, white 25%, white 26%, transparent 27%, transparent 74%, white 75%, white 76%, transparent 77%)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Flowing Energy Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={`line-${i}`}
              d={`M0,${100 + i * 60} Q${200 + i * 50},${50 + i * 30} ${400},${150 + i * 40} T800,${100 + i * 50}`}
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeOpacity="0.1"
              strokeDasharray="4,8"
              animate={{
                strokeDashoffset: [0, -40, 0],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>

        {/* Orbiting Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-2 h-2 bg-white/15 rounded-full"
              style={{
                left: `${120 + Math.cos(((i * 45) * Math.PI) / 180) * 100}px`,
                top: `${120 + Math.sin(((i * 45) * Math.PI) / 180) * 100}px`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Corner Accent Elements */}
        <motion.div
          className="absolute top-8 left-8"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <rect x="0" y="0" width="15" height="15" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
            <rect x="25" y="25" width="15" height="15" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-8 right-8"
          animate={{
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="12" cy="12" r="8" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
            <circle cx="28" cy="28" r="6" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-8"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-6 border-2 border-white/20 transform rotate-45" />
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8"
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <polygon points="15,5 25,20 5,20" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
          </svg>
        </motion.div>
      </div>

      {/* Content with elevated z-index */}
      <div className="relative z-10">{/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-black/5 via-transparent to-transparent rounded-full"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0],
        }}
        transition={{
          delay: letters.length * 0.1 + 1.3,
          duration: 1.5,
          ease: "easeInOut"
        }}
      />

      {/* Main Text Logo */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.3,
        }}
      >
        <div className="flex flex-wrap justify-center items-center gap-1 text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.3,
                rotateX: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 200,
                duration: 0.6,
                delay: index * 0.1 + 0.3,
              }}
              className={`inline-block ${
                letter === ' ' ? 'w-4 md:w-6' : ''
              } ${
                index < 6 ? 'text-white font-medium' : 'text-gray-300'
              }`}
              style={{
                textShadow: animationComplete ? '0 2px 4px rgba(255,255,255,0.1)' : 'none',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        {/* Elegant Underline */}
        <motion.div
          className="relative mt-4 mx-auto"
          style={{ maxWidth: '400px' }}
        >
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              delay: letters.length * 0.1 + 0.5,
              duration: 0.8,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Subtle Accent Dots */}
        <motion.div
          className="flex justify-center gap-3 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          transition={{
            delay: letters.length * 0.1 + 1.8,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={animationComplete ? {
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={animationComplete ? {
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1]
              } : { opacity: 0 }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: letters.length * 0.1 + 2 + i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Signature Tagline */}
      <motion.div
        className="mt-8 text-sm tracking-[0.3em] text-white/40 font-light uppercase text-center"
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        animate={{ 
          opacity: 1,
          letterSpacing: '0.3em',
        }}
        transition={{
          delay: letters.length * 0.1 + 2.5,
          duration: 1,
          ease: "easeOut"
        }}
      >
        Creative Studio
      </motion.div>

      {/* Interactive Hover Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={animationComplete ? {
          background: [
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)',
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.02) 20%, rgba(0,0,0,0) 70%)',
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)'
          ]
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      </div>
    </div>
  );
}