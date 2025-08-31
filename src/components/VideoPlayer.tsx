import React from 'react';
import { motion } from 'framer-motion';

const VideoPlayer: React.FC = () => {
  // IDs des vidéos YouTube
  const firstVideoId = "6jnTkMFIes8";
  const secondVideoId = "f9wrrc5U-IQ";
  
  const firstVideoUrl = `https://www.youtube.com/embed/${firstVideoId}?autoplay=0&rel=0&modestbranding=1`;
  const secondVideoUrl = `https://www.youtube.com/embed/${secondVideoId}?autoplay=0&rel=0&modestbranding=1`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="bg-black/30 rounded-2xl p-8 backdrop-blur-sm border border-white/20 max-w-7xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        🎥 Tes Récompenses Vidéos
      </h3>
      
      {/* Container flex centré pour les vidéos côte à côte */}
      <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-center">
        {/* Première vidéo */}
        <div className="w-full lg:w-[45%] rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src={firstVideoUrl}
            title="Vidéo de récompense Hugo & Lisa - 1"
            className="w-full aspect-video"
            style={{ minHeight: '315px' }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {/* Deuxième vidéo */}
        <div className="w-full lg:w-[45%] rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src={secondVideoUrl}
            title="Vidéo de récompense Hugo & Lisa - 2"
            className="w-full aspect-video"
            style={{ minHeight: '315px' }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white/70 text-base">
          🎬 <strong>Vidéos YouTube personnalisées</strong> - Profitez de vos récompenses !
        </p>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;