import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className= "border-2 px-3 py-2 rounded-md outline-none focus:ring-1 ring-gray-900 text-gray-300"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
