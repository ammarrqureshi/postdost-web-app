<<<<<<< HEAD
import styled, { css } from 'styled-components'

// This is a test button component... use this for all buttons, do not care for css, can be adjusted later.
const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  
  padding: 0.8em 1.5em;
  border: none;
  outline: none;
  width: auto;
  display: inline-block;
            width: auto;
  background: var(--primary-purple);
  color: white;
  border-radius: .5rem;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
<<<<<<< HEAD
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;

  span{
    font-size:22px;
    margin-left:10px;
  }
=======
  box-sizing: border-box;

>>>>>>> dc05564 (Explore Page)
  &:hover {
    opacity: 0.9;
transform   : scale(1.06,1.06) ;
transition-duration: 350ms;
  }



  ${props => props.$secondary && css`
    background: var( --secondary-grey);
    color: var(--primary-purple);

  
  `}

  ${props => props.$outline && css`
    background: transparent;
    border: 1px solid var(--primary-purple);
    color: var(--primary-purple);

    &:hover {
      opacity: 1;
    background-color: var(--primary-purple);
    color: white;

  }
  `}
 
`
<<<<<<< HEAD
<<<<<<< HEAD
export default Button;
=======
export default Button
>>>>>>> dc05564 (Explore Page)
=======
=======
import React from 'react'

const Button = ( props ) => {
  return (
    <div>
    <button onClick={props.onClick} value={props.value}>{props.children}</button>
    </div>
  )
}

>>>>>>> 7e53f72 (initial commit)
export default Button
>>>>>>> d6755db (initial commit)
