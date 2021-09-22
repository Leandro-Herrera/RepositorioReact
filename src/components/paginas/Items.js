 import './Items.css'
 import React from 'react'
 

 const Items = (prop) => {
     return (
         <div>
             <div>{prop.img}</div>
             <h3>{prop.title}</h3>
             <p>{prop.text}</p>
             <button>{prop.button}</button>
         </div>
     )
 }

 export default Items
