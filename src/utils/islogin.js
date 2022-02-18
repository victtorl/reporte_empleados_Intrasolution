import { credentials } from "../services/empleadosFake"
import { useSelector } from "react-redux"



export const IsLogin=(credentialState)=>{
     (credentialState.email === credentials.email && credentialState.password===credentials.password)
     ? console.log('estas logueado')
     : console.log('credenciales no coinciden')  
}