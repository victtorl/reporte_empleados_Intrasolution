import { createStore } from 'redux'
import { getEmpleadoReducer } from '../redux/reducers/empleadosReducer'
import { empF } from '../services/empleadosFake'

import { reordenarFecha } from '../components/registrotareas/Calendario'


let fecha = new Date()


const initialState = {
    empleados: [],
    alltareas:[],
    empleadoSelect: [],
    dataUserSesion: [],
    statusLog: false,
    fechaSelect: reordenarFecha(fecha),
    diaSelect: [],
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
        tipo_tarea:'',
        segundotipo_tarea:'',
        hora_inicio:{hora_inicio:reordenarFecha(fecha)},
        hora_fin:{hora_fin:reordenarFecha(fecha)},
        observacion:'',
        responsable:''
    },
    
}

export const store = createStore(
    getEmpleadoReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)   