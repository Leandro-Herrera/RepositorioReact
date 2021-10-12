import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const mockItems = [
            {
                id: "1",
                title: "Paragolpes",
                category: "paragolpes",  
                text: "Paragolpes de Plastico negro",
                button: "Agregar al carrito",
                stock: 15,
                price: 5000,
                img: "/img/paragolpesNegros.jpg",
             },
            {
                id: "2",
                title:"Paragolpes",
                category: "paragolpes",  
                text:"Paragolpes Cromado",
                button:"Agregar al carrito",
                stock: 10,
                price: 8000,
                img: "/img/paragolpesCromado.jpg"
            },
            {
                id: "3",
                title:"Lonas",
                category: "lonas",  
                text:"Lonas Tensadas",
                button:"Agregar al carrito",
                stock:"13",
                price:"1500",
                img: "/img/lonaTensada.jpg"
            },
            {
                id: "4",
                title:"Lonas",
                category: "lonas",
                text:"Lonas Rigidas",
                button:"Agregar al carrito",
                stock:"14",
                price:"3500",
                img: "/img/lonaRigida.jpg"
            },
            {
                id:"5",
                title:"Jaula",
                category: "jaulas",
                text:"Jaula de Fibra de Carbono",
                button:"Agregar al carrito",
                stock:"5",
                price:"4000",
                img: "/img/jaulaCarbono.jpg"
            },
            {
                id:"6",
                title:"Jaula",
                category: "jaulas",
                text:"Jaula Cromada",
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
            id ? setItems(respuesta.filter((i) => i.category === id)) : setItems(respuesta);
        })
    }, [id]);

    return <ItemList items={items} />;
}
export default ItemListContainer