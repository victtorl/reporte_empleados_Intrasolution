import axios from "axios";
import { store } from "../redux/store";
import { tratarTareas } from "./metodos";

const dominio='https://app.safe2biz.com'
const emaildominio='@intrasolution'
const systemrootdominio='safe2biz'

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
    const params = new URLSearchParams()
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
        //    console.log(data.data.data);
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

export const registroTarea = () => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
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
                userLogin: `${getInfoLocal().name}${emaildominio}`,
                userPassword: getInfoLocal().pass,
                systemRoot: `${systemrootdominio}`,
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

export const registroIncidencia = (tipo_tarea,incidente_id,accion_correctiva_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        incidente_id:incidente_id,
        accion_correctiva_id:accion_correctiva_id,
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
            // console.log(data);
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

export const registroPase= (tipo_tarea,pase_id,accion_correctiva_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = `${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        pase_id:pase_id,
        accion_correctiva_id:accion_correctiva_id,
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
        .catch(e => {
            console.log('el error es' + e);
        })

}





export const registroOtro = (tipo_tarea,subtipo_tarea,accion_correctiva_id, observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = `${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        subtipo_tarea:subtipo_tarea,
        accion_correctiva_id:accion_correctiva_id,
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
        .catch(e => {
            console.log('el error es' + e);
        })

}


export const registroPlanDeAccion = (tipo_tarea,subtipo_tarea,accion_correctiva_id, observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        subtipo_tarea:subtipo_tarea,
        accion_correctiva_id:accion_correctiva_id,
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
        .catch(e => {
            console.log('el error es' + e);
        })

}

export const registroReunion = (tipo_tarea,subtipo_tarea,accion_correctiva_id, observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:1,
        id:1,
        tipo_tarea: tipo_tarea,
        subtipo_tarea:subtipo_tarea,
        accion_correctiva_id:accion_correctiva_id,
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
        .catch(e => {
            console.log('el error es' + e);
        })

}
//EDICION 

export const edicionIncidencia = (tipo_tarea,idbd,incidente_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = `${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:2,
        id:idbd,
        tipo_tarea: tipo_tarea,
        incidente_id:incidente_id,
        accion_correctiva_id:'',
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


export const edicionPase = (tipo_tarea,idbd,pase_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:2,
        id:idbd,
        tipo_tarea: tipo_tarea,
        pase_id:pase_id,
        accion_correctiva_id:'',
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


export const edicionOtro = (tipo_tarea,idbd,subtipo_tarea_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl = `${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:2,
        id:idbd,
        tipo_tarea: tipo_tarea,
        subtipo_tarea_id:subtipo_tarea_id,
        accion_correctiva_id:'',
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


export const edicionPlanAccion = (tipo_tarea,idbd,pase_id,observacion,fecha_inicio,fecha_fin,usuario_id) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:2,
        id:idbd,
        tipo_tarea: tipo_tarea,
        pase_id:pase_id,
        accion_correctiva_id:'',
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

export const eliminacionIncidencia = (idbd) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
    const bodyform = {
        type:3,
        id:idbd,
      
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
export const eliminacionPase = (idbd) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
                    
    const bodyform = {
        type:3,
        id:idbd,
        // tipo_tarea: tipo_tarea,
        // incidente_id:incidente_id,
        // observacion:observacion,
        // fecha_inicio: fecha_inicio,
        // fecha_fin: fecha_fin,
        // uea: 1,
        // usuario_id:usuario_id
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
export const eliminacionOtro = (idbd) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
                        
    const bodyform = {
        type:3,
        id:idbd,
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

export const eliminacionPlanAccion = (idbd) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
                        
    const bodyform = {
        type:3,
        id:idbd,
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

export const eliminacionReunion = (idbd) => {
    const baseUrl =`${dominio}/intrasolution/ws/null/pr_ws_tarea_horas_crud`;
                        
    const bodyform = {
        type:3,
        id:idbd,
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
    const baseUrl = 'http://179.43.81.213:8989/intrasolution/ws/null/calendario_actividad_combo';
    const bodyform = {
        sc_user_id:13,
    
    }
    const params = new URLSearchParams(bodyform)
  const respuesta= await axios.post(baseUrl,
        params,
        {
            headers: {
                
                userLogin: 'guillermo.vergel@intrasolution',
                userPassword:'gv22384714',
                systemRoot: 'intrasolution',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },

    )
    .then(data => {
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

