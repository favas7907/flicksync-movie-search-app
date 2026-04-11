# 🎬 FlickSync

FlickSync is a premium, production-ready movie search application built with **React 19**, **Vite**, and **Tailwind CSS**. It offers a high-end SaaS-like experience for discovering and exploring cinema with a focus on performance, accessibility, and elegant design.

![FlickSync Preview](https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop)

## ✨ Key Features

- **🚀 Instant Discovery**: High-performance debounced search with real-time results from the OMDb database.
- **💎 Premium UI/UX**: A clean, minimal interface featuring a sophisticated green-white design system, soft shadows, and generous whitespace.
- **📱 Fluid Responsiveness**: Mobile-first architecture ensuring a seamless experience from smartphones to ultra-wide monitors.
- **🎭 Rich Interactions**: Smooth micro-interactions, spring-based animations, and backdrop-blur effects powered by Framer Motion.
- **📖 Detailed Insights**: Comprehensive movie data including IMDb ratings, cast, plot summaries, and genre tags in a beautiful responsive modal.
- **⚡ Performance Optimized**: Lazy-loaded assets, debounced inputs, and efficient state management for a snappy feel.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Source**: [OMDb API](https://www.omdbapi.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/flicksync.git
   cd flicksync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```
   *Note: Get your free API key at [omdbapi.com](https://www.omdbapi.com/apikey.aspx).*

4. **Launch Development Server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
/src
  /components     # Reusable UI components
  /hooks          # Custom React hooks (useMovies, useDebounce)
  /services       # API integration logic (omdbService)
  /lib            # Utility functions
  /pages          # Main page views
  /config         # App configuration
  /styles         # Global CSS and Tailwind setup
```

## 🚢 Deployment

FlickSync is optimized for static hosting platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

1. **Build the production bundle**
   ```bash
   npm run build
   ```

2. **Set Environment Variables**
   Ensure `VITE_OMDB_API_KEY` is added to your platform's environment settings.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

*Crafted with ❤️ for movie lovers everywhere.*
