 import './items.css'
 import React from 'react'
 

 const Items = (prop) => {
     return (
        <div className="container_Items">
            <div className="container_img_items">
                <img src={'../../img/jaulaCromada.jpg'} alt="imagen" />
            </div>
            <div className="container_data_items">
                <ul>
                    <li><h3>{prop.title}</h3></li>
                    <li><p>{prop.text}</p></li>
                    <li><p>$ {prop.price}</p></li>
                    <li><button>{prop.button}</button></li>
                </ul>
            </div>
        </div>
     )
 }

 export default Items
