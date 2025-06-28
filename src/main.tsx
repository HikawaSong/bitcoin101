import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bitcoin101Page from './pages/Bitcoin101Page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bitcoin101Page />
  </StrictMode>,
)
