// import { credentials } from "../services/empleadosFake"
// import { useSelector } from "react-redux"
import axios from "axios"

const datax={
     user_login:'jorge.felix',
     password:'09079763'
 }

 export const  getDataUser= async()=>{
 
      const params= new URLSearchParams(datax)

     const baseUrl="https://app.safe2biz.com/intrasolution//ws/null/pr_ws_sc_user?user_login=manuel.perez&password=07730589"

   let variable= await axios.post(baseUrl,
           params,
          {
          headers:{
              userLogin:'jorge.felix@intrasolution',
              userPassword:'09079763',
              systemRoot:'safe2biz',
              'Content-Type': 'text/plain'    
          },
          }   
       )
    return variable   
          
}

//parte final para verificar si esta logueado
export let IsLogin=()=>{
     const parametrosAcces = window.localStorage.getItem('acces')
     const par=JSON.parse(parametrosAcces)

     const parametrosAccesWS = window.localStorage.getItem('accesws')
     const parws=JSON.parse(parametrosAccesWS)
    
     console.log(par.datos.name);
     console.log(par.datos.password);

     if(datax === null){
          return false
     }else{
          if(parws.namews=== par.datos.name && parws.passws===par.datos.password )
          return true
          return false
     }
  
     
}