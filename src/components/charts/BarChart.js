import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


  

const Barchart = () => {

  
    const data=[
        {
          id:0,  
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          id:1,  
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          id:2, 
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          id:3, 
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          id:4,  
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          id:5,  
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          id:6,  
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        }
      ]

      

    const [activeIndex,SetactiveIndex]=useState(0)

    const handleCl=(index) => {
         SetactiveIndex(index.id) 
      };

    const activeItem = data[activeIndex];

    return (

        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Bar Chart</h1>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    {/* <button type="button" class="btn btn-success">Nuevo</button>
                           <button type="button" class="btn btn-primary">Actualizar</button>
                           <button type="button" class="btn btn-danger">Eliminar</button> */}
                                   
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">DataTables</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Bar chart v1.0</h3>
                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{ width: 150 }}>
                                                {/* <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search" />
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0">
                                  {/* CONTENIDO NUEVO */}
                                  
                                        <div style={{ width: '100%' }}>
                                            
                                            <ResponsiveContainer width="100%" height={100}>
                                                <BarChart width={100} height={100} data={data}>
                                                    <Bar dataKey="uv" onClick={handleCl}>
                                                        {data.map((index) => (
                                                            <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
                                                        ))}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                            <div className='m-0 row justify-content-center'>

                                            <h4 className="content">{`Gerencia: "${activeItem.name}" UV: ${activeItem.uv}  PV:${activeItem.pv}  AMT:${activeItem.amt} `}</h4>
                                            </div>
                                        </div>

    


                                  {/* FIN CONTENIDO NUEVO */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </div>
                        
                  
         

    );
}

export default Barchart;
