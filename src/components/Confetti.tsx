import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  delay: number;
}

const Confetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    // Créer des morceaux de confetti
    const pieces: ConfettiPiece[] = [];
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
    
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        delay: Math.random() * 0.5
      });
    }
    
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: piece.size / 2
          }}
          initial={{ 
            y: -20, 
            x: piece.x, 
            rotate: piece.rotation,
            opacity: 1 
          }}
          animate={{ 
            y: window.innerHeight + 100, 
            x: piece.x + (Math.random() - 0.5) * 200,
            rotate: piece.rotation + 720,
            opacity: 0 
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            delay: piece.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Confetti en forme de losanges */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`diamond-${i}`}
          className="absolute"
          style={{
            left: Math.random() * window.innerWidth,
            top: -20,
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 5)],
            transform: 'rotate(45deg)'
          }}
          initial={{ 
            y: -20, 
            opacity: 1,
            scale: 0 
          }}
          animate={{ 
            y: window.innerHeight + 100,
            opacity: 0,
            scale: 1
          }}
          transition={{ 
            duration: 4 + Math.random() * 2,
            delay: Math.random() * 1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default Confetti; 