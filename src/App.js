import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/paginas/Inicio';
import Item from './components/paginas/Items';
import CartWidget from './components/paginas/CartWidget';
import Contador from './components/paginas/Contador';
import ItemListContainer from './components/paginas/ItemListContainer';
import ItemDetailConteiner from './components/paginas/ItemDetailConteiner';

function App() {


  return ( //JSX
    <div className="App">
      <ItemListContainer greeting={ "Bienvenidos a la casa de los Accesorios de Vehiculos" } />
      <hr/>
      <Router>
        <NavBar/>
        <ItemDetailConteiner />
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/itemListContainer' component={ItemListContainer}/>
          <Route path='/items' component={Item}/>
          <Contador stock={15} initial={1}/>
          <CartWidget/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

