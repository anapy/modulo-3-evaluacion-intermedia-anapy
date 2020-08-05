import React, { useState } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import PokeList from './PokeList';
import PokemonsFromApi from '../data/Pokemons.json'

const App = () => {
  const [pokemons] = useState(PokemonsFromApi);
  const [favourites, setFavourite] = useState([]);

  const checkFavList = (id) => {
    const repeat = favourites.findIndex(favourite => favourite.id === parseInt(id))
    console.log(repeat);
    if(repeat === -1) {
      const newFavourite = pokemons.filter(pokemon => pokemon.id === parseInt(id))[0];
      setFavourite(prevState => [...prevState, newFavourite]);
    } else {
      const newFavourite = favourites.filter(pokemon => pokemon.id !== parseInt(id));
      setFavourite(newFavourite);
    }
  }
  return (<div className="App">
    <h1 className="mainTitle">My Pokedex</h1>
    <PokeList pokemons={pokemons} checkFavList={checkFavList} favourites={favourites}/>
  </div>
  );
};

export default App;
