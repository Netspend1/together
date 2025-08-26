import { useRef, useEffect } from "react";
import GlitchText from "./glitch-text";

export default function VisualExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Audio-reactive visualization simulation
    const animateVisualizer = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const time = Date.now() * 0.001;
      
      // Create organic morphing shapes
      for (let i = 0; i < 3; i++) {
        const radius = 30 + Math.sin(time + i) * 20;
        const x = centerX + Math.cos(time * 0.5 + i * 2) * (50 + i * 30);
        const y = centerY + Math.sin(time * 0.3 + i * 2) * (30 + i * 20);
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        
        const opacity = 0.3 + Math.sin(time + i) * 0.2;
        const colors = ['rgba(74, 93, 35, ', 'rgba(93, 74, 35, ', 'rgba(139, 69, 19, '];
        ctx.fillStyle = colors[i] + opacity + ')';
        ctx.fill();
      }
      
      requestAnimationFrame(animateVisualizer);
    };

    animateVisualizer();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-dark-grey via-charcoal to-deep-black">
      {/* Dark cave atmosphere background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441906363162-903afd0d3d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GlitchText
            text="MORPHOSIS"
            className="font-creepster text-4xl md:text-6xl mb-6"
            color="text-dark-forest"
          />
          <p className="font-swanky text-xl text-gray-400 max-w-2xl mx-auto">
            Audio-reactive visuals that evolve with the underground frequencies
          </p>
        </div>
        
        {/* Interactive Visual Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Visual Element 1 */}
          <div className="bg-charcoal/40 organic-border p-8 hover:bg-dark-grey/60 transition-all duration-700 group cave-shadow audio-reactive">
            <div className="w-full h-48 bg-dark-grey organic-border overflow-hidden mb-6 animate-morph group-hover:animate-pulse">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Intricate fungal network in dark soil" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" 
              />
            </div>
            <h3 className="font-swanky text-xl text-forest-green mb-2">Neural Networks</h3>
            <p className="text-gray-500 text-sm">Reactive mycelial patterns</p>
          </div>
          
          {/* Visual Element 2 */}
          <div className="bg-charcoal/40 organic-border p-8 hover:bg-dark-grey/60 transition-all duration-700 group cave-shadow audio-reactive">
            <div 
              className="w-full h-48 bg-dark-grey organic-border overflow-hidden mb-6 animate-morph group-hover:animate-float" 
              style={{ animationDelay: '2s' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1441906363162-903afd0d3d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Complex root system in dark underground environment" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" 
              />
            </div>
            <h3 className="font-swanky text-xl text-earth-brown mb-2">Root Fractals</h3>
            <p className="text-gray-500 text-sm">Branching algorithmic growth</p>
          </div>
          
          {/* Visual Element 3 */}
          <div className="bg-charcoal/40 organic-border p-8 hover:bg-dark-grey/60 transition-all duration-700 group cave-shadow audio-reactive">
            <div 
              className="w-full h-48 bg-dark-grey organic-border overflow-hidden mb-6 animate-morph group-hover:animate-twitch" 
              style={{ animationDelay: '4s' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Organic decomposition and decay in dark forest floor" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" 
              />
            </div>
            <h3 className="font-swanky text-xl text-underground-rust mb-2">Decay Cycles</h3>
            <p className="text-gray-500 text-sm">Organic transformation flows</p>
          </div>
        </div>
        
        {/* Interactive Audio Visualizer */}
        <div className="max-w-4xl mx-auto bg-charcoal/60 organic-border p-12 cave-shadow">
          <h3 className="font-swanky text-2xl text-gray-300 mb-8 text-center">FREQUENCY MORPHOLOGY</h3>
          
          <div className="w-full h-64 bg-deep-black organic-border overflow-hidden relative">
            <canvas 
              ref={canvasRef}
              className="w-full h-full opacity-80" 
            />
            
            {/* Static Placeholder Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-2">
                {[40, 60, 30, 80, 45, 70, 35, 55].map((height, index) => (
                  <div
                    key={index}
                    className="w-2 animate-pulse"
                    style={{ 
                      height: `${height}px`,
                      backgroundColor: ['#4A5D23', '#5D4A23', '#8B4513', '#2F4F2F'][index % 4],
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Audio Controls */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button className="text-gray-400 hover:text-forest-green transition-colors duration-300">
              <i className="fas fa-microphone text-xl"></i>
              <span className="block text-xs mt-1">MIC INPUT</span>
            </button>
            <button className="text-gray-400 hover:text-earth-brown transition-colors duration-300">
              <i className="fas fa-wave-square text-xl"></i>
              <span className="block text-xs mt-1">WAVEFORM</span>
            </button>
            <button className="text-gray-400 hover:text-underground-rust transition-colors duration-300">
              <i className="fas fa-chart-bar text-xl"></i>
              <span className="block text-xs mt-1">SPECTRUM</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
