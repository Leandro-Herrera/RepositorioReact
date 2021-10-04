import React,{useState} from 'react'


export default function Contador({stock, initial}) {
    const [items, setItems] = useState(initial)

    const sumar = () => {
        if(items < stock) {
            setItems(items +1)
        }
    }
    const restar = () => {
        setItems(items -1)
    }
    return (
        <div className="contenedor contador">
          <div className="contenedor boton">
            <Button
              onClick={restar}
              disabled={items <= initial}
              className="btn btn-secondary"
            >
              -
            </Button>
    
            <span className="texto boton">{items}</span>
    
            <Button
              onClick={sumar}
              disabled={items >= stock}
              className="btn btn-secondary"
            >+</Button>
          </div>
        </div>
      );
}

