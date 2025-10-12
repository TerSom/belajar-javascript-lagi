import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SuwitJavawV1 from './component/SuwitJawaV1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SuwitJavawV1/>
  </StrictMode>,
)
