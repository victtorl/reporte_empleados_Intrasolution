import Navbar from '../components/Navbar';
import Home from '../components/home/Home';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TablaEmpleados from '../components/home/TablaEmpleados';
import { Routes, Route } from 'react-router-dom'


import React from 'react';

const Principal = () => {
  
    const rutaServidor="intrasolution_nodejs"
    return (
        <div className="wrapper">
        <Navbar>
        </Navbar>
        <Routes>
            <Route path={rutaServidor+'/*'} element={<TablaEmpleados/>}></Route>
            <Route path={rutaServidor+'/home'} element={<Home/>}></Route>
        </Routes>
        <Sidebar>
        </Sidebar>
        <Footer></Footer> 
        </div>
    );
}

export default Principal;



 