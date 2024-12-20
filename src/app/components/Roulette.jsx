import React, { useState, useRef, useEffect } from 'react';
import "tailwindcss/tailwind.css";


const RouletteGame = () => {
  const [guthaben, setGuthaben] = useState(1000);
  const [einsatz, setEinsatz] = useState(0);
  const [gesetzteFarbe, setGesetzteFarbe] = useState(null);
  const [gesetzteZahl, setGesetzteZahl] = useState(null);
  const [ergebnis, setErgebnis] = useState("Drücke auf 'Drehen'!");
  const [autoSpinsActive, setAutoSpinsActive] = useState(false);
  const [autoSpinsCount, setAutoSpinsCount] = useState(0);

  const radRef = useRef(null);
  const autoSpinInterval = useRef(null);

  const roteZahlen = ["32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36", "11"];
  const schwarzeZahlen = ["0", "1", "3", "5", "7", "9", "12", "14", "16", "18", "20", "22", "24", "26", "28", "29", "31", "33", "35"];
  const grüneZahlen = ["0"];

  const handleEinsatzChange = (e) => setEinsatz(parseInt(e.target.value) || 0);
  const handleZahlChange = (e) => setGesetzteZahl(e.target.value);
  const handleAutoSpinsChange = (e) => setAutoSpinsCount(parseInt(e.target.value) || 0);

  const placeBet = (farbe) => {
    if (einsatz <= 0 || einsatz > guthaben) {
      alert("Ungültiger Einsatzbetrag.");
      return;
    }
    setGuthaben(guthaben - einsatz);
    setGesetzteFarbe(farbe);
    setErgebnis(`Du hast ${einsatz} Fricktaler auf ${farbe} gesetzt. Wähle nun Auto-Spins, um fortzufahren.`);
  };

  const placeNumberBet = () => {
    if (einsatz <= 0 || einsatz > guthaben || gesetzteZahl < 0 || gesetzteZahl > 36) {
      alert("Ungültiger Einsatzbetrag oder Zahl.");
      return;
    }
    setGuthaben(guthaben - einsatz);
    setErgebnis(`Du hast ${einsatz} Fricktaler auf die Zahl ${gesetzteZahl} gesetzt. Wähle nun Auto-Spins, um fortzufahren.`);
  };

  const spinWheel = () => {
    if (einsatz === 0) {
      alert("Setze einen Betrag, bevor du drehst!");
      return;
    }

    setErgebnis("Das Rad dreht sich...");
    const spins = Math.floor(Math.random() * 5) + 5;
    const selectedIndex = Math.floor(Math.random() * 37);
    const selectedNumber = selectedIndex === 0 ? "0" : `${selectedIndex}`;

    if (radRef.current) {
      radRef.current.style.transition = "transform 4s ease-out";
      radRef.current.style.transform = `rotate(${(spins * 360) + (selectedIndex * (360 / 37))}deg)`;
    }

    setTimeout(() => {
      let gewinn = false;

      if (gesetzteFarbe === "rot" && roteZahlen.includes(selectedNumber)) {
        gewinn = true;
        setGuthaben(guthaben + einsatz * 2);
      } else if (gesetzteFarbe === "schwarz" && schwarzeZahlen.includes(selectedNumber)) {
        gewinn = true;
        setGuthaben(guthaben + einsatz * 2);
      } else if (gesetzteFarbe === "grün" && grüneZahlen.includes(selectedNumber)) {
        gewinn = true;
        setGuthaben(guthaben + einsatz * 2);
      } else if (gesetzteZahl === selectedNumber) {
        gewinn = true;
        setGuthaben(guthaben + einsatz * 36);
      }

      setErgebnis(`Ergebnis: ${selectedNumber}. ${gewinn ? "Du hast gewonnen!" : "Du hast verloren."} Dein Guthaben: ${guthaben} Fricktaler.`);
    }, 4000);
  };

  const startAutoSpins = () => {
    if (autoSpinsCount <= 0) {
      alert("Bitte gib eine gültige Anzahl an Auto-Spins ein.");
      return;
    }

    if (autoSpinsActive) {
      alert("Auto-Spins laufen bereits.");
      return;
    }

    setAutoSpinsActive(true);
    autoSpinInterval.current = setInterval(() => {
      if (autoSpinsCount <= 0) {
        clearInterval(autoSpinInterval.current);
        setAutoSpinsActive(false);
        setErgebnis("Auto-Spins abgeschlossen.");
        return;
      }

      setAutoSpinsCount(autoSpinsCount - 1);
      spinWheel();
    }, 5000);
  };

  const stopAutoSpins = () => {
    clearInterval(autoSpinInterval.current);
    setAutoSpinsActive(false);
    setErgebnis("Auto-Spins gestoppt.");
  };

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Roulette Spiel</h1>
      <div className="flex items-center justify-center gap-8">
        <img ref={radRef} src="/Rad.jpg" alt="Roulette Rad" className="max-w-xs w-full" />
      </div>
      <div className="mt-8">
        <label htmlFor="einsatz" className="block text-lg font-semibold">Dein Einsatzbetrag:</label>
        <input type="number" id="einsatz" min="1" onChange={handleEinsatzChange} className="mt-2 px-4 py-2 rounded bg-gray-800 text-white" />
      </div>
      <div className="mt-4 flex gap-4">
        <button onClick={() => placeBet("rot")} className="px-6 py-3 bg-red-600 hover:bg-red-700 text-lg font-bold rounded">Wette auf Rot</button>
        <button onClick={() => placeBet("schwarz")} className="px-6 py-3 bg-black hover:bg-gray-700 text-lg font-bold rounded">Wette auf Schwarz</button>
        <button onClick={() => placeBet("grün")} className="px-6 py-3 bg-green-600 hover:bg-green-700 text-lg font-bold rounded">Setze auf Grün</button>
      </div>
      <div className="mt-6">
        <input type="number" min="0" max="36" onChange={handleZahlChange} className="px-4 py-2 text-lg rounded bg-gray-700 text-white" />
        <button onClick={placeNumberBet} className="mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-bold rounded">Setze auf diese Zahl</button>
      </div>
      <div className="mt-6">
        <input type="number" min="1" onChange={handleAutoSpinsChange} className="px-4 py-2 text-lg rounded bg-gray-700 text-white" />
        <button onClick={startAutoSpins} className="mt-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-lg font-bold rounded">Starte Auto-Spins</button>
        <button onClick={stopAutoSpins} className="mt-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-lg font-bold rounded">Stoppe Auto-Spins</button>
      </div>
      <div className="mt-8 text-2xl font-semibold text-center">{ergebnis}</div>
      <div className="mt-8 text-lg font-semibold">Dein Guthaben: {guthaben} Fricktaler</div>
      <button onClick={spinWheel} className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-lg font-bold rounded">Drehen!</button>
    </div>
  );
};

export default RouletteGame;
