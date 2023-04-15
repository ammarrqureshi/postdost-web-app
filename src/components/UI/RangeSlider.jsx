import { useState } from 'react' 
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}CC`;
}

const minDistance = 5;

export default function RangeSlider(props) {


  const [value, setValue1] = useState([props.min, props.max]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

 


  return (
<>
<style>
  {
    `
    .css-187mznn-MuiSlider-root {
      color: var(--primary-purple);
      box-sizing: border-box;
      width: 99%;
     
  
  }
  .css-eg0mwd-MuiSlider-thumb:hover{
      box-shadow: none;
      
  }
  .css-eg0mwd-MuiSlider-thumb:active{
      box-shadow: none;
      
  }
  
  .css-eg0mwd-MuiSlider-thumb.Mui-active{
      box-shadow: none;
      
  }
  
  .css-nnid7-MuiSlider-valueLabel{
      background: var(--black);
      padding: 0.15em 0.75em;
      font-size: 0.8em;
      
  
  } `
  }
</style>
   
    
  
      <Slider
      min={props.min}
      max={props.max}
        getAriaLabel={() => 'Minimum distance'}
        defaultValue= {900}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />

</>

  );
}