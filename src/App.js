import React, { Component } from 'react';
import PageCardList from './components/PageCardList';
import PageCard from './components/PageCard';
import HomePage from './components/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <PageCardList>
        <PageCard name="Blog" path="/blog">
          test
        </PageCard>
        <PageCard name="Projects" path="/projects">
          test
        </PageCard>
        <PageCard name="About" path="/about">
          test
        </PageCard>
        <PageCard name="Home" path="/" main>
          <HomePage />
        </PageCard>
      </PageCardList>
    );
  }
}

export default App;
