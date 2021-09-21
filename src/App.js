import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js'
import Inicio from './components/paginas/inicio.js'
import Articulos from './components/paginas/Articulos.js'
import Items from './components/paginas/Items.js'


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
          <CartWidget />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

