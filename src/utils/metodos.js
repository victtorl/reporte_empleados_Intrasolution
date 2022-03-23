

import { store } from "../redux/store"

export const reordenarFechaForMapCalendar = (v) => {
    let fff = v.split(' ')

    let hra = fff[1].split('.')
    return `${fff[0]}T${hra[0]}.318Z`
         
}

export const tratarTareas = (alltareas) => {

    var i=0
    console.log('alltareas')
    console.log(alltareas)
    const allT= alltareas.map((u) => {
        console.log(u.hora_inicio)
        return {
            id: i++,
            idtareacrud: u.id,
            color: "#9B0707",
            from: reordenarFechaForMapCalendar(u.hora_inicio),
            to: reordenarFechaForMapCalendar(u.hora_fin),
            title:`#tarea: ${i-1} tipo tarea: ${u.nombre_tipo_tarea} obs:${u.observacion}`
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
    console.log('tareas tratadas')
    console.log(allT)
   return allT
  

   


}