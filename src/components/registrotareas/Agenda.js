
import React, { useState, useEffect } from 'react';

import Calendar from "react-awesome-calendar";

import Registrotareas from './RegistroTareas';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
import ModalTarea from './ModalTarea';

export const events = [{
    id: 1,
    color: '#fd3153',
    from: '2022-03-08T13:00:00+00:00',
    to: '2022-03-08T14:00:00+00:00',
    title: 'alguna tarea'

}, {
    id: 2,
    color: '#1ccb9e',
    from: '2022-03-08T13:00:00+00:00',
    to: '2022-03-08T14:00:00+00:00',
    title: 'Incidencia con bnb'
}, {
    id: 3,
    color: '#3694DF',
    from: '2022-03-08T13:00:00+00:00',
    to: '2022-03-08T20:00:00+00:00',
    title: 'This is also another event'
}]

const Agenda = () => {
    
    const tasks = useSelector((state) => state.tasks)
    
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

    const formatDatMonthly = ( day, month, year) => {
          if (day<10) {
            day=`0${day}`
          }
          if(month<10){
            //el calendario me devuelve un mes antes cuando seleccionas cualquier mes ejemplo enero devuelve month 0
            month=`0${month+1}`
          } 
        //   console.log(`${year}-${month}-${day}`)
          return  `${year}-${month}-${day}`
  

    }


    const cargarTarea = (date) => {
        const { hour, day, month, year } = date
        setdate(formatDat(hour, day, month, year).hour)
        console.log('verificando daylymode');
        console.log(date);
        // store.dispatch({
        //     type: '@getdiaSelect',
        //     payload: date
        // })

    }

    const capturarFechaPick =(date) => {
        const { day, month, year } = date
       const fechapickeada= formatDatMonthly(day,month,year)
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
      

    }



    const calendar = React.createRef()

    useEffect(() => {
        const details = calendar.current.getDetails();

    }, []);



const [nrotarea,Setnrotarea]=useState('#')

const alltareas = useSelector((state) => state.alltareas) 
const dataUserSesion = useSelector((state) => state.dataUserSesion)   

    const activeDelEdit=(ev)=>{
        Setnrotarea(ev)
        //traer  la tarea numero 'ev' de alltareas
        const tareaRecuperada=alltareas[ev]

        console.log('#'+ev)
        console.log(tareaRecuperada)
        //setear el estado de dataEditDelete
        store.dispatch({
            type:'@pushdataEditDeleteInc',
            payload:{
            id_bd:{id_bd:tareaRecuperada.id},   
            tipo_tarea:{tipo_tarea:tareaRecuperada.tipo_tarea_id},
            segundotipo_tarea:{incidente_id:tareaRecuperada.incidencia_id},
            hora_inicio:{hora_inicio:tareaRecuperada.hora_inicio},
            hora_fin:{hora_fin:tareaRecuperada.hora_fin},
            observacion:{observacion:tareaRecuperada.observacion},
            responsable:{responsable:dataUserSesion.SC_USER_ID},
            nombre_tipo_tarea:{nombre_tipo_tarea:tareaRecuperada.nombre_tipo_tarea}

            
            }
          })

          store.dispatch({
            type:'@pushdataEditDelete',
            payload:{
            id_bd:{id_bd:tareaRecuperada.id},   
            tipo_tarea:{tipo_tarea:tareaRecuperada.tipo_tarea_id},
            segundotipo_tarea:{subtipo_tarea_id:tareaRecuperada.subtipo_tarea_id},
            hora_inicio:{hora_inicio:tareaRecuperada.hora_inicio},
            hora_fin:{hora_fin:tareaRecuperada.hora_fin},
            observacion:{observacion:tareaRecuperada.observacion},
            responsable:{responsable:dataUserSesion.SC_USER_ID},
            nombre_tipo_tarea:{nombre_tipo_tarea:tareaRecuperada.nombre_tipo_tarea}

            }
          })

        //alertar si se pickeo un dia
        store.dispatch({
        type: '@setalertselectevent',
        payload:true
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


