import React, { useState } from "react";
import { store } from "../../redux/store";
import { useSelector } from "react-redux";
import "react-datetime/css/react-datetime.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setDefaultLocale } from "react-datepicker";
import { wsedicionTarea, wseliminarTarea } from "../../utils/webservices";

setDefaultLocale("es");

const Edicioneliminacion = () => {
  const dataregistro = useSelector((state) => state.dataregistro);
  const dataUserSesion = useSelector((state) => state.dataUserSesion);
  const datatareaSelect = useSelector((state) => state.datatareaSelect);
  const dataEditDelete = useSelector((state) => state.dataEditDelete);
  const diaSelect = useSelector((state) => state.diaSelect);
  const diaSelectmuestramodal = useSelector(
    (state) => state.diaSelectmuestramodal
  );
  const allcombos = useSelector((state) => state.allcombos);
  const tipoactividadcombo = useSelector((state) => state.tipoactividad);

  var reordenarFecha = (diax) => {
    let fff = diax.split(" ");
    let g = fff[0].split("/");
    let dia = g[0];
    let mes = g[1];
    let anio = g[2];
    let h = fff[1];
    if (dia <= 9) {
      dia = `0${dia}`;
    } else {
      dia = dia;
    }
    if (mes <= 9) {
      mes = `0${mes}`;
    } else {
      mes = mes;
    }
    const fechaxdefecto = `${anio}-${mes}-${dia}`;
    //validamos si hay dia seleccionado
    if (diaSelect.length === 0) {
      return `${fechaxdefecto} ${h}`;
    } else {
      return `${diaSelect} ${h}`;
    }
  };

  const [startDatei, setStartDatei] = useState(new Date());
  const [startDatef, setStartDatef] = useState(new Date());

  const cambiarDatos = (d) => {
    console.log("cambiando la hora de inicio");
    console.log(d.toLocaleString("es-PE"));
    console.log("el dato d es:" + d);
    setStartDatei(d);
    store.dispatch({
      type: "@pushhorainicioED",
      payload: {
        hora_inicio: reordenarFecha(d.toLocaleString("es-PE")),
      },
    });
  };
  const cambiarDatosf = (d) => {
    console.log("cambiando la hora de fin");
    console.log(d.toLocaleString("es-PE"));
    console.log("el dato d es:" + d);
    setStartDatef(d);
    store.dispatch({
      type: "@pushhorafinED",
      payload: {
        hora_fin: reordenarFecha(d.toLocaleString("es-PE")),
      },
    });
  };

  const editarDatos = async (e) => {
    e.preventDefault();

    wsedicionTarea(
      dataEditDelete.id_bd.id_bd,
      dataEditDelete.tipo_tarea_id.tipo_tarea_id,

      dataEditDelete.subtipo_tarea_id.subtipo_tarea_id,
      dataEditDelete.actividad_id.actividad_id,
      dataEditDelete.observacion.observacion,
      dataEditDelete.fecha_inicio.hora_inicio,
      dataEditDelete.fecha_fin.hora_fin,
      dataUserSesion.SC_USER_ID
    );
  };

  const eliminarDatos = async (e) => {
    e.preventDefault();
    console.log(dataregistro.idbd.idbd);
    wseliminarTarea(datatareaSelect[0].id);
  };

  //ELEGIR Y SETEAR EL TIPO DE TAREA
  const [opTarea, SetoptTarea] = useState(0);

  const setOption = (e) => {
    console.log("valor elegido" + e.target.value);
    SetoptTarea(e.target.value);
    store.dispatch({
      type: "@pushtipo_tareaED",
      payload: {
        tipo_tarea_id: e.target.value,
      },
    });
    //setear el responsable
    store.dispatch({
      type: "@pushresponsableED",
      payload: {
        responsable: dataUserSesion.SC_USER_ID,
      },
    });
    if (e.target.value < 4) {
      //validamos que  el tipo de tareas es OTRO entonces le enviamos el subtipo_tarea_id del subtipo elegido, si no fuese ese el caso le enviamos 0
      store.dispatch({
        type: "@pushsubtipo_tareaED",
        payload: {
          subtipo_tarea_id: 0,
        },
      });
    } else {
      store.dispatch({
        type: "@pushactividadED",
        payload: {
          actividad_id: 0,
        },
      });
    }
    setSelected(""); //REFRESCA EL SUBTIPO TAREA OBLIGANDOAL USUARIO A ELEGIR UN SUBTIPO
    setSelectedactividad(""); //REFRESCA EL SUBTIPO TAREA OBLIGANDOAL USUARIO A ELEGIR UN SUBTIPO
  };

  //COMBO SUBTIPO  TAREA
  const setOptionSubtipo = (e) => {
    let datosTareatipo123 = allcombos.filter((u) => u.tipo < 4); //FILTRAMOS LAS TAREAS CON ID  1 2 3 QUE CORRESPONDE A OTROS
    let idactividad123 = datosTareatipo123.filter(
      (u) => u.codigo === e.target.value
    ); //FILTRAMOS EL ARRAY ANTERIOR PARA OBTENER LOS DATOS DEL ELEMENTO SELECCIONADO
    let datosTareatipo4 = allcombos.filter((u) => u.tipo === 4); //FILTRAMOS LAS TAREAS CON ID 4 QUE CORRESPONDE A OTROS
    let idactividadOtros = datosTareatipo4.filter(
      (u) => u.codigo === e.target.value
    ); //FILTRAMOS EL ARRAY ANTERIOR PARA OBTENER LOS DATOS DEL ELEMENTO SELECCIONADO
    if (idactividad123.length !== 0) {
      //VALIDAMOS QUE EL ARRAY idactividad123 TENGA CONTENIDO, SI ESTO SE CUMPLE GUARDAMOS EL subtipo_tarea_id EN EL STORE
      store.dispatch({
        type: "@pushactividadED",
        payload: {
          actividad_id: idactividad123[0].actividad_id,
        },
      });
    }
    if (idactividadOtros.length !== 0) {
      //VALIDAMOS QUE EL ARRAY idactividadOtros TENGA CONTENIDO, SI ESTO SE CUMPLE GUARDAMOS EL subtipo_tarea_id EN EL STORE
      console.log("otros");
      store.dispatch({
        type: "@pushsubtipo_tareaED",
        payload: {
          subtipo_tarea_id: idactividadOtros[0].actividad_id,
        },
      });
    }
  };

  //COMBO TIPO ACTIVIDAD
  const setOptionTipoActividad = (e) => {
    let idtipotarea = tipoactividadcombo.filter(
      (u) => u.tipo_actividad === e.target.value
    ); //filtrar el elemento seleccionado para acceder a su id y enviarlo como payload
    store.dispatch({
      type: "@pushtipo_actividadED",
      payload: {
        tipo_actividad_id: idtipotarea[0].id,
      },
    });
  };

  let combodinamico = allcombos.filter((u) => u.tipo == opTarea); //filtra el subtipo de tarea dependiendo del tipo de tarea que se escoja

  //campo Observacion
  const [optObservacion, SetObservacion] = useState("");
  const setOptionObs = (e) => {
    SetObservacion(e.target.value);
    store.dispatch({
      type: "@pushobservacionED",
      payload: {
        observacion: e.target.value,
      },
    });
  };

  const [selected, setSelected] = useState("");
  const [selectedactividad, setSelectedactividad] = useState("");





  const tipotarea = [
    { idtipotarea:0, nombre: "--Seleccione un tipo de tarea--", },
    { idtipotarea:1, nombre: "Incidencia" },
    { idtipotarea:2, nombre: "Pase" },
    { idtipotarea:3, nombre: "Planes de Accion" },
    { idtipotarea:4, nombre: "Otros" },
  ];

  return (
    <div>
      <div className="card card-primary">
        <div className="card-header">
          <div className="m-0 row justify-content-center">
            <h3 className="card-title">{diaSelectmuestramodal}</h3>
          </div>
        </div>
        <form>
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <div className="d-flex justify-content-around">
                    <div className="datepicker">
                      <label>Inicio</label>
                      <DatePicker
                        className="datepicker"
                        selected={startDatei}
                        onChange={(date) => cambiarDatos(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />
                    </div>
                    <div className="datepicker">
                      <label>Fin</label>
                      <DatePicker
                        className="datepicker"
                        selected={startDatef}
                        onChange={(date) => cambiarDatosf(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                      />
                    </div>
                  </div>
                </div>
                <label className="letra-pequenia-form-edit">
                  Fecha Inicial: {dataEditDelete.fecha_inicio.hora_inicio}
                </label>
                <br></br>
                <label className="letra-pequenia-form-edit">
                  Fecha Final: {dataEditDelete.fecha_fin.hora_fin}
                </label>
                <div className="form-group">
                <label>Tipo Tarea</label>
                  <select
                    className="form-control select2"
                    name="tipotarea"
                    style={{ width: "100%" }}
                    onChange={setOption}
                    value={opTarea}
                  >
                    {tipotarea.map((item, i) => (
                      <option key={i} value={item.idtipotarea}>
                        {item.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body pt-0 pb-0">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Codigo de Tarea </label>
                  <select
                    className="form-control select2"
                    style={{ width: "100%" }}
                    onClick={setOptionSubtipo}
                    onChange={(e) => setSelected(e.target.value)}
                    value={selected}
                  >
                    <option value="default">--Seleccione Sub Tipo--</option>
                    {combodinamico.map((u,i) => (
                      <option key={i}>{u.codigo}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Descripción</label>
                  <textarea
                    onChange={setOptionObs}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={optObservacion}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button
              type="button"
              class="btn btn-outline-warning"
              onClick={editarDatos}
            >
              Editar
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={eliminarDatos}
            >
              Eliminar
            </button>
            {/* <button type="button" class="btn btn-outline-danger" >Eliminar</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edicioneliminacion;
