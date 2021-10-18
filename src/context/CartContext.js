import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        setTotal()
        setPrice()
    }, [cartItems])

    const addItem = (item, count) => {
        let cartElement = {item, count}
        let cartAux = []

        if (isInCart(item)) {
            console.log('Esta en el Carrito')
            cartElement = cartItems.find(element => element.item.id === item.id)
            cartElement.count = cartElement.count + count
            cartAux = [...cartItems]
        } else {
            console.log('No esta en el Carrito')
            cartAux = [cartElement, ...cartItems]
        }
        setCartItems(cartAux)
    }

    const removeItem = (item) => {
        if (isInCart(item)) {
            const cartElements = cartItems.filtrer(element => element.item.id !== item.id) || []
            setCartItems([...cartElements])
        }
    }

    const clear = () => {
        return setCartItems([])
    }

    const isInCart = (item) => {
        return cartItems && cartItems.some(element => element.item.id === item.id)
    }

    return (
        <CartContextProvider 
            value={{
                addItem,
                removeItem,
                clear,
                isInCart
            }}>
            {children}
        </CartContextProvider>
    )
}