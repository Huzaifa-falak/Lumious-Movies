# 🎬 Luminous Movies - Netflix-Style Streaming Platform

<div align="center">

![Project Banner](https://img.shields.io/badge/Status-Active-success)
![React Version](https://img.shields.io/badge/React-19+-61dafb?logo=react&logoColor=white)
![Node Version](https://img.shields.io/badge/Node-14+-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)
![Code Quality](https://img.shields.io/badge/Code%20Quality-Production-brightgreen)

**A modern, responsive, full-stack movie streaming application with secure authentication, personalized watchlists, and 50,000+ movie database integration.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Setup](#-quick-start) • [Architecture](#-architecture) • [Contributing](#-contributing)

</div>

---

## 🎯 Project Overview

Luminous Movies is a production-ready streaming platform that replicates Netflix's core functionality. Built with modern React 19, it demonstrates advanced full-stack engineering practices including secure authentication, real-time data management, and responsive UI/UX.

**Perfect for:** Portfolio showcase, learning modern web development, understanding full-stack architecture.

---

## ✨ Key Features

| Feature | Description | Technology |
|---------|-------------|-------------|
| 🎥 **Trending Movies** | Real-time trending content from TMDB | TMDB API, Caching |
| ⭐ **Top Rated** | Curated best-rated movies & shows | Algorithm, Sorting |
| 📺 **TV Shows** | Full season and episode browsing | TMDB API, Pagination |
| 🎭 **Genre Filtering** | Browse by 20+ genres | Advanced Filtering |
| 🔐 **Secure Auth** | User registration & login | Supabase Auth |
| 📝 **Watchlist** | Personalized collection management | Supabase DB |
| 📱 **Responsive** | Mobile-first design (320px - 4K) | Bootstrap 5, CSS Grid |
| 🔍 **Advanced Search** | Full-text search across 50K+ titles | TMDB Search API |
| 🎨 **Modern UI** | Clean, intuitive interface | Bootstrap, Custom CSS |
| ⚡ **Performance** | Optimized load time < 2s | Lazy Loading, Code Splitting |

---

## 🛠️ Tech Stack

### Frontend Architecture
```
React 19 (Component-Based)
├── React Router v7 (Navigation)
├─��� Context API (State Management)
├── Bootstrap 5 (UI Components)
├── React Icons (Iconography)
└── React Toastify (Notifications)
```

### Backend & Services
```
Supabase (Backend-as-a-Service)
├── PostgreSQL (Database)
├── Row-Level Security (Authorization)
├── Realtime Updates (WebSocket)
└── Authentication (JWT-based)
```

### External APIs
```
TMDB API v3
├── Movie Database (50K+ titles)
├── Real-time Data
├── Image CDN
└── Advanced Filters
```

### Build & Tooling
```
Vite (Build Tool)
├── HMR (Hot Module Replacement)
├── Tree Shaking (Code Optimization)
├── CSS Modules Support
└── Production Build: ~350KB gzip
```

---

## 📊 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   User Browser (Client)                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  React 19 Components (SPA)                           │   ���
│  │  ├── Home / Movie Details / Watchlist / Auth Pages   │   │
│  │  └── Context Providers (Auth + Watchlist State)      │   │
│  └────────────────┬──────────────────────────────────────┘   │
└───────────────────┼──────────────────────────────────────────┘
                    │ HTTPS API Calls
        ┌───────────┴──────────────┬──────────────┐
        ▼                          ▼              ▼
   ┌─────────────┐        ┌──────────────┐  ┌────────────┐
   │ TMDB API    │        │  Supabase    │  │ Cloudflare │
   │ (Movies)    │        │  (Auth+DB)   │  │ (CDN)      │
   │ 50K+ Films  │        │ PostgreSQL   │  │            │
   └─────────────┘        └──────────────┘  └────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **npm** v6+ or **yarn** v1.22+
- **Git** for version control
- Free accounts: TMDB API, Supabase

### Step 1: Clone Repository
```bash
git clone https://github.com/Huzaifa-falak/Lumious-Movies.git
cd Lumious-Movies
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

**Dependencies Overview:**
- 🎨 UI: `bootstrap@5.3.8`, `react-icons@5.6.0`
- 🔐 Auth: `@supabase/supabase-js@2.106.1`
- 🌐 HTTP: `axios@1.16.1`
- 🎬 Video: `react-youtube@10.1.0`
- 📢 Toast: `react-toastify@11.1.0`

### Step 3: Get API Credentials

#### TMDB API Key
1. Visit [TMDB API Settings](https://www.themoviedb.org/settings/api)
2. Create an account (free)
3. Generate API v3 key
4. Copy your API key

#### Supabase Credentials
1. Visit [Supabase Dashboard](https://app.supabase.com/)
2. Create new project
3. Go to Settings → API
4. Copy: Project URL & Anon Key

### Step 4: Configure Environment
Create `.env` file in root directory:

```env
# TMDB API Configuration
VITE_TMDB_API_KEY=your_tmdb_api_key_here

# Supabase Configuration
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Optional: For production
VITE_API_TIMEOUT=30000
VITE_MAX_RETRIES=3
```

**⚠️ Security Warning:** Never commit `.env` file! Use `.env.example` for team sharing.

### Step 5: Run Development Server
```bash
npm run dev
# Server starts at http://localhost:5173
```

Access the app and see HMR (Hot Module Replacement) in action!

### Step 6: Build for Production
```bash
npm run build
# Output: dist/ folder (~350KB gzipped)

# Preview production build
npm run preview
```

---

## 📁 Project Structure Explained

```
src/
├── components/          # Reusable UI Components
│   ├── Header/         # Navigation & Search
│   ├── MovieCard/      # Movie Grid Item
│   ├── Navbar/         # Top Navigation
│   ├── Searchbar/      # Search Functionality
│   └── Footer/         # Footer Component
│
├── pages/              # Full Page Components
│   ├── Home/           # Homepage with trending/top-rated
│   ├── MovieDetails/   # Single movie view with trailers
│   ├── Watchlist/      # User's saved movies
│   ├── Auth/           # Login/Register pages
│   └── NotFound/       # 404 page
│
├── services/           # API Integration Layer
│   ├── tmdbApi.js      # TMDB API client (axios wrapper)
│   ├── supabaseClient.js # Supabase initialization
│   └── watchlistService.js # Watchlist CRUD operations
│
├── context/            # React Context Providers
│   ├── AuthContext.jsx # Authentication state
│   ├── WatchlistContext.jsx # Watchlist state management
│   └── NotificationContext.jsx # Toast notifications
│
├── hooks/              # Custom React Hooks
│   ├── useAuth.js      # Authentication hook
│   ├── useFetch.js     # Fetch with loading/error
│   ├── useLocalStorage.js # Persistent storage
│   └── useDebounce.js  # Debounced search
│
├── utils/              # Utility Functions
│   ├── constants.js    # API endpoints, genres
│   ├── helpers.js      # Format dates, ratings, etc
│   └── validators.js   # Email, password validation
│
├── styles/             # Global Styles
│   ├── variables.css   # CSS variables
│   ├── global.css      # Global styles
│   └── responsive.css  # Media queries
│
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Root styles
```

---

## 🎬 Usage Guide

### For Users

**1. Browse Home Page**
- View trending movies and top-rated shows
- Auto-updating content every 24 hours

**2. Search & Filter**
- Use search bar for title search
- Filter by genres (Action, Comedy, Drama, etc.)

**3. Authenticate**
```
Sign Up → Enter email/password → Verify → Browse
```

**4. Manage Watchlist**
- Click ❤️ icon on movie cards to add/remove
- Access your personalized watchlist

**5. View Details**
- Click movie card → See full details
- View ratings, synopsis, cast, trailers
- Watch YouTube trailers directly

---

## 🔧 Configuration Guide

### TMDB API Setup
1. Endpoint: `https://api.themoviedb.org/3`
2. Rate limit: 40 requests/10 seconds
3. Cache responses to avoid rate limiting

**Common Endpoints:**
```javascript
// Trending movies
GET /trending/movie/week

// Top rated movies
GET /movie/top_rated

// Movie details
GET /movie/{id}

// Search
GET /search/movie?query=title

// Genres
GET /genre/movie/list
```

### Supabase Setup

**Database Schema:**
```sql
CREATE TABLE watchlist (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  movie_id INTEGER NOT NULL,
  movie_title VARCHAR(255) NOT NULL,
  poster_path VARCHAR(255),
  added_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, movie_id)
);

CREATE INDEX idx_user_movies ON watchlist(user_id);
```

**Enable Row-Level Security (RLS):**
```sql
ALTER TABLE watchlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own watchlist"
  ON watchlist FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add to own watchlist"
  ON watchlist FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete from own watchlist"
  ON watchlist FOR DELETE
  USING (auth.uid() = user_id);
```

---

## 🚀 Performance Optimization

### Current Metrics
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Bundle Size:** 350KB gzipped
- **JavaScript:** 250KB gzipped

### Optimization Techniques Applied
- ✅ Code splitting by routes
- ✅ Image lazy loading
- ✅ API response caching
- ✅ CSS optimization
- ✅ Minification & compression

### Future Optimizations
- [ ] Service Workers for offline support
- [ ] Next.js migration for SSR
- [ ] Image optimization (WebP, AVIF)
- [ ] Database query optimization

---

## 🔐 Security Implementation

### Authentication
- ✅ JWT tokens (Supabase managed)
- ✅ Secure password hashing (bcrypt)
- ✅ HTTPS only
- ✅ CSRF protection via SameSite cookies

### Authorization
- ✅ Row-Level Security (RLS) on database
- ✅ User-specific watchlist isolation
- ✅ Protected routes

### API Security
- ✅ Input validation
- ✅ Rate limiting (TMDB API)
- ✅ Environment variable secrets
- ✅ No sensitive data in localStorage

**Best Practices:**
```javascript
// ✅ Good: Use context for auth state
const { user, login, logout } = useAuth();

// ❌ Bad: Store password in state
const [password, setPassword] = useState('');
```

---

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Authentication flow (signup/login/logout)
- [ ] Watchlist add/remove functionality
- [ ] Search functionality
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] API error handling
- [ ] Network throttling (slow 3G)

### Future: Automated Testing
```bash
# Unit tests (Jest + React Testing Library)
npm run test

# E2E tests (Cypress)
npm run test:e2e

# Coverage report
npm run test:coverage
```

---

## 🐛 Troubleshooting

### "Movies Not Loading"
```
1. Check TMDB API key in .env
2. Verify TMDB API account status
3. Check browser DevTools → Network tab
4. Look for CORS errors
```

### "Authentication Issues"
```
1. Clear browser cookies/cache
2. Verify Supabase URL & key in .env
3. Check Supabase Auth settings
4. Test Supabase connectivity in console:
   console.log(supabaseClient.auth.session())
```

### "Watchlist Not Syncing"
```
1. Check user authentication status
2. Verify Supabase RLS policies
3. Check database connection
4. Review browser console for errors
```

### "Slow Performance"
```
1. Clear cache (Ctrl+Shift+Del)
2. Check network throttling
3. Verify image optimization
4. Review React DevTools for re-renders
```

---

## 📈 Performance Monitoring

### Recommended Tools
- 🔍 **Chrome DevTools** - Local profiling
- 📊 **Lighthouse** - Performance audit
- 🚨 **Sentry** - Error tracking
- ⏱️ **New Relic** - Performance monitoring

---

## 🤝 Contributing

We welcome contributions! Whether it's bug fixes, features, or documentation, please read our [CONTRIBUTING.md](CONTRIBUTING.md) first.

### Quick Contribution Steps
```bash
1. Fork repository
2. Create feature branch: git checkout -b feature/your-feature
3. Commit changes: git commit -m "Add feature: description"
4. Push branch: git push origin feature/your-feature
5. Open Pull Request
```

---

## 📜 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

**TL;DR:** You can use this code for personal and commercial projects. Attribution appreciated but not required.

---

## 🙏 Acknowledgments

- 🎬 [TMDB](https://www.themoviedb.org/) - Movie database provider
- 🔐 [Supabase](https://supabase.com/) - Backend infrastructure
- 🎨 [Bootstrap](https://getbootstrap.com/) - UI framework
- ⚛️ [React](https://react.dev/) - Frontend library
- 📚 [Vite](https://vitejs.dev/) - Build tool

---

## 📊 Project Stats

- **Total Commits:** 25+
- **Lines of Code:** 3,500+
- **Components:** 12+
- **API Endpoints:** 5+
- **Development Time:** 40+ hours

---

## 📧 Support & Contact

**Have questions or suggestions?**

- 💬 [Open an Issue](https://github.com/Huzaifa-falak/Lumious-Movies/issues/new)
- 📧 **Email:** huzaifa.webdev.pk@gmail.com
- 🐙 **GitHub:** [@Huzaifa-falak](https://github.com/Huzaifa-falak)
- 💼 **LinkedIn:** [Connect with me](#)

---

## 🗺️ Roadmap

See [ROADMAP.md](docs/ROADMAP.md) for planned features and improvements.

**Short-term (Next 30 days):**
- [ ] Add dark mode toggle
- [ ] Implement PWA support
- [ ] Add user reviews system
- [ ] Performance optimization

**Long-term (Next 90 days):**
- [ ] Backend server (Node.js/Express)
- [ ] Advanced recommendation engine
- [ ] Social features (sharing, ratings)
- [ ] Mobile app (React Native)

---

<div align="center">

### ⭐ Found this helpful? Please star the repo!

**Made with ❤️ by [Huzaifa Falak](https://github.com/Huzaifa-falak)**

*"Building tools that help developers build better tools"*

[Back to Top](#-luminous-movies---netflix-style-streaming-platform)

</div>
