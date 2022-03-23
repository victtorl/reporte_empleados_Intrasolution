import axios from "axios";
import { store } from "../redux/store";
import { tratarTareas } from "./metodos";

export const getEmpleados = () => {
    const baseUrl = "https://app.safe2biz.com/intrasolution//ws/null/pr_movil_lista_empleado";
    const datax = {
        dato: 0
    }
    const params = new URLSearchParams(datax)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolution',
                userPassword: '09079763',
                systemRoot: 'safe2biz',
                'Content-Type': 'text/plain'
            },
        }
    )
        .then(data => {
            store.dispatch({
                type: '@getEmpleados',
                payload: data.data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}


export const getcomboSubtipoTarea = () => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/calendario_subtipo_tarea_combo";
    const datax = {
        dato: 0
    }
    const params = new URLSearchParams()
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'safe2biz',
                'Content-Type': 'text/plain'
            },
        },

    )
        .then(data => {
            store.dispatch({
                type: '@getcombosubtipotarea',
                payload: data.data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const getcomboPase = () => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/calendario_pase_combo";
    const datax = {
        sc_user_id:16
    }
    const params = new URLSearchParams(datax)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'safe2biz',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
    )
        .then(data => {
            store.dispatch({
                type: '@getcombopase',
                payload: data.data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const getcomboTipoTarea = () => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/tipo_tarea_combo";
    const datax = {
        dato:0
    }
    const params = new URLSearchParams(datax)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'safe2biz',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
    )
        .then(data => {
            store.dispatch({
                type: '@getcombotipotarea',
                payload: data.data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}


export const getcomboIncidencia = () => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/calendario_incidencia_combo";
    const datax = {
        sc_user_id:16
    }
    const params = new URLSearchParams(datax)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            
        }

    )
        .then(data => {
            store.dispatch({
                type: '@getcomboincidencia',
                payload: data.data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const getcomboPlandeAccion = () => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/calendario_planes_accion_combo";
    const datax = {
        sc_user_id:13
    }
    const params = new URLSearchParams(datax)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'guillermo.vergel@intrasolutiondesarrollo',
                userPassword: 'gv22384714',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            
        }

    )
        .then(data => {
            store.dispatch({
                type: '@getcomboplandeaccion',
                payload: data.data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const getallTareas = () => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tareas_horas";
    const datax = {
        usuario_id:16
    }
    const params = new URLSearchParams(datax)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            },   
        }
    )
        .then(data => {
            store.dispatch({
                type: '@getalltareas',
                 payload: data.data.data
            })
            console.log('tres datas');
            console.log(data.data.data);
            console.log(tratarTareas(data.data.data))
            store.dispatch({
                    type: '@settasks',
                    payload:[tratarTareas(data.data.data)]
                })
            
        })
        
        .catch(e => {
            console.log('el error es' + e);
        })

}

///registros

export const registroTarea = () => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tarea_horas_crud";
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: 1,
        subtipo_tarea:'',
        incidente_id:50107,
        pase_id:'',
        observacion:'Prueba web',
        fecha_inicio: '2022-03-16 19:30:00',
        fecha_fin: '2022-03-16 20:00:00',
        uea: 1,
        usuario_id:16
    }
    const params = new URLSearchParams(bodyform)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
    )
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const registroIncidencia = (tipo_tarea,incidente_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tarea_horas_crud";
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        incidente_id:incidente_id,
        observacion:observacion,
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin,
        uea: 1,
        usuario_id:usuario_id
    }
    const params = new URLSearchParams(bodyform)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log('el error es' + e);
        })



}

export const registroPase= (tipo_tarea,pase_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tarea_horas_crud";
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        pase_id:pase_id,
        observacion:observacion,
        fecha_inicio: fecha_inicio,
        fecha_fin:fecha_fin,
        uea: 1,
        usuario_id:usuario_id
    }
    const params = new URLSearchParams(bodyform)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
    )
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}


export const registroOtro = (tipo_tarea,subtipo_tarea,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tarea_horas_crud";
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        subtipo_tarea:subtipo_tarea,
        observacion:observacion,
        fecha_inicio: fecha_inicio,
        fecha_fin:fecha_fin,
        uea: 1,
        usuario_id:usuario_id
    }
    const params = new URLSearchParams(bodyform)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
    )
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}


export const registroPlanDeAccion = (tipo_tarea,subtipo_tarea,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tarea_horas_crud";
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        subtipo_tarea:subtipo_tarea,
        observacion:observacion,
        fecha_inicio: fecha_inicio,
        fecha_fin:fecha_fin,
        uea: 1,
        usuario_id:usuario_id
    }
    const params = new URLSearchParams(bodyform)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
    )
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log('el error es' + e);
        })

}
//EDICION DE TAREAS
export const edicionIncidencia = (tipo_tarea,idbd,incidente_id,observacion,fecha_inicio,fecha_fin) => {
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tarea_horas_crud";
    const bodyform = {
        type:2,
        id:idbd,
        tipo_tarea: tipo_tarea,
        incidente_id:incidente_id,
        observacion:observacion,
        fecha_inicio: fecha_inicio,
        fecha_fin: fecha_fin,
        uea: 1,
    }
    const params = new URLSearchParams(bodyform)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: 'jorge.felix@intrasolutiondesarrollo',
                userPassword: '09079763',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log('el error es' + e);
        })



}

export const getDataUsuario = async(name,password) => {
    const baseUrl = "https://app.safe2biz.com/intrasolution//ws/null/pr_ws_sc_user";
    const bodyform = {
        user_login:name,
        password:password,
    }
    const params = new URLSearchParams(bodyform)
  const respuesta= await axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${bodyform.user_login}@intrasolution`,
                userPassword: bodyform.password,
                systemRoot: 'safe2biz',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
    //mejor guardar el localstorage user y pw del ws
    
    await store.dispatch({
        type: '@dataUserSesion',
        payload: respuesta.data.data[0]
     })
  
      let nam=respuesta.data.data[0].USER_LOGIN
      let pas=respuesta.data.data[0].password
     

    window.localStorage.setItem(
        'accesws',JSON.stringify({namews:nam,passws:pas})
    )    
      
     
    
        return respuesta
        


}

