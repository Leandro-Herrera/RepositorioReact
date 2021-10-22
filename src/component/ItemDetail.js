import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({DetalleAccesorio})  =>  {
 
    const { addToCart } = useCartContext()
    
    

    const onAdd = (cantidad)=>{
        addToCart( {itemCart: DetalleAccesorio, Cantidad: cantidad} )
    }
    return(
        <div>
    
            <div className ='DetalleAccesorios'> 

            <div key = {DetalleAccesorio.id} className = 'card w-25 mt-3 cardAccesorioDetalle ' > 
        <div className = 'card-header  mt-3 cardNombre'>Detalle</div>
        <div className = 'card-body'> 
        <img src = {DetalleAccesorio.portada} className='imagenDetalle' alt='portada'></img>
        <p> Nombre : {DetalleAccesorio.nombre}</p>
            <p> Accesory : {DetalleAccesorio.accesory}</p>
            <p> Precio : {DetalleAccesorio.precio}</p>
        </div>
        <ItemCount stock = { 5 } initial = { 1 } onAdd = {onAdd} />
        </div>
            </div>

        </div>
    )
}
export default ItemDetail