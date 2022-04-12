import React, { useState } from 'react';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
import "react-datetime/css/react-datetime.css";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from 'react-toastify';
import { setDefaultLocale } from "react-datepicker";
import { edicionIncidencia, eliminacionIncidencia, eliminacionPase, eliminacionOtro, edicionPase, edicionOtro, eliminacionPlanAccion, eliminacionReunion } from '../../utils/webservices';






setDefaultLocale('es')


const FuncionIncidente = (props) => {

    const comboincid = useSelector((state) => state.comboincid)
    const dataUserSesion = useSelector((state) => state.dataUserSesion)

    const dataEditDeleteInc = useSelector((state) => state.dataEditDeleteInc)

    let subtipotareeaidED = dataEditDeleteInc.segundotipo_tarea.incidente_id

    const indiceSubtipotareaId = comboincid.map(u => u.id).indexOf(subtipotareeaidED)

    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem = comboincid.filter((u) => u.codigo_ticket === e.target.value)
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso
        store.dispatch({
            type: '@pushsegundotipo_tareaEDInc',
            payload: {
                incidente_id: elem[0].id
            }

        })
    }



    const setOptionObs = (e) => {
        console.log(e.target.value);
        //   SetObservacion(dataEditDeleteInc.observacion.observacion)
        // eleRef.current.value('remplazo')
        store.dispatch({
            type: '@pushobservacionEDInc',
            payload: {
                observacion: e.target.value
            }

        })

    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Incidente</label>
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                            {comboincid.map((u, index) => (
                                <option key={u.id} selected={index === indiceSubtipotareaId} >{u.codigo_ticket}</option>
                            ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label>Observación Anterior:</label> <p>{dataEditDeleteInc.observacion.observacion}</p>
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Nueva observacion..." >
                        </textarea>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">

                        <label>Responsable: &nbsp;</label>
                        <label>{dataUserSesion.usuario}</label>
                        <hr></hr>

                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>

                </div>
            </div>
        </>
    )
}


const FuncionPase = (props) => {

    const combopase = useSelector((state) => state.combopase)
    const dataUserSesion = useSelector((state) => state.dataUserSesion)

    const dataEditDeletePase = useSelector((state) => state.dataEditDeletePase)

    let subtipotareeaidED = dataEditDeletePase.segundotipo_tarea.subtipo_tarea_id

    const indiceSubtipotareaId = combopase.map(u => u.id).indexOf(subtipotareeaidED)

    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem = combopase.filter((u) => u.codigo === e.target.value)
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso
        store.dispatch({
            type: '@pushsegundotipo_tareaEDPase',
            payload: {
                subtipo_tarea_id: elem[0].id
            }

        })
    }



    const setOptionObs = (e) => {
        console.log(e.target.value);
        //   SetObservacion(dataEditDeleteInc.observacion.observacion)
        // eleRef.current.value('remplazo')
        store.dispatch({
            type: '@pushobservacionEDPase',
            payload: {
                observacion: e.target.value
            }

        })

    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Pase</label>
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                            {combopase.map((u, index) => (
                                <option key={u.id} selected={index === indiceSubtipotareaId} >{u.codigo}</option>
                            ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label>Observación Anterior:</label> <p>{dataEditDeletePase.observacion.observacion}</p>
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Nueva observacion..." >
                        </textarea>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">

                        <label>Responsable: &nbsp;</label>
                        <label>{dataUserSesion.usuario}</label>
                        <hr></hr>

                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

const FuncionOtro = (props) => {

    const combopase = useSelector((state) => state.combopase)
    const combosubtipotarea = useSelector((state) => state.combosubtipotarea)
    const dataUserSesion = useSelector((state) => state.dataUserSesion)

    const dataEditDelete = useSelector((state) => state.dataEditDelete)

    let subtipotareeaidED = dataEditDelete.segundotipo_tarea.subtipo_tarea_id

    const indiceSubtipotareaId = combosubtipotarea.map(u => u.id).indexOf(subtipotareeaidED)

    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem = combosubtipotarea.filter((u) => u.subtipo_tarea === e.target.value)
        console.log('hay id' + elem[0].id)
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso
        store.dispatch({
            type: '@pushsegundotipo_tareaED',
            payload: {
                subtipo_tarea_id: elem[0].id
            }

        })
    }



    const setOptionObs = (e) => {
        console.log(e.target.value);
        //   SetObservacion(dataEditDeleteInc.observacion.observacion)
        // eleRef.current.value('remplazo')
        store.dispatch({
            type: '@pushobservacionED',
            payload: {
                observacion: e.target.value
            }

        })

    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Otro</label>
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                            {combosubtipotarea.map((u, index) => (
                                <option key={u.id} selected={index === indiceSubtipotareaId} >{u.subtipo_tarea}</option>
                            ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label>Observación Anterior:</label> <p>{dataEditDelete.observacion.observacion}</p>
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Nueva observacion..." >
                        </textarea>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">

                        <label>Responsable: &nbsp;</label>
                        <label>{dataUserSesion.usuario}</label>
                        <hr></hr>

                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>

                </div>
            </div>
        </>
    )
}


const FuncionPlandeaccion = (props) => {

    const comboplandeaccion = useSelector((state) => state.comboplandeaccion)
    const dataUserSesion = useSelector((state) => state.dataUserSesion)

    const dataEditDelete = useSelector((state) => state.dataEditDelete)

    let subtipotareeaidED = dataEditDelete.segundotipo_tarea.subtipo_tarea_id

    const indiceSubtipotareaId = comboplandeaccion.map(u => u.id).indexOf(subtipotareeaidED)

    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem = comboplandeaccion.filter((u) => u.subtipo_tarea === e.target.value)
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso
        store.dispatch({
            type: '@pushsegundotipo_tareaEDAccion',
            payload: {
                subtipo_tarea_id: elem[0].id
            }

        })
    }



    const setOptionObs = (e) => {
        console.log(e.target.value);
        //   SetObservacion(dataEditDeleteInc.observacion.observacion)
        // eleRef.current.value('remplazo')
        store.dispatch({
            type: '@pushobservacionEDAccion',
            payload: {
                observacion: e.target.value
            }

        })

    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Plan de  Acción</label>
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                            {comboplandeaccion.map((u, index) => (
                                <option key={u.id} selected={index === indiceSubtipotareaId} >{u.codigo_accion_correctiva}</option>
                            ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label>Observación Anterior:</label> <p>{dataEditDelete.observacion.observacion}</p>
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Nueva observacion..." >
                        </textarea>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">

                        <label>Responsable: &nbsp;</label>
                        <label>{dataUserSesion.usuario}</label>
                        <hr></hr>

                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

const FuncionReunion = (props) => {

    const comboplandeaccion = useSelector((state) => state.comboplandeaccion)
    const dataUserSesion = useSelector((state) => state.dataUserSesion)

    const dataEditDelete = useSelector((state) => state.dataEditDelete)

    let subtipotareeaidED = dataEditDelete.segundotipo_tarea.subtipo_tarea_id

    const indiceSubtipotareaId = comboplandeaccion.map(u => u.id).indexOf(subtipotareeaidED)

    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem = comboplandeaccion.filter((u) => u.subtipo_tarea === e.target.value)
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso
        store.dispatch({
            type: '@pushsegundotipo_tareaEDAccion',
            payload: {
                subtipo_tarea_id: elem[0].id
            }

        })
    }



    const setOptionObs = (e) => {
        console.log(e.target.value);
        //   SetObservacion(dataEditDeleteInc.observacion.observacion)
        // eleRef.current.value('remplazo')
        store.dispatch({
            type: '@pushobservacionEDAccion',
            payload: {
                observacion: e.target.value
            }

        })

    }

    return (
        <>
            <div className="row">
                {/* <div className="col-md-12">
                    <div className="form-group">
                        <label>Plan de  Acción</label>
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                            {comboplandeaccion.map((u, index) => (
                                <option key={u.id} selected={index === indiceSubtipotareaId} >{u.codigo_accion_correctiva}</option>
                            ))
                            }
                        </select>
                    </div>
                </div> */}
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label>Observación Anterior:</label> <p>{dataEditDelete.observacion.observacion}</p>
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Nueva observacion..." >
                        </textarea>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">

                        <label>Responsable: &nbsp;</label>
                        <label>{dataUserSesion.usuario}</label>
                        <hr></hr>

                        <ToastContainer
                            position="top-center"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>

                </div>
            </div>
        </>
    )
}


const Edicioneliminaciontareas = () => {

    const combotipotarea = useSelector((state) => state.combotipotarea)
    const nuevaTarea = useSelector((state) => state.nuevaTarea)
    const dataTarea = useSelector((state) => state.dataTarea)
    const tasks = useSelector((state) => state.tasks)
    const dataregistro = useSelector((state) => state.dataregistro)
    const dataUserSesion = useSelector((state) => state.dataUserSesion)
    const dataEditDeleteInc = useSelector((state) => state.dataEditDeleteInc)
    const dataEditDeletePase = useSelector((state) => state.dataEditDeletePase)
    const dataEditDelete = useSelector((state) => state.dataEditDelete)


    //DATA POR DEFECTO QUE SE ENVIA AL PRESIONAR UNEVENTO DEL CALENDARIO
    let nombreTareadataED = dataEditDeleteInc.nombre_tipo_tarea.nombre_tipo_tarea
    let idtipoTarea = dataEditDeleteInc.tipo_tarea.tipo_tarea




    const diaSelect = useSelector((state) => state.diaSelect)
    const diaSelectmuestramodal = useSelector((state) => state.diaSelectmuestramodal)

    const [opTareaED, SetoptTareaED] = useState(nombreTareadataED)

    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem = combotipotarea.filter((u) => u.tipo_tarea === e.target.value)
        SetoptTareaED(elem.id)
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso 
        console.log(e.target.value);
        SetoptTareaED(e.target.value)
        store.dispatch({
            type: '@pushtipo_tareaEDInc',
            payload: {
                tipo_tarea: elem[0].id
            }

        })
        //setear el responsable
        store.dispatch({
            type: '@pushresponsableEDInc',
            payload: {
                responsable: dataUserSesion.SC_USER_ID
            }

        })


    }



    const optRender = () => {
        switch (opTareaED) {
            case 'Incidencia':
                return <FuncionIncidente />
            case 'Planes de Accion':
                return <FuncionPlandeaccion />
            case 'Pase':
                return <FuncionPase />
            case 'Otro':
                return <FuncionOtro />
            case 'Reunion':
                return <FuncionReunion />
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


    var ro = (v) => {

        let ffff = v.split('T')
        let guno = ffff[0].split('-')
        let anio = guno[0]
        let mes = guno[1]
        let dia = guno[2]

        let gdos = ffff[1].split('.')
        let gtres = gdos[0].split(':')
        let hora = gtres[0]
        let min = gtres[1]
        let seg = gtres[2]

        return {
            anio: parseInt(anio),
            mes: parseInt(mes),
            dia: parseInt(dia),
            hora: parseInt(hora),
            min: parseInt(min),
            seg: parseFloat(seg)
        }

    }

    let hi = dataEditDeleteInc.hora_inicio.hora_inicio
    let hf = dataEditDeleteInc.hora_fin.hora_fin

    // ro(hi).anio,ro(hi).mes,ro(hi).dia,ro(hi).hora,ro(hi).min,ro(hi).seg 
    // ro(hf).anio,ro(hf).mes,ro(hf).dia,ro(hf).hora,ro(hf).min,ro(hf).seg

    const [startDatei, setStartDatei] = useState(new Date());
    const [startDatef, setStartDatef] = useState(new Date());


    const cambiarDatos = (d) => {
        console.log('cambiando la hora de inicio');
        console.log(hi)
        console.log(hf)
        console.log(d.toLocaleString('es-PE'));
        console.log('el dato d es:' + d)
        setStartDatei(d)
        store.dispatch({
            type: '@pushhorainicioEDInc',
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
            type: '@pushhorafinEDInc',
            payload: {
                hora_fin: (reordenarFecha(d.toLocaleString('es-PE')))
            }
        })
    }



    const editarDatos = (e) => {
        e.preventDefault()

        switch (opTareaED) {
            case "Incidencia": {
                console.log('editar una incidencia')
                return edicionIncidencia(
                    dataEditDeleteInc.tipo_tarea.tipo_tarea,
                    dataEditDeleteInc.id_bd.id_bd,
                    dataEditDeleteInc.segundotipo_tarea.incidente_id,
                    dataEditDeleteInc.observacion.observacion,
                    dataEditDeleteInc.hora_inicio.hora_inicio,
                    dataEditDeleteInc.hora_fin.hora_fin,
                    dataUserSesion.SC_USER_ID)
            }
            case "Pase": {
                console.log('editar un pase')
                return edicionPase(
                    dataEditDeletePase.tipo_tarea.tipo_tarea,
                    dataEditDeletePase.id_bd.id_bd,
                    dataEditDeletePase.segundotipo_tarea.pase_id,
                    dataEditDeletePase.observacion.observacion,
                    dataEditDeleteInc.hora_inicio.hora_inicio,
                    dataEditDeleteInc.hora_fin.hora_fin,
                    dataUserSesion.SC_USER_ID)
            }
            case "Otro": {
                console.log('editar Otro');
                return edicionOtro(
                    dataEditDelete.tipo_tarea.tipo_tarea,
                    dataEditDelete.id_bd.id_bd,
                    dataEditDelete.segundotipo_tarea.subtipo_tarea_id,
                    dataEditDelete.observacion.observacion,
                    dataEditDeleteInc.hora_inicio.hora_inicio,
                    dataEditDeleteInc.hora_fin.hora_fin,
                    dataUserSesion.SC_USER_ID)
            }

            case "Planes de Accion": {
                console.log('editar Reunion');
                return edicionOtro(
                    dataEditDelete.tipo_tarea.tipo_tarea,
                    dataEditDelete.id_bd.id_bd,
                    dataEditDelete.segundotipo_tarea.subtipo_tarea_id,
                    dataEditDelete.observacion.observacion,
                    dataEditDeleteInc.hora_inicio.hora_inicio,
                    dataEditDeleteInc.hora_fin.hora_fin,
                    dataUserSesion.SC_USER_ID)
            }
        }

    }

    const eliminarDatos = (e) => {
        e.preventDefault()

        switch (opTareaED) {
            case "Incidencia": {
                console.log('eliminar una incidencia')
                return eliminacionIncidencia(
                    dataEditDeleteInc.id_bd.id_bd,
                )
            }
            case "Pase": {
                console.log('eliminar un pase')
                return eliminacionPase(
                    dataEditDeleteInc.id_bd.id_bd,
                )
            }
            case "Otro": {
                console.log('eliminar Otro');
                return eliminacionOtro(
                    dataEditDeleteInc.id_bd.id_bd,
                )
            }

            case "Planes de Accion": {
                console.log('eliminar Plan de accion');
                return eliminacionPlanAccion(
                    dataEditDeleteInc.id_bd.id_bd,
                )
            }
            case "Reunion": {
                console.log('eliminar Reunion');
                return eliminacionReunion(
                    dataEditDeleteInc.id_bd.id_bd,
                )
            }
        }

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
                                            <label>inicio</label>
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
                                            <label>fin</label>
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
                                <p className='parra'>Inicio Tarea: {hi}</p>
                                <p className='parra'>Fin Tarea: {hf}</p>
                                <div className="form-group">
                                    <label>Tipo tarea</label>
                                    <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                                        {combotipotarea.map((u, index) => (
                                            <option key={u.id} selected={index === (idtipoTarea - 1)} >{u.tipo_tarea}</option>
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
                        <button type="button" class="btn btn-outline-warning" onClick={editarDatos} >Editar</button>
                        <button type="button" class="btn btn-outline-danger" onClick={eliminarDatos}>Eliminar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edicioneliminaciontareas;
