import Navbar from '../components/Navbar';
import Home from '../components/home/Home';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TablaEmpleados from '../components/home/TablaEmpleados';
import { Routes, Route } from 'react-router-dom'


import React from 'react';
import Login from './Login';
import TareasUsuario from './TareasUsuario';

const Principal = () => {
  
    const rutaServidor="ASP_intrasolution/intrasolution_nodejs"
    return (
        <div className="wrapper"> 
        <Routes>
            <Route path={rutaServidor} element={<TareasUsuario/>}></Route>
            <Route path={rutaServidor+'/empleados'} element={<TablaEmpleados/>}></Route>
            <Route path={rutaServidor+'/home'} element={<Home/>}></Route>
        </Routes>
        <Footer></Footer> 
        </div>
    );
}

export default Principal;



 