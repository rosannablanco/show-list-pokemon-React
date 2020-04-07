import React from 'react';
import Datas from '../data/data.json';

import '../stylesheets/App.scss';

const data = Datas.map((item) => item);
class App extends React.Component {
  /* constructor(props) {
    super(props);
  } */
  render() {
    console.log(data);
    return (
      <div className="App">
        <h2>Mi lista de pokemon</h2>
        <ul className="list-card">
          <li className="card">
            <div className="card-img">
              <img src={data[0].url} title={data[0].name} alt={data[0].name} />
            </div>
            <h3>{data[0].name}</h3>
            <span>{data[0].types[0]}</span>
            <span>{data[0].types[1]}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
