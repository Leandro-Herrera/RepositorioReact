import React, { useContext } from 'react';
import { CartContext } from './../context/cartContext';
import ItemsDetail from './ItemsDetail';
import CartWidget from './CartWidget';

const Cart = () => {
    const {cartItems, total, price, clear} = useContext(CartContext)

    return (
        <div className="">

            <div>
                <CartWidget/>
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

export default Cart;