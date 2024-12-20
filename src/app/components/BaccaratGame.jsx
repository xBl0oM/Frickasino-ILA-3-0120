'use client'; 
import React, { useState } from 'react';
import playBaccarat from '../utils/gameLogic'; 

const BaccaratGame = () => {
  const [balance, setBalance] = useState(1000); 
  const [betAmount, setBetAmount] = useState(100); 
  const [betChoice, setBetChoice] = useState(''); 
  const [gameResult, setGameResult] = useState('');
  const [displayedCards, setDisplayedCards] = useState([]); // Cards shown with delay

  const startGame = () => {
    const game = playBaccarat(); // Get the result from the game logic
    setGameResult(game.result);

    // Reset the displayed cards
    setDisplayedCards([]);

    // Add the delay for animations and alternate display
    displayCards(game.playerHand, game.bankerHand);

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

  // Function to simulate card animation in alternating order
  const displayCards = (playerCards, bankerCards) => {
    const delayIncrement = 500; // Delay between each card display
    let index = 0;

    const totalCards = [
      ...playerCards.map(card => ({ ...card, owner: 'Player' })),
      ...bankerCards.map(card => ({ ...card, owner: 'Bank' })),
    ]; // Combine the player and banker cards into one array with owners

    const interval = setInterval(() => {
      const currentCard = totalCards[index];
      setDisplayedCards(prev => [...prev, currentCard]);
      index++;

      // Stop the interval when all cards are displayed
      if (index === totalCards.length) {
        clearInterval(interval);
      }
    }, delayIncrement);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/baccarat-table.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-70 text-white rounded-md p-8">
        <h1 className="text-4xl mb-8">Baccarat Game</h1>
        <div className="bg-black bg-opacity-70 p-5 mb-8 rounded-lg shadow-lg">
          <h2 className="text-xl">Your Balance: ${balance}</h2>
        </div>

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
            className={`px-4 py-2 rounded ${betChoice === 'Bank' ? 'bg-red-900' : 'bg-red-400'}`}
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
          
          {/* Cards Section */}
          <div className="mt-8">
            {/* Player Cards */}
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Player's Cards:</h3>
            <ul>
              {displayedCards
                .filter(card => card.owner === 'Player')
                .map((card, index) => (
                  <li key={index} className="text-xl">
                    {card.rank} of {card.suit}
                  </li>
              ))}
            </ul>

            {/* Bank Cards */}
            <h3 className="text-2xl font-bold text-red-400 mt-8 mb-4">Banker's Cards:</h3>
            <ul>
              {displayedCards
                .filter(card => card.owner === 'Bank')
                .map((card, index) => (
                  <li key={index} className="text-xl">
                    {card.rank} of {card.suit}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaccaratGame;
