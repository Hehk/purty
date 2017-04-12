import React from 'react';
import history from '../../utils/history';

class PageCardList extends React.Component {
  state = {
    selected: -1,
    curPath: '',
  }

  componentWillMount() {
    // setting path to current location
    this.setPath(history.location)

    // adding listener to page change
    history.listen(this.setPath);
  }

  setPath = (location) => {
    const curPath = location.pathname;
    const selected = this.props.children.findIndex(
      child => child.props.path === curPath
    );

    this.setState({ curPath, selected });
  }

  changeSelection = (index) => {
    const { selected } = this.state;
    if (selected === index) {
      return this.setState({ selected: -1 });
    }

    return this.setState({ selected: index });
  }

  getCardState = (index, path) => {
    const { curPath, selected } = this.state;
    console.log('path', path, 'curPath', curPath);

    if (curPath === '/menu') {
      return 'open';
    } else if (curPath === path) {
      return 'selected';
    } else if (index > selected) {
      return 'down';
    } else {
      return 'up';
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            index,
            state: this.getCardState(index, child.props.path),
            onClick: () => this.changeSelection(index),
          })
        )}
      </div>
    );
  }
}

export default PageCardList;
