import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import { store } from '../../redux/store';
import { getEmpleados } from '../../utils/webservices';

const TablaEmpleados = () => {

const employes = useSelector((state) => state.empleados)   

const [detalle,SetDetalle]=useState({})

useEffect(()=>{
    getEmpleados()

},[])

const Mostrar =(u)=>{   
    store.dispatch({
        type:'@getEmpleadoId',
        payload:u
    })
} 
    return (
        <div>
           <div className="content-wrapper">
  <section className="content contenido-calendario-section">
          <h1>DataTable</h1>
          <Widget detalle={detalle} />
    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Responsive Hover Table</h3>
                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{ width: 150 }}>
                                                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0">
                                        
                                        <table className="table table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Codigo</th>
                                                    <th>Email</th>
                                                    <th>Celular</th>
                                                    <th>Nombre completo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                     {
                                                    employes.map((u)=>
                                                <tr key={u.fb_empleado_id} onClick={()=>Mostrar(u)}>
                                                    <td>{u.fb_empleado_id}</td>
                                                    <td>{u.codigo}</td>
                                                    <td>{u.email}</td>
                                                    <td><span className="tag tag-success">{u.celular}</span></td>
                                                    <td>{u.nombreCompleto}</td>
                                                </tr>
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

    </div>
  </section>
</div>

        </div>


    );
}

export default TablaEmpleados;




  