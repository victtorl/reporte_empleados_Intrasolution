import React from 'react';
import { useState } from 'react';
import { store } from '../../../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';



const notify = () => toast("Tarea evaluada para enviar");


const Otro = () => {
    
    const combosubtipotarea = useSelector((state) => state.combosubtipotarea) 
    const dataUserSesion =useSelector((state)=>state.dataUserSesion)
    

    // campo subtipo_tarea
    const [opTarea, SetoptTarea] = useState(combosubtipotarea[0])
    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem=combosubtipotarea.filter((u)=>u.subtipo_tarea === e.target.value)
        console.log(e.target.value);
        SetoptTarea(elem[0].id)    
        console.log(elem[0].id)  
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso  
        console.log(e.target.value);
        SetoptTarea(e.target.value)
        store.dispatch({
            type:'@pushsegundotipo_tarea',
            payload:{
                subtipo_tarea_id:elem[0].id
            }
            
        })
    }

    //campo Observacion
    const [optObservacion, SetObservacion] = useState('')
    const setOptionObs = (e) => {
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
                tipo: 'Otro',
                subtipotarea: opTarea,
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
                        <label>Subtipo Tarea</label>
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption} >
                        <option selected>--Seleccione Subtipo Tarea--</option>
                                 { combosubtipotarea.map(u=>(
                                            <option key={u.id} >{u.subtipo_tarea}</option>
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

export default Otro;
