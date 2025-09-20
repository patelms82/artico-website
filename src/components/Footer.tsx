import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Left - Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="mb-2">
              <Image
                src="/images/artico_logo_white.png"
                alt="Artico Imagination Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Center - Social Links */}
          <div className="flex gap-6 items-center justify-center">
            <a 
              href="mailto:patelms82@gmail.com" 
              className="hover:text-gray-300 flex items-center gap-2 transition-all duration-200 hover:scale-105"
            >
              <FaEnvelope /> Gmail
            </a>
            <a 
              href="https://www.linkedin.com/in/mukesh-patel-9a270420/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 flex items-center gap-2 transition-all duration-200 hover:scale-105"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
          
          {/* Right - Location & Copyright */}
          <div className="text-xs text-center md:text-right text-gray-400">
            <div className="mb-1">Creative Studio | Ahmedabad, India</div>
            &copy; {new Date().getFullYear()} Artico Imagination. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
