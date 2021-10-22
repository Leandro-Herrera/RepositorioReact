import React from "react";
import Item from "./Item";

 const ItemList = ({ accesorios})=>{
    return(
        <>
        {accesorios.map(accesorio => <Item accesorio = {accesorio} /> )}

        </>
    )
}
export default ItemList;