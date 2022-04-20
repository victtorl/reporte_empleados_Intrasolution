



export const reordenarFechaForMapCalendar = (v) => {
    let fff = v.split(' ')

    let hra = fff[1].split('.')
    return `${fff[0]}T${hra[0]}.318Z`
         
}

const asignColor =(u) => {
    if(u.tipo_tarea_id === 1){
        return "#800000"
    }
    if(u.tipo_tarea_id === 2){
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

    if(u.tipo_tarea_id === 1){
        return ` ${u.nombre_tipo_tarea} ${u.incidencia_id}`
    }
    if(u.tipo_tarea_id === 2){
        return ` ${u.nombre_tipo_tarea} ${u.pase_id}`
    }
    if(u.tipo_tarea_id === 3){
        return ` ${u.nombre_tipo_tarea} ${u.accion_correctiva_id}`
    }
    if(u.tipo_tarea_id === 4){
        return ` ${u.nombre_tipo_tarea} ${u.nombre_subtipo_tarea}`
    }
  
}

export const tratarTareas = (alltareas) => {

    var i=0
    
    const allT= alltareas.map((u) => {
        


        return { 
            id: i++,
            idtareacrud: u.id,
            color: asignColor(u),
            from: reordenarFechaForMapCalendar(u.fecha_inicio),
            to: reordenarFechaForMapCalendar(u.fecha_fin),
            title:getNombreyTipo(u)
            // title:`#tarea: ${i-1} tipo tarea: ${u.nombre_tipo_tarea} obs:${u.observacion}`
        }


    }
    
    )
    
   return allT
  

   


}