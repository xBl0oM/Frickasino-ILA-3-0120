// src/components/Hub.js
import React from "react";
import { Link } from "react-router-dom";

const Hub = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-extrabold mb-10">Wähle ein Spiel</h1>

      {/* Auswahl der Spiele */}
      <div className="flex flex-col space-y-4 mb-10">
        <Link
          to="/play/baccarat" // Hier wird ein Spiel zum Spielen ausgewählt
          className="bg-yellow-600 hover:bg-yellow-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Baccarat
        </Link>
        <Link
          to="/play/blackjack" // Hier wird ein Spiel zum Spielen ausgewählt
          className="bg-yellow-600 hover:bg-yellow-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Blackjack
        </Link>
        <Link
          to="/play/roulette" // Hier wird ein Spiel zum Spielen ausgewählt
          className="bg-red-600 hover:bg-red-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Roulette
        </Link>
        <Link
          to="/play/slots" // Hier wird ein Spiel zum Spielen ausgewählt
          className="bg-yellow-600 hover:bg-yellow-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Slots
        </Link>
      </div>

      {/* Button zu den Anleitungen */}
      <Link
        to="/instructions" // Leitet zu den Anleitungen weiter
        className="bg-green-600 hover:bg-green-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300"
      >
        Anleitungen
      </Link>
    </div>
  );
};

export default Hub;
