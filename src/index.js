import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/header-nav/Header';
import Footer from './components/footer/Footer';
import Galeria from './components/bodygaleria/Bodygaleria';
import Productos from './components/bodyproductos/Bodyproductos';
import Registro from './components/registro/Registro';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header /> 
    <Registro />
  <Footer />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
