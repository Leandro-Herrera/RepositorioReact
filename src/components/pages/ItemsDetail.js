import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import WrapperContext from "../../context/wrapperContext";

function ItemDetail(props) {

   const [items, setItems] = useState(0);
   const [isAdded, setIsAdded] = useState(false);

   const onAdd = () => {
      items < props.data?.stock && setItems(items + 1);
   };
   const onLess = () => {
      items > 0 && setItems(items - 1);
   };
   const addToCart = () => {
      items > 0 && setIsAdded(true);
   };

   return (
      <div className="contenedor-detalle">
         <div className="detalle-items">
            <img src={props.data?.img} alt={props.data?.title} />
            <h2>{props.data?.title}</h2>
            <p>{props.data?.text}</p>
            <p>$ {props.data?.price}</p>
            {!isAdded ? (
               <>
                  <WrapperContext />
                  <ItemCount onAdd={onAdd} onLess={onLess} quantity={items} />
                  <button onClick={addToCart}>Agregar al Carrito</button>
               </>
            ) : ( <Link to="/cart">Finalizar Compra</Link>)}
         </div>
      </div>
   );
}

export default ItemDetail;
