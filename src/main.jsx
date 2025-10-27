import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './components/Provider/AuthProvider.jsx'

import { RouterProvider } from 'react-router'
import App from './App.jsx'
import router from './Routes/Router.jsx'
import HeroSection from './components/HeroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  

    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
      <App></App>
    </AuthProvider>
    
    
  </StrictMode>,
)
