import { Component } from "react";

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div key={id} className="bg-gray-900 p-3 m-2 flex flex-col items-center">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="monster_image"
          className="object-cover rounded-full border border-white my-1"
        />
        <div className="text-center font-semibold text-gray-400 space-y-3">
          <h1 className="text-xl">{name}</h1>
          <p className="text-sm">{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
