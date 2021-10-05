import React,{useState} from 'react';

function Contador({stock, initial}) {
  const [items, setItems] = useState(initial);
  const [stock, setStock] = useState(15);

  const sumar = () => {
      if(items < stock) {
        setItems(items +1);
        setStock();
      }
  }
  const restar = () => {
    if (items > stock) {
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

export default Contador()