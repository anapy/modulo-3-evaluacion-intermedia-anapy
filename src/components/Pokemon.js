import React from 'react';


const Pokemon = props => {
  const types = props.types.map((type, index) => {
    return <li key={index}>{type}</li>
  }
  );
    return (
    <article>
    <h2>{props.name}</h2>
    <div><img src={props.img} alt={props.name}/></div>
    <ul className="types">{types}</ul>
    </article>
    );
}

export default Pokemon;