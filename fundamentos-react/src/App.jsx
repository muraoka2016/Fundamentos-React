import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'app'>
      <h1>Bem-vindo ao nosso projeto React com Vite</h1>
      <p>Esta é a primeira inteiração com React, em breve haverá mais.</p>
    </div>
  )
}

export default App
