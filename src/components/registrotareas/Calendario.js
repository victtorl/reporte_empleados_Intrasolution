import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import Agenda from './Agenda';
import Registrotareas from './RegistroTareas';

import { store } from '../../redux/store';
import ModalTarea from './ModalTarea';
import { render } from '@testing-library/react';

    const convertStringData=(cadena) => {
    const variable=JSON.stringify(cadena)   
    const vardos=variable.split('T')
    const fechalarga=vardos[0]
    const f=fechalarga.split('-')
    const dia=f[2]
    const mes=f[1]
    const anio=f[0]
    const str = anio
    const newStr = str.slice(1)
    const  fecharender =`${dia}/${mes}/${newStr}`
    return fecharender
} 

export const  reordenarFecha=(v)=>{
    let ff=v.toLocaleString('es-PE')
    let fff=ff.split(' ')
    let g=fff[0].split('/')
    let dia= g[0]
    let mes= g[1]
    let anio= g[2]
    dia<=9? dia=`0${dia}`:dia=dia
    mes<=9? mes=`0${mes}`:mes=mes
     return `${dia}/${mes}/${anio}`
    }

const Calendario = () => {

    const fechaSelect = useSelector((state) => state.fechaSelect)
   

    const [value, onChange] = useState(new Date());

   const processDate =(v) => {
        
     let f= new Date()
     console.log(f.toLocaleString('es-PE'))
     
     console.log(convertStringData(v))
  
        store.dispatch({
            type:'@getfechaSelect',
            payload:convertStringData(v)
        })
        
            
   }
 

    return (

        <>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid ">
                        <div className="m-0 row justify-content-center">
                            
                                <h1>{fechaSelect}</h1>
                            
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="m-0 row justify-content-center">
                        <div className='col-md-3 col-sm-6' >
                          <Calendar locale="es-PE" onChange={onChange} value={value}  onClickDay={processDate(value) } 
                            
                          />
                        </div>
                        <div className='col-md-9 col-sm-6' >
                            
                            <Registrotareas/>
                            <Agenda/>
                            
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

                        
                  
         

    );
}

export default Calendario;
