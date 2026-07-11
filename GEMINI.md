# YouTube Shorts Replica (News, Science, Gaming)

## Project Overview
This project is a high-fidelity YouTube Shorts replica built for educational purposes. It displays a vertically scrollable, snap-to-fit video feed focused on three niches: News, Science, and Gaming. The application uses the official YouTube IFrame Player API for robust video handling and content metadata rendering.

## Technologies
- **Frontend:** React, TypeScript, Vite
- **Styling:** Vanilla CSS
- **Icons:** Lucide React
- **Video Integration:** YouTube IFrame Player API

## Project Structure
- `src/components/`: Core UI components (ShortsContainer, VideoSidebar, VideoOverlay).
- `src/data/`: Mock video metadata and configuration.
- `src/styles/`: Global and component-specific CSS.
- `src/utils/`: Helper utilities (YouTube API loading).

## Building and Running
To manage and run this project, use the following commands:

- **Development Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Linting:** `npm run lint`

## Development Conventions
- **Data Management:** Video metadata is stored in `src/data/mockVideos.ts` using the `Video` interface.
- **Video Embedding:** The project uses the YouTube IFrame Player API. Note that due to YouTube's strict domain policies, videos require a production-grade domain (e.g., Vercel, Netlify) to be playable; they may be blocked by YouTube on `localhost`.
- **Styling:** Global styles are defined in `src/styles/main.css`, while component-specific styles are in `src/styles/shorts.css`.
- **Component Lifecycle:** The `IntersectionObserver` in `ShortsContainer.tsx` is used to detect active videos and trigger the API-based play/pause functionality.
