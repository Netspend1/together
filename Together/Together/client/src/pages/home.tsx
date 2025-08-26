import { useState, useEffect, useRef } from "react";
import Shop from "@/components/shop";
import Music from "@/components/music";
import Playlists from "@/components/playlists";
import treeImage from "@assets/Adobe Express - file_1754843853121.png";
import lmaoImage from "@assets/IMG_0963_1754858785143.png";
import menuImage from "@assets/IMG_0965_1754931618864.webp";
import paperImage from "@assets/IMG_0966_1754931990075.webp";

type Section = 'home' | 'shop' | 'music' | 'playlists';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const handleFirstInteraction = async (event: Event) => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        
        try {
          // Start playing audio unmuted on first interaction
          audio.muted = false;
          await audio.play();
          setAudioStarted(true);
          setIsMuted(false);
          console.log('Audio started on first user interaction');
          
          // Remove all interaction listeners after first trigger
          const events = ['click', 'touchstart', 'keydown', 'mousemove', 'scroll'];
          events.forEach(eventType => {
            document.removeEventListener(eventType, handleFirstInteraction);
          });
        } catch (error) {
          console.log('Failed to start audio on interaction:', error);
        }
      }
    };

    // Listen for any user interaction to start audio
    const events = ['click', 'touchstart', 'keydown', 'mousemove', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [volume, hasUserInteracted]);

  useEffect(() => {
    if (audioRef.current && audioStarted) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted, audioStarted]);

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
          <div className="relative">
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center relative">
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
                <img 
                  src={treeImage}
                  alt=""
                  className="h-16 sm:h-20 md:h-24 w-auto flex-shrink-0"
                  style={{ 
                    filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8) contrast(1.3) sepia(0.3)',
                    mixBlendMode: 'screen'
                  }}
                />
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tight">
                  together
                </h1>
              </div>
              
              <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 px-4">
                <button 
                  onClick={() => setActiveSection('shop')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-base sm:text-lg font-light"
                >
                  Shop
                </button>
                <button 
                  onClick={() => setActiveSection('music')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-base sm:text-lg font-light"
                >
                  Music
                </button>
                <button 
                  onClick={() => setActiveSection('playlists')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-base sm:text-lg font-light"
                >
                  Playlists
                </button>
              </nav>
            </div>

            {/* Extended Scroll Space for Future Art */}
            <div className="min-h-screen bg-black flex items-end justify-center pb-16">
              <img 
                src={lmaoImage}
                alt="LMAO"
                className="max-w-xs sm:max-w-sm md:max-w-md w-auto h-auto opacity-90"
                style={{ 
                  filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8) contrast(1.3) sepia(0.3)',
                  mixBlendMode: 'screen'
                }}
              />
            </div>
            
            <div className="min-h-screen bg-black">
              {/* Space for future artwork - Section 2 */}
            </div>
            
            <div className="min-h-[50vh] bg-black">
              {/* Space for future artwork - Section 3 */}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Wiggling Menu in Top Left with Paper Dropdown */}
      <div 
        className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <button
          className="group transition-transform duration-200 hover:animate-[wiggle_0.5s_ease-in-out] relative"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <img 
            src={menuImage}
            alt="Menu"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
          />
        </button>

        {/* Paper Dropdown Menu */}
        <div 
          className={`absolute top-full left-0 mt-2 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="relative">
            <img 
              src={paperImage}
              alt="Paper menu"
              className="w-48 h-64 object-contain mix-blend-multiply"
              style={{ filter: 'brightness(1.1) contrast(1.05)' }}
            />
            
            {/* Menu Items Overlaid on Paper */}
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 pt-8">
              <button
                onClick={() => {
                  setActiveSection('music');
                  setIsMenuOpen(false);
                }}
                className="text-gray-800 text-lg font-handwriting hover:text-gray-600 transition-colors transform hover:rotate-1"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                music
              </button>
              
              <button
                onClick={() => {
                  setActiveSection('playlists');
                  setIsMenuOpen(false);
                }}
                className="text-gray-800 text-lg font-handwriting hover:text-gray-600 transition-colors transform hover:-rotate-1"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                playlists
              </button>
              
              <button
                onClick={() => {
                  setActiveSection('shop');
                  setIsMenuOpen(false);
                }}
                className="text-gray-800 text-lg font-handwriting hover:text-gray-600 transition-colors transform hover:rotate-1"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}
              >
                shop
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Audio Element - Always Present */}
      <audio 
        ref={audioRef}
        src="/attached_assets/Fog micro - _quib - SoundLoadMate.com_1754841834996.mp3"
        loop
        playsInline
        preload="auto"
      />

      {/* Global Audio Controls - Mute Only */}
      {audioStarted && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
          <button
            onClick={toggleMute}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
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
      )}

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
