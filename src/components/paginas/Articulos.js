import './Articulos.css';
import React from 'react';


const Articulos = () => {
    return (
        <div>
            <CardComponent title="Paragolpes" text="Plastico negro" button="Agregar al carrito" />
            <CardComponent title="Paragolpes" text="Cromado" button="Agregar al carrito" />
            <CardComponent title="Lonas" text="Tensadas" button="Agregar al carrito" />
            <CardComponent title="Lonas" text="Rigida" button="Agregar al carrito" />
            <CardComponent title="Jaula" text="Fibra de carbono" button="Agregar al carrito" />
            <CardComponent title="Jaula" text="Cromada" button="Agregar al carrito" />
        </div>
    )
}

export default Articulos
