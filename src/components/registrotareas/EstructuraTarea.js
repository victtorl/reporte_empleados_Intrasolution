import React, { useState,useEffect } from 'react';


import Incidente from './tipotarea/Incidente';
import Pase from './tipotarea/Pase';
import Otro from './tipotarea/Otro';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';

import "react-datetime/css/react-datetime.css";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


import { setDefaultLocale } from "react-datepicker";
import { registroIncidencia, registroPase,registroOtro } from '../../utils/webservices';
import Planaccion from './tipotarea/PlanAccion';


setDefaultLocale('es')


const Estructuratarea = () => {

    const combotipotarea = useSelector((state) => state.combotipotarea)
    const nuevaTarea = useSelector((state) => state.nuevaTarea)
    const dataTarea = useSelector((state) => state.dataTarea)
    const tasks = useSelector((state) => state.tasks)
    const dataregistro =useSelector((state)=>state.dataregistro)
    const dataUserSesion =useSelector((state)=>state.dataUserSesion)


    const diaSelect = useSelector((state) => state.diaSelect)
    const [opTarea, SetoptTarea] = useState('Incidencia')

    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem=combotipotarea.filter((u)=>u.tipo_tarea === e.target.value)
        console.log(e.target.value);
        console.log(elem[0].id)  
        SetoptTarea(elem.id)    
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso 
        console.log(e.target.value);
        SetoptTarea(e.target.value)
        store.dispatch({
            type:'@pushtipo_tarea',
            payload:{
                tipo_tarea:elem[0].id
            }
            
        })
        //setear el responsable
        store.dispatch({
            type:'@pushresponsable',
            payload:{
                responsable:dataUserSesion.SC_USER_ID
            }
            
        })

    }

    const optRender = () => {
        switch (opTarea) {
            case 'Incidencia':
                return <Incidente />
            case 'Plan de Accion':
                return <Planaccion/>    
            case 'Pase':
                return <Pase />
            case 'Otro':
                return <Otro />
        }
    }
     var reordenarFecha = (diax) => {
        let fff = diax.split(' ')
        let g = fff[0].split('/')
        let dia = g[0]
        let mes = g[1]
        let anio = g[2]
        let h = fff[1]
        if (dia <= 9) {
            dia = `0${dia}`
        } else {
            dia = dia
        }
        if (mes <= 9) {
            mes = `0${mes}`
        } else {
            mes = mes
        }
        const fechaxdefecto = `${anio}-${mes}-${dia}`
        //validamos si hay dia seleccionado
        if (diaSelect.length === 0) {
            return `${fechaxdefecto}T${h}.318Z`
        } else {
            return `${diaSelect}T${h}.318Z`
        }
    }


    const [startDatei, setStartDatei] = useState(new Date());
    const [startDatef, setStartDatef] = useState(new Date());


    const cambiarDatos = (d) => {
        console.log('cambiando la hora de inicio');
        console.log(d.toLocaleString('es-PE'));
        console.log('el dato d es:' + d)
        setStartDatei(d)
        store.dispatch({
            type:'@pushhorainicio',
            payload:{
                hora_inicio:(reordenarFecha(d.toLocaleString('es-PE')))
            }
        }) 
    }
    const cambiarDatosf = (d) => {
        console.log('cambiando la hora de fin');
        console.log(d.toLocaleString('es-PE'));
        console.log('el dato d es:' + d)
        setStartDatef(d)
        store.dispatch({
            type:'@pushhorafin',
            payload:{
                hora_fin:(reordenarFecha(d.toLocaleString('es-PE')))
            }
        }) 
    }

    const traerCuerpo = async () => {
        var horai = reordenarFecha(startDatei.toLocaleString('es-PE'))
        var horaf = reordenarFecha(startDatef.toLocaleString('es-PE'))
        await store.dispatch({
            type: '@nuevatarea',
            payload: {
                tipo_tarea:combotipotarea.filter((u)=>u.tipo_tarea===opTarea)[0].id, 
                horaInicio: horai,
                horaFin: horaf,
                cuerpoTarea: dataTarea
            }
        })
        //incluir nueva tarea en el array de tareas
        let contenido = JSON.stringify(dataregistro)
        const tamanio = tasks.length + 1
        await store.dispatch({
            type: '@addtask',
            payload: {
                id: tamanio,
                color: '#3694DF',
                from: horai,
                to: horaf,
                title: contenido
            }
        })
    }

   
    const enviarDatos = async (e) => {
        e.preventDefault()

       switch (opTarea) {
        case "Incidencia":{
        // return  console.log('registrar una incidencia')
         return  registroIncidencia(
             dataregistro.tipo_tarea.tipo_tarea,
             dataregistro.segundotipo_tarea.incidente_id,
             dataregistro.observacion.observacion,
             dataregistro.hora_inicio.hora_inicio,
             dataregistro.hora_fin.hora_fin,
             dataUserSesion.SC_USER_ID)    
        }
        case "Pase":{
        //   return  console.log('registrar un pase')
         return registroPase(
            dataregistro.tipo_tarea.tipo_tarea,
            dataregistro.segundotipo_tarea.pase_id,
            dataregistro.observacion.observacion,
            dataregistro.hora_inicio.hora_inicio,
            dataregistro.hora_fin.hora_fin,
            dataUserSesion.SC_USER_ID)
        }
        case "Otro":{
        //    return  console.log('registrar Otro');
         return registroOtro(
            dataregistro.tipo_tarea.tipo_tarea,
            dataregistro.segundotipo_tarea.subtipo_tarea_id,
            dataregistro.observacion.observacion,
            dataregistro.hora_inicio.hora_inicio,
            dataregistro.hora_fin.hora_fin,
            dataUserSesion.SC_USER_ID)
        }
    }
        
       //recien al seleccioar el tipo de tarea se  llena dataTarea[] y ahi puedo capturar la data

    }

    return (
        <div>
            <div className="card card-primary">
                <div className="card-header">
                    <div className="m-0 row justify-content-center">
                        <h3 className="card-title">{diaSelect}</h3>
                    </div>
                </div>
                <form  >
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="d-flex justify-content-around">
                                        <DatePicker
                                            selected={startDatei}
                                            onChange={(date) => cambiarDatos(date)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={30}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                        <DatePicker
                                            selected={startDatef}
                                            onChange={(date) => cambiarDatosf(date)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={30}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Tipo tarea</label>
                                    <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                                        <option selected>Seleccione un tipo tarea</option>
                                        {combotipotarea.map(u => (
                                            <option key={u.id}   >{u.tipo_tarea}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-0 pb-0">
                        <div className="row">
                            <div className="col-md-12">
                                {optRender()}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" data-dismiss="modal" onClick={enviarDatos} >Enviar Form</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Estructuratarea;
