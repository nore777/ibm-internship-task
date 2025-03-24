import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateProvider from './context/StateContext.tsx'
import App from './App.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>,
)
