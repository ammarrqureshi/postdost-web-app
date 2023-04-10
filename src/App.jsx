import { useState } from 'react'
import Logo from './assets/logo.png'
import './App.css'
import Button from './components/UI/Button'
import Card from './components/UI/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={Logo} alt="" />
      <Button primary>Test</Button>
      <Card> 
        <div>
          <h1>hello</h1>
        </div>
      </Card>
    </div>
  )
}

export default App
