import { useState } from "react";
import GlitchText from "./glitch-text";

export default function HeroSection() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
    // TODO: Implement actual audio playback functionality
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden cave-shadow">
      {/* Deep forest underground background */}
      <div 
        className="absolute inset-0 z-10 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Organic overlay shapes */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-forest-green/20 animate-morph"></div>
        <div 
          className="absolute bottom-32 right-16 w-48 h-48 bg-earth-brown/15 animate-morph" 
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-underground-rust/25 animate-morph" 
          style={{ animationDelay: '4s' }}
        ></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">
        <GlitchText
          text="DESCENT"
          className="font-creepster text-6xl md:text-8xl lg:text-9xl mb-6"
          color="text-gray-100"
        />
        <p className="font-swanky text-xl md:text-2xl mb-8 text-gray-400 animate-twitch">
          into the depths of experimental soundscapes
        </p>
        
        {/* Audio Control Hint */}
        <div className="mb-12 animate-pulse-slow">
          <p className="text-sm text-gray-500 mb-4">[ ENABLE AUDIO FOR FULL EXPERIENCE ]</p>
          <button 
            onClick={toggleAudio}
            className={`organic-border px-8 py-4 transition-all duration-500 hover:scale-105 ${
              isAudioEnabled 
                ? 'bg-underground-rust/30 text-gray-200' 
                : 'bg-dark-grey/50 hover:bg-forest-green/30 text-gray-300'
            }`}
          >
            <i className={`${isAudioEnabled ? 'fas fa-volume-mute' : 'fas fa-volume-up'} mr-3`}></i>
            <span>{isAudioEnabled ? 'SILENCE THE DEPTHS' : 'DESCEND WITH SOUND'}</span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-forest-green rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
}
