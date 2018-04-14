import React, { Component } from "react";
import avatars from "./avatars.json";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/characterCard";
import "./App.css"

class App extends Component {

  state = {
    avatars,
    isChecked: false
  };

  handleClick = event => {

    if (this.state.isChecked === false) {
      this.setState({ isChecked: true })
      }
    }

    //yeah I give up. Ive spent the better part of 10 hours on this bit alone.
    //at this point i would just like to see the solution.


    // const newArr = this.state.avatars.map(avatar => { isChecked: true });
    //
    // this.setState({ newArr })



// componentWillMount() {
//   console.log(this.state.avatars)
//   console.log("yo")
// }


    // if (this.state.value === "checked") {
    //   () => {shuffleArray}
    // }

  // shuffleArray = avatars => {
  //   let i = avatars.length - 1;
  //
  //     for (; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       const temp = avatars[i];
  //       avatars[i] = avatars[j];
  //       avatars[j] = temp;
  //       // temp?
  //     }
  //   return avatars;
  // }

  render() {
    return (
      <Wrapper>
        {this.state.avatars.map(avatar => (
        <button
        key={avatar.id}
        onClick={this.handleClick}
        isChecked={this.state.isChecked}
        >
          <CharacterCard
            id={avatar.id}
            name={avatar.name}
            image={avatar.image}
          />
        </button>
      ))}
      </Wrapper>
    );
  }
}

export default App;
