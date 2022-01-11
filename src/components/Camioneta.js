import React, { useEffect, useState } from "react";

const Camioneta = ({ modelo, marca, agencia }) => {
  const [model, setModel] = useState("");
  const [mark, setMark] = useState("");
  const [agency, setAgency] = useState("");
  useEffect(() => {
    setModel(modelo);
    setMark(marca);
    setAgency(agencia);
  }, [modelo, marca, agencia]);

  return (
    <>
      <h3>Modelo: {model}</h3>
      <h3>Marca: {mark}</h3>
      <h3>Agencia: {agency}</h3>
    </>
  );
};

export default Camioneta;
