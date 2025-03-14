import { Component } from "react";
import CardList from "./components/card-list/cardList.component";
import SearchBox from "./components/search-box/searchBox.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return { monsters: user };
        })
      );
  };

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const filteredSearch = this.state.monsters.filter((monster) => {
      return (
        monster.name.toLocaleLowerCase().includes(this.state.searchField) |
        monster.username.toLocaleLowerCase().includes(this.state.searchField)
      );
    });
    return (
      <div className=" flex flex-col items-center space-y-7">
        <h1 className="font-bigelow text-9xl font-bold text-center text-blue-200">
          Monsters Rolodex
        </h1>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder={"search monsters"}
        />
        <CardList monsters={filteredSearch} />
      </div>
    );
  }
}
