import React,{useEffect,useState} from 'react';
import EstructuraTarea from './EstructuraTarea'
import { useSelector } from 'react-redux';
import { store } from '../../redux/store';




const ModalTarea = (props) => {



const diaSelectmuestramodal = useSelector((state) => state.diaSelectmuestramodal)

const [propevents,Setpropevents]=useState(true)


const reordenarFechabtnnuevatarea = (v) => {
    let ff = v.toLocaleString('es-PE')
    let fff = ff.split(' ')
    let g = fff[0].split('/')
    let dia = g[0]
    let mes = g[1]
    let anio = g[2]
    dia <= 9 ? dia = `0${dia}` : dia = dia
    mes <= 9 ? mes = `0${mes}` : mes = mes
    
      return `${diaSelectmuestramodal} ${fff[1]}`
}




const reiniciarhoras =() => {
    
  Setpropevents(!propevents)
    console.log('setpropevvents'+propevents)
    //reiniciar el dataregistro
    store.dispatch({
        type: '@pushhorainicio',
        payload: {
            hora_inicio: (reordenarFechabtnnuevatarea((new Date()).toLocaleString('es-PE')))
        }
    })
    console.log(reordenarFechabtnnuevatarea((new Date()).toLocaleString('es-PE')));
    store.dispatch({
        type: '@pushhorafin',
        payload: {
            hora_fin: (reordenarFechabtnnuevatarea((new Date()).toLocaleString('es-PE')))
        }
    })
}





    return (
        <div>
           

            <a  className="btn btn-outline-success" data-toggle="modal" onClick={reiniciarhoras} data-target="#exampleModalScrollable">
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
                          <EstructuraTarea useef={propevents}/>           
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={registrarTarea}>X</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>



    );
}

export default ModalTarea;


