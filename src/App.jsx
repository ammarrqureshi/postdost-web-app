<<<<<<< HEAD
<<<<<<< HEAD
import './App.css'
import Influencer from './components/pages/Influencer/Influencer';

function App() {
  return (
    <Influencer></Influencer>
  )
  }
  
  export default App;
=======
=======
>>>>>>> 08c1caf (first commit after rebase)
import Explore from './components/pages/Explore/Explore';
import ExploreProvider from './contexts/ExploreContext';
import SignUp from './components/pages/SignUp/SignUp';
import LogIn from './components/pages/LogIn/LogIn';
function App() {
  return (
    <>
      <div className="App">
        {/* <ExploreProvider>
          <Explore />
        </ExploreProvider> */}
        {/* <SignUp /> */}
        <LogIn/>
      </div>
    </>
  );
}
export default App;
<<<<<<< HEAD
>>>>>>> dc05564 (Explore Page)
=======
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
>>>>>>> 24d1d62 (created react project)
>>>>>>> 08c1caf (first commit after rebase)
