import React, {Component} from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
    render() {
      let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
      return (
        <div className="pokedex">
           <h2>{this.props.isWinning == true ? 'This is winning hand' : 'This is loosing hand'}</h2>
           <h2>Score is {this.props.score}</h2>
           <div className="pokedex-card">
            {this.props.pokemons.map(x => {
                return <Pokecard name={x.name} src={url + x.id + ".png"} type={x.type} exp={x.base_experience} />
            })}
           </div>
        </div>
      )
    }
  }

  export default Pokedex