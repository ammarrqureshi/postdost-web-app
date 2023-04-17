<<<<<<< HEAD
import { useState } from 'react' 
import Slider from '@mui/material/Slider';


function valuetext(value) {
  return `${value}CC`;
}

const calculatePercentage= (value)=>{
    ((20/100)*value)
}


  
const minDistance = 5;

export default function RangeSlider(props) {


  const [value1, setValue1] = useState([props.min, props.max]);

  const handleChange1 = (event, newValue, activeThumb) => {
=======
import { useState } from 'react';
import Slider from '@mui/material/Slider';

// function valuetext(value) {
//   return `${value}`;
// }
function valueLabelFormat(value) {
  return `$${value}`;
}

const calculatePercentage = (value) => {
  (20 / 100) * value;
};

const minDistance = 5;

export default function RangeSlider(props) {
  //value or setValue are from useState
  const { min, max, value, setValue } = props;
  const handleChange = (event, newValue, activeThumb) => {
>>>>>>> dc05564 (Explore Page)
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
<<<<<<< HEAD
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

 
  return (
<>
<style>
  {
    `
=======
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <>
      <style>
        {`
>>>>>>> dc05564 (Explore Page)
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
      
  
<<<<<<< HEAD
  } `
  }
</style>
   
    
  
      <Slider
      min={props.min}
      max={props.max}
        getAriaLabel={() => 'Minimum distance'}
        defaultValue= {900}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />

</>

  );
}
=======
  } `}
      </style>

      <Slider
        min={min}
        max={max}
        getAriaLabel={() => 'Minimum distance'}
        defaultValue={900}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        disableSwap
      />
    </>
  );
}
>>>>>>> dc05564 (Explore Page)
