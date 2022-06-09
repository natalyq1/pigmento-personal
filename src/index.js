import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './pages/inicio/Inicio';
import Galeria from './pages/pagegaleria/Maingaleria';
import Productos from './pages/pageproductos/Mainproductos';

import { BrowserRouter,Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< BrowserRouter>
    <Routes>
    <Route path='/' element={<Inicio/>}></Route>
    <Route path='/inicio' element={<Inicio/>}></Route>
    <Route path='/galeria' element={<Galeria/>}></Route>
    <Route path='/productos' element={<Productos/>}></Route>
      
    </Routes>
</ BrowserRouter>
);


