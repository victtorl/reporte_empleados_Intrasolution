import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {IsLogin} from '../utils/islogin'
import { store } from '../redux/store';
import { useSelector } from 'react-redux';

import safe from '../img/safe.png'
import logosafe from '../img/logo-safe.png'
import { getDataUsuario } from '../utils/webservices';

 

const Login = () => {
 
    const islogged = useSelector((state) => state.statusLog)   

    const [datos, setDatos] = useState({
        name: '',
        password: ''
    })

    const handleInputChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

     
    }

    const validarlogin = ()=>{
        
        const parametrosAcces = window.localStorage.getItem('acces')
        const par=JSON.parse(parametrosAcces)
        getDataUsuario(datos.name,datos.password)
        .then(data =>{
         console.log(par.datos);

        const infoUser =data.data.data[0]
        
         console.log(infoUser);
         
        if(par.datos.name === infoUser.USER_LOGIN && par.datos.password ===infoUser.password){
            store.dispatch({
                type:'@statusLogin',
                payload:true
            }) 
            window.localStorage.setItem(
                'islogged',JSON.stringify(!islogged)
                
            )
            console.log(!islogged);
        }else{
            store.dispatch({
                type:'@statusLogin',
                payload:false
            })
            
            window.localStorage.setItem(
                'islogged',JSON.stringify(islogged)
            )
            console.log(islogged);
        }
           
         }) 

    }

    const   enviarDatos = async(event) => {
        event.preventDefault()
        validarlogin()
          
        window.localStorage.setItem(
            'acces',JSON.stringify({datos})
        )
        console.log('try data user');


    }


    const rutaServidor="ASP_intrasolution/intrasolution_nodejs"
    return (
        <div>
            <div className='m-0  vh-100 row justify-content-center align-items-center '>
            <div className="login-box cuerpo-login ">
                <div className="card card-outline card-danger marco-login">
                        <img src={safe} class="img-fluid" alt="Responsive image"></img>
                    <div className="card-header text-center">
                        <img src={logosafe} class="img-fluid" alt="Responsive image"></img>
                        {/* <a href="../../index2.html" className="h1"><b>Intrasolution</b></a> */}
                    </div>
                    <div className="card-body ">
                        
                        {/* <p className="login-box-msg">El portal de negocios de su empresa</p> */}
                        <p className="login-box-msg">INTRANET</p>
                        <p className="login-box-msg">Ingrese Credenciales</p>
                        
                        <form action="/principal/empleados" method="post">
                            <div className="input-group mb-3">
                                <input type="nombre" className="form-control" placeholder="Usuario" onKeyUp={handleInputChange} name="name"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" onKeyUp={handleInputChange} name="password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div> */}
                                <div className="col-12">
                                <NavLink to={rutaServidor}><button type="submit" className="btn  btn-login btn-block"  onClick={enviarDatos}><label>Aceptar</label></button></NavLink>
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