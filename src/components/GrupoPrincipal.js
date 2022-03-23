import { React, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Principal from '../components/Principal'
import Sidebar from '../components/Sidebar'
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import { events } from './registrotareas/Agenda';
import { getcomboIncidencia, getcomboPase, getcomboSubtipoTarea, getcomboTipoTarea,getallTareas, getcomboPlandeAccion, getDataUsuario } from '../utils/webservices';

import {tratarTareas} from '../utils/metodos';



const GrupoPrincipal = () => {

    const alltareas = useSelector((state) => state.alltareas) 
    

    useEffect(() => {

        getDataUsuario()
            .then(data => {
                const infoUser = data.data.data[0]
                //    console.log(infoUser);
                // store.dispatch({
                //     type: '@dataUserSesion',
                //     payload: infoUser
                // })
                //llenar la data de tareas de paso
                // store.dispatch({
                //     type: '@settasks',
                //     payload:tratarTareas(alltareas)
                // })
                //llenar combos  

            })
            .then(
                getcomboIncidencia()
            )
            .then(
                getcomboPase()
            )
            .then(
                getcomboSubtipoTarea()
            )
            .then(
                getcomboTipoTarea()
            )
            .then(
                getallTareas()
            )
            .then(
                getcomboPlandeAccion()
            )
            .then(
                tratarTareas(alltareas)
            )
           
            

            .catch(e => {
                console.log('el error es' + e);
            })

    }, []);

    const estilo = 'd-none'
    const estilosidebar = "sidebar-mini sidebar-open"
    const estilocerradosidebar = "sidebar-mini sidebar-closed sidebar-collapse"

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
