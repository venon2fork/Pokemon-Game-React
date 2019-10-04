import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

export class Pokedex extends Component {
  render() {
    let title;
    let Exp;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
      Exp = <h2>Total Experience: {this.props.exp}</h2>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
      Exp = <h2>Total Experience: {this.props.exp}</h2>;
    }
    return (
      <div className="Pokedex">
        <div className="Pokedex-WinLos">
          {title}
          {Exp}
        </div>

        <div className="Pokedex-Card">
          {this.props.pokemon.map(p => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
