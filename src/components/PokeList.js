import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';


const PokeList = props => {
  const checkFavListPokemon = ev => {
    props.checkFavList(ev.currentTarget.id);
  }

  const isFav = (number) => {
    return props.favourites.filter(favourite => favourite.id === number)[0];
  }

  const pokemons = props.pokemons.map((pokemon) => {
    return (
    <li className={`pokemon_container animate__animated animate__bounce ${isFav(pokemon.id) ? 'favourite' : ''}`} id={pokemon.id} key={pokemon.id} onClick={checkFavListPokemon}>
      <Pokemon
        name={pokemon.name}
        types={pokemon.types}
        img={pokemon.url}
        favourite={`${isFav(pokemon.id) ? 'favourite' : ''}`}
      />
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

