import React from 'react';

const Navbar = () => {
    return (
      <div className='navbar-fijo'>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
            </li>
           
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>  
          </ul>

        </nav>



      </div>
    );
}

export default Navbar;
