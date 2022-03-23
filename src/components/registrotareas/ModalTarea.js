import React from 'react';
import EstructuraTarea from './EstructuraTarea'
import { useSelector } from 'react-redux';

import { store } from '../../redux/store';
import { getalltareas, registroTarea } from '../../utils/webservices';


const ModalTarea = () => {

const nuevaTarea = useSelector((state) => state.nuevaTarea)
const alltareas = useSelector((state) => state.alltareas)

const registrarTarea = async () => {

   await store.dispatch({
        type:'@agregarTarea',
        payload:nuevaTarea
    })
 registroTarea()

}   

    return (
        <div>
            {/* Button trigger modal */}

            {/* <a  className="btn btn-outline-success  " data-toggle="modal" data-target="#exampleModalScrollable">
                Nueva Tarea
            </a> */}

            <a  className="btn btn-outline-success  " data-toggle="modal" data-target="#exampleModalScrollable">
                Nueva Tarea
            </a>
            {/* Modal */}
            <div className="modal fade " id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                          <EstructuraTarea/>
                                        
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={registrarTarea}>Cerrar modal X</button>
                            {/* <button type="button" className="btn btn-danger"  onClick={tratarTareas(alltareas)}>getalltareas</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default ModalTarea;
