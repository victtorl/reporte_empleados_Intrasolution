import './App.css';
import Login from './components/Login'
import Sidebar from './components/Sidebar';
import {useSelector} from 'react-redux'
import GrupoPrincipal from './components/GrupoPrincipal';
import Navbarlogin from './components/Navbarlogin';


 
function App() {

  

  const statusLogin = useSelector((state) => state.statusLog)

  const estilo='d-none'


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
