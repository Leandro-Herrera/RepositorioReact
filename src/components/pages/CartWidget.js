import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import ItemsDetail from './ItemsDetail';

const CartWidget = () => {
    const {cartItems, total, price, clear} = useContext(CartContext)

    return (
        <div className="">

            <div>
                <h2><img src='/img/carrito.png' width="25px" height="22px"></img>Carrito</h2>
                <b>PRODUCTOS: {total}</b>
                <b>TOTAL: ${price}</b>
            </div>            
            <div>
                <button onClick={clear}>Limpiar Carrito</button>
            </div>
            <div>
                {cartItems.map(element => <ItemsDetail {...element}/>)}
            </div>
        </div>
    )
}

export default CartWidget
