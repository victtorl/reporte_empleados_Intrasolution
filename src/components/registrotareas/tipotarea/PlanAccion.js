import React from 'react';
import { useState } from 'react';
import { store } from '../../../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


const notify = () => toast("Tarea evaluada para enviar");



const Planaccion = () => {

    //cambiar por combo plan aacion
    const comboplandeaccion = useSelector((state) => state.comboplandeaccion) 
    const dataUserSesion =useSelector((state)=>state.dataUserSesion)
    
    // campo plan accion
     const [opTarea, SetoptTarea] = useState(comboplandeaccion[0])
    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem=comboplandeaccion.filter((u)=>u.codigo_accion_correctiva === e.target.value)
        console.log(e.target.value);
        // console.log(elem[0].sac_accion_correctiva_id)  
        SetoptTarea(elem.codigo_accion_correctiva)    
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso 
        store.dispatch({
            type:'@pushsegundotipo_tarea',
            payload:{
                subtipo_tarea_id:elem[0].sac_accion_correctiva_id
            }
            
        })

         //como es plan de accion entonces el campo si se pasa esta vez asi que le pasamos al estado redux campo que correcponde a accion correctiva
         store.dispatch({
            type:'@pushaccion_correctiva_id',
            payload:{
                accion_correctiva_id:elem[0].sac_accion_correctiva_id
            }
            
        })  
    }

    //campo Observacion
    const [optObservacion, SetObservacion] = useState(' ')
    const setOptionObs = (e) => {
        console.log(dataUserSesion.nombre_empleado);
        console.log(e.target.value);
        SetObservacion(e.target.value)
        store.dispatch({
            type:'@pushobservacion',
            payload:{
                observacion:e.target.value
            }
        }) 
    }

   

   const registrarDatos = (e) => {
        e.preventDefault()
        store.dispatch({
            type: '@setdatatarea',
            payload: {
                tipo: 'pase',
                pase: opTarea,
                observacion: optObservacion,
                responsable: dataUserSesion.SC_USER_ID
            }
        })
        notify()
    }
    var  i=0
    return (
        <>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Plan Accion</label>
                       
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption} defaultValue={'default'} >
                        <option value='default'>--Seleccione Plan de Accion--</option>

                                 { comboplandeaccion.map(u=>(
                                             <option key={i++} >{u.codigo_accion_correctiva}</option>
                                        ))
                                  }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                    <label>Observación</label>
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label>Responsable: &nbsp;</label> 
                        <label>{dataUserSesion.usuario}</label>
                        <hr></hr>
                        {/* <button onClick={registrarDatos} type="button" class="btn btn-outline-warning">confirmar informacion del form</button> */}

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

    );
}

export default Planaccion;

