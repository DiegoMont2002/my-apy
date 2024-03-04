/*import {Routes, Route} from "react-router-dom";
import Layout from "../layout/Layout";

//import paginas o componenetes para definir rutas
import Home from "../pages/Home";
import Lista from "../components/Lista";

function Rutas() {
    return (
       <Layout>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Lista/>}/>
        </Routes>
       </Layout>
    );
}
export default Rutas;*/

// routes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';


import BarraMenu from '../components/Barra/BarraMenu';
import Lista from '../components/Lista';
import Home from '../pages/Home';
import ListaH from '../components/ListaH';
import ListaZN from '../components/ListaZN';
import Hotel1 from '../components/Paginas/Hotel1';
import ListaR from '../components/ListaR';
import SingUp from '../Start/SingUp';

function Rutas() {
  return (
   <>
      <BarraMenu />
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/zonasa' element={<Lista/>}/>
        <Route path='/hoteles' element={<ListaH/>}/>
        <Route path='/zonasn' element={<ListaZN/>}/>
        <Route path='/restaurantes' element={<ListaR/>}/>
        <Route path='/entrar' element={<Hotel1/>}/>
        <Route path='login' element={<SingUp/>}/>
        </Routes>
        </>
  );
}
export default Rutas;