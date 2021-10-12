import React from 'react'
import Item from './Items'

const ItemList = ({items}) => {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
};
export default ItemList