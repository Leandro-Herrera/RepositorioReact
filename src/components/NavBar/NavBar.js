import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../img/titulo.png";
import CartWidget from "../cartWidget";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={logo} width="70"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link " to='/'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to='/Articulos'>Articulos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to='/Items'>Items</Link>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar
