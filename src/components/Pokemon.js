import React from 'react';


const Pokemon = props => {
  const types = props.types.map((type, index) => {
    return <li className="type" key={index}>{type}</li>
  }
  );
    return (
    <article className="pokemon">
      <div className="photo_container"><img className="img" src={props.img} alt={props.name}/></div>
      <h2 className="name">{props.name}</h2>
      <ul className="types">{types}</ul>
    </article>
    );
}

export default Pokemon;