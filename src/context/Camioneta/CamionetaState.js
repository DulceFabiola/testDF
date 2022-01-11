//ESTADO GLOBAL
import React, { useReducer } from "react";
import CamionetaReducer from "./CamionetaReducer";
import CamionetaContext from "./CamionetaContext";

const CamionetaState = (props) => {
  //1.INITIAL STATE (ESTADO INICIAL)
  const initialState = {
    camioneta: {
      modelo: "",
      marca: "",
      agencia: "",
    },
  };
  //2.CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(CamionetaReducer, initialState);

  //3.FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  //LEER CURSOS
  const getData = async ({ newData }) => {
    dispatch({
      type: "GET_DATA",
      payload: newData, //valor que ocuparemos para cambiar el estado
    });
  };

  //4.RETORNO
  return (
    <CamionetaContext.Provider
      value={{
        camioneta: globalState.camioneta,
        getData,
      }}
    >
      {props.children}
    </CamionetaContext.Provider>
  );
};

export default CamionetaState;
