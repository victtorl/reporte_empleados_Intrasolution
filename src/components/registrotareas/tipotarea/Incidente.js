import {React,useEffect} from 'react';
import { useState } from 'react';
import { store } from '../../../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const notify = () => toast("Tarea evaluada para enviar");



const Incidente = () => {
    
    const comboincid = useSelector((state) => state.comboincid)
    const dataUserSesion =useSelector((state)=>state.dataUserSesion)
    
    // campo incidente
    const [opTarea, SetoptTarea] = useState(0)
    const setOption = (e) => {
        //filtrar el elemento del array que coincida con el select actual y llevarlo al setStare
        const elem=comboincid.filter((u)=>u.codigo_ticket === e.target.value)
        console.log(e.target.value);
        console.log(elem[0].id)  
        SetoptTarea(elem.id)         
        //seteo el estado a un arreglo y eso lo envio al final ya solo en un paso
        store.dispatch({
            type:'@pushsegundotipo_tarea',
            payload:{
                incidente_id:elem[0].id
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
 


    return (

        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label>Incidencia</label>
                        <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                        <option selected>--Seleccione Incidencia--</option>
                            {comboincid.map(u => (
                                <option key={u.id}  >{u.codigo_ticket}</option>
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
                        <textarea onChange={setOptionObs} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={optObservacion} />
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                    <div className="form-group">
                       
                        <label>Responsable : </label> 
                        <label>{dataUserSesion.nombre_empleado}</label>
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

    );
}

export default Incidente;
