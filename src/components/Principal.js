import Navbar from '../components/Navbar';
import Home from './tablaempleados/Home';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TablaEmpleados from './tablaempleados/TablaEmpleados';
import { Routes, Route } from 'react-router-dom'

import Calendario from './registrotareas/Calendario';



import React from 'react';
import Login from './Login';
import TareasUsuario from './tablaempleados/TareasUsuario';
import Default from './tablaempleados/Default';
import BarChart from './charts/BarChart';
import BarChartx from './charts/BarChartx';

const Principal = () => {
  
    const rutaServidor="ASP_intrasolution/intrasolution_nodejs"
    return (
        <div className="wrapper"> 
        <Routes>
            
            <Route path={rutaServidor} element={<TareasUsuario/>}></Route>
            <Route path={rutaServidor+'/*'} element={<Default/>}></Route>
            <Route path={rutaServidor+'/tareaspendientes'} element={<TareasUsuario/>}></Route>
            <Route path={rutaServidor+'/empleados'} element={<TablaEmpleados/>}></Route>
            <Route path={rutaServidor+'/home'} element={<Home/>}></Route>
            <Route path={rutaServidor+'/calendario'} element={<Calendario/>}></Route>
            <Route path={rutaServidor+'/barchart'} element={<BarChart/>}></Route>
            <Route path={rutaServidor+'/barchartx'} element={<BarChartx/>}></Route>
        </Routes>
        <Footer></Footer> 
        </div>
    );
}

export default Principal;



 