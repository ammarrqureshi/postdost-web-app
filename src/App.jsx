import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'
import Button from './components/UI/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={Logo} alt="" />
      <Button>Test</Button>
    </div>
  )
}

export default App
