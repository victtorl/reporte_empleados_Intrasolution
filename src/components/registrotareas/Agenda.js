
import React, { useState, useEffect } from 'react';
import Calendar from "react-awesome-calendar";
import Registrotareas from './RegistroTareas';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getDataTaskCalendar } from '../../utils/webservices';



const Agenda = () => {

  const tasks = useSelector((state) => state.tasks)
  // const diaSelect = useSelector((state) => state.diaSelect)
  const datatareaSelect = useSelector((state) => state.datatareaSelect)


  const [dat, setdate] = useState('seleccione hora de inicio')


  const formatDat = (hour, day, month, year) => {
    const resto = hour % 1

    if (hour < 10) {
      if (resto === 0)
        return { hour: `${hour}:00 am`, day: day, month: month + 1, year: year }
      return { hour: `${Math.trunc(hour) + ':30 am'}`, day: day, month: month + 1, year: year }
    } else {
      if (resto === 0)
        return { hour: `${hour}:00 pm`, day: day, month: month + 1, year: year }
      return { hour: `${Math.trunc(hour) + ':30 pm'}`, day: day, month: month + 1, year: year }
    }

  }

  const formatDatMonthly = (day, month, year) => {
    if (day < 10) {
      day = `0${day}`
    }
    if (month < 10) {
      //el calendario me devuelve un mes antes cuando seleccionas cualquier mes,por ejemplo enero devuelve month 0
      month = `0${month + 1}`
    }
    return `${year}-${month}-${day}`

  }


  const cargarTarea = (date) => {
    const { hour, day, month, year } = date
    setdate(formatDat(hour, day, month, year).hour)
    console.log('verificando daylymode');
    console.log(date);
   
  }



  const capturarFechaPick = (date) => {
    const { day, month, year } = date
    const fechapickeada = formatDatMonthly(day, month, year)
    console.log('verificando modo :');
    console.log(date);
    store.dispatch({
      type: '@getdiaSelect',
      payload: fechapickeada
    })
    store.dispatch({
      type: '@muestrafechamodal',
      payload: fechapickeada
    })
    //poner en la hora inicial del modal la hora del sistema y el dia del sistema 
  }



  const calendar = React.createRef()

  useEffect(() => {
    // const details = calendar.current.getDetails();

  }, []);



  const [nrotarea, Setnrotarea] = useState('#')

  const alltareas = useSelector((state) => state.alltareas)
  const dataUserSesion = useSelector((state) => state.dataUserSesion)

  //LLENO LOS TRES ESTADOS Y ESCOJO EL QUE SE LLENE CON LA DATA ADECUADA PARA
  // INCIDENTE SI TIENE INCIDENTE ID PARA PASE SI TIENE PASE ID Y PARA OTRO SU TIENE SUBTIPOTAREA EN SU CASO

  const activeDelEdit = (ev) => {
    Setnrotarea(ev)
    //traer  la tarea numero 'ev' de alltareas
    const tareaRecuperada = alltareas[ev]

    console.log('#' + ev)
    console.log(tareaRecuperada)
   
    getDataTaskCalendar(tareaRecuperada.id)

    store.dispatch({
      type: '@pushidbd',
      payload: {
         idbd: tareaRecuperada.id,
      }
    })


const tipoactividadid =() => {
    if(datatareaSelect[0].act_tipo_actividad_id !==null){
      return datatareaSelect[0].act_tipo_actividad_id
    }else{
      return 0
    }
}
const subtipotareaid =() => {
  if(datatareaSelect[0].subtipo_tarea_id !==null){
    return datatareaSelect[0].subtipo_tarea_id
  }else{
    return 0
  }
}
const actividadid =() => {
  if(datatareaSelect[0].actividad_id !==null){
    return datatareaSelect[0].actividad_id
  }else{
    return 0
  }
}


    store.dispatch({
      type: '@pushdataEditDelete',
      payload: {
        id_bd: { id_bd:datatareaSelect[0].id },
        tipo_tarea_id: { tipo_tarea_id: datatareaSelect[0].tipo_tarea_id },
        tipo_actividad_id: { tipo_actividad_id: tipoactividadid() },
        subtipo_tarea_id: { subtipo_tarea_id:subtipotareaid() },
        actividad_id: { actividad_id: actividadid()},
        observacion: { observacion:  datatareaSelect[0].observacion },
        fecha_inicio: { hora_inicio:datatareaSelect[0].fecha_inicio },
        fecha_fin: { hora_fin: datatareaSelect[0].fecha_fin},
        responsable: { responsable: dataUserSesion.SC_USER_ID },

      }
    })
  
    //alertar si se pickeo un dia
    store.dispatch({
      type: '@setalertselectevent',
      payload: true
    })

  }


  return (
    <>
      <Registrotareas dat={dat} />

      <Calendar
        ref={calendar}
        onClickEvent={(event) => activeDelEdit(event)}
        onChange={(date) => capturarFechaPick(date)}
        onClickTimeLine={(date) => cargarTarea(date)}
        events={tasks}
      />
    </>



  );
}

export default Agenda;


