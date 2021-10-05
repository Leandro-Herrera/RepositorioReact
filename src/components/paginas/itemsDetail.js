import React from 'react'

function ItemDetail(props) {

    return (
       <div className="detail-item">
          {console.log("data del item ", props.data)}
          <div className="">
             <img src={"./img/paragolpesCromado.jpg"} />
          </div>
          <div className="">
             <h2>{props.data.title}</h2>
             <p>{props.data.text}</p>
             <p>$ {props.data.price}</p>
             <button>{props.data.button}</button>
          </div>
       </div>
    );
 
 }

export default ItemDetail()
