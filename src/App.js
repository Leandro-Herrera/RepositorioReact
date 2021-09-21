import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js'
import Inicio from './components/paginas/inicio.js'
import Articulos from './components/paginas/Articulos.js'
import Items from './components/paginas/Items.js'


<<<<<<< HEAD
function App() {


  return ( //JSX
=======
function App() { //JSX
  return (
>>>>>>> 1ca7014991b58b62709df75d78eeedf1a3ae6eda
    <div className="App">
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

