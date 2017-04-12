import styled from 'styled-components';

const visible = `
  margin-top: 0;
  opacity: 1;
`;
const notVisible = `
  margin-top: 100vh;
  opacity: 0;
`

const Content = styled.div`
  background-color: #F7F6F0;
  color: #2b2b2b;
  flex: 1;
  transition: all 1s ease;

  ${({ isVisible }) => isVisible ? visible : notVisible}
`;

export default Content;
