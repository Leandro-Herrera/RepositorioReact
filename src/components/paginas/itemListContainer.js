import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const mockItems = [
            {
                id: "1",
                title:"Paragolpes",
                text:"Plastico negro",
                button:"Agregar al carrito",
                stock:"15",
                price:"5000",
                img: "/img/paragolpesNegros.jpg"
            },
            {
                id: "2",
                title:"Paragolpes",
                text:"Cromado",
                button:"Agregar al carrito",
                stock:"10",
                price:"8000",
                img: "/img/paragolpesCromado.jpg"
            },
            {
                id: "3",
                title:"Lonas",
                text:"Tensadas",
                button:"Agregar al carrito",
                stock:"13",
                price:"1500",
                img: "/img/lonaTensada.jpg"
            },
            {
                id: "4",
                title:"lonas",
                text:"Rigidas",
                button:"Agregar al carrito",
                stock:"14",
                price:"3500",
                img: "/img/lonaRigida.jpg"
            },
            {
                id:"5",
                title:"Jaula",
                text:"Fibra de Carbono",
                button:"Agregar al carrito",
                stock:"5",
                price:"4000",
                img: "/img/jaulaCarbono.jpg"
            },
            {
                id:"6",
                title:"Jaula",
                text:"Cromada",
                button:"Agregar al carrito",
                stock:"8",
                price:"6000",
                img: "/img/jaulaCromada.jpg"
            }
        ];
        const getItem = new Promise((resolve) => {
            setTimeout(() => {  
            resolve(mockItems);
            }, 2000);
        })


        getItem.then((respuesta) =>{
            setItems(respuesta);
        })
    },[]);

    return <ItemList key={items.id} title={items.title} price={items.price}/>
};
export default ItemListContainer