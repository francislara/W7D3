import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {
          this.props.pokemon.map( (pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}
              <img src={pokemon.image_url} height="42" width="42"/>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default PokemonIndex;
