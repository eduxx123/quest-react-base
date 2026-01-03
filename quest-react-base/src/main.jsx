import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App.jsx'
import Button from './components/button/button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App texto='Olá! eu sou o texto do paragráfo.'/>
    <Button />
  </StrictMode>,
)
