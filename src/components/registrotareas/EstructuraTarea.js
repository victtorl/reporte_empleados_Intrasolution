import React, { useState } from 'react';


import Incidente from './tipotarea/Incidente';
import Pase from './tipotarea/Pase';
import Otro from './tipotarea/Otro';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Hora from './Hora';








const Estructuratarea = () => {

    

    const fechaS = useSelector((state) => state.fechaSelect)  
    

    const optTareas=[{id:1,tipo:'incidente'},{id:2,tipo:'pase'},{id:3,tipo:'otro'}]

    const [opTarea,SetoptTarea] =useState('incidente')

    const setOption=(e) => {
        console.log(e.target.value);
        SetoptTarea(e.target.value)
        
    }

    const optRender =() => {
        switch (opTarea) {
            case 'incidente':
                return <Incidente/>
            case 'pase':
                return <Pase/>    
            case 'otro':
                return <Otro/>
            default:
                return <Incidente/>
        }
    }

    const [value, onChange] = useState(new Date());
    return (
        <div>
            
                <div className="card card-primary">
                    <div className="card-header">
                        <div className="m-0 row justify-content-center">
                        <h3 className="card-title">{fechaS}</h3>
                        </div>
                    </div>
                    <form>
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="d-flex justify-content-around">
                                         <div >
                                             <label>fecha inicio</label>
                                             <Hora/>
                                         </div>
                                         <div>
                                             <label>fecha fin</label>
                                             <Hora/>
                                         </div> 
                                    </div>
   
                                </div>  
                                <div className="form-group">
                                    <label>Tipo tarea</label>
                                    <select className="form-control select2" style={{ width: '100%' }} onChange={setOption}>
                                        { optTareas.map(u=>(
                                            <option key={u.id} value={u.tipo}  >{u.tipo}</option>
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

                    <div className="card-body">
                        <div className="m-0 row justify-content-center">
                                <div className="m-0 row justify-content-center">
                                    <div className="form-group">
                                        <div className='justify-content-center'>
                                             <h5 className='text-center' >Inicio</h5>
                                        </div>
                                        <div className='row'>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="m-0 row justify-content-center">
                                <div className="m-0 row justify-content-center">
                                    <div className="form-group">
                                        <div className='justify-content-center'>
                                             <h5 className='text-center' >Fin</h5>
                                        </div>
                                        <div className='row'>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                        
                        
                        <div className="card-footer">
                            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                        </div>
                    </form>
                </div>
            


            
        </div>
    );
}

export default Estructuratarea;
