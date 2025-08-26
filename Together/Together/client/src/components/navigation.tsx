import { useState } from "react";
import GlitchText from "./glitch-text";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-black/80 backdrop-blur-sm border-b border-dark-grey/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <GlitchText 
            text="UNDERGROUND" 
            className="font-creepster text-xl"
            color="text-forest-green"
          />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-forest-green transition-colors duration-300 relative group"
            >
              DEPTHS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-green group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className="hover:text-earth-brown transition-colors duration-300 relative group"
            >
              FREQUENCIES
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-earth-brown group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-underground-rust transition-colors duration-300 relative group"
            >
              ORIGINS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-underground-rust group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-forest-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-dark-grey/30 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left hover:text-forest-green transition-colors duration-300"
              >
                DEPTHS
              </button>
              <button
                onClick={() => scrollToSection('music')}
                className="text-left hover:text-earth-brown transition-colors duration-300"
              >
                FREQUENCIES
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-underground-rust transition-colors duration-300"
              >
                ORIGINS
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
