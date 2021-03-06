

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

            //     {
            //     idtareacrud: u.id,
            //     tipo_tarea: u.tipo_tarea_id,
            //     // segundotipo_tarea: u.nombre_tipo_tarea,
            //     // nombre: u.nombre,
            //      hora_inicio: u.hora_inicio,
            //      hora_fin: u.hora_fin,
            //     observacion: u.observacion,
            // }
            
        }
        

    }
    
    )
    
   return allT
  

   


}