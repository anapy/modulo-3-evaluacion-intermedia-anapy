import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import PokeList from './PokeList';
import pokemons from '../data/Pokemons.json'

const App = () => {
  const [pokemons, setPokemons] = useState ([]);

    return (<div className="App">
      <PokeList pokemons={pokemons}/>
    </div>);
}

export default App;
