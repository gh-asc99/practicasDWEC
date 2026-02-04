import { createContext } from 'react'
import useListado from '../hooks/useListado.js';

const ContextoListado = createContext();

const ProveedorListado = ({children}) => {

    const listado = useListado();

  return (
    <ContextoListado.Provider value={listado}>
        {children}
    </ContextoListado.Provider>
  )
}

export default ProveedorListado

export {ContextoListado}