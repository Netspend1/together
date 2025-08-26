import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Music() {
  const [showPlayer, setShowPlayer] = useState(false);

  // Your uploaded song file
  const sampleAudioUrl = "/attached_assets/Fog micro - _quib - SoundLoadMate.com_1754841834996.mp3";

  return (
    <div className="pt-20 pb-16 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-6xl font-light text-white mb-12">Music</h2>
          
          <div className="text-center space-y-8">
            {/* Featured Track */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-500">
              <h3 className="text-2xl font-light text-white mb-6">Together</h3>
              
              {/* SoundCloud Link */}
              <a
                href="https://on.soundcloud.com/dpY1CY4VXEnL6Dw788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-sm font-light">Listen on SoundCloud</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}