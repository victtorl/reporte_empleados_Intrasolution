import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { store } from '../redux/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import safe from '../img/safe.png'
import logosafe from '../img/logo-safe.png'
import { getcomboIncidencia, getcomboPase, getcomboSubtipoTarea, getcomboTipoTarea,getallTareas, getcomboPlandeAccion, getDataUsuario, getComboallTipoTareas, getTipoActividad } from '../utils/webservices';



const Login = () => {

    useEffect(() => {
        let abortController = new AbortController();
       
        return () => {
            abortController.abort(); 
        };
    }, []);
    
    
    const [datos, setDatos] = useState({
        name: '',
        password: ''
    })
    
    const handleInputChange = (event) => {
       
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
        
    }

    const statusLog = useSelector((state) => state.statusLog)

    const validarlogin = () => {
        getDataUsuario(datos.name,datos.password)
            .then(data => {
                const infoUser = data.data.data[0]
                // console.log(infoUser);
                if (datos.name === infoUser.USER_LOGIN && datos.password === infoUser.password) {
                    store.dispatch({
                        type: '@statusLogin',
                        payload: true
                    })
                    window.localStorage.setItem(
                        'islogged', JSON.stringify(!statusLog)

                    )
                    // console.log('estas logueado');
                } else {
                    // console.log('usuario o contraseña incorrecta');
                    store.dispatch({
                        type: '@statusLogin',
                        payload: false
                    })
                    window.localStorage.setItem(
                        'islogged', JSON.stringify(statusLog)
                        )
                }
                Setvercredential('Bienvenido')
                return infoUser
            })
            .then((infoUser) => {
                window.localStorage.setItem(
                    'accesws',JSON.stringify({namews:infoUser.USER_LOGIN,passws:infoUser.password,idws:infoUser.SC_USER_ID,tokenws:infoUser.token})
                ) 
            }
            )
            .then((e) => {
                getComboallTipoTareas()
                getcomboTipoTarea()
                getcomboSubtipoTarea()
                getcomboPase()
                getcomboPlandeAccion()
                getcomboIncidencia()
                getallTareas()
                getTipoActividad()
                console.log('credenciales correctas')
            }
            )
            .catch((e)=>{
                console.log('error'+e)
                Setvercredential('Usuario o Contraseña Incorrectos')
                Setcolortext('text-danger show toggle')
            })
    }


    const enviarDatos = async (event) => {
        event.preventDefault()

        window.localStorage.setItem(
            'acces', JSON.stringify({ datos })
        )

        validarlogin()


    }

    const [Passtoogle, setPassstoogle] =useState('password');

    const [count,Setcount]=useState(0)

    const ChangeTooglepassword =(e) => {
        e.preventDefault()
        Setcount(count+1)
      if(count%2===0){
        setPassstoogle('text') 
        //  console.log(count)
      }else{
        setPassstoogle('password')
        //  console.log(count)  
      }
      
    }

    const [vercredetial, Setvercredential] = useState('Ingrese Credenciales')
    const [colortext,Setcolortext]=useState('text-primary')

    const rutaServidor = "ASP_intrasolution/intrasolution_nodejs"
    return (
        <div className='login-principal'>
            <div className='m-0  vh-100 row justify-content-center align-items-center '>
                <div className="login-box cuerpo-login ">
                    <div className="card card-outline card-danger marco-login">
                        <img src={safe} className="img-fluid" alt="Responsive image"></img>
                        <div className="card-header text-center">
                            <img src={logosafe} className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <div className="card-body ">

                            <p className="login-box-msg"><label>INTRANET</label></p>
                            <p className="login-box-msg"><label className={colortext}>{vercredetial}</label></p>

                            <form action="/principal/empleados" method="post">
                                <div className="input-group mb-3">
                                    <input autoComplete="off" type="nombre" className="form-control" placeholder="Usuario" onKeyUp={handleInputChange} name="name" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input autoComplete="off" type={Passtoogle} className="form-control" placeholder="Contraseña" onKeyUp={handleInputChange} name="password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-eye" onClick={ChangeTooglepassword} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                              
                                    <div className="col-12">
                                        <NavLink to={rutaServidor}><button type="submit" className="btn  btn-login btn-block" onClick={enviarDatos}><label>Aceptar</label></button></NavLink>
                                    </div>

                                </div>
                            </form>


                        </div>
                        <div className='footer-login'>
                            <label> © Todos los Derechos Reservados Lima - Perú</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Login;