import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Componente>
        Este es el children de mi primer componente.
      </Componente>
    </>
  )
}

export default App
