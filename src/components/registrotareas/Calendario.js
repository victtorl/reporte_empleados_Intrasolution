import React from 'react';
import { useSelector } from 'react-redux';
import 'react-calendar/dist/Calendar.css';
import Agenda from './Agenda';
import Edicioneliminacion from '../edicioneliminaciontareas/EdicionEliminacion';





export const reordenarFecha = (v) => {
    let ff = v.toLocaleString('es-PE')
    let fff = ff.split(' ')
    let g = fff[0].split('/')
    let dia = g[0]
    let mes = g[1]
    let anio = g[2]
    dia <= 9 ? dia = `0${dia}` : dia = dia
    mes <= 9 ? mes = `0${mes}` : mes = mes
    return `${anio}-${mes}-${dia} ${fff[1]}`
}
export const reordenarFechaparamostrarmodal = (v) => {
    let ff = v.toLocaleString('es-PE')
    let fff = ff.split(' ')
    let g = fff[0].split('/')
    let dia = g[0]
    let mes = g[1]
    let anio = g[2]
    dia <= 9 ? dia = `0${dia}` : dia = dia
    mes <= 9 ? mes = `0${mes}` : mes = mes
    return `${anio}-${mes}-${dia}`
}

const Calendario = () => {
    const alertselectevent = useSelector((state) => state.alertselectevent)
    return (
        <>
            <div className="content-wrapper p-0 calendario-pantalla-grande">
              
                <section className="content contenido-calendario-section ">
                    <div className="container-fluid ">
                        <div className=" row justify-content-center">
                            
                            <div className='col-md-6 col-sm-9  '  >
                                <Agenda />
                            </div>
                            <div className='col-md-6 col-sm-9' >

                                {(alertselectevent === true)
                                ? <Edicioneliminacion/>
                                :<p></p>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Calendario;
