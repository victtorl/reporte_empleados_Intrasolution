import { createStore } from 'redux'
import { getEmpleadoReducer } from '../redux/reducers/empleadosReducer'
import { empF } from '../services/empleadosFake'

import { reordenarFecha,reordenarFechaparamostrarmodal } from '../components/registrotareas/Calendario'


let fecha = new Date()


const initialState = {
    empleados: [],
    alltareas:[],
    empleadoSelect: [],
    dataUserSesion: [],
    statusLog: false,
    fechaSelect: reordenarFecha(fecha),
    diaSelect: [],
    diaSelectmuestramodal:reordenarFechaparamostrarmodal(fecha),
    events: [
        {
            id: 2,
            color: '#1ccb9e',
            from: '2022-03-08T13:00:00+00:00',
            to: '2022-03-08T14:00:00+00:00',
            title: 'Incidencia con bnb'
        }
    ],
    horaInFn: [
        {
            horaInicio: '0:00',
            horaFin: '0:00'
        }
    ],
    dataTarea: [],
    nuevaTarea: [],
    tasks: [],
    combotipotarea: [],
    combosubtipotarea: [],
    combopase: [],
    comboincid: [],
    comboplandeaccion:[],
    dataregistro:{
        tipo_tarea:{tipo_tarea:''},
        segundotipo_tarea:{subtipo_tarea_id:''},
        accion_correctiva_id:{accion_correctiva_id:''},
        hora_inicio:{hora_inicio:reordenarFecha(fecha)},
        hora_fin:{hora_fin:reordenarFecha(fecha)},
        observacion:{observacion:''},
        responsable:{responsable:''}
    },
    dataEditDelete:{
        id_bd:{id_bd:''},
        tipo_tarea:{tipo_tarea:''},
        segundotipo_tarea:{subtipo_tarea_id:''},
        accion_correctiva_id:{accion_correctiva_id:''},
        hora_inicio:{hora_inicio:''},
        hora_fin:{hora_fin:''},
        observacion:{observacion:''},
        responsable:{responsable:''},
        nombre_tipo_tarea:{nombre_tipo_tarea:''}

    },
    dataEditDeleteInc:{
        id_bd:{id_bd:''},
        tipo_tarea:{tipo_tarea:''},
        segundotipo_tarea:{incidente_id:''},
        accion_correctiva_id:{accion_correctiva_id:''},
        hora_inicio:{hora_inicio:''},
        hora_fin:{hora_fin:''},
        observacion:{observacion:''},
        responsable:{responsable:''},
        nombre_tipo_tarea:{nombre_tipo_tarea:''}

    },
    alertselectevent:false,
    newacces:{}
    
}

export const store = createStore(
    getEmpleadoReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)   