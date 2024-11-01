# Projekt-Dokumentation

Jan, John, Joël, Janick, BBBen (Braten Bohren Behindert)

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  01.11.2024    | 0.1.0   | Start des Projektes - Informieren, Planen, Entscheiden. Doku erstellt. |


## 1 Informieren

### 1.1 Ihr Projekt

Eine interaktive Casino-Webseite, auf der Benutzer beliebte Casinospiele wie Baccarat, Slots, Roulette und Blackjack spielen können.

### 1.2 Meilensteine

| Meilenstein-Nr. | Beschreibung | geplantes Datum |
|------|----|-----|
| 1 | Abschluss der Projektplanung, Aufgabenverteilung und Erstellung des Hub-Layouts. |  08.11.2024 |
| 2 | Fertigstellung der Implementierung der Spielseiten und der Anleitungssektion. |  06.12.2024 |
| 3 | Abschluss der Programmierung aller Funktionen und erste interne Tests. | 13.12.2024 |
| 4 | Publishen der Seite. | 20.12.2024 |

### 1.3 User Stories

| US-№ | Verbindlichkeit | Typ             | Beschreibung                                                                                       |
|------|-----------------|-----------------|---------------------------------------------------------------------------------------------------|
| 1    | Muss           | Funktional      | Als Benutzer möchte ich beim Start der Webseite eine zentrale Hub-Übersicht sehen, auf der alle Spiele sowie mein Kontostand angezeigt werden. |
| 2    | Muss           | Funktional      | Als Benutzer möchte ich in der Hub-Übersicht die Möglichkeit haben, auf ein Spiel zu klicken, um direkt dorthin weitergeleitet zu werden.        |
| 3    | Kann           | Qualität    | Als Benutzer möchte ich auf der Hub-Übersicht den Kontostand angezeigt bekommen, damit ich ihn jederzeit sehen kann, ohne in ein Menü wechseln zu müssen. |
| 4    | Muss           | Funktional      | Als Benutzer möchte ich in jedem Spiel die Möglichkeit haben, mit meinem Kontostand Einsätze zu machen, um ein realistisches Casinoerlebnis zu haben. |
| 5    | Muss           |Qualität      | Als Benutzer möchte ich im Hub eine Anleitungssektion finden, die mir die Regeln und Anleitungen zu allen verfügbaren Spielen erklärt.            |
| 6    | Kann           | Qualität       | Als Benutzer möchte ich in den Anleitungen einfache Strategien oder Tipps für jedes Spiel sehen, um mein Spiel zu verbessern.                    |
| 7    | Muss           | Funktional      | Als Benutzer möchte ich in jedem Spiel meine Einsätze und Gewinne automatisch mit meinem Kontostand verrechnet sehen, um stets den Überblick zu behalten. |
| 8    | Muss           | Rahmenbedingung | Die Webseite muss mit React.js und Tailwind CSS umgesetzt werden, um eine hohe Performance und ein ansprechendes Design zu gewährleisten.         |
| 9    | Muss          | Funktional     | Als Benutzer möchte ich in jedem Spiel direkt im Interface sehen können, ob ich gewinne oder verliere, damit ich sofort eine Rückmeldung habe.  |
| 10   | Kann        | Qualität     | Als Benutzer möchte ich eine fehlerfreie und leicht zu bedienende Benutzeroberfläche vorfinden, die auf allen gängigen Geräten funktioniert.      |
### 1.4 Testfälle


