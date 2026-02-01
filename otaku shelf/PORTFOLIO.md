# OtakuShelf - Anime Discovery Platform

## Project Overview

**OtakuShelf** is a modern, responsive single-page application (SPA) designed to mimic the immersive browsing experience of streaming giants like Netflix, but tailored specifically for Anime enthusiasts. Built with React and powered by the AniList GraphQL API, it offers a seamless way to discover, search, and curate anime lists.

## 🚀 Live Demo

https://adorable-meringue-e6c244.netlify.app/

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Pure CSS3 with CSS Variables for global theming
- **Data Source**: AniList GraphQL API
- **Routing**: React Router v6
- **State Management**: React Context API (for "My List") & LocalStorage

## ✨ Key Features

- **Immersive UI**: Features a dynamic Hero Banner and horizontal scrolling carousels (Trending, Popular, Upcoming).
- **Theme System**: Currently features a **"Cyberpunk / Neo-Tokyo"** aesthetic with deep midnight blues and neon cyan accents. The CSS variable architecture allows for instant theme switching (e.g., Light Mode, "Sakura", "Manga Ink").
- **Smart Search**: Real-time search functionality accessible directly from the navbar, with URL synchronization for easy sharing.
- **"My List" Persistence**: Users can build a watchlist that persists across sessions using LocalStorage.
- **Detailed Modals**: Clicking any anime opens a rich details modal with trailers, synopsis, and metadata without navigating away from the browsing context.
- **Responsive Design**: Fully mobile-optimized layout.

## 💡 Technical Highlights

### 1. Robust CSS Strategy

The application eschews heavy UI libraries in favor of custom CSS with a robust Variable system (`src/styles/variables.css`). This provides granular control over the design system:

```css
:root {
  /* Dynamic Theme Variables */
  --color-bg-primary: #050510;
  --color-accent: #00f3ff;
  --navbar-height: 60px;
}
```

### 2. GraphQL Integration

Utilizes `fetch` to interact with AniList's GraphQL endpoint, demonstrating efficient data fetching patterns and error handling for external APIs.

### 3. React Best Practices

- **Custom Hooks**: Encapsulated logic for data fetching.
- **Context API**: Global state management for user preferences.
- **Component Composition**: Modular architecture (Cards, Modals, Carousels).

## 🏃‍♂️ How to Run Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🔮 Future Improvements

- User Authentication (Firebase/Supabase) to sync lists across devices.
- Integration with video streaming providers.
- Advanced filtering (Genre tags, Season filters).

---

_Created by [Your Name]_
