import { useState } from 'react' 
import Slider from '@mui/material/Slider';
import "./RangeSlider.css"

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
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

 
  return (
<>
   
    
  
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