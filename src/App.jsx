import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox
          handleChange={e =>
            this.setState({
              searchField: e.target.value
            })
          }
          placeholder="search monster"
          value={this.state.searchField}
        />{" "}
        <CardList monsters={filteredMonsters} />{" "}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }
}

export default App;
