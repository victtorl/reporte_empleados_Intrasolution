
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
    case '@pushtipo_tarea':
      return {
        ...state,
        // dataregistro: state.dataregistro.tipo_tarea = action.payload
        dataregistro: Object.assign(state.dataregistro, { tipo_tarea: action.payload })
      }
    case '@pushresponsable':
      return {
        ...state,
        // dataregistro: state.dataregistro.tipo_tarea = action.payload
        dataregistro: Object.assign(state.dataregistro, { responsable: action.payload })
      }
    case '@pushsegundotipo_tarea':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { segundotipo_tarea: action.payload })
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
        dataregistro: Object.assign(state.dataregistro, { hora_inicio: action.payload })
      }
    case '@pushhorafin':
      return {
        ...state,
        dataregistro: Object.assign(state.dataregistro, { hora_fin: action.payload })
      }


    // EDICION DE TAREAS CON SUBTIPO_TAREA_ID
    case '@pushdataEditDelete':
      return {
        ...state,
        dataEditDelete: action.payload
      }

    case '@pushtipo_tareaED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { tipo_tarea: action.payload })
      }
    case '@pushresponsableED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { responsable: action.payload })
      }
    case '@pushobservacionED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { observacion: action.payload })
      }
    case '@pushsegundotipo_tareaED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { segundotipo_tarea: action.payload })
      }
    case '@pushhorainicioED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { hora_inicio: action.payload })
      }
    case '@pushhorafinED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { hora_fin: action.payload })
      }

    case '@pushnombretipotareaED':
      return {
        ...state,
        dataEditDelete: Object.assign(state.dataEditDelete, { nombre_tipo_tarea: action.payload })
      }

    // edicion de tareas con INCIDENTE_ID
    case '@pushdataEditDeleteInc':
      return {
        ...state,
        dataEditDeleteInc: action.payload
      }


    case '@pushtipo_tareaEDInc':
      return {
        ...state,
        dataEditDeleteInc: Object.assign(state.dataEditDeleteInc, { tipo_tarea: action.payload })
      }
    case '@pushresponsableEDInc':
      return {
        ...state,
        dataEditDeleteInc: Object.assign(state.dataEditDeleteInc, { responsable: action.payload })
      }
    case '@pushobservacionEDInc':
      return {
        ...state,
        dataEditDeleteInc: Object.assign(state.dataEditDeleteInc, { observacion: action.payload })
      }
    case '@pushsegundotipo_tareaEDInc':
      return {
        ...state,
        dataEditDeleteInc: Object.assign(state.dataEditDeleteInc, { segundotipo_tarea: action.payload })
      }
    case '@pushhorainicioEDInc':
      return {
        ...state,
        dataEditDeleteInc: Object.assign(state.dataEditDeleteInc, { hora_inicio: action.payload })
      }
    case '@pushhorafinEDInc':
      return {
        ...state,
        dataEditDeleteInc: Object.assign(state.dataEditDeleteInc, { hora_fin: action.payload })
      }

    case '@pushnombretipotareaEDInc':
      return {
        ...state,
        dataEditDeleteInc: Object.assign(state.dataEditDeleteInc, { nombre_tipo_tarea: action.payload })
      }
    //fin incidente edit


    // edicion de tareas con PASE_ID
    case '@pushdataEditDeletePase':
      return {
        ...state,
        dataEditDeletePase: action.payload
      }


    case '@pushtipo_tareaEDPase':
      return {
        ...state,
        dataEditDeletePase: Object.assign(state.dataEditDeletePase, { tipo_tarea: action.payload })
      }
    case '@pushresponsableEDPase':
      return {
        ...state,
        dataEditDeletePase: Object.assign(state.dataEditDeletePase, { responsable: action.payload })
      }
    case '@pushobservacionEDPase':
      return {
        ...state,
        dataEditDeletePase: Object.assign(state.dataEditDeletePase, { observacion: action.payload })
      }
    case '@pushsegundotipo_tareaEDPase':
      return {
        ...state,
        dataEditDeletePase: Object.assign(state.dataEditDeletePase, { segundotipo_tarea: action.payload })
      }
    case '@pushhorainicioEDPase':
      return {
        ...state,
        dataEditDeletePase: Object.assign(state.dataEditDeletePase, { hora_inicio: action.payload })
      }
    case '@pushhorafinEDPase':
      return {
        ...state,
        dataEditDeletePase: Object.assign(state.dataEditDeletePase, { hora_fin: action.payload })
      }

    case '@pushnombretipotareaEDPase':
      return {
        ...state,
        dataEditDeletePase: Object.assign(state.dataEditDeletePase, { nombre_tipo_tarea: action.payload })
      }
    //fin pase edit


    // edicion de tareas con ACCION CORRECTIVA
    case '@pushdataEditDeleteAccion':
      return {
        ...state,
        dataEditDeleteAccion: action.payload
      }

    case '@pushtipo_tareaEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { tipo_tarea: action.payload })
      }
    case '@pushresponsableEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { responsable: action.payload })
      }
    case '@pushobservacionEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { observacion: action.payload })
      }
    case '@pushaccion_correctiva_idEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { accion_correctiva_id: action.payload })
      }
    case '@pushsegundotipo_tareaEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { segundotipo_tarea: action.payload })
      }
    case '@pushhorainicioEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { hora_inicio: action.payload })
      }
    case '@pushhorafinEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { hora_fin: action.payload })
      }

    case '@pushnombretipotareaEDAccion':
      return {
        ...state,
        dataEditDeleteAccion: Object.assign(state.dataEditDeleteAccion, { nombre_tipo_tarea: action.payload })
      }
    //fin  accion correctiva edit



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




