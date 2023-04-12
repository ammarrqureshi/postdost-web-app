<<<<<<< HEAD
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
=======
>>>>>>> af25f29 (Pages created but it is not complete)
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
import Card from './components/UI/Card'
import Checkbox from './components/UI/Checkbox'
import TextField from './components/UI/TextField'
import Loader from './components/UI/Loader'
import Hashtag from './components/UI/Hashtag'
import RangeSlider from './components/UI/RangeSlider'




function App() {


  const [count, setCount] = useState("Digital Marketer ")

  return (
    <>
    <div className="App">
      <img src={Logo} alt="" />
      <Button $secondary>Cancel</Button>
      {/* <Button $outline>Test</Button> */}
      <Button onClick={function(){alert("this is a simple button ui elemtn")}}>Buy Post</Button>
      <Button $outline onClick={function(){alert("this is a Outline button elemtn")}}>Buy Story</Button>


      <Card onClick={function(){alert("this is a Card ui elemtn")}}> 
        <div>
          9ur4iefjdvknkjfioru45irjfldnfjiou4r05rijfe
        </div>
      </Card>


      {/* Example Checkbox Usage.... label holds the text. checked holds the default state */}
      <Checkbox label= {count} checked={false} onClick={function(){alert("this is a checkbox elemtn now checked")}}/>
      <TextField />
      <Loader></Loader>
   


      <Hashtag onClick={function(){alert("this is a hashtag ui elemtn")}}>#programming</Hashtag>
      <Hashtag>#uiuxtag</Hashtag>

      <RangeSlider min={110} max={200} ></RangeSlider>
   


    </div>
    </>
  )
}

export default App
>>>>>>> 24d1d62 (created react project)
<<<<<<< HEAD
>>>>>>> 08c1caf (first commit after rebase)
=======
=======
// import { useState } from 'react'
// import Logo from './assets/logo.png'
import './App.css'
// import Button from './components/UI/Button'
// import Card from './components/UI/Card'
import Influencer from './components/pages/Influencer/Influencer'

function App() {
  return (
    <Influencer></Influencer>
  )
}

export default App;
>>>>>>> 571af8b (Pages created but it is not complete)
>>>>>>> af25f29 (Pages created but it is not complete)
