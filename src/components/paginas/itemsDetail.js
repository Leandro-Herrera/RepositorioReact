import React, {useState, useEffect} from 'react'

function itemsDetail(props) {
    return (
        <div className="detail-item">
            {console.log("data del item ", props.data)}
            <div className="">
                <img src={'./img/paragolpesCromado.jpg'} />
            </div>
            <div className="">
                <h2>{prop.title}</h2>
                <p>{prop.text}</p>
                <p>$ {prop.price}</p>
                <button>{prop.button}</button>
            </div>
        </div>
    )
}

export default itemsDetail
