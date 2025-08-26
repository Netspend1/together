import { ExternalLink } from "lucide-react";

export default function Playlists() {
  return (
    <div className="pt-20 pb-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-6xl font-light text-white mb-12">Playlists</h2>
          
          <div className="space-y-6 max-w-2xl w-full text-center">
            <h3 className="text-3xl font-light text-white mb-8">🐰 grail</h3>
            
            <a
              href="https://on.soundcloud.com/SEZ1UmbveEk901OChz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="text-base font-light">Listen on SoundCloud</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>


          </div>
        </div>
      </div>
    </div>
  );
}