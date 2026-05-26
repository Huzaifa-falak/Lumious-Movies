import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WatchlistProvider from './context/WatchlistProvider'
import AuthProvider from "./context/AuthProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

     <AuthProvider>
      <WatchlistProvider>
        <App />
      </WatchlistProvider>
      </AuthProvider>

       <ToastContainer
    position="top-right"
    autoClose={3000}
    theme="dark"
  />


    </BrowserRouter>
    


  </StrictMode>
)