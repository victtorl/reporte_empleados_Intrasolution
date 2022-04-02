

import { store } from "../redux/store"

export const reordenarFechaForMapCalendar = (v) => {
    let fff = v.split(' ')

    let hra = fff[1].split('.')
    return `${fff[0]}T${hra[0]}.318Z`
         
}

export const tratarTareas = (alltareas) => {

    var i=0
    
    const allT= alltareas.map((u) => {
        


        return { 
            id: i++,
            idtareacrud: u.id,
            color: "#9B0705",
            from: reordenarFechaForMapCalendar(u.hora_inicio),
            to: reordenarFechaForMapCalendar(u.hora_fin),
            title:` ${u.nombre_tipo_tarea} ${u.incidencia_id}`
            // title:`#tarea: ${i-1} tipo tarea: ${u.nombre_tipo_tarea} obs:${u.observacion}`
        }
        // if(u.pase_id === null){
           
        // }else{
        //     return {
        //         id: i++,
        //         idtareacrud: u.id,
        //         color: "#9B0705",
        //         from: reordenarFechaForMapCalendar(u.hora_inicio),
        //         to: reordenarFechaForMapCalendar(u.hora_fin),
        //         title:` ${u.nombre_tipo_tarea} ${u.pase_id}`
        //         // title:`#tarea: ${i-1} tipo tarea: ${u.nombre_tipo_tarea} obs:${u.observacion}`
        //     }
        // }
        
        

    }
    
    )
    
   return allT
  

   


}