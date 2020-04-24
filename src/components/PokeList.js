import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

function PokeList(props) {
  const listItems = props.data.list.map((items, index) => {
    return <Pokemon item={items} key={index} addFavorite={props.addFavorite} />;
  });

  return <ul className="card-list">{listItems}</ul>;
}
PokeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default PokeList;
