import styled, { css } from 'styled-components'

// This is a test button component... use this for all buttons, do not care for css, can be adjusted later.
const Button = styled.button`
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
font-family: 'Raleway', sans-serif;
box-sizing: border-box;
display:flex;
align-items:center;
justify-content:center;

&:hover {
  opacity: 0.9;
transform   : scale(1.06,1.06) ;
transition-duration: 350ms;
}

span {
  font-size:22px;
  margin-left: 10px;
  display:flex;
  align-items:center;
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
export default Button;