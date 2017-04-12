import React, { Component } from 'react';
import history from '../../utils/history';

import Hamburger from '../Hamburger';

import Header    from './Header';
import Content   from './Content';
import Wrapper   from './Wrapper';

class PageCard extends Component {
  shouldComponentUpdate(newProps) {
    return true;
  }

  createRedirect = (path) => () => {
    history.push(path);
  }

  isSelected = () => {
    return this.props.state === 'selected';
  }

  render() {
    const { index, state, name, path } = this.props;
    const isSelected = this.isSelected();

    return (
      <Wrapper index={index} state={state} onClick={isSelected ? undefined : this.createRedirect(path)}>

        <Header>
          <Hamburger onClick={isSelected ? this.createRedirect('/menu') : undefined} isVisible={isSelected}/>
          {name}
        </Header>

        <Content isVisible={isSelected}>
          {name}
        </Content>

      </Wrapper>
    );
  }
}

export default PageCard;
