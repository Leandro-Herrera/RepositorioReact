import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
   return (
      <div className="container_Items">
         <div className="container_img_items">
            <img src={"../../img/jaulaCromada.jpg"} alt="imagen" />
         </div>
         <div className="container_data_items">
            <ul>
               <li>
                  <h3>{item.title}</h3>
               </li>
               <li>
                  <p>{item.text}</p>
               </li>
               <li>
                  <p>$ {item.price}</p>
               </li>
               <li>
                  <button>{item.button}</button>
               </li>
            </ul>
         </div>
         <Link to={`/item/${item.id}`}>Ver detalle de producto</Link>
      </div>
   );
};

export default Item;