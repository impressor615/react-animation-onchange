import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactAnimationExample from './components/ReactAnimationExample';
import TransitionExample from './components/TransitionExample';

const TITLES = ['Learn React', 'Learn Vue', 'Learn Preact', 'Learn Angular'];
class App extends Component {
  state = {
    titleIdx: 0,
  }

  componentDidMount() {
    this.changeTitle = setInterval(() => {
      const { titleIdx } = this.state;
      if (titleIdx < TITLES.length - 1) {
        this.setState({ titleIdx: titleIdx + 1 });
        return;
      }

      this.setState({ titleIdx: 0 });
    }, 2000);
  }

  componentWillUnmount() {
    if (this.changeTitle) clearInterval(this.changeTitle);
  }

  render() {
    const { titleIdx } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReactAnimationExample title={TITLES[titleIdx]} />
            <TransitionExample data={TITLES} currentTitle={TITLES[titleIdx]} />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
