import { useState } from "react";
import GlitchText from "./glitch-text";
import AudioVisualizer from "./audio-visualizer";

interface Track {
  id: string;
  title: string;
  duration: string;
  isPlaying?: boolean;
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("2:45");
  const [totalTime] = useState("7:23");
  const [progress] = useState(35);

  const tracks: Track[] = [
    { id: "1", title: "Mycelial Networks", duration: "7:23", isPlaying: true },
    { id: "2", title: "Root System Resonance", duration: "6:42" },
    { id: "3", title: "Subterranean Whispers", duration: "8:15" },
    { id: "4", title: "Depths of Decay", duration: "5:33" },
  ];

  const [trackList] = useState([
    { title: "Root System Resonance", duration: "6:42", color: "forest-green" },
    { title: "Subterranean Whispers", duration: "8:15", color: "earth-brown" },
    { title: "Depths of Decay", duration: "5:33", color: "underground-rust" },
  ]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback
  };

  return (
    <section id="music" className="relative py-20 bg-gradient-to-b from-deep-black via-charcoal to-dark-grey">
      {/* Mysterious nature cave background */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GlitchText
            text="FREQUENCIES"
            className="font-creepster text-4xl md:text-6xl mb-6"
            color="text-earth-brown"
          />
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-forest-green to-transparent mx-auto animate-pulse-slow"></div>
        </div>
        
        {/* Main Music Player */}
        <div className="max-w-4xl mx-auto">
          {/* Current Track Display */}
          <div className="bg-charcoal/80 organic-border p-8 mb-8 cave-shadow">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Track Artwork */}
              <div className="w-32 h-32 bg-dark-grey organic-border overflow-hidden flex-shrink-0 animate-morph">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                  alt="Underground root system with fungi" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Track Info */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-swanky text-2xl text-gray-200 mb-2">Mycelial Networks</h3>
                <p className="text-gray-400 mb-4">by Underground Collective</p>
                
                {/* Waveform Visualization */}
                <AudioVisualizer />
                
                {/* Progress Bar */}
                <div className="w-full bg-dark-grey rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-forest-green to-earth-brown h-2 rounded-full animate-pulse-slow" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                
                {/* Time Display */}
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{currentTime}</span>
                  <span>{totalTime}</span>
                </div>
              </div>
            </div>
            
            {/* Player Controls */}
            <div className="flex items-center justify-center space-x-8 mt-8">
              <button className="text-gray-400 hover:text-forest-green transition-colors duration-300 hover:scale-110 transform">
                <i className="fas fa-step-backward text-2xl"></i>
              </button>
              <button 
                onClick={togglePlayback}
                className="text-gray-200 hover:text-forest-green transition-colors duration-300 hover:scale-125 transform"
              >
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-4xl`}></i>
              </button>
              <button className="text-gray-400 hover:text-forest-green transition-colors duration-300 hover:scale-110 transform">
                <i className="fas fa-step-forward text-2xl"></i>
              </button>
              <button className="text-gray-400 hover:text-earth-brown transition-colors duration-300 hover:scale-110 transform">
                <i className="fas fa-random text-xl"></i>
              </button>
              <button className="text-gray-400 hover:text-underground-rust transition-colors duration-300 hover:scale-110 transform">
                <i className="fas fa-redo text-xl"></i>
              </button>
            </div>
          </div>

          {/* Track List */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-swanky text-2xl text-gray-300 mb-8 text-center">UNDERGROUND FREQUENCIES</h3>
            
            <div className="space-y-4">
              {trackList.map((track, index) => (
                <div 
                  key={index}
                  className="bg-charcoal/60 hover:bg-dark-grey/80 p-6 organic-border transition-all duration-500 hover:scale-[1.02] cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-2 h-2 bg-${track.color} rounded-full animate-pulse group-hover:bg-earth-brown`}></div>
                      <div>
                        <h4 className="text-gray-200 font-medium">{track.title}</h4>
                        <p className="text-gray-500 text-sm">{track.duration}</p>
                      </div>
                    </div>
                    <div className={`text-gray-400 group-hover:text-${track.color} transition-colors duration-300`}>
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
