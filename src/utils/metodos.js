

import { store } from "../redux/store"

export const reordenarFechaForMapCalendar = (v) => {
    let fff = v.split(' ')

    let hra = fff[1].split('.')
    return `${fff[0]}T${hra[0]}.318Z`
         
}

const asignColor =(u) => {
    if(u.incidencia_id !== null){
        return "#800000"
    }
    if(u.pase_id !== null){
        return "#FFFF00"
    }
    if(u.tipo_tarea_id === 3){
        return "#008000"
    }
    if(u.tipo_tarea_id === 4){
        return "#008080"
    }
  
}

const getNombreyTipo=(u) => {

    if(u.incidencia_id !== null){
        return ` ${u.nombre_tipo_tarea} ${u.incidencia_id}`
    }
    if(u.pase_id !== null){
        return ` ${u.nombre_tipo_tarea} ${u.pase_id}`
    }
    if(u.tipo_tarea_id === 3){
        return ` ${u.nombre_tipo_tarea} ${u.tipo_tarea_id}`
    }
    if(u.tipo_tarea_id === 4){
        return ` ${u.nombre_tipo_tarea} ${u.tipo_tarea_id}`
    }
  
}

export const tratarTareas = (alltareas) => {

    var i=0
    
    const allT= alltareas.map((u) => {
        


        return { 
            id: i++,
            idtareacrud: u.id,
            color: asignColor(u),
            from: reordenarFechaForMapCalendar(u.hora_inicio),
            to: reordenarFechaForMapCalendar(u.hora_fin),
            title:getNombreyTipo(u)
            // title:`#tarea: ${i-1} tipo tarea: ${u.nombre_tipo_tarea} obs:${u.observacion}`
        }

        // if(u.pase_id === null && u.subtipo_tarea_id === null){
        //     return { 
        //         id: i++,
        //         idtareacrud: u.id,
        //         color: "#9B0705",
        //         from: reordenarFechaForMapCalendar(u.hora_inicio),
        //         to: reordenarFechaForMapCalendar(u.hora_fin),
        //         title:` ${u.nombre_tipo_tarea} ${u.incidencia_id}`
        //     }

        // }
        
        

    }
    
    )
    
   return allT
  

   


}