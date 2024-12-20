document.addEventListener("DOMContentLoaded", () => {
  const rad = document.getElementById("rad");
  const drehButton = document.getElementById("drehButton");
  const setzenRotButton = document.getElementById("setzeRot");
  const setzenSchwarzButton = document.getElementById("setzeSchwarz");
  const setzenGrünButton = document.getElementById("setzeGrün");
  const setzenZahlButton = document.getElementById("setzeZahl");
  const startAutoSpinsButton = document.getElementById("startAutoSpins");
  const stopAutoSpinsButton = document.getElementById("stopAutoSpins");
  const autoSpinsInput = document.getElementById("autoSpinsInput");
  const ergebnis = document.getElementById("ergebnis");
  const guthabenBetrag = document.getElementById("guthabenBetrag");
  const einsatzInput = document.getElementById("einsatz");
  const zahlInput = document.getElementById("zahlInput");

  // Startguthaben in Fricktaler
  let guthaben = 1000;
  let gesetzterBetrag = 0;
  let gesetzteFarbe = null;
  let gesetzteZahl = null;
  let ersterEinsatz = null; // Variable, um den ersten Einsatz zu speichern
  let autoSpinsActive = false;
  let autoSpinsCount = 0;
  let autoSpinInterval = null;

  // Farben für die Roulette-Zahlen
  const roteZahlen = ["32", "15", "19", "4", "21", "2", "25", "17", "34", "6", "27", "13", "36", "11"];
  const schwarzeZahlen = ["0", "1", "3", "5", "7", "9", "12", "14", "16", "18", "20", "22", "24", "26", "28", "29", "31", "33", "35"];
  const grüneZahlen = ["0"]; // Nur die Zahl 0 ist grün

  // Setze auf Rot
  setzenRotButton.addEventListener("click", () => {
    const einsatz = parseInt(einsatzInput.value);
    if (isNaN(einsatz) || einsatz <= 0 || einsatz > guthaben) {
      alert("Ungültiger Einsatzbetrag.");
      return;
    }
    gesetzterBetrag = einsatz;
    ersterEinsatz = einsatz; // Speichern des ersten Einsatzes
    gesetzteFarbe = "rot"; // Spieler hat auf Rot gesetzt
    guthaben -= gesetzterBetrag;
    guthabenBetrag.textContent = `${guthaben} Fricktaler`; // Guthaben anzeigen
    ergebnis.textContent = `Du hast ${gesetzterBetrag} Fricktaler auf Rot gesetzt. Wähle nun Auto-Spins, um fortzufahren.`;
  });

  // Setze auf Schwarz
  setzenSchwarzButton.addEventListener("click", () => {
    const einsatz = parseInt(einsatzInput.value);
    if (isNaN(einsatz) || einsatz <= 0 || einsatz > guthaben) {
      alert("Ungültiger Einsatzbetrag.");
      return;
    }
    gesetzterBetrag = einsatz;
    ersterEinsatz = einsatz; // Speichern des ersten Einsatzes
    gesetzteFarbe = "schwarz"; // Spieler hat auf Schwarz gesetzt
    guthaben -= gesetzterBetrag;
    guthabenBetrag.textContent = `${guthaben} Fricktaler`; // Guthaben anzeigen
    ergebnis.textContent = `Du hast ${gesetzterBetrag} Fricktaler auf Schwarz gesetzt. Wähle nun Auto-Spins, um fortzufahren.`;
  });

  // Setze auf Grün (nur die Zahl 0)
  setzenGrünButton.addEventListener("click", () => {
    const einsatz = parseInt(einsatzInput.value);
    if (isNaN(einsatz) || einsatz <= 0 || einsatz > guthaben) {
      alert("Ungültiger Einsatzbetrag.");
      return;
    }
    gesetzterBetrag = einsatz;
    ersterEinsatz = einsatz; // Speichern des ersten Einsatzes
    gesetzteFarbe = "grün"; // Spieler hat auf Grün gesetzt (nur Zahl 0)
    guthaben -= gesetzterBetrag;
    guthabenBetrag.textContent = `${guthaben} Fricktaler`; // Guthaben anzeigen
    ergebnis.textContent = `Du hast ${gesetzterBetrag} Fricktaler auf Grün gesetzt. Wähle nun Auto-Spins, um fortzufahren.`;
  });

  // Setze auf eine bestimmte Zahl
  setzenZahlButton.addEventListener("click", () => {
    const zahl = zahlInput.value;
    const einsatz = parseInt(einsatzInput.value);

    if (isNaN(einsatz) || einsatz <= 0 || einsatz > guthaben) {
      alert("Ungültiger Einsatzbetrag.");
      return;
    }
    if (zahl < 0 || zahl > 36) {
      alert("Ungültige Zahl. Gib eine Zahl zwischen 0 und 36 ein.");
      return;
    }
    gesetzterBetrag = einsatz;
    ersterEinsatz = einsatz; // Speichern des ersten Einsatzes
    gesetzteZahl = zahl;
    guthaben -= gesetzterBetrag;
    guthabenBetrag.textContent = `${guthaben} Fricktaler`; // Guthaben anzeigen
    ergebnis.textContent = `Du hast ${gesetzterBetrag} Fricktaler auf die Zahl ${zahl} gesetzt. Wähle nun Auto-Spins, um fortzufahren.`;
  });

  // Wenn der "Drehen"-Button gedrückt wird
  drehButton.addEventListener("click", () => {
    if (gesetzterBetrag === 0) {
      alert("Setze einen Betrag, bevor du drehst!");
      return;
    }

    // Wenn der Einsatzbetrag nicht geändert wurde, verwenden wir den ersten Einsatz
    const betrag = ersterEinsatz ? ersterEinsatz : gesetzterBetrag;

    // Button deaktivieren
    drehButton.disabled = true;
    ergebnis.textContent = "Das Rad dreht sich...";

    // Zufällige Drehung berechnen
    const spins = Math.floor(Math.random() * 5) + 5; // 5-10 Runden
    const selectedIndex = Math.floor(Math.random() * 37); // Roulette Zahlen 0 bis 36
    const selectedNumber = selectedIndex === 0 ? "0" : `${selectedIndex}`; // 0 ist speziell

    // Rad drehen
    rad.style.transition = "transform 4s ease-out";  // Animation einstellen
    rad.style.transform = `rotate(${(spins * 360) + (selectedIndex * (360 / 37))}deg)`;  // Rad drehen

    // Guthaben nach der Drehung aktualisieren (kann auch vor der Animation erfolgen)
    setTimeout(() => {
      // Ergebnis anzeigen
      ergebnis.textContent = `Ergebnis: ${selectedNumber}`;

      // Überprüfen, ob die Wette gewonnen oder verloren wurde
      let gewinn = false;

      // Überprüfe Gewinnbedingung für Farben
      if (gesetzteFarbe === "rot" && roteZahlen.includes(selectedNumber)) {
        gewinn = true;
      } else if (gesetzteFarbe === "schwarz" && schwarzeZahlen.includes(selectedNumber)) {
        gewinn = true;
      } else if (gesetzteFarbe === "grün" && grüneZahlen.includes(selectedNumber)) {
        gewinn = true;
      }

      // Überprüfe Gewinnbedingung für Zahlen
      if (gesetzteZahl === selectedNumber) {
        gewinn = true;
      }

      if (gewinn) {
        // Gewinn (1:1 Auszahlung für Farben, 35:1 für Zahlen)
        if (gesetzteZahl) {
          guthaben += betrag * 36;  // 35:1 Auszahlung für Zahlen
          ergebnis.textContent += ` Du hast auf die Zahl ${gesetzteZahl} gesetzt und gewonnen! Dein Guthaben: ${guthaben} Fricktaler.`;
        } else {
          guthaben += betrag * 2;  // 1:1 Auszahlung für Farben
          ergebnis.textContent += ` Du hast gewonnen! Dein Guthaben: ${guthaben} Fricktaler.`;
        }
      } else {
        // Verlust
        guthabenBetrag.textContent = `${guthaben} Fricktaler`; // Guthaben anzeigen
        ergebnis.textContent += ` Du hast verloren. Dein Guthaben: ${guthaben} Fricktaler.`;
      }

      // Guthaben sofort aktualisieren
      guthabenBetrag.textContent = `${guthaben} Fricktaler`;

      // Button wieder aktivieren
      drehButton.disabled = false;
    }, 4000); // Dauer der Animation (4s)
  });

  // Auto-Spins starten
  startAutoSpinsButton.addEventListener("click", () => {
    const anzahlAutoSpins = parseInt(autoSpinsInput.value);

    if (isNaN(anzahlAutoSpins) || anzahlAutoSpins <= 0) {
      alert("Bitte gib eine gültige Anzahl an Auto-Spins ein.");
      return;
    }

    if (autoSpinsActive) {
      alert("Auto-Spins laufen bereits.");
      return;
    }

    autoSpinsCount = anzahlAutoSpins;
    autoSpinsActive = true;
    startAutoSpin();
  });

  // Auto-Spins stoppen
  stopAutoSpinsButton.addEventListener("click", () => {
    clearInterval(autoSpinInterval); // Stoppe den Auto-Spin-Intervall
    autoSpinsActive = false;
    ergebnis.textContent = "Auto-Spins gestoppt.";
  });

  // Funktion zum Starten von Auto-Spins
  function startAutoSpin() {
    autoSpinInterval = setInterval(() => {
      if (autoSpinsCount <= 0) {
        clearInterval(autoSpinInterval); // Stoppe den Auto-Spin-Intervall, wenn alle Spins vorbei sind
        autoSpinsActive = false;
        ergebnis.textContent = "Auto-Spins abgeschlossen.";
        return;
      }

      autoSpinsCount--; // Reduziere die verbleibenden Spins
      drehButton.click(); // Simuliere einen Klick auf den "Drehen"-Button
    }, 5000); // 5 Sekunden zwischen den Spins
  }
});
