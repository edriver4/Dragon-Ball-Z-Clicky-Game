import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import charecters from "./charecters.json"
import CharecterCard from "./components/CharecterCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title";

class App extends Component {
  // Setting this.state.charecters to the friends json array
  state = {
    charecters
  };
  render() {
    return (
      <Wrapper>
        <Title>Dragon Ball Z</Title>
        {this.state.charecters.map(charecter => (
          <CharecterCard
          id={charecter.id}
          key={charecter.id}
          name={charecter.name}
          image={charecter.image}
          />
        ))}
      </Wrapper>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
