
export const getEmpleadoReducer = (state, action) => {
  switch (action.type) {
    case '@getEmpleados':
      return {
        ...state,
        empleados: action.payload
      }
      
      case '@getdatatareaSelect':
      return {
        ...state,
        datatareaSelect: action.payload
      }
    case '@getEmpleadoId':
      return {
        ...state,
        empleadoSelect: action.payload
      }
    case '@muestrafechamodal':
      return {
        ...state,
        diaSelectmuestramodal: action.payload
      }
    case '@getalltareas':
      return {
        ...state,
        alltareas: action.payload
      }
    case '@getallcombos':
      return {
        ...state,
        allcombos: action.payload
      }
    case '@gettipoactividad':
      return {
        ...state,
        tipoactividad: action.payload
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
    case '@agregarTarea':
      return {
        ...state,
        events: state.events.concat(action.payload)
      }
    case '@gethoraInFn':
      return {
        ...state,
        horaInFn: action.payload
      }
    case '@setdatatarea':
      return {
        ...state,
        dataTarea: action.payload
      }
    case '@nuevatarea':
      return {
        ...state,
        nuevaTarea: action.payload
      }
    case '@settasks':
      return {
        ...state,
        tasks: action.payload[0]
      }
    case '@addtask':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
      }
    case '@getcombosubtipotarea':
      return {
        ...state,
        combosubtipotarea: action.payload
      }
    case '@getcombopase':
      return {
        ...state,
        combopase: action.payload
      }
    case '@getcomboincidencia':
      return {
        ...state,
        comboincid: action.payload
      }
    case '@getcombotipotarea':
      return {
        ...state,
        combotipotarea: action.payload
      }
    case '@getcomboplandeaccion':
      return {
        ...state,
        comboplandeaccion: action.payload
      }

    // TYPES PARA EL REGISTRO DE TAREAS
    case '@pushidbd':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { idbd: action.payload })
      }
    case '@pushtipo_tarea':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { tipo_tarea_id: action.payload })
      }
    case '@pushresponsable':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { responsable: action.payload })
      }
    case '@pushsubtipo_tarea':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { subtipo_tarea_id: action.payload })
      }
    case '@pushtipo_actividad':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { tipo_actividad_id: action.payload })
      }
    case '@pushactividad':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { actividad_id: action.payload })
      }
    case '@pushaccion_correctiva_id':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { accion_correctiva_id: action.payload })
      }
    case '@pushobservacion':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { observacion: action.payload })
      }
    case '@pushhorainicio':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { fecha_inicio: action.payload })
      }
    case '@pushhorafin':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { fecha_fin: action.payload })
      }


    // EDICION DE TAREAS 
    case '@pushdataEditDelete':
      return {
        ...state,
        dataEditDelete: action.payload
      }

    case '@pushtipo_tareaED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { tipo_tarea_id: action.payload })
      }
    case '@pushresponsableED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { responsable: action.payload })
      }
      case '@pushsubtipo_tareaED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { subtipo_tarea_id: action.payload })
      }
      case '@pushactividadED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { actividad_id: action.payload })
      }
      case '@pushtipo_actividadED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { tipo_actividad_id: action.payload })
      }
    case '@pushobservacionED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { observacion: action.payload })
      }

    case '@pushhorainicioED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { fecha_inicio: action.payload })
      }
    case '@pushhorafinED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { fecha_fin: action.payload })
      }


  


    case '@setalertselectevent':
      return {
        ...state,
        alertselectevent: action.payload
      }
    case '@setnewacces':
      return {
        ...state,
        newacces: action.payload
      }
    case '@reiniciardataRegistro':
      return {
        ...state,
        dataregistro: state.dataregistroInit
      }
  }

  return state
}




