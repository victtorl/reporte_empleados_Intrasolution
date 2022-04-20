import axios from "axios";
import { store } from "../redux/store";
import { tratarTareas } from "./metodos";

const dominio='http://179.43.81.213:8989'
const emaildominio='@intrasolution'
const systemrootdominio='intrasolution'

export const getInfoLocal=() => {
    const parametrosAcces = window.localStorage.getItem('accesws')
    const par=JSON.parse(parametrosAcces)
    
    
    let dataLocal={
        name:par.namews,
        pass:par.passws,
        idus:par.idws,
        token:par.tokenws,
    }
    // console.log(dataLocal)
    return dataLocal
}


export const getEmpleados = () => {
    const baseUrl = `${dominio}/intrasolution//ws/null/pr_movil_lista_empleado`;
    const datax = {
        dato: 0
    }
    const params = new URLSearchParams(datax)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
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

export const getcomboTipoTarea = async() => {
    const baseUrl = `${dominio}/intrasolution/ws/null/tipo_tarea_combo`;
   
    const params = new URLSearchParams()
  let respuesta= await  axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                // flagLogin:1,
                // sessionString:'OBG2MB4FQGIU9AQZEMSFSXMCZC2SK32G',
                'Content-Type': 'application/x-www-form-urlencoded',
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

    return respuesta
}

export const getcomboSubtipoTarea =async () => {
    const baseUrl = `${dominio}/intrasolution/ws/null/calendario_subtipo_tarea_combo`;
    const datax = {
        dato: 0
    }
    const params = new URLSearchParams(datax)
    let respuesta=  await  axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
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
    return respuesta
}

export const getcomboPase = async() => {
    const baseUrl = `${dominio}/intrasolution/ws/null/calendario_pase_combo`;
    const datax = {
        sc_user_id:getInfoLocal().idus
    }
    const params = new URLSearchParams(datax)
    let respuesta=  await    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
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
    return respuesta

}


export const getcomboIncidencia =async () => {
    
    const baseUrl = `${dominio}/intrasolution/ws/null/calendario_incidencia_combo`;
    const bodyform = {
        sc_user_id:getInfoLocal().idus
    }
    const params = new URLSearchParams(bodyform)
    let respuesta=  await    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
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
        return respuesta

}

export const getcomboPlandeAccion = async() => {
    const baseUrl = `${dominio}/intrasolution/ws/null/calendario_planes_accion_combo`;
    const datax = {
        sc_user_id:getInfoLocal().idus
    }
    const params = new URLSearchParams(datax)
    let respuesta=  await   axios.post(baseUrl,
        params, 
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
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
    return respuesta
}

//NUEVO
export const getTipoActividad = async() => {
    const baseUrl = `${dominio}/intrasolution/ws/null/calendario_tipo_actividad`;
    const bodyform = {
        dato:0,
    
    }
    const params = new URLSearchParams(bodyform)
    let respuesta=  await   axios.post(baseUrl,
        params, 
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            
        }

    )
        .then(data => {
            console.log(data)
            store.dispatch({
                type: '@gettipoactividad',
                payload: data.data.data
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })
    return respuesta
}

export const getallTareas = async() => {
    const baseUrl = `${dominio}/intrasolution/ws/null/pr_ws_tareas_horas`  
                      
    const datax = {
        usuario_id:getInfoLocal().idus
    }
    const params = new URLSearchParams(datax)
    let respuesta=  await    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },   
        }
    )
        .then(data => {
            store.dispatch({
                type: '@getalltareas',
                 payload: data.data.data
            })
           console.log(data.data.data);
            store.dispatch({
                    type: '@settasks',
                    payload:[tratarTareas(data.data.data)]
                })
            
        })
        
        .catch(e => {
            // console.log('el error es' + e);
        })
        return respuesta

}

///REGISTRO  

export const registroTodoTareas = (tipo_tarea_id,subtipo_tarea_id,actividad_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    
    const bodyform = {
        type:1,
        id:0,
        tipo_tarea_id: tipo_tarea_id,
        tipo_actividad_id:0,
        subtipo_tarea_id:subtipo_tarea_id,
        actividad_id:actividad_id,
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
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
        .then(data => {
            console.log(data);
            getallTareas()
        })
        .then(
            store.dispatch({
                type:'@reiniciardataRegistro',
            }) 
        )
        .catch(e => {
            console.log('el error es' + e);
        })

        

}

//EDICION 

export const wsedicionTarea = (idbd,tipo_tarea_id,tipo_actividad_id,subtipo_tarea_id,actividad_id, observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = `${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:2,
        id:idbd,
        tipo_tarea_id: tipo_tarea_id,
        tipo_actividad_id:tipo_actividad_id,
        subtipo_tarea_id:subtipo_tarea_id,
        actividad_id:actividad_id,
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
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
        .then(data => {
            console.log(data);
            getallTareas()
            store.dispatch({
                type: '@setalertselectevent',
                payload: false
            })
        })
        .catch(e => {
            console.log('el error es' + e);
        })
}


//ELIMINACION
export const wseliminarTarea = (idbd) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:3,
        id:idbd
      
    }
    const params = new URLSearchParams(bodyform)
    axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
        .then(data => {
            console.log(data);
            getallTareas()
            store.dispatch({
                type: '@setalertselectevent',
                payload: false
            })

        })
        .catch(e => {
            console.log('el error es' + e);
        })

}


export const getDataUsuario = async(usuario,passs) => {
    const baseUrl = `${dominio}/intrasolution//ws/null/pr_ws_sc_user`;
    const bodyform = {
        user_login:usuario,
        password:passs,
    }
    const params = new URLSearchParams(bodyform)
  const respuesta= await axios.post(baseUrl,
        params,
        {
            headers: {
                
                userLogin: `${usuario}${emaildominio}`,
                userPassword:passs,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
    //mejor guardar el localstorage user y pw del ws
    store.dispatch({
        type: '@dataUserSesion',
        payload: {
            SC_USER_ID: respuesta.data.data[0].SC_USER_ID,
            USER_LOGIN: respuesta.data.data[0].USER_LOGIN,
            usuario: respuesta.data.data[0].usuario,
            password: respuesta.data.data[0].password,
            token:respuesta.data.data[0].token
        }
     })
      
    return respuesta

}

export const getComboallTipoTareas = async() => {
    const baseUrl = `${dominio}/intrasolution/ws/null/calendario_actividad_combos`;
    const bodyform = {
        sc_user_id:getInfoLocal().idus,
    
    }
    const params = new URLSearchParams(bodyform)
  const respuesta= await axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
    .then(data => {
        console.log('todos los combos')
        console.log(data);
        store.dispatch({
            type: '@getallcombos',
            payload: data.data.data
        })
    })
    .catch(e => {
        console.log('el error es' + e);
    })
    console.log(respuesta);
      
    return respuesta

}

//trer la data de una tarea elegida en el calendario
export const getDataTaskCalendar = async(x) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/actividad_hora`;
    
    const bodyform = {
        inc_incidencia_hh_id:x,
    
    }
    const params = new URLSearchParams(bodyform)
  const respuesta= await axios.post(baseUrl,
        params,
        {
            headers: {
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
    .then(data => {
        console.log('todos los combos')
        console.log(data.data.data);
        store.dispatch({
            type: '@getdatatareaSelect',
            payload: data.data.data
        })
        
    })
    .catch(e => {
        console.log('el error es' + e);
    })
    console.log(respuesta);
      
    return respuesta

}


