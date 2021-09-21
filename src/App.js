import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js'
import Inicio from './components/paginas/inicio.js'
import Articulos from './components/paginas/Articulos.js'
import Items from './components/paginas/Items.js'


function App() {


  return ( //JSX
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/Articulos' component={Articulos}/>
          <Route path='/Items' component={Items}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

