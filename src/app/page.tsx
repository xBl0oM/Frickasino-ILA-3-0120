// pages/index.tsx
'use client';  // This makes the component a client-side component

import { useState } from 'react';
import BaccaratGame from '../app/components/BaccaratGame';
import Blackjack from '../app/components/Blackjack';
import Slots from '../app/components/slots';
import Roulette from '../app/components/Roulette'
import Instructions from '../app/components/instructions'



const HomePage = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  // Handle button click to select a game
  const handleGameSelection = (game: string) => {
    setSelectedGame(game);
  };

  return (
    <div>
      <h1>Welcome to My Game Collection!</h1>
      <div >
        <button className="bg-slate-600 p-3 rounded-lg shadow-sm mr-5 mb-5" onClick={() => handleGameSelection('baccarat')}>Baccarat</button>
        <button className="bg-slate-600 p-3 rounded-lg shadow-sm mr-5" onClick={() => handleGameSelection('blackjack')}>Blackjack</button>
        <button className="bg-slate-600 p-3 rounded-lg shadow-sm mr-5" onClick={() => handleGameSelection('slots')}>Slots</button>
        <button className="bg-slate-600 p-3 rounded-lg shadow-sm mr-5" onClick={() => handleGameSelection('roulette')}>Roulette</button>
        <button className="bg-slate-600 p-3 rounded-lg shadow-sm mr-5" onClick={() => handleGameSelection('instructions')}>Instructions</button>
      </div>

      <div>
        {selectedGame === 'baccarat' && <BaccaratGame />}
        {selectedGame === 'blackjack' && <Blackjack />}
        {selectedGame === 'slots' && <Slots/>}
        {selectedGame === 'roulette' && <Roulette/>}
        {selectedGame === 'instructions' && <Instructions/>}
      </div>
    </div>
  );
};

export default HomePage;
