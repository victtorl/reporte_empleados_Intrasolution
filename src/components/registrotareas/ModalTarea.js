import React from 'react';
import { useSelector } from 'react-redux'
import EstructuraTarea from './EstructuraTarea'




const ModalTarea = () => {
    
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
            <div className="modal fade" id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default ModalTarea;
