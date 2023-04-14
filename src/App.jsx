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
