import React, { useState } from 'react';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
import "react-datetime/css/react-datetime.css";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { setDefaultLocale } from "react-datepicker";
import { registroTodoTareas } from '../../utils/webservices';



setDefaultLocale('es')


const Estructuratarea = () => {

    const dataregistro = useSelector((state) => state.dataregistro)
    const dataUserSesion = useSelector((state) => state.dataUserSesion)


    const diaSelect = useSelector((state) => state.diaSelect)
    const diaSelectmuestramodal = useSelector((state) => state.diaSelectmuestramodal)


    const allcombos = useSelector((state) => state.allcombos)
    //trayendo tipo actividades
    const tipoactividadcombo = useSelector((state) => state.tipoactividad)


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
            type: '@pushhorainicio',
            payload: {
                hora_inicio: (reordenarFecha(d.toLocaleString('es-PE')))
            }
        })
    }
    const cambiarDatosf = (d) => {
        console.log('cambiando la hora de fin');
        console.log(d.toLocaleString('es-PE'));
        console.log('el dato d es:' + d)
        setStartDatef(d)
        store.dispatch({
            type: '@pushhorafin',
            payload: {
                hora_fin: (reordenarFecha(d.toLocaleString('es-PE')))
            }
        })
    }




   



    //ELEGIR Y SETEAR EL TIPO DE TAREA
    const [opTarea, SetoptTarea] = useState(0)

    const setOption = (e) => {
        console.log('valor elegido' + e.target.value)
        SetoptTarea(e.target.value)
        

        store.dispatch({
            type: '@pushtipo_tarea',
            payload: {
                tipo_tarea_id: e.target.value
            }

        })
        //setear el responsable
        store.dispatch({
            type: '@pushresponsable',
            payload: {
                responsable: dataUserSesion.SC_USER_ID
            }

        })
        if (e.target.value < 4) { //validamos que  el tipo de tareas es OTRO entonces le enviamos el subtipo_tarea_id del subtipo elegido, si no fuese ese el caso le enviamos 0
            store.dispatch({
                type: '@pushsubtipo_tarea',
                payload: {
                    subtipo_tarea_id: 0
                }

            })
        }else{
            store.dispatch({
                type: '@pushactividad',
                payload: {
                    actividad_id: 0
                }

            })
        }
        



        setSelected("") //REFRESCA EL SUBTIPO TAREA OBLIGANDOAL USUARIO A ELEGIR UN SUBTIPO
        setSelectedactividad("") //REFRESCA EL SUBTIPO TAREA OBLIGANDOAL USUARIO A ELEGIR UN SUBTIPO
    }
    //COMBO SUBTIPO  TAREA 
    const setOptionSubtipo = (e) => {
        let datosTareatipo123 = allcombos.filter((u) => u.tipo < 4) //FILTRAMOS LAS TAREAS CON ID  1 2 3 QUE CORRESPONDE A OTROS
        let idactividad123 = datosTareatipo123.filter((u) => u.codigo == e.target.value) //FILTRAMOS EL ARRAY ANTERIOR PARA OBTENER LOS DATOS DEL ELEMENTO SELECCIONADO
     
        let datosTareatipo4 = allcombos.filter((u) => u.tipo == 4) //FILTRAMOS LAS TAREAS CON ID 4 QUE CORRESPONDE A OTROS
        let idactividadOtros = datosTareatipo4.filter((u) => u.codigo == e.target.value) //FILTRAMOS EL ARRAY ANTERIOR PARA OBTENER LOS DATOS DEL ELEMENTO SELECCIONADO

        console.log(datosTareatipo123)
        console.log(datosTareatipo4)
        console.log(idactividad123);
        console.log(idactividadOtros);
        
        if(idactividad123.length !==0){   //VALIDAMOS QUE EL ARRAY idactividad123 TENGA CONTENIDO, SI ESTO SE CUMPLE GUARDAMOS EL subtipo_tarea_id EN EL STORE
            console.log('123 tipoas');
            store.dispatch({
            type: '@pushactividad',
            payload: {
                actividad_id: idactividad123[0].actividad_id
            }

        })
       }


        if (idactividadOtros.length !==0) {  //VALIDAMOS QUE EL ARRAY idactividadOtros TENGA CONTENIDO, SI ESTO SE CUMPLE GUARDAMOS EL subtipo_tarea_id EN EL STORE
            console.log('otros');
            store.dispatch({
                type: '@pushsubtipo_tarea',
                payload: {
                    subtipo_tarea_id: idactividadOtros[0].actividad_id
                }

            })
        }


    }

    //COMBO TIPO ACTIVIDAD  ***se usara en algún futuro***
    // const setOptionTipoActividad = (e) => {
    //     let idtipotarea = tipoactividadcombo.filter((u) => u.tipo_actividad == e.target.value) //filtrar el elemento seleccionado para acceder a su id y enviarlo como payload
    //     store.dispatch({
    //         type: '@pushtipo_actividad',
    //         payload: {
    //             tipo_actividad_id: idtipotarea[0].id
    //         }

    //     })

    // }

    let combodinamico = allcombos.filter((u) => u.tipo == opTarea)  //filtra el subtipo de tarea dependiendo del tipo de tarea que se escoja

    //campo Observacion
    const [optObservacion, SetObservacion] = useState('')
    const setOptionObs = (e) => {
        console.log(e.target.value);
        SetObservacion(e.target.value)
        store.dispatch({
            type: '@pushobservacion',
            payload: {
                observacion: e.target.value
            }

        })

    }




    const [selected, setSelected] = useState("");
    const [selectedactividad, setSelectedactividad] = useState("");


    const enviarDatos = async (e) => {
        e.preventDefault()
        


        registroTodoTareas(
                        dataregistro.tipo_tarea_id.tipo_tarea_id,
                        
                        dataregistro.subtipo_tarea_id.subtipo_tarea_id,
                        dataregistro.actividad_id.actividad_id,
                        dataregistro.observacion.observacion,
                        dataregistro.fecha_inicio.hora_inicio,
                        dataregistro.fecha_fin.hora_fin,
                        dataUserSesion.SC_USER_ID)

                        SetObservacion('')   
                        setSelected("") //REFRESCA EL SUBTIPO TAREA OBLIGANDOAL USUARIO A ELEGIR UN SUBTIPO
                         setSelectedactividad("") //REFRESCA EL SUBTIPO TAREA OBLIGANDOAL USUARIO A ELEGIR UN SUBTIPO

    }




    return (
        <div>
            <div className="card card-primary">
                <div className="card-header">
                    <div className="m-0 row justify-content-center">
                        <h3 className="card-title">{diaSelectmuestramodal}</h3>
                    </div>
                </div>
                <form  >
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="d-flex justify-content-around">
                                        <div className='datepicker'>
                                            <label>Inicio</label>
                                            <DatePicker
                                                className='datepicker'
                                                selected={startDatei}
                                                onChange={(date) => cambiarDatos(date)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={30}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </div>
                                        <div className='datepicker'>
                                            <label>Fin</label>
                                            <DatePicker
                                                className='datepicker'
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
                                </div>
                                <div className="form-group">
                                    <label>Tipo Tarea</label>
                                    <select className="form-control select2" style={{ width: '100%' }} onChange={setOption} defaultValue={'default'}>
                                        <option value='default'>--Seleccione un tipo tarea--</option>
                                        <option value='1'>Incidencia</option>
                                        <option value='2'>Pase</option>
                                        <option value='3'>Planes de Accion</option>
                                        <option value='4'>Otros</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-0 pb-0">
                        
                        <div className="row">
                            <div className="col-md-12">

                                <div className="form-group">
                                    <label>Codigo de  Tarea </label>
                                    <select className="form-control select2" style={{ width: '100%' }} onClick={setOptionSubtipo} defaultValue={'default'}
                                        onChange={(e) => setSelected(e.target.value)} value={selected}
                                    >
                                        <option value='default'>--Seleccione Sub Tipo--</option>
                                        {
                                            combodinamico.map(u => (
                                                <option key={u.id} >{u.codigo}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">

                                <div className="form-group">
                                    <label>Descripción</label>
                                    <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={optObservacion} />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" data-dismiss="modal" onClick={enviarDatos} >Grabar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Estructuratarea;
