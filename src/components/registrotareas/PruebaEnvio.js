import React from 'react';
import axios from 'axios';
const PruebaEnviocomp = () => {
  
  const [formValue, setformValue] = React.useState({
    tipo_tarea: '',
    password: ''
  });

  const handleSubmit = async(e) => {
      e.preventDefault()
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("type", formValue.type)
    loginFormData.append("id", formValue.id)
    loginFormData.append("tipo_tarea", formValue.tipo_tarea)
    loginFormData.append("subtipo_tarea", formValue.subtipo_tarea)
    loginFormData.append("incidente_id", formValue.incidente_id)
    loginFormData.append("pase_id", formValue.pase_id)
    loginFormData.append("observacion", formValue.fecha_inicio)
    loginFormData.append("fecha_fin", formValue.fecha_fin)
    loginFormData.append("uea", formValue.uea)
    loginFormData.append("usuario_id", formValue.usuario_id)
    
    const body = {
        type: 1,
        id: 1,
        tipo_tarea: 1,
        subtipo_tarea: null,
        incidente_id: 50107,
        pase_id: null,
        observacion: 'Prueba 2',
        fecha_inicio: '2022-03-16 19:30:00',
        fecha_fin: '2022-03-16 20:00:00',
        uea: 1,
        usuario_id: 16
    }
    const baseUrl = "http://192.168.1.184:7777/intrasolution/ws/null/pr_ws_tarea_horas_crud";

    axios({
        method: 'post',
        url: baseUrl,
        data: loginFormData,
        config: { headers: {
            userLogin: 'jorge.felix@intrasolutiondesarrollo',
            userPassword: '09079763',
            systemRoot: 'intrasolution',
            'Content-Type': 'application/x-www-form-urlencoded' }}
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .then((data)=>{
            console.log(data);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }




  
  return (
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        type="type"
        name="type"
        placeholder="enter an type"
        value={formValue.type}
        onChange={handleChange}
      />
      <input
        type="id"
        name="id"
        placeholder="enter an id"
        value={formValue.id}
        onChange={handleChange}
      />
      <input
        type="tipo_tarea"
        name="tipo_tarea"
        placeholder="enter an tipo_tarea"
        value={formValue.tipo_tarea}
        onChange={handleChange}
      />
      <input
        type="subtipo_tarea"
        name="subtipo_tarea"
        placeholder="enter an subtipo_tarea"
        value={formValue.subtipo_tarea}
        onChange={handleChange}
      />
      <input
        type="incidente_id"
        name="incidente_id"
        placeholder="enter an incidente_id"
        value={formValue.incidente_id}
        onChange={handleChange}
      />
      <input
        type="pase_id"
        name="pase_id"
        placeholder="enter an pase_id"
        value={formValue.pase_id}
        onChange={handleChange}
      />
      <input
        type="observacion"
        name="observacion"
        placeholder="enter an observacion"
        value={formValue.observacion}
        onChange={handleChange}
      />
      <input
        type="fecha_inicio"
        name="fecha_inicio"
        placeholder="enter an fecha_inicio"
        value={formValue.fecha_inicio}
        onChange={handleChange}
      />
      <input
        type="fecha_fin"
        name="fecha_fin"
        placeholder="enter a fecha_fin"
        value={formValue.fecha_fin}
        onChange={handleChange}
      />
      <input
        type="uea"
        name="uea"
        placeholder="enter a uea"
        value={formValue.uea}
        onChange={handleChange}
      />
      <input
        type="usuario_id"
        name="usuario_id"
        placeholder="enter a usuario_id"
        value={formValue.usuario_id}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  )
};

export default PruebaEnviocomp;