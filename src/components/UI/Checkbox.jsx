import { useState } from "react";
const Checkbox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
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
            className={isChecked ? "checked" : ""}
            onChange={() => setIsChecked((prev) => !prev)}
            {...props}
          />
          <span>{label}</span>
        </label>
      </div>
    </>
  );
};
export default Checkbox;
