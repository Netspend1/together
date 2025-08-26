import { useState, useEffect, useRef } from "react";
import Shop from "@/components/shop";
import Music from "@/components/music";
import Playlists from "@/components/playlists";

type Section = 'home' | 'shop' | 'music' | 'playlists';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
      
      // Auto-start audio (may be blocked by browser)
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
        } catch {
          // Autoplay blocked - user needs to interact first
        }
      };
      
      playAudio();
    }
  }, [volume, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'shop':
        return <Shop />;
      case 'music':
        return <Music />;
      case 'playlists':
        return <Playlists />;
      default:
        return (
          <div className="min-h-screen flex flex-col items-center justify-center relative">
            <audio 
              ref={audioRef}
              src="/attached_assets/Fog micro - _quib - SoundLoadMate.com_1754841834996.mp3"
              loop
              autoPlay
              muted={isMuted}
            />

            <h1 className="text-8xl md:text-9xl font-light text-white tracking-tight mb-16">
              together
            </h1>
            
            <nav className="flex space-x-12 mb-8">
              <button 
                onClick={() => setActiveSection('shop')}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-light"
              >
                Shop
              </button>
              <button 
                onClick={() => setActiveSection('music')}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-light"
              >
                Music
              </button>
              <button 
                onClick={() => setActiveSection('playlists')}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-light"
              >
                Playlists
              </button>
            </nav>

            {/* Mute Button */}
            <div className="fixed bottom-8 right-8">
              <button
                onClick={toggleMute}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {activeSection !== 'home' && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
          <div className="flex items-center justify-between px-8 py-4">
            <button 
              onClick={() => setActiveSection('home')}
              className="text-2xl font-light text-white hover:text-gray-400 transition-colors"
            >
              together
            </button>
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveSection('shop')}
                className={`text-lg font-light transition-colors ${
                  activeSection === 'shop' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Shop
              </button>
              <button 
                onClick={() => setActiveSection('music')}
                className={`text-lg font-light transition-colors ${
                  activeSection === 'music' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Music
              </button>
              <button 
                onClick={() => setActiveSection('playlists')}
                className={`text-lg font-light transition-colors ${
                  activeSection === 'playlists' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Playlists
              </button>
            </div>
          </div>
        </nav>
      )}
      
      {renderContent()}
    </div>
  );
}