| TC-№ | Ausgangslage                                      | Eingabe                             | Erwartete Ausgabe                                                                                       |
|------|---------------------------------------------------|-------------------------------------|----------------------------------------------------------------------------------------------------------|
| 1.1  | Benutzer öffnet die Webseite                       | Webseite wird geladen               | Die zentrale Hub-Übersicht wird angezeigt, inklusive aller vier Spiele und dem aktuellen Kontostand.    |
| 1.2  | Hub-Übersicht ist geladen                          | Keine Eingabe                      | Die Anzeige zeigt alle Spielebuttons und den Kontostand korrekt positioniert an.                         |
| 2.1  | Hub-Übersicht wird angezeigt                       | Klick auf einen Spiel-Button       | Benutzer wird zur entsprechenden Spielseite weitergeleitet.                                            |
| 3.1  | Benutzer ist im Hub und hat ein Spiel beendet     | Spiel wird abgeschlossen            | Der Kontostand wird korrekt aktualisiert und im Hub angezeigt.                                          |
| 4.1  | Benutzer möchte ein Spiel starten                  | Benutzer wählt einen Einsatzbetrag  | Der Einsatzbetrag wird vom Kontostand abgezogen, bevor das Spiel gestartet wird.                        |
| 4.2  | Benutzer ist im Spiel                              | Benutzer setzt einen Betrag         | Der Einsatz wird erfolgreich platziert, und der Kontostand wird entsprechend aktualisiert.              |
| 5.1  | Hub-Übersicht wird angezeigt                       | Benutzer klickt auf die Anleitungssektion | Die Anleitungsseite öffnet sich und zeigt die Regeln aller Spiele an.                                  |
| 6.1  | Anleitungsseite wird angezeigt                     | Keine Eingabe                      | Tipps und Strategien für jedes Spiel sind sichtbar und verständlich dargestellt.                         |
| 7.1  | Benutzer hat ein Spiel gespielt                     | Spiel endet                        | Gewinne werden dem Kontostand hinzugefügt oder Verluste abgezogen, und der neue Kontostand wird angezeigt. |
| 9.1  | Benutzer hat ein Spiel gespielt                     | Spiel endet                        | Eine Rückmeldung wird angezeigt, ob der Benutzer gewonnen oder verloren hat; Kontostand wird aktualisiert. |
| 10.1 | Webseite wird geladen                               | Benutzer öffnet die Seite           | Die Webseite funktioniert fehlerfrei auf Desktop, Tablet und Smartphone, alle Inhalte werden korrekt angezeigt. |
| 10.2 | Webseite wird geladen                               | Benutzer nutzt verschiedene Browser | Die Webseite funktioniert stabil ohne Fehler oder Ladeprobleme in allen gängigen Browsern.               |


## 2 Planen



| AP-№ | Frist | Zuständig | Beschreibung                                                                                                  | geplante Zeit in Schulstunden |
|------|-------|-----------|--------------------------------------------------------------------------------------------------------------|-------------------------------|
| 1.1  |       |           | Erstellung des zentralen Hub-Layouts mit Platzhaltern für die Spiele und Kontostandsanzeige.                 |                             |
| 1.2  |       |           | Programmierung der Anzeige der vier Spiele im Hub mit ihren Namen und Startbuttons.                          |                            |
| 2.1  |       |           | Implementierung der Navigation, die bei Klick auf ein Spiel direkt zur jeweiligen Spielseite weiterleitet.   |                             |
| 3.1  |       |           | Entwicklung der Kontostandskomponente, die auf dem Hub angezeigt wird.                                       |                            |
| 3.2  |       |           | Programmierung der Kontostandsaktualisierung nach jedem Spiel, sodass der neue Stand direkt im Hub angezeigt wird. |                      |
| 4.1  |       |           | Erstellung eines Systems für Einsätze in jedem Spiel, das den aktuellen Kontostand nutzt.                    |                             |
| 4.2  |       |           | Integration der Einsatzmechanik in jedes einzelne Spiel (Baccarat, Slots, Roulette, Blackjack).              |                            |
| 5.1  |       |           | Erstellen der Anleitungsseite mit Layout und allgemeiner Struktur.                                           |                             |
| 5.2  |       |           | Schreiben der Spielregeln und Anleitungstexte für alle Spiele und Einfügen in die Anleitungsseite.          |                             |
| 6.1  |       |           | Entwicklung von Tipps und einfachen Strategien für jedes Spiel, die in der Anleitungsseite ergänzt werden.   |                             |
| 7.1  |       |           | Programmierung der Funktion, die in jedem Spiel Gewinne und Verluste automatisch mit dem Kontostand verrechnet. |                     |
| 8.1 |        |            | In Tailwind CSS lernen und einarbeiten. | |
| 9.1  |       |           | Implementierung einer direkten Rückmeldung im Interface bei Gewinn oder Verlust in jedem Spiel.              |                          |
| 10.1 |       |           | Durchführen von Tests zur Benutzerfreundlichkeit und Fehlerfreiheit der Anwendung auf verschiedenen Geräten. |                              |
| 10.2 |       |           | Endgültige Optimierung der Benutzeroberfläche für reibungslose Bedienung.                                   |                              |



Total: 

## 3 Entscheiden

1. **Technologie: Tailwind CSS**
   - **Entscheidung:** Wir haben uns für Tailwind CSS entschieden, um das Design unserer WebApp zu gestalten.
   - **Alternativen:** 
     - **Bootstrap:** Eine weit verbreitete CSS-Bibliothek, die vorgefertigte Komponenten bereitstellt. 
   - **Begründung:** Tailwind CSS ermöglicht eine hohe Flexibilität bei der Gestaltung. Im Gegensatz dazu könnten Bootstrap uns in der Gestaltung einschränken, da sie standardisierte Styles und Komponenten verwenden, die möglicherweise nicht zu unserem gewünschten Erscheinungsbild passen. Ausserdem können einige Gruppenmitglieder bereits Tailwind CSS verwenden.

