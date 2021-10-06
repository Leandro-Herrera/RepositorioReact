import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/paginas/CartWidget';
import Contador from './components/paginas/ItemCount';
import ItemListContainer from './components/paginas/ItemListContainer';
import ItemDetailContainer from './components/paginas/ItemDetailContainer';

function App() {


  return ( //JSX
    <div className="App">
      <Router>
        <NavBar/>
        <ItemDetailContainer />
        <Switch>
          <Route path='/' exact component={ItemListContainer}/>
          <Route path='/category/:id' component={ItemListContainer}/>
          <Route path='/item/:id' component={ItemDetailContainer}/>
          <Contador stock={15} initial={1}/>
          <CartWidget/>
        </Switch>
      </Router>
      <ItemListContainer greeting={ "Bienvenidos a la casa de los Accesorios de Vehiculos" } />
      <hr/>
    </div>
  );
}

export default App;

