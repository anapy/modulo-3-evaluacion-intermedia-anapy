import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
    <ul className="pokeList">
      <Pokemon />
    </ul>
    );
  }
}

export default PokeList;
