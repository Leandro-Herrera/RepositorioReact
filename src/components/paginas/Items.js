 import './Items.css'
 import React from 'react'
 

 const Items = (prop) => {
     return (
        <div className="container_Items">
            <div className="container_img_items">
                <img src={'../../img/jaulaCromada.jpg'} alt="imagen" />
            </div>
            <div className="container_data_items">
                <h3>{prop.title}</h3>
                <p>{prop.text}</p>
                <p>$ {prop.price}</p>
                <button>{prop.button}</button>
            </div>
        </div>
     )
 }

 export default Items
