
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
                
             } 
             return state      
       }

    
 

