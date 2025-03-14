import { Component } from "react";
import Card from "./card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-[poppins]">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
