import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/paginas/inicio';
import Items from './components/paginas/items';
import ItemListContainer from './components/paginas/itemListContainer';
import CartWidget from './components/cartWidget';
import {Contador} from './components/paginas/contador';
import {ItemListContainer} from './components/paginas/itemListContainer';
import ItemDetailConteiner from '.component/itemDetailConteiner';

function App() {


  return ( //JSX
    <div className="App">
      <ItemListContainer greeting={ "Bienvenidos a la casa de los Accesorios de Vehiculos" } />
      <hr/>
      <Router>
        <NavBar></NavBar>
        <ItemDetailConteiner />
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/itemListContainer' component={ItemListContainer}/>
          <Route path='/items' component={Items}/>
          <Contador stock={15} initial={1}/>
          <CartWidget/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

