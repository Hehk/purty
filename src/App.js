import React, { Component } from 'react';
import PageCardList from './components/PageCardList';
import PageCard from './components/PageCard';
import PageCardContent from './components/PageCardContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageCardList>
          <PageCard name="Blog">
            test
          </PageCard>
          <PageCard name="Projects">
            test
          </PageCard>
          <PageCard name="About">
            test
          </PageCard>
          <PageCard name="Home">
            test
          </PageCard>
        </PageCardList>
      </div>
    );
  }
}

export default App;
