import React from 'react';
import { NavLink } from 'react-router-dom';
import { store } from '../redux/store';
import safe from '../img/safe.png'
import user1 from '../img/user2-160x160.jpg'
import { useSelector } from 'react-redux';

const Sidebar = (props) => {

  const islogged = useSelector((state) => state.statusLog)


  const Salir = () => {
    store.dispatch({
      type: '@statusLogin',
      payload: false
    })

    window.localStorage.setItem(
      'islogged', JSON.stringify(!islogged)
    )

    window.localStorage.setItem(
      'accesws', JSON.stringify(null)
    )
    OcultarMenu()
  }

  const OcultarMenu = () => {
    setTimeout(function () {
      window.location.reload(false);
    }, 1);

  }

  const rutaServidor = "ASP_intrasolution/intrasolution_nodejs"


  return (
    <div className={props.estilo}>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 " data-widget="tree">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img src={safe} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Intrasolution</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={user1} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">{props.name}</a>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Gráficos
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                 
                  <li className="nav-item">
                    <NavLink to={'/' + rutaServidor + '/barchartx'} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Incidentes Pendientes</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

            

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Registro de Tareas
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">

                  <li className="nav-item">
                    <NavLink to={'/' + rutaServidor + '/calendario'} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Calendario</p>
                    </NavLink>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Tabla Empleados
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to={'/' + rutaServidor + '/empleados'} className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Lista Empleados</p>
                    </NavLink>
                  </li>
                
                </ul>
              </li>

              <li className="nav-item" onClick={Salir} >
                <NavLink to={'/' + rutaServidor} className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text"  >SALIR</p>
                </NavLink>
              </li>




            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>

  );
}

export default Sidebar;
