import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProveedorSesion from './context/ProveedorSesion.jsx'
import ProveedorAviso from './context/ProveedorAviso.jsx'
import ProveedorListado from './context/ProveedorListado.jsx'
import ProveedorRol from './context/ProveedorRol.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProveedorSesion>
        <ProveedorRol>
          <ProveedorAviso>
            <ProveedorListado>
              <App />
            </ProveedorListado>
          </ProveedorAviso>
        </ProveedorRol>

      </ProveedorSesion>
    </BrowserRouter>
  </StrictMode>,
)
