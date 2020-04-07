import React from 'react';
import '../stylesheets/Pokemon.scss';

function Pokemon(props) {
  console.log(props.item.types);
  const type = props.item.types.map((types, index) => {
    return (
      <span className="card-tag" key={index}>
        {types}
      </span>
    );
  });

  return (
    <li className="card">
      <div className="card-img">
        <img src={props.item.url} title={props.item.name} alt={props.item.name} />
      </div>
      <h3 className="card-title">{props.item.name}</h3>
      {type}
    </li>
  );
}

export default Pokemon;
