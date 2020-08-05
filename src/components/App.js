import React, { useState } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import PokeList from './PokeList';
import PokemonsFromApi from '../data/Pokemons.json'

const App = () => {
  const [pokemons] = useState(PokemonsFromApi);
    return (<div className="App">
      <h1>PokeDex</h1>
      <PokeList pokemons={pokemons}/>
    </div>
  );
};

export default App;
