import styled, { keyframes } from 'styled-components';
const loaded = `
  width: 1.5rem;
  margin-right: 1.5rem;
`;
const notLoaded = `
  width: 0;
  margin-right: 0;
`;

const Wrapper = styled.div`
  height: 1.5rem;
  border-radius: 2px;

  display: flex;
  justify-content: space-around;
  flex-direction: column;

  transition: all 1s ease;

  ${({ isVisible }) => isVisible ? loaded : notLoaded }
`;

export default Wrapper;