import Footer from '../components/Footer';
import TablaEmpleados from './tablaempleados/TablaEmpleados';
import { Routes, Route } from 'react-router-dom'
import Calendario from './registrotareas/Calendario';
import React from 'react';
import TareasUsuario from './tablaempleados/TareasUsuario';
import BarChart from './charts/BarChart';
import BarChartx from './charts/DashboardGraficos';

const Principal = () => {
    const rutaServidor="ASP_intrasolution/intrasolution_nodejs"
    return (
        <div className="wrapper"> 
        <Routes> 
            <Route path={rutaServidor+'/tareaspendientes'} element={<TareasUsuario/>}></Route>
            <Route path={rutaServidor+'/empleados'} element={<TablaEmpleados/>}></Route>
            <Route path={rutaServidor+'/home'} element={<BarChartx/>}></Route>
            <Route path={rutaServidor+'/calendario'} element={<Calendario/>}></Route>
            <Route path={rutaServidor+'/barchart'} element={<BarChart/>}></Route>
            <Route path={rutaServidor+'/barchartx'} element={<BarChartx/>}></Route>
            <Route path={rutaServidor} element={<BarChartx/>}></Route>
            <Route path={rutaServidor+'/*'} element={<BarChartx/>}></Route>
        </Routes>
        <Footer></Footer> 
        </div>
    );
}

export default Principal;



 