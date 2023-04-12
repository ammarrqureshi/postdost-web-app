import styled from 'styled-components'

// This is a test button component... use this for all buttons, do not care for css, can be adjusted later.
const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
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

  ${props => props.$primary && css`
    background: white;
    color: black;
  `}
`
export default Button;