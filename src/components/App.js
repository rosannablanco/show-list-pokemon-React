import React from 'react';
import PokeList from './PokeList';
import list from '../data/data.json';

import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {list},
    };
    this.getFavorite = this.getFavorite.bind(this);
  }

  getFavorite(element) {
    const elementId = parseInt(element.id);
    const {pokemons} = this.state;
    const pokemonFav = pokemons.list.findIndex((itemfav) => itemfav.id === elementId);

    if (pokemons.list[pokemonFav].isFavorite) {
      pokemons.list[pokemonFav].isFavorite = false;
    } else {
      pokemons.list[pokemonFav].isFavorite = true;
    }
    this.setState({
      pokemons: pokemons,
    });
  }

  render() {
    const {pokemons} = this.state;
    return (
      <div className="App">
        <h2>Mi lista de pokemon</h2>
        <PokeList data={pokemons} addFavorite={this.getFavorite} />
      </div>
    );
  }
}

export default App;
