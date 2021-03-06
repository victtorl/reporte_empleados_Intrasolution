import './App.css';
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'



import { store } from './redux/store';

import Navbar from './components/Navbar';
import Home from './components/tablaempleados/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TablaEmpleados from './components/tablaempleados/TablaEmpleados';
import Principal from './components/Principal';
import { IsLogin } from './utils/islogin';
import {useEffect} from 'react'

import {useSelector} from 'react-redux'
import GrupoPrincipal from './components/GrupoPrincipal';
import Navbarlogin from './components/Navbarlogin';


 
function App() {

  const rutaServidor="ASP_intrasolution/intrasolution_nodejs"

  const statusLogin = useSelector((state) => state.statusLog)

  const estilo='d-none'

  // useEffect(() => {
  //   if (statusLogin) return
  //   store.dispatch({
  //     type:'@statusLogin',
  //     payload:localStorage.getItem('islogged')
  //   })

     
  // }, []);

  return (
    <>
    {
    (!statusLogin)
    ? <><Navbarlogin/><Login/><Sidebar estilo={estilo} /></>
    :<GrupoPrincipal/>
    }
    </>
  );
}

export default App;
