import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio/Inicio';
import Galeria from './pages/pagegaleria/Maingaleria';
import Productos from './pages/pageproductos/Mainproductos';
import Registro from './pages/registro/Pageregistro';

import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< BrowserRouter>
    <Routes>
    <Route path='/' element={<Inicio/>}></Route>
    <Route path='/pigmento-personal/' element={<Inicio/>}></Route>
    <Route path='/inicio' element={<Navigate replace to={"/"}/>}></Route>
    <Route path='/galeria' element={<Galeria/>}></Route>
    <Route path='/productos' element={<Productos/>}></Route>
    <Route path='/cuenta' element={<Registro/>}></Route>
    
      
    </Routes>
</ BrowserRouter>
);


