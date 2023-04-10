import styled from 'styled-components'

// This is a test button component... use this for all buttons, do not care for css, can be adjusted later.
const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: white;
  border: 2px solid white;

  ${props => props.$primary && css`
    background: white;
    color: black;
  `}
`
export default Button