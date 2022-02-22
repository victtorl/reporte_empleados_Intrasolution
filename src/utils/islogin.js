import { credentials } from "../services/empleadosFake"
import { useSelector } from "react-redux"




export let IsLogin=()=>{

     const parametrosAcces = window.localStorage.getItem('acces')
     const par=JSON.parse(parametrosAcces)
    
     console.log(par.datos.name);
     console.log(par.datos.password);

     if(credentials === null){
          return false
     }else{
          if(credentials.name === par.datos.name && credentials.password===par.datos.password )
          return true
          return false
     }

     
     
    
     
}