import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">
            🎉 Quiz Hugo & Lisa 🎉
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Teste tes connaissances sur notre amitié ! 
            <br />
            <span className="text-yellow-300 font-semibold">
              Attention : une seule erreur et c'est reparti à zéro ! 😈
            </span>
          </p>
        </header>
        
        <Quiz />
      </div>
    </div>
  );
}

export default App;
