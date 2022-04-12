import { React, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Principal from '../components/Principal'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux';
import { getallTareas } from '../utils/webservices';


const GrupoPrincipal = () => {

  useEffect(() => {
      
      getallTareas()
      
  }, []);  
 

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
