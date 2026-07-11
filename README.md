# YouTube 2.0 — Modern Video Platform

**Verzió:** 1.0  
**Szerző:** Zsombi (AI asszisztens segítségével)  
**Státusz:** Működő prototípus

---

## Leírás

A **YouTube 2.0** egy modern, reszponzív videóplatform React + TypeScript + Vite stacken. A projekt tartalmaz videólejátszót (react-player), YouTube Shorts-szerű görgethető felületet, oldalsávos navigációt, és mock videó adatokat. A felület a modern YouTube dizájnt követi sötét témával és Lucide ikonokkal.

---

## Fájlszerkezet

```
YouTube 2.0/
│
├── package.json                # Projekt függőségek és scriptek
├── vite.config.ts              # Vite konfiguráció
├── tsconfig.json               # TypeScript konfiguráció
├── GEMINI.md                   # Gemini integrációs dokumentáció
├── index.html                  # Belépési pont
│
├── src/
│   ├── main.tsx                # React belépési pont
│   ├── App.tsx                 # Fő alkalmazás komponens
│   │
│   ├── components/
│   │   ├── VideoOverlay.tsx    # Videó overlay komponens
│   │   ├── VideoSidebar.tsx    # Oldalsáv navigáció
│   │   ├── ShortsContainer.tsx # YouTube Shorts-szerű nézet
│   │   └── ShortVideoItem.tsx  # Short videó elem
│   │
│   ├── utils/
│   │   └── youtubeApi.ts       # YouTube API segédfüggvények
│   │
│   ├── data/
│   │   └── mockVideos.ts       # Mock videó adatok
│   │
│   └── styles/
│       ├── main.css            # Fő stíluslap
│       └── shorts.css          # Shorts stílusok
│
├── dist/                       # Build kimenet
│   ├── index.html
│   └── assets/
│
└── node_modules/               # Függőségek
```

---

## Használat

### Fejlesztői szerver indítása

```bash
npm install
npm run dev
```

A szerver alapértelmezetten `http://localhost:5173`-on indul.

### Production build

```bash
npm run build
```

A kimenet a `dist/` mappába kerül.

### Build előnézet

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Technológiák

| Technológia | Verzió | Leírás |
|------------|--------|--------|
| **React** | 19.2.6 | UI könyvtár |
| **TypeScript** | ~6.0 | Típusbiztonság |
| **Vite** | 8.0.12 | Build eszköz |
| **react-player** | 3.4.0 | Videólejátszó |
| **lucide-react** | 1.14.0 | Ikonok |
| **ESLint** | 10.3.0 | Kódminőség |

---

## Függőségek

- **Node.js** 18+
- **npm** vagy **yarn**

---

## Fejlesztő

Zsombi (AI asszisztens segítségével) (AI asszisztens segítségével)
