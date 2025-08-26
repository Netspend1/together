import { useEffect, useRef } from "react";

export default function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Simulate waveform data
    const animateWaveform = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barCount = 64;
      const barWidth = canvas.width / barCount;
      
      for (let i = 0; i < barCount; i++) {
        const height = Math.random() * canvas.height * 0.8;
        const x = i * barWidth;
        const y = (canvas.height - height) / 2;
        
        // Create gradient based on height
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        if (height > canvas.height * 0.6) {
          gradient.addColorStop(0, '#8B4513'); // underground-rust
          gradient.addColorStop(1, '#4A5D23'); // forest-green
        } else if (height > canvas.height * 0.3) {
          gradient.addColorStop(0, '#4A5D23'); // forest-green
          gradient.addColorStop(1, '#5D4A23'); // earth-brown
        } else {
          gradient.addColorStop(0, '#5D4A23'); // earth-brown
          gradient.addColorStop(1, '#2F4F2F'); // dark-forest
        }
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth - 1, height);
      }
      
      requestAnimationFrame(animateWaveform);
    };

    animateWaveform();
  }, []);

  return (
    <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
      {/* Simple bar visualization for smaller displays */}
      <div className="md:hidden flex space-x-1">
        {[20, 35, 15, 45, 25, 40, 30, 20].map((height, index) => (
          <div
            key={index}
            className="w-1 bg-forest-green animate-pulse"
            style={{ 
              height: `${height}px`,
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Canvas visualization for larger displays */}
      <canvas
        ref={canvasRef}
        className="hidden md:block w-64 h-16 opacity-80"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}
