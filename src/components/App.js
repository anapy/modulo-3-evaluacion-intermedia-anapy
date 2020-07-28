import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/reset.css';
import CardList from './Item';


class App extends React.Component {
  render() {
    return <div className="App">
      <CardList/>
    </div>;
  }
}

export default App;
