import React,{useState} from 'react';
import {Button} from 'react-bootstrap';

function ItemCount(props) {

  return (
    <div className="container item count">
      <Button onclick={props.onLess} variant="outlined">-</Button>
      <p className="item count">{props.quantity}</p>
      <Button onClick={props.onAdd} variant="outlined">+</Button>
    </div>
  )
}

export default ItemCount