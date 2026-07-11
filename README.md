# YouTube 2.0 — Modern Video Platform

**Version:** 1.0  
**Author:** Zsombi & Hermes Agent (Nous Research)  
**Status:** Working prototype

---

## Description

**YouTube 2.0** is a modern, responsive video platform built on a React + TypeScript + Vite stack. The project includes a video player (react-player), a YouTube Shorts-style scrollable interface, sidebar navigation, and mock video data. The UI follows modern YouTube design with a dark theme and Lucide icons.

---

## File Structure

```
YouTube 2.0/
│
├── package.json                # Project dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── GEMINI.md                   # Gemini integration documentation
├── index.html                  # Entry point
│
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Main application component
│   │
│   ├── components/
│   │   ├── VideoOverlay.tsx    # Video overlay component
│   │   ├── VideoSidebar.tsx    # Sidebar navigation
│   │   ├── ShortsContainer.tsx # YouTube Shorts-style view
│   │   └── ShortVideoItem.tsx  # Short video item
│   │
│   ├── utils/
│   │   └── youtubeApi.ts       # YouTube API utilities
│   │
│   ├── data/
│   │   └── mockVideos.ts       # Mock video data
│   │
│   └── styles/
│       ├── main.css            # Main stylesheet
│       └── shorts.css          # Shorts styles
│
├── dist/                       # Build output
│   ├── index.html
│   └── assets/
│
└── node_modules/               # Dependencies
```

---

## Usage

### Starting the Development Server

```bash
npm install
npm run dev
```

The server starts at `http://localhost:5173` by default.

### Production Build

```bash
npm run build
```

Output goes to the `dist/` folder.

### Build Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Technologies

| Technology | Version | Description |
|------------|--------|--------|
| **React** | 19.2.6 | UI library |
| **TypeScript** | ~6.0 | Type safety |
| **Vite** | 8.0.12 | Build tool |
| **react-player** | 3.4.0 | Video player |
| **lucide-react** | 1.14.0 | Icons |
| **ESLint** | 10.3.0 | Code quality |

---

## Dependencies

- **Node.js** 18+
- **npm** or **yarn**

---

## Developer

Zsombi & Hermes Agent (Nous Research)
