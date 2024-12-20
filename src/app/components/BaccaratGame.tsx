'use client'; // This tells Next.js that this is a client-side component
import React, { useState } from 'react';
import playBaccarat from '../utils/gameLogic'; // Import the game logic

const BaccaratGame = () => {
  const [balance, setBalance] = useState(1000); // Initial balance of 1000
  const [betAmount, setBetAmount] = useState(100); // Default bet amount
  const [betChoice, setBetChoice] = useState<'Player' | 'Bank' | 'Tie' | ''>(''); // Bet choice (Player, Bank, Tie)
  const [gameResult, setGameResult] = useState<string>(''); // Result of the game (Player wins, Bank wins, Tie)
  const [playerCards, setPlayerCards] = useState<any[]>([]); // Player cards
  const [bankerCards, setBankerCards] = useState<any[]>([]); // Banker cards

  // Function to start the game
  const startGame = () => {
    const game = playBaccarat(); // Get the result from the game logic
    setPlayerCards(game.playerHand);
    setBankerCards(game.bankerHand);
    setGameResult(game.result);

    // Update balance based on bet choice and game result
    if (game.result === 'Player wins' && betChoice === 'Player') {
      setBalance(prev => prev + betAmount);
    } else if (game.result === 'Banker wins' && betChoice === 'Bank') {
      setBalance(prev => prev + betAmount);
    } else if (game.result === 'Tie' && betChoice === 'Tie') {
      setBalance(prev => prev + betAmount);
    } else {
      setBalance(prev => prev - betAmount);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black bg-opacity-70 text-white rounded-md">
      <h1 className="text-4xl mb-8">Baccarat Game</h1>
      <div className="bg-black bg-opacity-70 p-5 mb-8 rounded-lg shadow-lg">
        <h2 className="text-xl">Your Balance: ${balance}</h2>
      </div>

      {/* Bet Amount Slider */}
      <div className="mb-6">
        <label htmlFor="betAmount" className="block text-lg">Bet Amount: ${betAmount}</label>
        <input
          type="range"
          id="betAmount"
          min="10"
          max={balance}
          step="10"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          className="mt-2"
        />
      </div>

      {/* Bet Choices */}
      <div className="flex mb-8 space-x-4">
        <button
          className={`px-4 py-2 rounded ${betChoice === 'Player' ? 'bg-blue-700' : 'bg-blue-400'}`}
          onClick={() => setBetChoice('Player')}
        >
          Bet on Player
        </button>
        <button
          className={`px-4 py-2 rounded  ${betChoice === 'Bank' ? 'bg-red-900' : 'bg-red-400'}`}
          onClick={() => setBetChoice('Bank')}
        >
          Bet on Bank
        </button>
        <button
          className={`px-4 py-2 rounded ${betChoice === 'Tie' ? 'bg-green-900' : 'bg-green-400'}`}
          onClick={() => setBetChoice('Tie')}
        >
          Bet on Tie
        </button>
      </div>

      <button
        onClick={startGame}
        className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-xl shadow-md"
      >
        Start Game
      </button>

      <div className="mt-8">
        <h2 className="text-2xl">{gameResult}</h2>
        <div className="mt-4">
          <h3 className="text-xl">Player's Cards:</h3>
          <ul>
            {playerCards.map((card, index) => (
              <li key={index}>{card.rank} of {card.suit}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl ">Banker's Cards:</h3>
          <ul className="mb-8">
            {bankerCards.map((card, index) => (
              <li key={index}>{card.rank} of {card.suit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BaccaratGame;
