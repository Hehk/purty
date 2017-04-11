import React, { Component } from 'react';
import Hamburger from '../Hamburger';
import PageCardContent from '../PageCardContent';
import Delay from '../Delay';
import Wrapper from './Wrapper';
import Header from './Header';

class PageCard extends Component {
  shouldComponentUpdate(newProps) {
    return true;
  }

  isSelected = () => {
    return this.props.state === 'selected';
  }

  render() {
    const { index, state, onClick, name, children } = this.props;
    const isSelected = this.isSelected();

    return (
      <Wrapper index={index} state={state} onClick={isSelected ? undefined : onClick}>

        <Header>
          <Hamburger onClick={isSelected ? onClick : undefined} isVisible={isSelected}/>
          {name}
        </Header>

        <PageCardContent isVisible={isSelected}>
          {name}
        </PageCardContent>

      </Wrapper>
    );

    return (
      <Wrapper index={index} state={state} onClick={onClick}>
        <Header>{name}</Header>
      </Wrapper>
    );
  }
}

export default PageCard;
