import {createStore} from 'redux'
import {getEmpleadoReducer} from '../redux/reducers/empleadosReducer'
import { empF } from '../services/empleadosFake'

const initialState ={
    empleados:[],
    empleadoSelect:[],
    statusLog:false
}

export const store =createStore(
    getEmpleadoReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)   