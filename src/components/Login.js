import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {IsLogin, getDataUser} from '../utils/islogin'
import { store } from '../redux/store';
 

const Login = () => {
 

    const [datos, setDatos] = useState({
        name: '',
        password: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
     
    }

    const validarlogin =()=>{

        getDataUser()
        .then(data =>{
        const parametrosAcces = window.localStorage.getItem('acces')
        const par=JSON.parse(parametrosAcces)
        // console.log(par.datos);

        const infoUser =data.data.data[0]
        // console.log(infoUser);
         
        if(par.datos.name === infoUser.USER_LOGIN && par.datos.password ===infoUser.USER_LOGIN){
            store.dispatch({
                type:'@statusLogin',
                payload:true
            }) 
        }else{
            store.dispatch({
                type:'@statusLogin',
                payload:false
            }) 
        }
           
         }) 

    }

    const   enviarDatos = async(event) => {
        event.preventDefault()
        validarlogin()
        
          
        window.localStorage.setItem(
            'acces',JSON.stringify({datos})
        )

        

        
          
    }


    const rutaServidor="ASP_intrasolution/intrasolution_nodejs"
    return (
        <div>
            <div className='m-0  vh-100 row justify-content-center align-items-center'>
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1"><b>Intrasolution</b></a>
                    </div>
                    <div className="card-body">
                        
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="/principal/empleados" method="post">
                            <div className="input-group mb-3">
                                <input type="nombre" className="form-control" placeholder="User" onKeyUp={handleInputChange} name="name"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" onKeyUp={handleInputChange} name="password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        {/* <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label> */}
                                    </div>
                                </div>
                                <div className="col-12">
                                <NavLink to={rutaServidor}><button type="submit" className="btn btn-primary btn-block"  onClick={enviarDatos}>Sign In</button></NavLink>
                                    
                                </div>
                            </div>
                        </form>

                        {/* <div className="social-auth-links text-center mt-2 mb-3">
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                            </a>
                        </div> */}

                        {/* <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p> */}

                    </div>
                </div>
            </div>
            </div>

        </div>

    );
}

export default Login;