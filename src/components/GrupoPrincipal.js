import {React,useEffect} from 'react';
import  Navbar  from '../components/Navbar'
import  Principal  from '../components/Principal'
import  Sidebar  from '../components/Sidebar'
import { store } from '../redux/store';
import {getDataUser} from '../utils/islogin'
import { useSelector} from 'react-redux';




const GrupoPrincipal = () => {


useEffect(() => {
    
    getDataUser()
    .then(data =>{
       const infoUser =data.data.data[0]
    //    console.log(infoUser);
       store.dispatch({
           type:'@dataUserSesion',
           payload:infoUser
       })
  })
  .catch(e=>{
      console.log('el error es'+e);
  }) 

}, []);

 const estilo='d-none'
 const estilosidebar ="sidebar-mini sidebar-open"
 const estilocerradosidebar ="sidebar-mini sidebar-closed sidebar-collapse"

const dat = useSelector((state) => state.dataUserSesion)

    return (
        <>
            <Navbar/>
            <Principal/>
            <Sidebar name={dat.USER_LOGIN}
                
            />        
        </>
    );
}

export default GrupoPrincipal;
