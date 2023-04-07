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
import Logo from './assets/logo.png'
import './App.css'
import Button from './components/UI/Button'
import Form from './components/UI/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={Logo} alt="" />
      <Button>Test</Button>

      <Form></Form>
    </div>
  )
}

export default App
>>>>>>> 24d1d62 (created react project)
>>>>>>> 08c1caf (first commit after rebase)
