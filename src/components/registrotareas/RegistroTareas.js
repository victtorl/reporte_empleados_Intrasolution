import React from 'react';
import ModalTarea from './ModalTarea';

const Registrotareas = (props) => {
    return (
        <>
                <div class="btn-group">
                    <ModalTarea/>
                    <button type="button" className="btn btn-outline-primary ">{props.dat}</button>
                </div>    
   
                {/* <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis </li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul> */}

        </>
    );
}

export default Registrotareas;
