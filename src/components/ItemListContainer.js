import React, {useState, useEffect} from 'react'
import Articulos from './paginas/Articulos'


export default function ItemListContainer() {
    const [ItemList, setItems] = useState([])
    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const mockItems = [
                {
                    id: "1",
                    title:"Paragolpes",
                    text:"Plastico negro",
                    button:"Agregar al carrito",
                    stock:"15"
                },
                {
                    id: "2",
                    title:"Paragolpes",
                    text:"Cromado",
                    button:"Agregar al carrito",
                    stock:"10"
                },
                {
                    id: "3",
                    title:"Lonas",
                    text:"Tensadas",
                    button:"Agregar al carrito",
                    stock:"13"
                },
                {
                    id: "4",
                    title:"lonas",
                    text:"Rigidas",
                    button:"Agregar al carrito",
                    stock:"14"
                },
                {
                    id:"5",
                    title:"Jaula",
                    text:"Fibra de Carbono",
                    button:"Agregar al carrito",
                    stock:"5"
                },
                {
                    id:"6",
                    title:"Jaula",
                    text:"Cromada",
                    button:"Agregar al carrito",
                    stock:"8"
                },                
            ]
            resolve(mockItems)
        }, 2000)
    })

    useEffect(() =>{
        getItem.then((respuesta) =>{
            //console.log(respuesta);
            setItems(respuesta)
        })
    },[])

    return(
        <div className="App">
            {ItemList.map( (articulos, index) => {
                return (<Articulos key={articulos.id} title={articulos.title} price={articulos.price}/>)
            })}
        </div>
    )
}