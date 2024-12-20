'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Instructions = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const renderInstructions = () => {
    switch (selectedGame) {
      case 'baccarat':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Baccarat Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
                <div>   
                <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Baccarat Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
              <h3 className="text-2xl text-black mb-2">Tipps für das Spielen von Baccarat</h3>
              <p className="text-lg text-black mb-4">
                <strong>Verwalte dein Guthaben:</strong> Wie bei jedem Casino-Spiel ist es wichtig, dein Budget im Auge zu behalten. Achte darauf, dass du nicht mehr setzt, als du dir leisten kannst zu verlieren.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Setze auf den Bankier:</strong> Die beste Wettoption im Baccara ist oft der Bankier. Auch wenn hier eine kleine Provision anfällt, ist die Wahrscheinlichkeit, dass der Bankier gewinnt, statistisch höher.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Genieße das Spiel:</strong> Baccara ist ein einfaches Spiel, das auf Zufall basiert. Lass dich nicht von Verlusten entmutigen und genieße das Spiel, ohne zu viel Druck zu machen.
              </p>

              <h3 className="text-2xl text-black mb-2">Strategien für Baccarat</h3>
              <p className="text-lg text-black mb-4">
                <strong>Wette auf den Bankier:</strong> Statistisch gesehen hat der Bankier die höchste Gewinnchance. Auch wenn eine kleine Gebühr anfällt, kann dies eine langfristig vorteilhafte Strategie sein.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Vermeide Wetten auf ein Unentschieden:</strong> Die Wette auf ein Unentschieden hat die schlechtesten Quoten und ist daher zu vermeiden. Setze lieber auf den Bankier oder den Spieler, um deine Gewinnchancen zu maximieren.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Bleibe bei einem festen Einsatz:</strong> Eine konsistente Wettstrategie, bei der du immer den gleichen Betrag setzt, kann helfen, dein Guthaben besser zu verwalten und das Spiel entspannter zu genießen.
              </p>
            </div>
          </div>
                </div>
            </div>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-xl py-3 px-6 rounded-full shadow-lg mt-4"
            >
              Zurück zur Spielauswahl
            </Link>
          </div>
        );
      case 'blackjack':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Blackjack Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
                <div>
                <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Blackjack Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
              <h3 className="text-2xl text-black mb-2">Tipps für das Spielen von Blackjack</h3>
              <p className="text-lg text-black mb-4">
                <strong>Verwalte dein Guthaben:</strong> Auch im Blackjack ist es wichtig, dass du nur das Geld setzt, das du bereit bist zu verlieren. Ein fester Plan für deine Einsätze hilft, die Kontrolle zu behalten.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Wissen, wann du stehen bleibst:</strong> Ein wichtiger Teil der Blackjack-Strategie ist zu wissen, wann du bei deinen Karten stehen bleibst und wann du eine weitere Karte verlangst. Dies hängt von deiner Hand und der offenen Karte des Dealers ab.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Genieße das Spiel:</strong> Blackjack ist ein strategisches Kartenspiel. Achte darauf, dass du das Spiel genießt und nicht zu sehr auf den Gewinn fokussiert bist. Überlege gut und bleibe ruhig.
              </p>

              <h3 className="text-2xl text-black mb-2">Strategien für Blackjack</h3>
              <p className="text-lg text-black mb-4">
                <strong>Nutze die grundlegende Strategie:</strong> Die grundlegende Blackjack-Strategie gibt dir an, welche Entscheidungen du basierend auf deinen Karten und der Karte des Dealers treffen solltest. Eine gute Strategie kann deinen Hausvorteil erheblich reduzieren.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Verdopple bei guten Händen:</strong> Wenn du eine gute Hand hast, z. B. 11 Punkte, verdopple deinen Einsatz, um den Gewinn zu maximieren. Dies kann besonders nützlich sein, wenn du dich in einer günstigen Spielsituation befindest.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Setze bei niedrigen Einsätzen auf hohe Karten:</strong> Wenn die Karten im Spiel vorteilhaft für dich sind (mehr hohe Karten wie 10 und Asse), kannst du in den folgenden Runden mehr setzen, um von dieser Situation zu profitieren.
              </p>
            </div>
          </div>
                </div>
            </div>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-xl py-3 px-6 rounded-full shadow-lg mt-4"
            >
              Zurück zur Spielauswahl
            </Link>
          </div>
        );
      case 'roulette':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Roulette Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
                 <div>
                 <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Roulette Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
              <h3 className="text-2xl text-black mb-2">Tipps für das Spielen von Roulette</h3>
              <p className="text-lg text-black mb-4">
                <strong>Verwalte dein Guthaben:</strong> Achte darauf, deine Einsätze sinnvoll zu planen und setze nicht alles auf eine einzige Runde. Indem du dein Guthaben streckst, kannst du länger spielen und die Chancen erhöhen, dass du auf lange Sicht gewinnst.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Wähle deine Einsätze sorgfältig:</strong> Setze nicht immer nur auf eine Zahl. Setze lieber auch auf Farben (rot oder schwarz) oder ungerade/gerechte Zahlen. Diese Einsätze haben höhere Gewinnchancen, auch wenn die Gewinne kleiner sind.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Genieße das Spiel:</strong> Roulette ist ein Spiel des Zufalls. Setze nur das, was du bereit bist zu verlieren, und genieße die Atmosphäre des Spiels, ohne den Druck, ständig zu gewinnen.
              </p>

              <h3 className="text-2xl text-black mb-2">Strategien für Roulette</h3>
              <p className="text-lg text-black mb-4">
                <strong>Setze mit System:</strong> Eine beliebte Strategie ist das „Martingale-System“, bei dem du nach jedem Verlust deinen Einsatz verdoppeln kannst. Auf diese Weise gewinnst du in der Theorie deine Verluste zurück, wenn du einmal gewinnst. Achte jedoch darauf, dass dies riskant ist und hohe Einsätze erfordern kann.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Kombiniere Einsätze:</strong> Setze auf eine Kombination aus Außeneinsätzen (z. B. rot/schwarz, gerade/ungerade) und einigen inneren Einsätzen (z. B. einzelne Zahlen). Dies kann helfen, das Risiko zu streuen und dir eine solide Chance auf einen Gewinn zu verschaffen.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Behalte dein Budget im Auge:</strong> Spiele mit einem klaren Budget und halte dich daran. Setze nie mehr, als du dir leisten kannst zu verlieren, um das Spiel langfristig zu genießen.
              </p>
            </div>
          </div>
                 </div>
            </div>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-xl py-3 px-6 rounded-full shadow-lg mt-4"
            >
              Zurück zur Spielauswahl
            </Link>
          </div>
        );
      case 'slots':
        return (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Slots Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
                <div>   
                <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Slots Anleitung
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-4 overflow-y-auto h-96">
              <h3 className="text-2xl text-black mb-2">Tipps für das Spielen von Slots</h3>
              <p className="text-lg text-black mb-4">
                <strong>Verwalte dein Guthaben:</strong> Achte darauf, nicht zu viel auf einmal zu setzen. Setze kleine Einsätze, damit du länger spielen kannst und die Chance hast, einen Gewinn zu erzielen.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Wähle deinen Einsatz sorgfältig:</strong> Wenn dein Guthaben niedrig ist, setze kleinere Beträge, damit du mehr Spins machen kannst und die Chancen auf einen Gewinn erhöhst.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Genieße das Spiel:</strong> Slots sind ein Glücksspiel, also genieße das Spiel und setze nie mehr, als du bereit bist zu verlieren.
              </p>

              <h3 className="text-2xl text-black mb-2">Strategien für Slots</h3>
              <p className="text-lg text-black mb-4">
                <strong>Geduld ist wichtig:</strong> Denke daran, dass das Ergebnis jedes Spins zufällig ist, und es gibt keine Möglichkeit, das Ergebnis zu beeinflussen. Wenn du Geduld zeigst, kannst du das Spiel länger genießen, ohne zu schnell dein Guthaben zu verlieren.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Setze nicht alles auf einmal:</strong> Es kann verlockend sein, große Einsätze zu machen, aber es ist besser, kleine Beträge zu setzen, um deine Gewinnchancen zu maximieren und das Spiel länger zu spielen.
              </p>
              <p className="text-lg text-black mb-4">
                <strong>Nutze die Gewinnchancen:</strong> Wenn du drei gleiche Symbole erhältst, gewinnst du den 20-fachen Einsatz. Versuche, in den richtigen Momenten den maximalen Einsatz zu wählen, um größere Gewinne zu erzielen.
              </p>
            </div>
          </div>
                </div>
            </div>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-xl py-3 px-6 rounded-full shadow-lg mt-4"
            >
              Zurück zur Spielauswahl
            </Link>
          </div>
        );
      default:
        return <p>Wähle ein Spiel, um die Anleitung zu sehen.</p>;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Spielanleitungen</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSelectedGame('baccarat')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Baccarat
        </button>
        <button
          onClick={() => setSelectedGame('blackjack')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Blackjack
        </button>
        <button
          onClick={() => setSelectedGame('roulette')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Roulette
        </button>
        <button
          onClick={() => setSelectedGame('slots')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Slots
        </button>
      </div>
      <div className="mt-4">{renderInstructions()}</div>
    </div>
  );
};

export default Instructions;
