import { React, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Principal from '../components/Principal'
import Sidebar from '../components/Sidebar'
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import { events } from './registrotareas/Agenda';
import { getcomboIncidencia, getcomboPase, getcomboSubtipoTarea, getcomboTipoTarea,getallTareas, getcomboPlandeAccion, getDataUsuario } from '../utils/webservices';

import {tratarTareas} from '../utils/metodos';
import { getInfoLocal } from './Login';
import Footer from './Footer';



const GrupoPrincipal = () => {

    const alltareas = useSelector((state) => state.alltareas)
    const dataUserSesion = useSelector((state) => state.dataUserSesion) 

  
    

    // useEffect(() => {

    //     getDataUsuario(dataUserSesion.USER_LOGIN,dataUserSesion.password)
    //         .then(data => {
    //             const infoUser = data.data.data[0]
    //             console.log(infoUser);
                

    //         })
    //         .then(
    //             window.localStorage.setItem(
    //                 'accesws',JSON.stringify({namews:dataUserSesion.USER_LOGIN,passws:dataUserSesion.password,idws:dataUserSesion.SC_USER_ID,tokenws:dataUserSesion.token})
    //             ) 
    //         )
    //         .then(
    //             getcomboIncidencia()
    //         )
    //         .then(
    //             getcomboPase()
    //         )
    //         .then(
    //             getcomboSubtipoTarea()
    //         )
    //         .then(
    //             getcomboTipoTarea()
    //         )
    //         .then(
    //             getallTareas()
    //         )
    //         .then(
    //             getcomboPlandeAccion()
    //         )
    //         .then(
    //             tratarTareas(alltareas)
    //         )

    //         .catch(e => {
    //             console.log('el error es' + e);
    //         })

    // }, []);

 
  useEffect(() => {
      
      getallTareas()
      .then(()=>{
        //   console.log('hola mundo');
      })
  }, []);  
 
    const estilo = 'd-none'
    const estilosidebar = "sidebar-mini sidebar-open"
    const estilocerradosidebar = "sidebar-mini sidebar-closed sidebar-collapse"
    const style="min-height: 908.391px;"

    const dat = useSelector((state) => state.dataUserSesion)

    return (
        <>
            <Navbar />
            <Principal />
            <Sidebar name={dat.USER_LOGIN}
            />
        </>
    );
}

export default GrupoPrincipal;
