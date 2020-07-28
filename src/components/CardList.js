import React from 'react';
import Item from './Item';

class CardList extends React.Component {
  render() {
    return (
    <ul className="cardList">
      <Item />
    </ul>
    );
  }
}

export default CardList;
