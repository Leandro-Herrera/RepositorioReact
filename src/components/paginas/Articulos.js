import './Articulos.css';
import React from 'react';
import Items from './Items';


const Articulos = () => {
    return (
        <div>
            <Items title="Paragolpes" text="Plastico negro" button="Agregar al carrito" img="../../img/paragolpesCromado" />
            <Items title="Paragolpes" text="Cromado" button="Agregar al carrito" img="images"/>
            <Items title="Lonas" text="Tensadas" button="Agregar al carrito" img="images"/>
            <Items title="Lonas" text="Rigida" button="Agregar al carrito" img="images"/>
            <Items title="Jaula" text="Fibra de carbono" button="Agregar al carrito" img="images"/>
            <Items title="Jaula" text="Cromada" button="Agregar al carrito" img="images"/>
        </div>
    )
}

export default Articulos
