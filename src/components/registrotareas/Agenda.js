
import React, { useState,useEffect } from 'react';
import Calendar from "react-awesome-calendar";

import Registrotareas from './RegistroTareas';
import { store } from '../../redux/store';







const Agenda = () => {



const  [dat,setdate]=useState('seleccione hora de inicio')

const formatDat=(hour,day,month,year) => {
    const resto= hour%1
    console.log('holasaa');
    console.log(hour);
    console.log(resto);
   
    if(hour<10){
        if (resto===0) 
        return {hour:`${hour}:00`,day:day,month:month+1,year:year}
        return {hour:`${Math.trunc(hour)+':30'}`,day:day,month:month+1,year:year}
    }else{
        if (resto===0)
        return {hour:`${hour}:00`,day:day,month:month+1,year:year}
        return {hour:`${Math.trunc(hour)+':30'}`,day:day,month:month+1,year:year}
    }

}


const cargarTarea=(date) => {
    //traer evento qeu activa el modal aqui <registro tareas> <---ahi el boton <Modaltarea> el componente qeu debo traer 
    //capturar los datos actulaes que ya vienene en el date y lelvarlos al modal
    //guardar en un array en el store con las tareas creadas en el dia 
    
    
    console.log(date)
    const {hour,day,month,year} =date
    console.log(`${day}/${month}/${year}/${hour}`)
    const now=`hour: ${hour} `
     console.log(formatDat(hour,day,month,year).hour)
     setdate(formatDat(hour,day,month,year).hour)

     store.dispatch({
            type:'@getdiaSelect',
            payload:formatDat(hour,day,month,year)
        })
}


    const events=[{
        id: 1,
        color: '#fd3153',
        from: '2022-03-08T08:00:00+00:00',
        to: '2022-03-08T09:00:00+00:00',
        title: 'This is an event'
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
    
    const calendar= React.createRef()

    

    useEffect(() => {
        const details =calendar.current.getDetails();
        console.log(details);
      });

 
    return (
        <>
           
          
            <Registrotareas dat={dat} />
            <Calendar
                ref={calendar}
                onClickEvent={(event) => console.log('this is an event', event)}
                onChange={(dates) => console.log(dates)}
                onClickTimeLine={ (date)=>cargarTarea(date) }
                events={events}

               
                

            />
            
        </>      
                
            
        
    );
}

export default Agenda;


