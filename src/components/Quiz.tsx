import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from './Confetti';
import VideoPlayer from './VideoPlayer';

// Interface pour les questions
interface Question {
  id: number;
  text: string;
  options?: string[];
  correctAnswer: string;
  type: 'multiple-choice' | 'text-input';
  bonusQuestion?: string;
}

// Questions du quiz
const questions: Question[] = [
  {
    id: 1,
    text: "Combien de fois je suis allé te voir en Roumanie ?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    type: 'multiple-choice'
  },
  {
    id: 2,
    text: "Combien d'heures la deuxième fois ?",
    options: ["48h", "72h", "36h"],
    correctAnswer: "36h",
    type: 'multiple-choice'
  },
  {
    id: 3,
    text: "Où ai-je rencontré Lisa pour la première fois ?",
    options: ["Dune", "Montboucher"],
    correctAnswer: "Dune",
    type: 'multiple-choice'
  },
  {
    id: 4,
    text: "Quel joueur je déteste voir marquer sur FIFA ?",
    options: ["Barcola", "barcola", "Barkola", "barcolafilsdepute"],
    correctAnswer: "barcolafilsdepute",
    type: 'multiple-choice'
  },
  {
    id: 5,
    text: "Où a-t-on dormi quand on a fait la soirée la veille du bac chez moi ?",
    correctAnswer: "aucun souvenir",
    type: 'text-input',
    bonusQuestion: "Je n'ai aucun souvenir de où on a dormis donc aide nous stp !"
  },
  {
    id: 6,
    text: "Qui est le meilleur au ping-pong ?",
    options: ["moi", "moi", "ou moi"],
    correctAnswer: "moi",
    type: 'multiple-choice'
  },
  {
    id: 7,
    text: "Ai-je été pris en charge par ta voisine pendant le nouvel an ? (j'étais tellement en forme c'est pour ça)",
    options: ["oui", "non"],
    correctAnswer: "non",
    type: 'multiple-choice'
  },
  {
    id: 8,
    text: "Où se situe notre bois préféré ?",
    options: ["Près du Karting", "à Paris", "en Roumanie"],
    correctAnswer: "Près du Karting",
    type: 'multiple-choice'
  }
];

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showError, setShowError] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [textAnswer, setTextAnswer] = useState('');

  // Réinitialiser le quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowError(false);
    setQuizCompleted(false);
    setShowConfetti(false);
    setTextAnswer('');
  };

  // Gérer la réponse
  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Pour la question bonus (question 5), toute réponse est acceptée
    if (currentQuestion.id === 5 || selectedAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim()) {
      // Bonne réponse
      setScore(score + 1);
      
      if (currentQuestionIndex === questions.length - 1) {
        // Quiz terminé avec succès !
        setQuizCompleted(true);
        setShowConfetti(true);
        
        // Arrêter le confetti après 5 secondes
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        // Passer à la question suivante
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTextAnswer('');
      }
    } else {
      // Mauvaise réponse - reset du quiz
      setShowError(true);
      setTimeout(() => {
        resetQuiz();
      }, 3000);
    }
  };

  // Gérer la soumission du texte
  const handleTextSubmit = () => {
    if (textAnswer.trim()) {
      handleAnswer(textAnswer);
    }
  };

  // Si le quiz est terminé, afficher la vidéo
  if (quizCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        {showConfetti && <Confetti />}
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            🎊 Félicitations ! 🎊
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tu as réussi le quiz ! Tu connais vraiment bien notre amitié ! 
            <br />
            <span className="text-yellow-300 font-semibold">
              Voici ta récompense :
            </span>
          </p>
          
          <VideoPlayer />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetQuiz}
            className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:shadow-lg transition-all duration-300"
          >
            🔄 Rejouer le Quiz
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  // Si erreur, afficher le message
  if (showError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="bg-red-500/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-red-400">
          <h2 className="text-4xl font-bold text-red-300 mb-4">
            😔 A lala la je suis déçu...
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Mauvaise réponse ! Le quiz va se remettre à zéro...
          </p>
          <div className="animate-spin text-4xl">🔄</div>
        </div>
      </motion.div>
    );
  }

  // Afficher la question actuelle
  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <motion.div
      key={currentQuestionIndex}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/80 font-medium">
            Question {currentQuestionIndex + 1} sur {questions.length}
          </span>
          <span className="text-white/80 font-medium">
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-3">
          <motion.div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {currentQuestion.text}
        </h2>

        {/* Question bonus si c'est une question à texte */}
        {currentQuestion.bonusQuestion && (
          <div className="mb-6 text-center">
            <p className="text-xl text-yellow-300 font-semibold">
              {currentQuestion.bonusQuestion}
            </p>
          </div>
        )}

        {/* Options de réponse ou champ de texte */}
        {currentQuestion.type === 'multiple-choice' && currentQuestion.options ? (
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option)}
                className="bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white text-xl font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
              >
                {option}
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              placeholder="Tape ta réponse ici..."
              className="w-full bg-white/10 border-2 border-white/30 text-white text-xl font-semibold py-4 px-6 rounded-2xl placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTextSubmit}
              disabled={!textAnswer.trim()}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 disabled:from-gray-500 disabled:to-gray-600 text-white text-xl font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
            >
              Valider ma réponse
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Quiz; 