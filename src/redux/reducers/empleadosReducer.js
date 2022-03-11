
export const getEmpleadoReducer = (state, action) => {
  switch (action.type) {
    case '@getEmpleados':
      return {
        ...state,
        empleados: action.payload
      }
    case '@getEmpleadoId':
      return {
        ...state,
        empleadoSelect: action.payload

      }
    case '@statusLogin':
      return {
        ...state,
        statusLog: action.payload

      }
    case '@dataUserSesion':
      return {
        ...state,
        dataUserSesion: action.payload
      }
    case '@getfechaSelect':
      return {
        ...state,
        fechaSelect: action.payload
      }
    case '@getdiaSelect':
      return {
        ...state,
        diaSelect: action.payload
      }
  }
  return state
}




