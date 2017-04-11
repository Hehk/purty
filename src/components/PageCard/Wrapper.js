import styled from 'styled-components';

const offsetX = 2;
const offsetY = 4;
const fontSize = 1.5;
const translate = (offset) => ({ index }) => index * offset + 'rem';
const colors = ['F3825F', 'A7425C', '563761', '2B2B2B'];
const getColor = ({ index }) => '#' + colors[index];
const states = {
  up: 'border-radius: 0; top: 0; bottom: 0; left: 0; right: 0;',
  down: 'border-radius: 0; top: 100%; bottom: -100%; left: 100%; right: -100%;',
  selected: 'border-radius: 0; top: 0; bottom: 0; left: 0; right: 0;',
  open: '',
}

const Wrapper = styled.section`
  position: fixed;
  top: ${translate(offsetY)};
  bottom: -${translate(offsetY)};
  left: ${translate(offsetX)};
  right: -${translate(offsetX)};
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: ${fontSize}rem;
  text-transform: uppercase;
  color: #F7F6F0;
  background-color: ${getColor};

  border-radius: ${({ index }) => index === 0 ? '' : '10px 0 0 0'};
  transition: all 1s ease;

  ${({ state }) => states[state]}
`;

export default Wrapper;
