import React from 'react';

import { useSelector } from 'react-redux'

const Widget = () => {
    const empleado = useSelector((state) => state.empleadoSelect)
    return (
        <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                Ver informacion completa
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle">{empleado.nombreCompleto}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                           
                               <h6>Id:{empleado.fb_empleado_id}</h6>
                               <h6>Codigo:{empleado.codigo}</h6>
                               <h6>Numero_documento:{empleado.numero_documento}</h6>
                               <h6>RUC:{empleado.ruc_empresa}</h6>
                               <h6>Ap.paterno:{empleado.apellido_paterno}</h6>
                               <h6>Ap.materno:{empleado.apellido_materno}</h6>
                               <h6>Nombre:{empleado.nombre}</h6>
                               <h6>NombreCompleto:{empleado.nombreCompleto}</h6>
                               <h6>Direccion{empleado.direccion}</h6>
                               <h6>Telefono:{empleado.telefono}</h6>
                               <h6>Celular:{empleado.celular}</h6>
                               <h6>Codigo_compañia:{empleado.codigo_compania}</h6>
                               <h6>Codigo_localidad:{empleado.cod_localidad}</h6>
                               <h6>Fb_area_id:{empleado.fb_area_id}</h6>
                               <h6>Area_Codigo:{empleado.area_codigo}</h6>
                               <h6>Area_Nombre:{empleado.area_nombre}</h6>
                               <h6>clase_trabajador:{empleado.clase_trabajador}</h6>
                               <h6>fb_cargo_id:{empleado.fb_cargo_id}</h6>
                               <h6>cargo_nombre:{empleado.cargo_nombre}</h6>
                               <h6>fb_uea_pe_id:{empleado.fb_uea_pe_id}</h6>
                               <h6>email:{empleado.email}</h6>
                               <h6>fecha_baja:{empleado.fecha_baja}</h6>
                               <h6>tipo_documento:{empleado.tipo_documento}</h6>
                               <h6>is_deleted:{empleado.is_deleted}</h6>
                               <h6>created:{empleado.created}</h6>
                               <h6>fecha_nacimiento:{empleado.fecha_nacimiento}</h6>
                               <h6>fecha_salida:{empleado.fecha_salida}</h6>
                               <h6>cargo_codig:{empleado.cargo_codigo}</h6>
                               <h6>id_Carga:{empleado.id_Carga}</h6>
                               <h6>seguro_social:{empleado.seguro_social}</h6>
                               <h6>ruc_natural:{empleado.ruc_natural}</h6>
                               <h6>constancia_alta_temprana:{empleado.constancia_alta_temprana}</h6>
                               <h6>echa_ingres:{empleado.fecha_ingreso}</h6>
                               <h6>sexo:{empleado.sexo}</h6>
                               <h6>estado:{empleado.estado_civil}</h6>
                               <h6>created_by:{empleado.created_by}</h6>
                               <h6>updated_by:{empleado.updated_by}</h6>
                               <h6>updated:{empleado.updated}</h6>
                               <h6>owner_id:{empleado.owner_id}</h6>
                               <h6>fb_puesto_trabajo_id:{empleado.fb_puesto_trabajo_id}</h6>
                               <h6>g_rol_empresa_id:{empleado.g_rol_empresa_id}</h6>
                               <h6>fb_empresa_especializada_id:{empleado.fb_empresa_especializada_id}</h6>
                               <h6>estado_civil:{empleado.estado_civil}</h6>
                               <h6>puesto_trabajo_codig:{empleado.puesto_trabajo_codigo}</h6>
                               <h6>puesto_trabajo_nombre:{empleado.puesto_trabajo_nombre}</h6>
                               <h6>foto:{empleado.foto}</h6>
                               <h6>archiv:{empleado.archivo}</h6>
                               <h6>email_personal:{empleado.email_personal}</h6>
                               <h6>telefono_casa:{empleado.telefono_casa}</h6>
                               <h6>nombre_contacto:{empleado.nombre_contacto}</h6>
                               <h6>telefono_contacto:{empleado.telefono_contacto}</h6>
                                        
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

export default Widget;
