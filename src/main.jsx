import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Enlace from './Enlace'
import Aside from './Aside'
import Principal from './Principal'
import Footer from './Footer'
import Section from './Section'
import Img from './Img'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <header class='header'>
        <h2>Header</h2>
        <Enlace>
          <Img></Img>
        </Enlace>
      </header>

      <div class="contenido">
        <Aside></Aside>
        <Principal></Principal>

      </div>

      <div class="footer-section">
        <Footer></Footer>
        <Section></Section>

      </div>
    

  </StrictMode>,
)
