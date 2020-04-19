import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Pokemon.scss';

function Pokemon(props) {
  console.log(props);
  const type = props.item.types.map((types, index) => {
    return (
      <span className="card-tag" key={index}>
        {types}
      </span>
    );
  });
  const handleClick = (ev) => {
    const elementSelect = ev.currentTarget;
    props.addFavorite(elementSelect);
  };

  //Añadir un click a Pokemon que: marca o desmarca el pokemon como favorito en el array del estado de App
  return (
    <li className={props.item.isFavorite ? 'card favorite' : 'card'} onClick={handleClick} id={props.item.id}>
      <div className="card-img">
        <img src={props.item.url} title={props.item.name} alt={props.item.name} />
      </div>
      <h3 className="card-title">{props.item.name}</h3>
      {type}
    </li>
  );
}
//propTypes
Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;
