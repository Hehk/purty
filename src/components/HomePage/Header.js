import styled, { keyframes } from 'styled-components';

const colorChange = keyframes`
  0% {
    color: #563761;
  }

  25% {
    color: #A7425C;
  }

  50% {
    color: #F3825F;
  }

  75% {
    color: #FFE26F;
  }

  100% {
    color: #563761;
  }
`;

const Header = styled.header`
  font-size: 7.5rem;
  font-family: Sacramento;
  text-shadow: 0 0 5px rgba(0,0,0,0.2);
  animation: ${colorChange} 20s ease infinite;
`;

export default Header;
