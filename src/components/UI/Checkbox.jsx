<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
const Checkbox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
=======
=======
>>>>>>> 6c07fd0 (added all basic UI components in components/UI)
import { useState } from 'react';
const Checkbox = (props) => {
  //value or setValue are useState values!
  const { label, checked, id, name, value, setValue } = props;
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const handleChange = (event) => {
    setIsChecked((prev) => !prev);
    const { value, checked } = event.target;
    if (checked) {
      setValue((pre) => [...pre, value]);
    } else {
      setValue((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
    }
  };
<<<<<<< HEAD
>>>>>>> dc05564 (Explore Page)
=======
=======
import { useState } from "react";
const Checkbox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
>>>>>>> ac81d60 (added all basic UI components in components/UI)
>>>>>>> 6c07fd0 (added all basic UI components in components/UI)
  return (
    <>
      <style>
        {`.checkbox-wrapper label{
            display: flex;
            width: auto;
            flex-direction: row;
            align-items: center;
            justify-items: center;
            font-weight: var(--font-weight-medium);
            font-size: 0.7em;
          }
          .checkbox-wrapper{
            display: inline-block;
            width: auto;
          }
   
          
          .checkbox-wrapper input[type="checkbox"] {
    
            -webkit-appearance: none;
            appearance: none;
           width: 1em;
            height: 1em;
            border-radius: 0.25em;
            margin-right: 0.5em;
            border: 1px solid var(--primary-purple);
            outline: none;
            cursor: pointer;
            transition-duration: 350ms;

           
          }
          
          input.checked {
            background-color: var(--primary-purple);
            position: relative;
          }
          
          .checkbox-wrapper input[type="checkbox"]:focus {
            box-shadow: var(--box-shadow);
          }`}
      </style>

      <div className="checkbox-wrapper">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
<<<<<<< HEAD
<<<<<<< HEAD
            className={isChecked ? "checked" : ""}
            onChange={() => setIsChecked((prev) => !prev)}
            {...props}
=======
=======
>>>>>>> 6c07fd0 (added all basic UI components in components/UI)
            className={isChecked ? 'checked' : ''}
            onChange={handleChange}
            id={id}
            name={name}
            value={value}
            // {...props}
<<<<<<< HEAD
>>>>>>> dc05564 (Explore Page)
=======
=======
            className={isChecked ? "checked" : ""}
            onChange={() => setIsChecked((prev) => !prev)}
            {...props}
>>>>>>> ac81d60 (added all basic UI components in components/UI)
>>>>>>> 6c07fd0 (added all basic UI components in components/UI)
          />
          <span>{label}</span>
        </label>
      </div>
    </>
  );
};
export default Checkbox;
