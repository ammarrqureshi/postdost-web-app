<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
  border-radius: ${props => props.borderRadius || '3px'};
  padding: ${props => props.Padding || '0.5rem 0' };
  // margin: 0.5rem 1rem;
  width: 9rem;
  background: ${props => props.Color || 'red'};
  color: ${props => props.textColor || 'white'};
  border: ${props => props.border || '2px solid white'};
  font-family:'Raleway', sans-serif;
  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  opacity: ${props => props.Opacity || '100%'}
>>>>>>> 571af8b (Pages created but it is not complete)

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
=======
import styled from 'styled-components'
>>>>>>> 735b7fd (directory structure initial commit)
=======
import styled, { css } from 'styled-components'
>>>>>>> ac81d60 (added all basic UI components in components/UI)

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
  box-sizing: border-box;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7e53f72 (initial commit)
<<<<<<< HEAD
export default Button
>>>>>>> d6755db (initial commit)
=======
=======
  ${props => props.$primary && css`
    background: white;
    color: black;
=======
  &:hover {
    opacity: 0.9;
transform   : scale(1.06,1.06) ;
transition-duration: 350ms;
  }



  ${props => props.$secondary && css`
    background: var( --secondary-grey);
    color: var(--primary-purple);

  
>>>>>>> ac81d60 (added all basic UI components in components/UI)
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
>>>>>>> 735b7fd (directory structure initial commit)
export default Button
<<<<<<< HEAD
>>>>>>> b8d6e05 (directory structure initial commit)
=======
=======
export default Button;
>>>>>>> 571af8b (Pages created but it is not complete)
>>>>>>> af25f29 (Pages created but it is not complete)
