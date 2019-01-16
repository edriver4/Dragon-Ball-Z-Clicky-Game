import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import charecters from "./charecters.json"
import CharecterCard from "./components/CharecterCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title";
import Nav from './components/Nav/Nav';

class App extends Component {
  // Setting this.state.charecters to the friends json array
  state = {
    charecters,
    lastChoice: 1,
    score: 0,
    win: "",
    topScore: 0
  };

  //Shuffling the Array index
shuffleArray = (shuffledArray) => {
  var ctr = shuffledArray.length, temp;
  var index = 0;
  while (ctr > 0) {
    while(index > 11) {
      index = Math.floor(Math.random() * ctr + 1);
    }
    ctr --;
    temp = shuffledArray[ctr];
    shuffledArray[ctr] = shuffledArray[index];
    shuffledArray[index] = temp;
  }
  return shuffledArray
}

shuffleCharecters = id => {
  
  var newState = {...this.state };
  newState.charecters = this.shuffleArray(newState.charecters)
  if (id === this.state.lastChoice) {
    newState.win = "You Guessed Incorrect!";
    newState.score = 0;
  } else {
    newState.score++;
    if (newState.score > newState.topScore) {
      newState.topScore = newState.score;
    }
    newState.win = "You Guessed Correctly!!!!!";
  }

  this.setState({
    charecters,
    lastChoice: id,
    score: newState.score,
    wind: newState.win,
    topScore: newState.topScore
  });
}

  // shuffleData = (data) => {
  //   var i;
  //   for (i = 0; i < data.length; i++){
  //     // grab that array index

  //     // randomize that index within the array
  //    var randomIndex = Math.floor((Math.random() * 11) + 1);
  //    const temp = data[i]
  //    data[i] = data[randomIndex]
  //    data[randomIndex] = temp
  //   // assign that index a random index     
  //   }
  //   this.setState({
  //     charecters: data,
  //   })
  // }

  render() {
    // const { charecters } = this.state
    return (
      <Wrapper>
        <Nav
        score={this.state.score}
        winLoss={this.state.win}
        topScore={this.state.topScore} />
        <Title
        winLoss={this.state.win}>
        Dragon Ball Z</Title>
        {/* <div onClick={ () => this.shuffleData(charecters)}>
          Click me for magic!!!
        </div> */}
        {this.state.charecters.map(charecter => (
          <CharecterCard 
            shuffleCharecters={this.shuffleCharecters}
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
