import React, { useEffect, useState } from 'react';
import {ItemList} from './itemList';


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
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

    return <ItemList key={articulos.id} title={articulos.title} price={articulos.price}/>
};