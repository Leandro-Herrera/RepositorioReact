import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Contador from './components/pages/ItemCount';
import ItemListContainer from './components/pages/ItemListContainer';
import ItemDetailContainer from './components/pages/ItemDetailContainer';
import Context from './context/wrapperContext';
import Cart from './components/pages/Cart';
import Products from './components/pages/Product'

function App() {


  return ( //JSX
    <div className="App">
      <Router>
        <Context.Provider value={{name: 'Leandro', color: 'primary'}}>
          <NavBar/>
        </Context.Provider>
        <Switch>
          <Route path='/' exact component={ItemListContainer}/>
          <Route path='/category/:id' component={ItemListContainer}/>
          <Route path='/item/:id' component={ItemDetailContainer}/>
          <Contador stock={15} initial={1}/>
          <Route path="/products"><Products /></Route>
          <Route path="/ItemsDetail"><Cart /></Route>
        </Switch>
      </Router>
      <ItemListContainer greeting={ "Bienvenidos a la casa de los Accesorios de Vehiculos" } />
      <hr/>
    </div>
  );
}

export default App;

