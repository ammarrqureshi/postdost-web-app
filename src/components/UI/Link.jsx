import styled from 'styled-components';

const Link = styled.a`
  display: inline-block;
  color: ${props => props.color || 'black'};
  text-decoration: none;
  font-size: ${props => props.fontSize || '18px'};
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  opacity: ${props => props.opacity || '0.45'};
  font-weight: ${props => props.fontWeight || '600'};
  text-decoration: ${props => props.textDecoration || 'none'};
  &:hover {
    color: ${props => props.hoverColor || props.color || '#5E17EB'};
  }

  &.active{
    color: var(--primary-color);
    font-weight:bold;
    text-decoration: underline;
    opacity: 1;
    text-decoration-thickness: 2px;
    text-underline-offset: 8px;
    transform: translateY(-4px);
    transition: transform 0.2s ease;
  }
`;

export default Link;