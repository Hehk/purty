import React from 'react';
import { reverse, map, slice } from 'lodash';
import PageCard from '../PageCard';

class PageCardList extends React.Component {
  state = {
    selected: -1,
  }

  changeSelection = (index) => {
    const { selected } = this.state;
    if (selected === index) {
      return this.setState({ selected: -1 });
    }

    return this.setState({ selected: index });
  }

  getCardState = (index, selected) => {
    if (selected === -1) {
      return 'open';
    } else if (index === selected) {
      return 'selected';
    } else if (index > selected) {
      return 'down';
    } else {
      return 'up';
    }
  }

  render() {
    const { cards, children } = this.props;
    const { selected } = this.state;

    return (
      <div>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            index,
            state: this.getCardState(index, selected),
            onClick: () => this.changeSelection(index),
          })
        )}
        {/* {map(reverse(slice(cards)), ({ name, content }, index) =>
          <PageCard
            index={index}
            state={this.getCardState(index, selected)}
            onClick={() => this.changeSelection(index)}
            name={name}
            key={name}
          >
            {content}
          </PageCard>
        )} */}
      </div>
    );
  }
}

export default PageCardList;
