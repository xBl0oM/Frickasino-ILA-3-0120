import React, { useState } from "react";
import StartScreen from "./StartScreen";

const symbols = ["🍒", "🍋", "🍉", "🍇", "⭐️", "🍀"];
const placeholder = "⬛";

function SlotsGame({ onGameOver, onBackToMenu }) {
  const [slot1, setSlot1] = useState(placeholder);
  const [slot2, setSlot2] = useState(placeholder);
  const [slot3, setSlot3] = useState(placeholder);
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(2500);
  const [bet, setBet] = useState(10);
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    if (isSpinning) return;
    if (balance < bet) {
      setMessage("Nicht genügend Guthaben für diesen Einsatz!");
      return;
    }

    setIsSpinning(true);
    const newSlot1 = symbols[Math.floor(Math.random() * symbols.length)];
    const newSlot2 = symbols[Math.floor(Math.random() * symbols.length)];
    const newSlot3 = symbols[Math.floor(Math.random() * symbols.length)];

    setBalance(balance - bet);
    setMessage("Spinning...");

    setSlot1(placeholder);
    setSlot2(placeholder);
    setSlot3(placeholder);

    setTimeout(() => {
      setSlot1(newSlot1);
    }, 1000);

    setTimeout(() => {
      setSlot2(newSlot2);
    }, 2000);

    setTimeout(() => {
      setSlot3(newSlot3);

      if (newSlot1 === newSlot2 && newSlot2 === newSlot3) {
        const winAmount = bet * 20;
        setBalance((prevBalance) => prevBalance + winAmount);
        setMessage(`Glückwunsch! Du hast ${winAmount} Credits gewonnen!`);
      } else {
        setMessage("Verloren!");
      }

      setIsSpinning(false);
      if (balance - bet <= 0) {
        onGameOver();
      }
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg w-80 mx-auto relative">
      <button
        onClick={onBackToMenu}
        className="absolute top-6 right-6 px-4 py-2 bg-gray-600 rounded-lg font-bold hover:bg-gray-800 transition z-10"
      >
        🏠
      </button>
      <h1 className="text-2xl font-bold mb-4">Slot Maschine</h1>
      <p className="text-lg mb-2">Guthaben: {balance} Credits</p>

      <label className="text-sm mb-4">
        Einsatz wählen:
        <select
          value={bet}
          onChange={(e) => setBet(Number(e.target.value))}
          className="ml-2 bg-gray-700 border border-gray-500 rounded px-2 py-1"
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
        </select>
      </label>

      <div className="flex flex-col justify-center items-center border-4 border-gray-600 rounded-lg w-64 h-40 bg-black relative">
        <div className="absolute flex justify-around w-full px-4 text-5xl">
          <span>{slot1}</span>
          <span>{slot2}</span>
          <span>{slot3}</span>
        </div>
      </div>

      <button
        onClick={spin}
        className="mt-4 px-6 py-2 bg-blue-500 rounded-lg font-bold hover:bg-blue-700 transition"
        disabled={isSpinning}
      >
        Spin 🎰
      </button>

      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}

function Slots() {
  const [isGameActive, setIsGameActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const startGame = () => {
    setIsGameActive(true);
    setIsGameOver(false);
  };

  const backToMenu = () => {
    setIsGameActive(false);
    setIsGameOver(false);
  };

  const handleGameOver = () => {
    setIsGameActive(false);
    setIsGameOver(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {isGameOver ? (
        <div className="flex flex-col items-center p-6 bg-red-800 text-white rounded-lg shadow-lg w-80 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Game Over</h1>
          <p className="text-lg mb-4">Du hast alles verspielt</p>
          <div className="flex space-x-4">
            <button
              onClick={startGame}
              className="px-6 py-3 bg-blue-500 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Neustart
            </button>
            <button
              onClick={backToMenu}
              className="px-6 py-3 bg-gray-500 rounded-lg font-bold hover:bg-gray-700 transition"
            >
              Zurück zu den Spielen
            </button>
          </div>
        </div>
      ) : isGameActive ? (
        <SlotsGame onGameOver={handleGameOver} onBackToMenu={backToMenu} />
      ) : (
        <StartScreen onStart={startGame} />
      )}
    </div>
  );
}

export default Slots;
