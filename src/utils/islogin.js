import { credentials } from "../services/empleadosFake"
import { useSelector } from "react-redux"
import axios from "axios"

const datax={
     user_login:'jorge.felix',
     password:'09079763'
 }

 export const  getDataUser= async()=>{
 
      const params= new URLSearchParams(datax)

     const baseUrl="https://app.safe2biz.com/intrasolution//ws/null/pr_ws_sc_user?user_login=jorge.felix&password=09079763"

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

export let IsLogin=()=>{
     const parametrosAcces = window.localStorage.getItem('acces')
     const par=JSON.parse(parametrosAcces)
    
     console.log(par.datos.name);
     console.log(par.datos.password);

     if(datax === null){
          return false
     }else{
          if(datax.user_login === par.datos.name && datax.password===par.datos.password )
          return true
          return false
     }
  
     
}