import React,{useState} from 'react';

function Contador({stock, initial}) {
  const [items, setItems] = useState(initial);

  const sumar = () => {
      if(items < stock) {
        setItems(items +1);
      }
  }
  const restar = () => {
    if (items > initial) {
      setItems(items - 1);
    }
  }
  return (
    <div className="contenedor-contador">
      <div className="contenedor-boton">
        <button
          onClick={restar}
          disabled={items <= initial}
        >-</button>
        <span className="texto-boton">{items}</span>
        <button
          onClick={sumar}
          disabled={items >= stock}
        >+</button>
      </div>
    </div>
  );
}

export default Contador;