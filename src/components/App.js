import React from 'react';
import PokeList from './PokeList';
import Datas from '../data/data.json';
import PropTypes from 'prop-types';

import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {Datas},
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Mi lista de pokemon</h2>
        <PokeList data={this.state.pokemons} />
      </div>
    );
  }
}
App.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};
export default App;
