import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cabecalho from './components/cabecalho'
import Button from './components/Button'
import Lista from './components/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    /*Crie um elemento cabeçalho contendo um título e um subtítulo*/
    <div>
      {cabecalho}
      <Button className = 'btn-primary' label = 'Clique aqui'/>
      <Lista/>
    </div>
  )
}

export default App
