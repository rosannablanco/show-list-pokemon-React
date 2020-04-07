import React from 'react';
import PokeList from './PokeList';
import Datas from '../data/data.json';

import '../stylesheets/App.scss';

class App extends React.Component {
  /* constructor(props) {
    super(props);
  } */
  render() {
    return (
      <div className="App">
        <h2>Mi lista de pokemon</h2>
        <PokeList data={Datas} />
      </div>
    );
  }
}

export default App;
