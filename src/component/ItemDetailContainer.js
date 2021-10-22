import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../component/ItemDetail';

import { getFirestore } from '../service/getFirebase';


function ItemDetailContainer () {
    const [DetalleAccesorio, setDetalleAccesorio] = useState([])
    const [cargando, setCargando] = useState(true)
    const { idItem } = useParams()

    useEffect(()=>{

        if (idItem) {
            const BaseDeDatos = getFirestore()
            BaseDeDatos.collection('items').doc(idItem).get()
            .then(res => {
            
                setDetalleAccesorio( { id: res.id, ...res.data()})
            })
            .catch(error => console.log(error))
            .finally(()=>setCargando(false))
        }else{
            const BaseDeDatos = getFirestore()
            BaseDeDatos.collection('items').get()
            .then(res => {
                setDetalleAccesorio( res.docs.map(accesorio => ({id: accesorio.id, ...accesorio.data()})))
            })
            .catch(error => console.log(error))
            .finally(()=>setCargando(false))
        }

 }, [ idItem ])
 

    return(
        <div>
          { cargando ? <h2 className='cardNombre'>CARGANDO...</h2> : DetalleAccesorio &&  <ItemDetail key={DetalleAccesorio} DetalleAccesorio={DetalleAccesorio} />}
        
        </div>
    )
}
export default ItemDetailContainer