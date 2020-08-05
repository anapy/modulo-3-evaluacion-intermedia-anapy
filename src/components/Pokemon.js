import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {props,} = this;
    const types = props.types.map((type, index) => {
      return <li className="type" key={index}>{type}</li>
    } );

    console.log(this.props.favourite);
    return (
    <article className="pokemon">
      <div className="photo_container"><img className="img" src={props.img} alt={props.name}/></div>
      <h2 className="name">{props.name}</h2>
      <ul className="types">{types}</ul>
    </article>
    );
  }
}

export default Pokemon;