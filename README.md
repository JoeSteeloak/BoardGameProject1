# Brädspelssamling - React och TypeScript

Denna webbapplikation är skapad med React och TypeScript för att visa upp min samling av brädspel. Webbplatsen är uppbyggd av flera komponenter och använder props för att skicka data till dessa. Det huvudsakliga målet med uppgiften var att förstå grundläggande koncept i React och skapa en enkel webbplats som är responsiv och innehåller dynamiskt genererade komponenter.

## Funktioner

- **Sidhuvud** med titel och banner. Titeln skickas som en prop till `Header`-komponenten.
- **Huvudinnehåll** som innehåller en lista med brädspel. Varje spel representeras av ett objekt med egenskaper som titel, om det är ett kooperativt spel eller ej, och mitt personliga betyg på spelet. Listan renderas dynamiskt genom användning av `map`-funktionen..
- **Responsiv design** för både desktop och mobila enheter.

## Teknologier

- **React**: För att skapa komponenter och hantera användargränssnittet.
- **TypeScript**: För att säkerställa typkontroll och bättre kodkvalitet.
- **CSS**: För att designa och göra webbplatsen responsiv.

## Struktur

Applikationen är uppdelad i flera komponenter:

- **App.tsx**: Huvudkomponenten som renderar sidhuvudet, huvudsektionen och sidfoten.
- **Header.tsx**: Komponent för sidhuvudet där titeln skickas som prop.
- **Footer.tsx**: Komponent för sidfoten.
- **Hero.tsx**: Komponent för banner.
- **BoardGame.tsx**: Komponent som representerar ett brädspel i listan.

## Installation

1. Klona repositoryt:
   ```
   git clone https://github.com/JoeSteeloak/BoardGameProject1.git
   ```

2. Installera beroenden:
   ```
   cd BoardGameProject1
   npm install
   ```

3. Starta utvecklingsservern:
   ```
   npm run dev
   ```

4. Webbplatsen ska nu vara tillgänglig på [http://localhost:5173](http://localhost:5173).

## Git och GitHub

- Git och GitHub har använts för versionhantering under hela projektet. Regelbundna commits med beskrivande meddelanden har gjorts för att hålla koll på förändringar.
- En `.gitignore`-fil är inkluderad för att exkludera filer som inte bör versionhanteras, såsom `node_modules`.

## Publik Webbplats

Webbplatsen har publicerats och är tillgänglig för testkörning på [https://myboardgamecollection.netlify.app/](https://myboardgamecollection.netlify.app/).