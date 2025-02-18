import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
) /*esse componente app dentro do strictmode é a função que está dentro do arquivo App.tsx
e dentro dessa função tem um h1*/
