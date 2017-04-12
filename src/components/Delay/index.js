import React from 'react';
import types from 'prop-types'

class Delay extends React.Component {
  static propTypes = {
    wait: types.number.isRequired,
    loadElem: types.node,
  }

  state = {
    loading: true,
  }

  componentWillMount() {
    setTimeout(
      () => this.setState({ loading: false }),
      this.props.wait
    );
  }

  render() {
    const { children, loadElem } = this.props;

    if (this.state.loading) {
      return loadElem || null;
    }

    return children;
  }
}

export default Delay;
