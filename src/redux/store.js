import {createStore} from 'redux'
import {getEmpleadoReducer} from '../redux/reducers/empleadosReducer'
import { empF } from '../services/empleadosFake'

import { reordenarFecha } from '../components/registrotareas/Calendario'


let fecha= new Date()


const initialState ={
    empleados:[],
    empleadoSelect:[],
    dataUserSesion:[],
    statusLog:false,
    fechaSelect:reordenarFecha(fecha),
    diaSelect:[]    
}

export const store =createStore(
    getEmpleadoReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)   