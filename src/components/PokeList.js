import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';


const PokeList = props => {
  const pokemons = props.pokemons.map((pokemon) => {
    return (
    <li className="pokemon_container animate__animated animate__bounce" key={pokemon.id}>
      <Pokemon name={pokemon.name} types={pokemon.types} img={pokemon.url}/>
    </li>
    )
  } );
  return (
  <ul className="pokeList">{pokemons}</ul>
  );
}

PokeList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string
}

export default PokeList;

