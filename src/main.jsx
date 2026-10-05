import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './theme.css'
import App from './App.jsx'
import { HexagonBackground } from './HexagonBackground.jsx'
import { initializeTheme } from './portfolioTheme.js'

initializeTheme()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HexagonBackground />
    <App />
  </StrictMode>,
)
