"use client";
import { useState } from "react";

const CARD_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11,
};

const generateDeck = () => {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = Object.keys(CARD_VALUES);
  const deck = [];

  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit });
    }
  }
  return deck;
};

const getHandValue = (hand) => {
  let value = 0;
  let aces = 0;

  for (let card of hand) {
    value += CARD_VALUES[card.value];
    if (card.value === "A") aces++;
  }

  while (value > 21 && aces > 0) {
    value -= 10;
    aces--;
  }

  return value;
};

export default function Home() {
  const [deck, setDeck] = useState(generateDeck());
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [bet, setBet] = useState(50);
  const [playerBalance, setPlayerBalance] = useState(1000);

  const drawCard = () => {
    const newDeck = [...deck];
    const randomIndex = Math.floor(Math.random() * newDeck.length);
    const card = newDeck.splice(randomIndex, 1)[0];
    setDeck(newDeck);
    return card;
  };

  const startGame = () => {
    if (bet > playerBalance) {
      setMessage("You don't have enough balance to place this bet.");
      return;
    }

    const playerStartingHand = [drawCard(), drawCard()];
    const dealerStartingHand = [drawCard(), drawCard()];
    setPlayerHand(playerStartingHand);
    setDealerHand(dealerStartingHand);
    setGameOver(false);
    setMessage("");
    setPlayerBalance(playerBalance - bet);
  };

  const handleHit = () => {
    const newHand = [...playerHand, drawCard()];
    setPlayerHand(newHand);
    const playerValue = getHandValue(newHand);

    if (playerValue > 21) {
      setGameOver(true);
      setMessage("You busted! Dealer wins.");
    } else if (playerValue === 21) {
      setGameOver(true);
      setMessage("You got 21!");
      setPlayerBalance(playerBalance + bet * 2);
    }
  };

  const handleStand = () => {
    let dealerValue = getHandValue(dealerHand);
    let newDealerHand = [...dealerHand];

    while (dealerValue < 17) {
      newDealerHand.push(drawCard());
      dealerValue = getHandValue(newDealerHand);
    }

    setDealerHand(newDealerHand);

    const playerValue = getHandValue(playerHand);

    if (dealerValue > 21 || playerValue > dealerValue) {
      setMessage("You win!");
      setPlayerBalance(playerBalance + bet * 2);
    } else if (dealerValue === playerValue) {
      setMessage("It's a tie!");
      setPlayerBalance(playerBalance + bet);
    } else {
      setMessage("Dealer wins!");
    }

    setGameOver(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: "url('/background.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6">Blackjack</h1>
        <h2 className="text-2xl">Your Balance: ${playerBalance}</h2>
        {gameOver || playerHand.length === 0 ? (
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="mt-2">
                <label htmlFor="bet" className="block text-lg">
                  Place Your Bet: ${bet}
                </label>
                <input
                  id="bet"
                  type="range"
                  min="10"
                  max={playerBalance}
                  value={bet}
                  onChange={(e) => setBet(parseInt(e.target.value))}
                  className="w-full mt-2"
                />
              </div>
            </div>
            <button
              onClick={startGame}
              className="bg-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
            >
              Start Game
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <h2 className="text-2xl">
                Your Hand ({getHandValue(playerHand)})
              </h2>
              <div className="flex space-x-2 mt-2">
                {playerHand.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white text-black p-2 rounded-lg border border-gray-400"
                  >
                    {card.value}
                    {card.suit}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl">
                Dealer's Hand ({gameOver ? getHandValue(dealerHand) : "?"})
              </h2>
              <div className="flex space-x-2 mt-2">
                {dealerHand.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white text-black p-2 rounded-lg border border-gray-400"
                  >
                    {gameOver || index === 0
                      ? `${card.value}${card.suit}`
                      : "?"}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleHit}
                className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-700"
                disabled={gameOver}
              >
                Hit
              </button>
              <button
                onClick={handleStand}
                className="bg-yellow-500 px-6 py-3 rounded-lg text-lg hover:bg-yellow-700"
                disabled={gameOver}
              >
                Stand
              </button>
            </div>
          </div>
        )}

        {message && <p className="mt-6 text-2xl">{message}</p>}
      </div>
    </div>
  );
}