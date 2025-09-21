import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-sm text-white py-6 sm:py-8 w-full border-t border-gray-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">
          {/* Left - Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="mb-2 md:mb-0">
              <Image
                src="/images/artico_logo_white.png"
                alt="Artico Imagination Logo"
                width={120}
                height={40}
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Center - Social Links */}
          <div className="flex gap-4 sm:gap-6 items-center justify-center order-3 md:order-2">
            <a 
              href="mailto:patelms82@gmail.com" 
              className="hover:text-gray-300 flex items-center gap-2 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <FaEnvelope className="text-base sm:text-lg" /> 
              <span className="hidden sm:inline">Gmail</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mukesh-patel-9a270420/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 flex items-center gap-2 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
            >
              <FaLinkedin className="text-base sm:text-lg" /> 
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
          
          {/* Right - Location & Copyright */}
          <div className="text-xs sm:text-sm text-center md:text-right text-gray-400 order-2 md:order-3">
            <div className="mb-1 sm:mb-2">Creative Studio | Ahmedabad, India</div>
            <div>&copy; {new Date().getFullYear()} Artico Imagination. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
