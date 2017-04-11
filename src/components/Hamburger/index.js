import React from 'react';

import Wrapper from './Wrapper';
import Bar from './Bar';

const Hamburger = ({ onClick, isVisible }) => (
  <Wrapper onClick={onClick} isVisible={isVisible}>
    <Bar />
    <Bar />
    <Bar />
  </Wrapper>
);

export default Hamburger;
