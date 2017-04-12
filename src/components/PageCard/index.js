import React, { Component } from 'react';
import types from 'prop-types';

import history from '../../utils/history';

import Hamburger from '../Hamburger';

import Header    from './Header';
import Content   from './Content';
import Wrapper   from './Wrapper';

class PageCard extends Component {
  static propTypes = {
    // required
    index: types.number.isRequired,
    state: types.string.isRequired,
    name:  types.string.isRequired,
    path:  types.string.isRequired,
    children: types.node.isRequired,

    // not required
    main:  types.bool,
  }

  static defaultProps = {
    main: false,
  }

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
    const { index, state, name, path, main, children } = this.props;
    console.log(index, state);
    const isSelected = this.isSelected();

    return (
      <Wrapper index={index} state={state} onClick={isSelected ? undefined : this.createRedirect(path)}>

        <Header>
          <Hamburger onClick={isSelected ? this.createRedirect('/menu') : undefined} isVisible={isSelected}/>
          { main ? '' : name }
        </Header>

        {
          main
          ? children
          : <Content isVisible={main || isSelected}>
            {children}
          </Content>
        }

      </Wrapper>
    );
  }
}

export default PageCard;
