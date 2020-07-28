import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import PokeList from './PokeList';
import PokemonsFromApi from '../data/Pokemons.json'

const App = () => {
    return (<div className="App">
      <PokeList pokemons={PokemonsFromApi}/>
    </div>
  );
};

export default App;
