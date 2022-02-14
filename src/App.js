import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import TablaEmpleados from './components/home/TablaEmpleados';




function App() {
  return (
    <div className="wrapper">
      <Navbar>
      </Navbar>
      <Routes>
        <Route path='/empleados' element={<TablaEmpleados/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>

      <Sidebar>

      </Sidebar>

      <Footer></Footer>
    </div>

  );
}

export default App;
