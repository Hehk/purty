import React from 'react';

class Delay extends React.Component {
  static propTypes = {
    wait: React.PropTypes.number.isRequired,
    loadElem: React.PropTypes.node,
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
