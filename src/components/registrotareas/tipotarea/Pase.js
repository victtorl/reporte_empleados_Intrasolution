import React from 'react';
import { useState } from 'react';
import { store } from '../../../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


const notify = () => toast("Tarea evaluada para enviar");


const Pase = () => {

    const combopase = useSelector((state) => state.combopase) 
    const dataUserSesion =useSelector((state)=>state.dataUserSesion)
    
    // campo pase
    const [opTarea, SetoptTarea] = useState(combopase[0])
    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem=combopase.filter((u)=>u.codigo === e.target.value)
        console.log(e.target.value);
        console.log(elem[0].id)  
        SetoptTarea(elem.id)    
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso 
        store.dispatch({
            type:'@pushsegundotipo_tarea',
            payload:{
                pase_id:elem[0].id
            }
            
        })
        //como es pase entonces el campo es nulll asi que le pasamos al estado redux campo vacio es igual a null
        store.dispatch({
            type:'@pushaccion_correctiva_id',
            payload:{
                accion_correctiva_id:''
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
    return (
        <>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Pase</label>
                       
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption} >
                        <option selected>--Seleccione un pase--</option>

                                 { combopase.map(u=>(
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
                        <label>Observacion</label>
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                        <label>Responsable : </label> 
                        <label>{dataUserSesion.nombre_empleado}</label>
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

export default Pase;