2. **Technologie: React.js**
   - **Entscheidung:** Für die Entwicklung der Benutzeroberfläche haben wir uns für React.js entschieden.
   - **Alternativen:**
     - **Angular:** Ein umfassendes Framework, das ebenfalls zur Erstellung von Webanwendungen verwendet wird.
   - **Begründung:** React.js bietet eine einfache Struktur, die es uns ermöglicht, wiederverwendbare Komponenten zu erstellen. Da wir bis Dato meistens mit React.js gearbeitet haben, sind wir bereits in der Lage, es anzuwenden und müssen nicht extra Zeit zum lernen aufwenden.

3. **Plattform: WebApp**
   - **Entscheidung:** Wir haben uns entschieden, eine WebApp zu entwickeln, die auf Browsern läuft.
   - **Alternativen:**
     - **Native App:** Entwicklung einer Anwendung, die speziell für mobile Geräte (iOS/Android) erstellt wird.
     - **Desktop-App:** Erstellung einer Anwendung, die auf Desktop-Betriebssystemen (Windows, macOS, Linux) läuft.
   - **Begründung:** Eine WebApp ermöglicht uns, eine einfachere Umsetzung, da sie auf verschiedenen Geräten ohne Installation zugänglich ist. Das Publishen einer WebApp ist ausserdem auch einfacher durch Netlify.

4. **Projektart: Casino-App mit vier Spielen**
   - **Entscheidung:** Wir haben uns für die Entwicklung einer Casino-App entschieden, die die Spiele Baccarat, Slots, Roulette und Blackjack umfasst.
   - **Alternativen:**
     - **Plattform für soziale Spiele:** Entwicklung einer App für soziale Spiele wie Trivia oder Kartenspiele ohne Glücksspiel.
     - **Bildungs-App:** Erstellung einer App mit Fokus auf Lerninhalte, z.B. Programmieren oder Mathe.
   - **Begründung:** Wir haben uns bei der Entscheidung von unseren Emotionen und persönlichen Vorlieben leiten lassen. Ein Casino-Spielt bietet die Möglichkeit mehrere kleine Spiel zu erstellen und so ein Abwechslungsreiches Projekt zu machen. Zusätzlich können wir die Casino-WebApp auch während des Unterrichts benutzen.

5. **Methodik: IPERKA**
   - **Entscheidung:** Wir haben die IPERKA-Methode (Informieren, Planen, Entscheiden, Realisieren, Kontrollieren, Auswerten) gewählt.
   - **Alternativen:**
     - **Agile Methoden (z.B. Scrum):** Eine iterative Vorgehensweise, die in vielen Softwareentwicklungsprojekten verwendet wird.
     - **Wasserfallmodell:** Eine lineare, sequenzielle Entwicklungsweise.
   - **Begründung:** IPERKA bietet eine strukturierte Herangehensweise, die uns hilft, jeden Schritt klar zu definieren und zu dokumentieren. Agile Methoden wären zwar flexibel, könnten jedoch zu Unklarheiten bei der Planung führen, während das Wasserfallmodell in einem dynamischen Umfeld nicht genügend Anpassungsfähigkeit bietet.

6. **Versionskontrolle: GitHub**
   - **Entscheidung:** Wir haben GitHub als Plattform für die Versionskontrolle und Zusammenarbeit gewählt.
   - **Alternativen:**
     - **GitLab:** Eine weitere beliebte Plattform für Versionskontrolle und CI/CD.
   - **Begründung:** Da wir schon immer mit GitHub gearbeitet haben und es für die Versionskontrolle, Zusammenarbeit und Ablage sehr gut geeignet, entscheiden wir uns für Github.

7. **Hosting: Netlify**
   - **Entscheidung:** Für das Hosting der WebApp haben wir Netlify gewählt.
   - **Alternativen:**
     - **Vercel:** Eine weitere beliebte Plattform für das Hosting von Frontend-Anwendungen.
   - **Begründung:** Netlify bietet eine einfache und schnelle Bereitstellung für statische Webseiten und unterstützt die Integration mit GitHub für automatisierte Deployments. Wir haben Netlify schon in früheren Projekten verwendet und wissen deshalbt wie es anzuwenden ist.



## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |     |         |          |             |


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |    |      |       |



