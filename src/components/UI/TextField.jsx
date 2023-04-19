import styled from 'styled-components';

const TextField = styled.input.attrs((props) => ({
  type: props.type,
}))`
  outline: none;
  border: 1px solid var(--secondary-grey);
  border-radius: 0.5em;
  width: auto;
  line-height: 100%;
  padding: 1em;
  display: inline-block;
  width: auto;
  transition-duration: 350ms;
  color: var(--black);
  font-weight: var(--font-weight-bold);
  &:focus {
    border: 1px solid var(--primary-purple);
  }
  &:active {
    border: 1px solid var(--primary-purple);
  }
`;

export default TextField;
