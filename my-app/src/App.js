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
    charecters,
    lastChoice: 1,
    score: 0,
    win: "",
    topScore: 0
  };

  shuffleData = (data) => {
    var i;
    for (i = 0; i < data.length; i++){
      // grab that array index

      // randomize that index within the array
     var randomIndex = Math.floor((Math.random() * 11) + 1);
     const temp = data[i]
     data[i] = data[randomIndex]
     data[randomIndex] = temp
    // assign that index a random index     
    }
    this.setState({
      charecters: data,
    })
  }

  render() {
    const { charecters } = this.state
    return (
      <Wrapper>
        <Title>Dragon Ball Z</Title>
        <div onClick={ () => this.shuffleData(charecters)}>
          Click me for magic!!!
        </div>
        {charecters.map(charecter => (
          <CharecterCard 
            id={charecter.id}
            key={charecter.id}
            name={charecter.name}
            image={charecter.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
