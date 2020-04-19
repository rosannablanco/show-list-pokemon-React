import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

function PokeList(props) {
  console.log(props.data);
  const listItems = props.data.Datas.map((items, index) => {
    return <Pokemon item={items} key={index} />;
  });

  return <ul className="card-list">{listItems}</ul>;
}

export default PokeList;
