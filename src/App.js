import React from "react";
import Agencia from "./components/Agencia";
import AgenciaWithContext from "./components/AgenciaWithContext";
import CamionetaState from "./context/Camioneta/CamionetaState";

const App = () => {
  return (
    <>
      {/* <Agencia /> */}

      <CamionetaState>
        <AgenciaWithContext />
      </CamionetaState>
    </>
  );
};

export default App;
