import styled, { keyframes } from 'styled-components';

const visible = `
  margin-top: 0;
`;
const notVisible = `
  margin-top: 100vh;
`

const PageCardContent = styled.div`
  background-color: #2b2b2b;
  flex: 1;
  transition: margin-top 1s ease;

  ${({ isVisible }) => isVisible ? visible : notVisible}
`;

export default PageCardContent;
