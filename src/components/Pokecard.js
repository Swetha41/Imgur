import React, { Component } from 'react';
import './Pokecard.css';
import Button from './Button';

//calling the pokecard site
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padtoThree = (number) => (number <= 999 ? `00${number}`.slice(-3):number);

class Pokecard extends Component {
    render(){
        //setting the img source
        let imgSrc = `${POKE_API}${padtoThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
        <h1>{this.props.name}</h1>
      <img src={imgSrc} alt={this.props.name} />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
        <Button/>
        </div>);
    }
}
 
export default Pokecard;
