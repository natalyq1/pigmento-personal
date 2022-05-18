/* componentes de clase como class- class Name o de funcion*/
import './Header.css';
import React from 'react';
import Lupa from'./lupa.png'
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
    <li class="item"><a href="../../index.html">Inicio</a></li>
    <li class="item"><a href="galeria.html">Galeria</a></li>
    <li class="item"><a href="../pages/productos/productos.html">Productos</a></li>
    <li class="item"><a href="../pages/talleres.html">Talleres</a></li>
    <li class="item"><a href="../pages/login.html">Tu Cuenta</a></li>
        <li class="item"><input  type="text" placeholder="Buscar"/><img src={Lupa}/></li>
  
</nav>
</header>
    );
}
export default Header;



