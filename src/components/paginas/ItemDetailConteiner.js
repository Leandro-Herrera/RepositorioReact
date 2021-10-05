import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemsDetail'

function ItemDetailConteiner() {
    const [infoItems, setItems] = useState()
    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const mockItems = {
                id: "1",
                title:"Paragolpes",
                text:"Plastico negro",
                button:"Agregar al carrito",
                stock:"15",
                price:"5000",
                img: "/img/paragolpesNegros.jpg"
            }
            resolve(mockItems)
        }, 2000)
    })

    useEffect(() => {
        getItem.then(response => {
            setItems(response)
        })
    }, [])
    
    return (
        <div className="detail-container">
            Contenedor de detalles
            <ItemDetail data={infoItems}/>            
        </div>
    )
}

export default ItemDetailConteiner
