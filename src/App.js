import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';
import CartContextProvider from './component/CartContext';



export const contextApp = createContext('Dato') 

function App (){

  return(

    <CartContextProvider>
      <Router> 
        <div className = "root"> 
        <h1>Mocho Accesorios de vehiculos</h1>
      <NavBar/> 
      <Switch> 
        <Route exact path = '/'> 
          <ItemListContainer greeting = " Accesorios "/> 
        </Route>
        <Route exact path='/consola/:idConsola' component= {ItemListContainer}/>
        <Route exact path = '/item/:idItem' component = {ItemDetailContainer}/> 
        <Route exact path = '/Cart' component = {Cart} />
      </Switch>
     </div>
     </Router>
   
    </CartContextProvider>
  );
}


export default App;