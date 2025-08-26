import GlitchText from "./glitch-text";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-deep-black to-charcoal">
      {/* Mysterious underground cave entrance */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <GlitchText
            text="ORIGINS"
            className="font-creepster text-4xl md:text-6xl mb-8"
            color="text-gray-200"
          />
          
          <div className="bg-charcoal/60 organic-border p-12 cave-shadow mb-12">
            <p className="font-swanky text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Beneath the surface, where light never penetrates, lies a network of sound that predates human consciousness. 
              These frequencies emerge from the earth itself—the whispers of ancient forests, the pulse of underground rivers, 
              the breathing of stone.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="font-swanky text-xl text-forest-green mb-4">THE DESCENT</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our journey began in the deepest caves, recording the natural resonance of limestone chambers 
                  and the drip of millennia. Each track is birthed from these primordial echoes, processed through 
                  organic synthesis methods that honor the source material.
                </p>
              </div>
              
              <div className="text-left">
                <h3 className="font-swanky text-xl text-earth-brown mb-4">THE NETWORK</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Like mycelial networks that connect forest ecosystems, these sounds create invisible pathways 
                  between listener and landscape. Each frequency carries the memory of its underground origin, 
                  creating an immersive archaeological experience of sound.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact/Connect Section */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <button className="organic-border bg-dark-grey/50 hover:bg-forest-green/30 px-8 py-4 transition-all duration-500 hover:scale-105 text-gray-300 hover:text-gray-100">
              <i className="fas fa-envelope mr-3"></i>
              <span>TRANSMIT MESSAGE</span>
            </button>
            <button className="organic-border bg-dark-grey/50 hover:bg-earth-brown/30 px-8 py-4 transition-all duration-500 hover:scale-105 text-gray-300 hover:text-gray-100">
              <i className="fab fa-soundcloud mr-3"></i>
              <span>DEEPER FREQUENCIES</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
