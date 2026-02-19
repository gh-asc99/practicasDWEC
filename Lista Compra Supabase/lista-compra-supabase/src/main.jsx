import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProveedorSesion from './context/ProveedorSesion.jsx'
import ProveedorAviso from './context/ProveedorAviso.jsx'
import ProveedorListado from './context/ProveedorListado.jsx'
import ProveedorRol from './context/ProveedorRol.jsx'
import ProveedorPerfil from './context/ProveedorPerfil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProveedorSesion>
        <ProveedorPerfil>
          <ProveedorRol>
            <ProveedorAviso>
              <ProveedorListado>
                <App />
              </ProveedorListado>
            </ProveedorAviso>
          </ProveedorRol>
        </ProveedorPerfil>
      </ProveedorSesion>
    </BrowserRouter>
  </StrictMode>,
)
