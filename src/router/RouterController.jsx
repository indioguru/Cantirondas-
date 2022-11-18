import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Descargables from "../components/Descargables/Descargables";
import DescargablesList from "../components/Descargables/DescargablesList";
import Home from "../components/Home/Home";
import NuestrasCanciones from "../components/NuestrasCanciones/NuestrasCanciones";
import NuestrasCancionesLista from "../components/NuestrasCanciones/NuestrasCancionesLista";

const RouterController = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuestrasCanciones" element={<NuestrasCanciones />} />
          <Route
            path="/nuestrasCancionesLista"
            element={<NuestrasCancionesLista />}
          />
          <Route path="/descargables" element={<Descargables />} />
          <Route path="/descargablesLista" element={<DescargablesList />} />
          {/* <Route path="/param/:id" element={<ParamDetail />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
};

export default RouterController;
