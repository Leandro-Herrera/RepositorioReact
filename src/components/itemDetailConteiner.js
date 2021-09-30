import React, {useState, useEffect} from 'react'
import ItemDetail from './paginas/itemsDetail'

function itemDetailConteiner() {
    const [infoItems, setInfoItems] = useState()
    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const mockItems = {
                id: "1",
                title:"Paragolpes",
                text:"Plastico negro",
                button:"Agregar al carrito",
                stock:"15"
            }
            resolve(mockItems)
        }, 2000)
    })

    useEffect(() => {
        getItem.then(response => {
            SetInfoItems(response)
        })
    }, [])
    
    return (
        <div className="detail-container">
            Contenedor de detalles
            <ItemDetail data={infoItems}/>            
        </div>
    )
}

export default itemDetailConteiner
