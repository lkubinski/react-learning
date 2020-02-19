import React, {Component} from 'react'
import './Pokecard.css';

class Pokecard extends Component {
    render() {
      return (
          <div className="pokecard">
            <h2>{this.props.name}</h2>
            <img src={this.props.src}/>
            <p>Type: {this.props.type}</p>
            <p>EXP: {this.props.exp}</p>
          </div>
      )
    }
  }

  export default Pokecard