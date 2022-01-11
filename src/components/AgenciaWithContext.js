import React, { useContext, useState } from "react";
import CamionetaContext from "../context/Camioneta/CamionetaContext";
import Camioneta from "./Camioneta";

const AgenciaWithContext = () => {
  const ctx = useContext(CamionetaContext);
  const { camioneta, getData } = ctx;

  console.log(ctx);

  //2.ESTADO LOCAL
  const [newData, setnewData] = useState({
    camioneta: {
      modelo: "2021",
      marca: "Volkswagen",
      agencia: "México",
    },
  });

  const changeData = () => {
    getData({
      newData,
    });
  };

  return (
    <div>
      <Camioneta
        modelo={camioneta.modelo}
        marca={camioneta.marca}
        agencia={camioneta.agencia}
      />
      <button onClick={changeData}>Get Data</button>
    </div>
  );
};

export default AgenciaWithContext;
