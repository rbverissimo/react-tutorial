import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspiring Actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

removeCharacter = (index) => {
  const { characters } = this.state;

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index;
    }),
  });
};

export default App;
