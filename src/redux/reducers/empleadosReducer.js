
export const getEmpleadoReducer =(state,action) => {
       switch(action.type){
           case '@getEmpleados':
            return {
                ...state,
                empleados:action.payload     
                }
            case '@getEmpleadoId':
             return{
                 ...state,       
                empleadoSelect:action.payload
                     
                 }
            case '@statusLogin':
             return{
                 ...state,       
                statusLog:action.payload
  
                 }
                
             } 
             return state      
       }

    
 

