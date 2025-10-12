import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SuwitJavawV1 from './component/SuwitJawaV1'
import SuwitJavawV2 from './component/SuwitJawaV2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SuwitJavawV2/>
  </StrictMode>,
)
