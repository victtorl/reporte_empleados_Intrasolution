import React, { useState } from 'react';
import { useSelector } from 'react-redux';




const Barchart2 = () => {
  const  dataUserSesion= useSelector((state) => state.dataUserSesion) 

    return (

        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                            <div>
                                            <iframe src={`https://app.eco2biz.com:8080/Intrasolution_ASP/intrasolution_Mobile/Home_Plantilla_DOM.asp?Id_Home=20003&Id_Usuario=${dataUserSesion.SC_USER_ID}&Id_Unidad=1&Empresa=DOMINIOTECH`} height="500" width="100%" ></iframe>
                                        </div>  
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </div>
                        
                  
         

    );
}

export default Barchart2;
