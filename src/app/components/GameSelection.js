// src/components/Instructions.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const Instructions = () => {
  const { game } = useParams(); // Hole den Parameter "game" aus der URL

  const renderInstructions = () => {
    switch (game) {
      case "baccarat":
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Baccarat Anleitung
            </h2>
            <p className="text-lg text-white mb-6">
              Hier sind die Anweisungen für Baccarat...
            </p>
            <p className="text-md text-white mb-4">Tipps und Strategien: ...</p>
            <Link
              to="/instructions"
              className="bg-yellow-600 hover:bg-yellow-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300 mb-4"
            >
              Zurück zur Auswahl
            </Link>
          </div>
        );
      case "blackjack":
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Blackjack Anleitung
            </h2>
            <p className="text-lg text-white mb-6">
              Hier sind die Anweisungen für Blackjack...
            </p>
            <p className="text-md text-white mb-4">Tipps und Strategien: ...</p>
            <Link
              to="/instructions"
              className="bg-yellow-600 hover:bg-yellow-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300 mb-4"
            >
              Zurück zur Auswahl
            </Link>
          </div>
        );
      case "roulette":
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Roulette Anleitung
            </h2>
            <p className="text-lg text-white mb-6">
              Hier sind die Anweisungen für Roulette...
            </p>
            <p className="text-md text-white mb-4">Tipps und Strategien: ...</p>
            <Link
              to="/instructions"
              className="bg-red-600 hover:bg-red-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300 mb-4"
            >
              Zurück zur Auswahl
            </Link>
          </div>
        );
      case "slots":
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Slots Anleitung
            </h2>
            <p className="text-lg text-white mb-6">
              Hier sind die Anweisungen für Slots...
            </p>
            <p className="text-md text-white mb-4">Tipps und Strategien: ...</p>
            <Link
              to="/instructions"
              className="bg-yellow-600 hover:bg-yellow-700 text-xl py-3 px-6 rounded-full shadow-lg transition duration-300 mb-4"
            >
              Zurück zur Auswahl
            </Link>
          </div>
        );
      default:
        return (
          <p className="text-white">
            Bitte wähle ein Spiel aus, um die Anleitung zu sehen.
          </p>
        );
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center text-white">
      {renderInstructions()}
    </div>
  );
};

export default Instructions;
