# 🎬 Luminous Movies

A modern full-stack movie streaming web application built with React.js, Bootstrap, TMDB API, and Supabase. Discover trending movies, explore genres, manage your watchlist, and enjoy a Netflix-style user experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18+-61dafb.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

## ✨ Features

- 🎥 **Trending Movies & Shows** - Discover what's popular right now
- ⭐ **Top Rated Content** - Browse the best-rated movies and TV shows
- 📺 **TV Shows & Episodes** - Full season and episode browsing
- 🎭 **Genre Filtering** - Filter content by genres
- 🔐 **Authentication System** - Secure user login and registration with Supabase
- 📝 **Watchlist Management** - Add/remove movies from your personal watchlist
- 📱 **Fully Responsive** - Netflix-style UI that works on all devices
- 🔔 **Toast Notifications** - User-friendly notifications for actions
- 🔀 **Dynamic Routing** - Smooth navigation with React Router
- 🌙 **Modern UI** - Clean and intuitive interface with Bootstrap

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React.js** | Frontend framework |
| **Bootstrap** | UI styling & components |
| **Supabase** | Backend & authentication |
| **TMDB API** | Movie/TV data |
| **React Router** | Client-side routing |
| **React Toastify** | Notifications |
| **JavaScript (ES6+)** | Core language |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Huzaifa-falak/Lumious-Movies.git
cd Lumious-Movies
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Get your API keys:**
- [TMDB API Key](https://www.themoviedb.org/settings/api) - Sign up and create an API key
- [Supabase Credentials](https://app.supabase.com/) - Create a new project and get your URL & key

### 4. Run Development Server
```bash
npm run dev
```
The app will open at `http://localhost:5173`

### 5. Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/      # Reusable components
├── pages/          # Page components
├── services/       # API & Supabase services
├── context/        # React context
├── styles/         # CSS styles
└── App.jsx         # Main app component
```

## 🎬 How to Use

1. **Browse Content** - Explore trending movies and shows from the homepage
2. **Search & Filter** - Use genre filters to find specific content
3. **Sign In** - Create an account or login with Supabase
4. **Manage Watchlist** - Add movies to your watchlist for later viewing
5. **View Details** - Click on any movie to see full details, ratings, and episodes

## 🌐 Live Demo

[Coming Soon](#)

## 📸 Screenshots

[Screenshots coming soon...]

## 🔧 Configuration

### TMDB API
- Visit [TMDB](https://www.themoviedb.org/settings/api)
- Generate your API key
- Add it to `.env` as `VITE_TMDB_API_KEY`

### Supabase
- Create a project on [Supabase](https://app.supabase.com/)
- Set up authentication with Email/Password
- Get your project URL and Anon Key
- Add them to `.env`

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) - Movie data provider
- [Supabase](https://supabase.com/) - Backend services
- [Bootstrap](https://getbootstrap.com/) - UI framework
- [React](https://react.dev/) - Frontend library

## 📧 Contact & Support

For questions or support, feel free to reach out:
- GitHub: [@Huzaifa-falak](https://github.com/Huzaifa-falak)
- Email: [Your Email]

---

Made with ❤️ by [Huzaifa-falak](https://github.com/Huzaifa-falak)
