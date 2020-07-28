import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
  const pokemons = props.pokemons.map((pokemon, index) => {
    return (
      <li className="pokemon_container" key={index}>
        <Pokemon name={pokemon.name} types={pokemon.types} img={pokemon.url}/>
      </li>
    )
  }
  );
  return (
  <ul className="pokeList">{pokemons}</ul>
  );
}

export default PokeList;
