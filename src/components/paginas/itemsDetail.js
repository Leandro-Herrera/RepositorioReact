import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail(props) {

   const[items, setItems] = useState(0)
   const[stock, setStock] = useState(7)

   const onAdd = () => {
      items < stock && setItems(items + 1)
   }
   const onLess = () => {
      items !== 0 && setItems(items - 1)
   }

   return (
      <div className="contenedor-detalle">
         {console.log("data del item ", props.data)}
         <div className="detalle-imagenes">
            <img src={"/img/paragolpesCromado.jpg"} />
         </div>
         <div className="detalle-items">
            <img src={props.data?.img} />
            <h2>{props.data?.title}</h2>
            <p>{props.data?.text}</p>
            <p>$ {props.data?.price}</p>
            <ItemCount onAdd={onAdd} onLess={onLess} quantity={items}/>
            <button>{props.data?.button}</button>
         </div>
      </div>
   );
 
}

export default ItemDetail
