import React from "react";
import { Link } from 'react-router-dom';

const Item = ({accesorio}) =>{
    return(
        <div key = {accesorio.id} className = 'card w-25 mt-3 cardaccesorio ' > 
        <div className = 'card-header cardNombre'>{accesorio.nombre}</div>
        <div className = 'card-body'> 
        <img src = {accesorio.portada} className='w-100' alt='portada'></img>
        </div>
        <div className = 'card-footer'>
            
            <button className='btn btn-outline-dark  btn-block' >
                <Link to={`/item/${accesorio.id}`}>
                DETALLE
                </Link>
            </button> 
            
           
        </div>
        
        </div>
    )
}
export default Item