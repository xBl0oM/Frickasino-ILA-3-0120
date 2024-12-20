# Projekt-Dokumentation

Jan, John, Joël, Janick, BBBen (Braten Bohren Behindert)

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  01.11.2024    | 0.0.0   | Start des Projektes - Informieren, Planen, Entscheiden. Doku erstellt. |
| 08.11.2024 | 0.1.0 | Tailwind CSS gelernt und geübt. Mit Hub-Layout angefangen. |
| 15.11.2024| 0.2.0|Hub fertiggestellt + Navigation zu Spielen. |
| 22.11.2024| 0.3.0|Kontostand implementiert |
| 29.11.2024| 0.4.0|System für Einsätze in den Spielen implementiert. Spiele angefangen zu programmieren. |
| 06.12.2024| 0.5.0|Spiele fertig programmiert. |
| 13.12.2024|1.0.0 | Abschluss der Programmierung und Tests angefangen durchzuführen. |
| 20.12.2024| 1.0.0|Seite gepublished. |

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


## 2. Planen

| AP-№ | Frist     | Zuständig       | Beschreibung                                                                                                  | Geplante Zeit in Schulstunden |
|------|-----------|-----------------|--------------------------------------------------------------------------------------------------------------|-------------------------------|
| 1.1  | 15.11.    | Jan Frey        | Erstellung des zentralen Hub-Layouts mit Platzhaltern für die Spiele und Kontostandsanzeige.                 | 6                             |
| 1.2  | 15.11.    | Janick Hurschler | Programmierung der Anzeige der vier Spiele im Hub mit ihren Namen und Startbuttons.                          | 6                             |
| 2.1  | 15.11.    | John Broderer   | Implementierung der Navigation, die bei Klick auf ein Spiel direkt zur jeweiligen Spielseite weiterleitet.   | 5                             |
| 3.1  | 22.11.    | Joël Haldimann  | Entwicklung der Kontostandskomponente, die auf dem Hub angezeigt wird.                                       | 5                             |
| 3.2  | 22.11.    | Ben Müller      | Programmierung der Kontostandsaktualisierung nach jedem Spiel, sodass der neue Stand direkt im Hub angezeigt wird. | 6                     |
| 4.1  | 29.11.    | Jan Frey        | Erstellung eines Systems für Einsätze in jedem Spiel, das den aktuellen Kontostand nutzt.                    | 8                             |
| 4.2  | 29.11.    | Janick Hurschler | Integration der Einsatzmechanik in jedes einzelne Spiel (Baccarat, Slots, Roulette, Blackjack).              | 9                             |
| 5.1  | 06.12.    | John Broderer   | Erstellen der Anleitungsseite mit Layout und allgemeiner Struktur.                                           | 6                             |
| 5.2  | 06.12.    | Joël Haldimann  | Schreiben der Spielregeln und Anleitungstexte für alle Spiele und Einfügen in die Anleitungsseite.           | 8                             |
| 6.1  | 06.12.    | Ben Müller      | Entwicklung von Tipps und einfachen Strategien für jedes Spiel, die in der Anleitungsseite ergänzt werden.   | 5                             |
| 7.1  | 13.12.    | Jan Frey        | Programmierung der Funktion, die in jedem Spiel Gewinne und Verluste automatisch mit dem Kontostand verrechnet. | 9                     |
| 8.1  | 15.11.    | Alle            | Lernen und Einarbeiten in Tailwind CSS.                                                                      | 1 pro Person (5 Stunden)      |
| 9.1  | 13.12.    | Janick Hurschler | Implementierung einer direkten Rückmeldung im Interface bei Gewinn oder Verlust in jedem Spiel.              | 6                             |
| 10.1 | 20.12.    | John Broderer, Joël Haldimann | Durchführen von Tests zur Benutzerfreundlichkeit und Fehlerfreiheit der Anwendung auf verschiedenen Geräten. | 6                             |
| 10.2 | 20.12.    | Ben Müller      | Endgültige Optimierung der Benutzeroberfläche für reibungslose Bedienung.                                   | 6                             |




### Verteilung der Arbeitstage

- **15.11.**: Fokus auf Grundlagen (Hub-Layout, Navigation, Tailwind CSS).  
- **22.11.**: Fokus auf Kontostandskomponenten.  
- **29.11.**: Fokus auf Einsätze und deren Mechanik.  
- **06.12.**: Fokus auf die Anleitung.  
- **13.12.**: Fokus auf Gewinn-/Verlustlogik und Feedback.  
- **20.12.**: Fokus auf Tests und Optimierung.  


Total: 90

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



### 4. Realisieren

| AP-№ | Datum   | Zuständig               | Geplante Zeit | Tatsächliche Zeit |
|------|---------|-------------------------|---------------|-------------------|
| 1.1  | 15.11.  | Jan Frey                | 6 Stunden     | 6 Stunden         |
| 1.2  | 15.11.  | Janick Hurschler        | 6 Stunden     | 6 Stunden         |
| 2.1  | 15.11.  | John Broderer           | 5 Stunden     | 5 Stunden         |
| 3.1  | 22.11.  | Joël Haldimann          | 5 Stunden     | 5 Stunden         |
| 3.2  | 22.11.  | Ben Müller              | 6 Stunden     | 6 Stunden         |
| 4.1  | 29.11.  | Jan Frey                | 8 Stunden     | 8 Stunden         |
| 4.2  | 29.11.  | Janick Hurschler        | 9 Stunden     | 9 Stunden         |
| 5.1  | 06.12.  | John Broderer           | 6 Stunden     | 6 Stunden         |
| 5.2  | 06.12.  | Joël Haldimann          | 8 Stunden     | 8 Stunden         |
| 6.1  | 06.12.  | Ben Müller              | 5 Stunden     | 5 Stunden         |
| 7.1  | 13.12.  | Jan Frey                | 9 Stunden     | 9 Stunden         |
| 8.1  | 15.11.  | Alle                    | 5 Stunden     | 5 Stunden         |
| 9.1  | 13.12.  | Janick Hurschler        | 6 Stunden     | 6 Stunden         |
| 10.1 | 20.12.  | John Broderer, Joël Haldimann | 6 Stunden    | 6 Stunden         |
| 10.2 | 20.12.  | Ben Müller              | 6 Stunden     | 6 Stunden         |


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |    |      |       |



