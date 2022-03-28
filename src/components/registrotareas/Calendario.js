import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import 'react-calendar/dist/Calendar.css';
import Agenda from './Agenda';

import PruebaEnviocomp from './PruebaEnvio';
import Estructuratarea from './EstructuraTarea';
import Edicioneliminaciontareas from '../edicioneliminaciontareas/EdicionEliminacionTareas';


const convertStringData = (cadena) => {
    const variable = JSON.stringify(cadena)
    const vardos = variable.split('T')
    const fechalarga = vardos[0]
    const f = fechalarga.split('-')
    const dia = f[2]
    const mes = f[1]
    const anio = f[0]
    const str = anio
    const newStr = str.slice(1)
    const fecharender = `${dia}/${mes}/${newStr}`
    // const  fecharender={
    //     hour:0,
    //     day:dia,
    //     month:mes,
    //     year:newStr
    // }

    return fecharender
}

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

    const fechaSelect = useSelector((state) => state.fechaSelect)
    const diaSelect = useSelector((state) => state.diaSelect)
    const alertselectevent = useSelector((state) => state.alertselectevent)


    return (
        <>
            <div className="content-wrapper p-0 calendario-pantalla-grande">
                {/* <section className="content-header">
                    <div className="container-fluid ">
                        <div className=" row justify-content-center">
                            
                                <h1>{diaSelect}</h1>
                            
                        </div>
                    </div>
                </section> */}
                <section className="content contenido-calendario-section ">
                    <div className="container-fluid ">
                        <div className=" row justify-content-center">
                            {/* <div className='col-md-3 col-sm-6' >
                          <Registrotareas/>
                          <Calendar locale="es-PE" onChange={onChange} value={value}  onClickDay={processDate(value) } 
                            
                          />
                        </div> */}

                            <div className='col-md-6 col-sm-9  '  >
                                <Agenda />
                            </div>
                            <div className='col-md-6 col-sm-9' >

                                {(alertselectevent === true)
                                ? <Edicioneliminaciontareas/>
                                :<p>hola</p>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>





    );
}

export default Calendario;
