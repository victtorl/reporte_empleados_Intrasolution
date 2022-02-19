import './App.css';
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'



import { store } from './redux/store';

import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TablaEmpleados from './components/home/TablaEmpleados';
import Principal from './components/Principal';


 const arr=true
function App() {

  const rutaServidor="ASP_intrasolution/intrasolution_nodejs"

  return (
  <>
  <Navbar>
  </Navbar> 
    <Principal> 
    </Principal>
    <Sidebar>
    </Sidebar>
  </>
  );
}

export default App;
