import React, { useEffect, useState } from 'react';
import  ItemList  from '../component/ItemList';
import { useParams } from 'react-router';
import { getFirestore } from '../service/getFirebase';


function ItemListContainer ( { greeting} ) { 
    const [accesorios, setAccesorios] = useState()
    const [cargando, setCargando] = useState(true)
    const { idAccesory } = useParams()

    useEffect(()=>{

        if (idAccesory) {
            const BaseDeDatos = getFirestore()
            BaseDeDatos.collection('items').where('accesory', '==', idAccesory).get()
            .then(resp => {
                setAccesorios(resp.docs.map(accesorio => ( {id: accesorio.id, ...accesorio.data()})))
            })
            .catch(error => console.log(error))
            .finally(()=>setCargando(false))
        }else{
            const BaseDeDatos = getFirestore()
            BaseDeDatos.collection('items').get()
            .then(resp => {
                setAccesorios(resp.docs.map(accesorio => ( {id: accesorio.id, ...accesorio.data()})))
            })
            .catch(error => console.log(error))
            .finally(()=>setCargando(false))
        }
  
    }, [ idAccesory ]);

    return (
        <div>
            <center> 
            <h2> { greeting } </h2>
            </center>
            <div className='cardaccesorios'>
            { cargando ? <h2 className='cardNombre'>CARGANDO...</h2> : < ItemList accesorios = {accesorios} /> }
            </div>

           
        </div>
            
    )
}
export default ItemListContainer