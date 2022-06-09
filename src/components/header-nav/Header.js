/* componentes de clase como class- class Name o de funcion*/
import './Header.css';
import React from 'react';
import Lupa from'./lupa.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

function Header(){
    return(
/*caracteristicas del componente*/
<header id="box-header">
<div class="logo">
    <h1>Pigmento</h1>
</div>
<nav class="menu">
    <input type="checkbox" id="chk-menu"/>
    <label for="chk-menu" class="btn-menu">
    <i class="fa-solid fa-bars"></i>
    </label>
    <li class="item"><NavLink to="/" className="nav-link" activeClassName="active">Inicio</NavLink></li>
    <li class="item"><NavLink to="/galeria" className="nav-link" activeClassName="active">Galeria</NavLink></li>
    <li class="item"><NavLink to="/productos" className="nav-link" activeClassName="active">Productos</NavLink></li>
    <li class="item"><NavLink to="/talleres" className="nav-link" activeClassName="active">Talleres</NavLink></li>
    <li class="item"><NavLink to="/cuenta" className="nav-link" activeClassName="active">Tu Cuenta</NavLink></li>
        <li class="item"><input  type="text" placeholder="Buscar"/><img src={Lupa}/></li>
  
</nav>
</header>
    );
}
export default Header;



