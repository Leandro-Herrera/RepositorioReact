import React,{useState} from 'react'

export default function Contador(prop) {
    const [items, setItems] = useState(0)
    const [stock, setStock] = useState(15)
    const [blockButton, setBlockButton] = useState(false)

    const sumar = () => {
        if(items < stock) {
            setItems(items +1)
        }else {
            setBlockButton(true)
        }
    }
    const restar = () => {
        setItems(items -1)
    }
    return (
        <div>
            <button disabled={blockButton} onClick={sumar}>+</button>
            {items}
            <button onClick={restar}>-</button>
        </div>
    )
}

