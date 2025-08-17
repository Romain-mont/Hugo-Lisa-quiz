import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // ID de votre vidéo YouTube Shorts
  const youtubeVideoId = "6jnTkMFIes8";
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0&modestbranding=1`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-white/20"
    >
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        🎥 Ta Récompense Vidéo
      </h3>
      
      <div className="relative">
        {/* Lecteur YouTube intégré */}
        <div className="relative w-full rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src={youtubeUrl}
            title="Vidéo de récompense Hugo & Lisa"
            className="w-full aspect-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-white/70 text-sm">
          🎬 <strong>Vidéo YouTube personnalisée</strong> - Profitez de votre récompense !
        </p>
        <p className="text-white/50 text-xs mt-2">
          ✅ Vidéo YouTube Shorts intégrée avec succès !
        </p>
      </div>
    </motion.div>
  );
};

export default VideoPlayer; 