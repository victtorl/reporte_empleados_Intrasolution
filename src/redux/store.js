import {createStore} from 'redux'
import {getEmpleadoReducer} from '../redux/reducers/empleadosReducer'
import { empF } from '../services/empleadosFake'

const initialState ={
    empleados:empF,
    empleadoSelect:[]
}

export const store =createStore(
    getEmpleadoReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)   