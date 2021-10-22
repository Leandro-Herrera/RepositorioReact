import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

export const NavBar = (props) =>{
  const EstilosLink = {
    textDecoration:'none',
    margin: 'auto 1rem',
    color:'white',
    fontSize:'1.5rem'
  }
  const{count} = props
  const { AcumuladorCart } = useCartContext()
  return (
    <div>
      <Navbar className="justify-content-center" bg='marino' variant="dark" sticky="top" expand="lg" collapseOnSelect>
  
        <NavbarToggle/>
        <NavbarCollapse className="justify-content-center">
          <Nav >
            <div className='d-flex'>
              <Link exact to='/' style={EstilosLink} >HOME</Link>
              <Link exact to='/accesory/Paragolpes' style={EstilosLink}>PS4</Link>      
              <Link exact to='/accesory/Lonas' style={EstilosLink}>PS3</Link>    
              <Link exact to='/accesory/Zocalos' style={EstilosLink}>PC</Link>
            </div>
          </Nav>
        </NavbarCollapse>

        <Link exact to='/Cart'>
        <CartWidget count = {count} />
        <h3 >{AcumuladorCart() }</h3>
        </Link>
      
      </Navbar>
    </div>
  )
}
export default NavBar;