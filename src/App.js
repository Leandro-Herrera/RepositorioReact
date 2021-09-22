import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Inicio from './components/paginas/Inicio'
import Articulos from './components/paginas/Articulos'
import Items from './components/paginas/Items'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from "./components/CartWidget"
import Contador from './components/paginas/Contador'

function App() {


  return ( //JSX
    <div className="App">
      <ItemListContainer greeting={ "Bienvenidos a la casa de los Accesorios de Vehiculos" } />
      <hr/>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/Articulos' component={Articulos}/>
          <Route path='/Items' component={Items}/>
          <Contador/>
          <CartWidget />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

